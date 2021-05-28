import crypto from 'crypto';
import got, { Agents as GotAgents, Got } from 'got';
import { Agent } from 'http';
import { URL } from 'url';
import {
  changeWebhookUrl,
  ChangeWebhookUrlParams,
  ChangeWebhookUrlResponse,
  mintToken,
  MintTokenParams,
  MintTokenResponse,
} from './api-endpoints';
import { buildRequestError, HTTPResponseError } from './errors';
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

export default class Client {
  #accessId: string;
  #privateKey: string;
  #logger: Logger;
  #logLevel: LogLevel;
  #got: Got;

  // TODO: change to something meaningful
  static readonly defaultCoinviseVersion = '2021-05-13';

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
      agent: makeAgentOption(prefixUrl, options?.agent),
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
      const response = await this.#got(path, {
        method,
        searchParams: query,
        json,
        headers: this.generateAuthHeaders(this.#accessId, this.#privateKey),
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

  public changeWebhookUrl = (
    args: ChangeWebhookUrlParams
  ): Promise<ChangeWebhookUrlResponse> =>
    this.request({
      path: changeWebhookUrl.path(),
      method: changeWebhookUrl.method,
      body: args,
    });

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
    const timestamp = Date.now().toString();
    const signature = crypto.sign(
      'sha256',
      Buffer.from(accessId + timestamp),
      privateKey
    );

    return {
      'x-coinvise-signature': signature.toString('base64'),
      'x-coinvise-timestamp': timestamp,
      'x-coinvise-accessid': accessId,
    };
  }
}

function makeAgentOption(
  prefixUrl: string,
  agent: Agent | undefined
): GotAgents | undefined {
  if (agent === undefined) {
    return undefined;
  }
  return {
    [selectProtocol(prefixUrl)]: agent,
  };
}

function selectProtocol(prefixUrl: string): 'http' | 'https' {
  const url = new URL(prefixUrl);

  if (url.protocol === 'https:') {
    return 'https';
  } else if (url.protocol === 'http:') {
    return 'http';
  }

  throw new TypeError('baseUrl option must begin with "https://" or "http://"');
}
