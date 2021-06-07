import crypto from 'crypto';
import got, { Got } from 'got';
import {
  changeWebhookUrl,
  ChangeWebhookUrlParams,
  ChangeWebhookUrlResponse,
  generateWebhookSecret,
  GenerateWebhookSecretResponse,
  mintToken,
  MintTokenParams,
  MintTokenResponse,
  VerifyWebhookParams,
} from './api-endpoints';
import { buildRequestError, HTTPResponseError } from './errors';
import { computeSignature, parseHeader, secureCompare } from './helpers';
import { AuthHeaders } from './interfaces/auth.interface';
import {
  ClientOptions,
  RequestParameters,
} from './interfaces/client.interface';
import {
  Logger,
  LogLevel,
  logLevelSeverity,
  makeConsoleLogger,
} from './logging';

/**
 * Construct a new coinvise instance
 *
 * @class Component
 * @classdesc Coinvise component
 *
 * @param {Object} options - Options to initialize the component with
 * @param {String} options.accessId - Access Id
 * @param {String} options.privateKey - Private Key
 */
export default class Coinvise {
  #accessId: string;
  #privateKey: string;
  #logger: Logger;
  #logLevel: LogLevel;
  #got: Got;

  public constructor(options: ClientOptions) {
    this.#accessId = options.accessId;
    this.#privateKey = options.privateKey;
    this.#logLevel = options.logLevel ?? LogLevel.WARN;
    this.#logger = options.logger ?? makeConsoleLogger(this.constructor.name);

    const prefixUrl = options?.baseUrl ?? 'https://api.coinvise.co';
    const timeout = options?.timeoutMs ?? 60_000;

    this.#got = got.extend({
      prefixUrl,
      timeout,
      headers: {
        'user-agent': 'coinvise-client/0.1.0',
      },
      retry: 0,
      // agent: makeAgentOption(prefixUrl, options?.agent),
    });
  }

  /**
   * Sends a request.
   *
   * @param path
   * @param method
   * @param query
   * @param body
   * @returns
   */
  public async request<Response>({
    path,
    method,
    query,
    body,
  }: RequestParameters): Promise<Response> {
    this.log(LogLevel.INFO, 'request start', { method, path });

    // If the body is empty, don't send the body in the HTTP request
    const json =
      body !== undefined && Object.entries(body).length === 0
        ? undefined
        : body;

    try {
      const headers = this.generateAuthHeaders(
        this.#accessId,
        this.#privateKey
      );

      const response = await this.#got(path, {
        method,
        ...(query && { searchParams: query }),
        ...(json && { json }),
        headers,
      }).json<Response>();

      this.log(LogLevel.INFO, 'request success', { method, path });
      return response;
    } catch (error) {
      // Build an error of a known type, otherwise throw unexpected errors
      const requestError = buildRequestError(error);
      if (requestError === undefined) {
        throw error;
      }

      this.log(LogLevel.WARN, 'request fail', {
        code: requestError.code,
        message: requestError.message,
      });
      if (HTTPResponseError.isHTTPResponseError(requestError)) {
        // The response body may contain sensitive information so it is logged separately at the DEBUG level
        this.log(LogLevel.DEBUG, 'failed response body', {
          body: requestError.body,
        });
      }

      // Throw as a known error type
      throw requestError;
    }
  }

  public readonly token = {
    /**
     * Creating a link to mint token on bot.coinvise.co
     */
    mint: (args: MintTokenParams): Promise<MintTokenResponse> => {
      return this.request<MintTokenResponse>({
        path: mintToken.path(),
        method: mintToken.method,
        body: args,
      });
    },
  };

  public readonly webhook = {
    /**
     * Changes the url of the webhook
     */
    changeUrl: (
      args: ChangeWebhookUrlParams
    ): Promise<ChangeWebhookUrlResponse> => {
      return this.request({
        path: changeWebhookUrl.path(),
        method: changeWebhookUrl.method,
        body: args,
      });
    },

    /**
     * Generates webhook secret that is used to verify the integrity of the data sent from Coinvise
     */
    generateSecret: async (): Promise<string> => {
      const res = await this.request<GenerateWebhookSecretResponse>({
        path: generateWebhookSecret.path(),
        method: generateWebhookSecret.method,
      });
      return res.data.secret;
    },

    /**
     * Verifies webhook from the given body and signature
     */
    verify: (args: VerifyWebhookParams): boolean => {
      const payload = Buffer.isBuffer(args.payload)
        ? args.payload.toString('utf8')
        : args.payload;

      // Express's type for `Request#headers` is `string | []string`
      // which is because the `set-cookie` header is an array,
      // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
      // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
      if (Array.isArray(args.header)) {
        throw new Error(
          'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
        );
      }

      const header = Buffer.isBuffer(args.header)
        ? args.header.toString('utf8')
        : args.header;

      const details = parseHeader(header);

      if (!details || details.timestamp === -1) {
        this.log(
          LogLevel.WARN,
          'Unable to extract timestamp and signatures from header',
          {
            header,
            payload,
          }
        );
        return false;
      }

      if (!details.signature) {
        this.log(LogLevel.WARN, 'No signatures found', {
          header,
          payload,
        });
        return false;
      }

      const expectedSignature = computeSignature(
        `${details.timestamp}.${payload}`,
        args.secret
      );

      const signatureFound = secureCompare(
        details.signature,
        expectedSignature
      );

      if (!signatureFound) {
        this.log(
          LogLevel.WARN,
          'No signatures found matching the expected signature for payload',
          {
            header,
            payload,
          }
        );
        return false;
      }

      const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

      const tolerance = args.tolerance ?? 18000;
      if (tolerance > 0 && timestampAge > tolerance) {
        this.log(LogLevel.WARN, 'Timestamp outside the tolerance zone', {
          header,
          payload,
        });
        return false;
      }

      return true;
    },
  };

  /**
   * Emits a log message to the console.
   *
   * @param level The level for this message
   * @param args Arguments to send to the console
   */
  private log(
    level: LogLevel,
    message: string,
    extraInfo: Record<string, unknown>
  ) {
    if (logLevelSeverity(level) >= logLevelSeverity(this.#logLevel)) {
      this.#logger(level, message, extraInfo);
    }
  }

  /**
   * Transforms an accessId and privateKey into a headers object suitable for an HTTP request.
   *
   * This method uses the instance's value. If defined, it returns
   * an empty object
   *
   * @param accessId API key or access token
   * @param privateKey API key or access token
   * @returns headers key-value object
   */
  private generateAuthHeaders(
    accessId: string,
    privateKey: string
  ): AuthHeaders {
    let authHeaders: AuthHeaders = {
      'x-coinvise-signature': '',
      'x-coinvise-timestamp': '',
      'x-coinvise-accessid': '',
    };

    try {
      const timestamp = Date.now().toString();
      const signature = crypto.sign(
        'sha256',
        Buffer.from(accessId + timestamp),
        privateKey
      );

      authHeaders = {
        'x-coinvise-signature': signature.toString('base64'),
        'x-coinvise-timestamp': timestamp,
        'x-coinvise-accessid': accessId,
      };
    } catch (error) {
      throw new Error('Malformed credentials');
    }

    return authHeaders;
  }
}

// function makeAgentOption(
//   prefixUrl: string,
//   agent: Agent | undefined
// ): GotAgents | undefined {
//   if (agent === undefined) {
//     return undefined;
//   }
//   return {
//     [selectProtocol(prefixUrl)]: agent,
//   };
// }

// function selectProtocol(prefixUrl: string): 'http' | 'https' {
//   const url = new URL(prefixUrl);

//   if (url.protocol === 'https:') {
//     return 'https';
//   } else if (url.protocol === 'http:') {
//     return 'http';
//   }

//   throw new TypeError('baseUrl option must begin with "https://" or "http://"');
// }
