import got, {
  Got,
  Agents as GotAgents,
  Options as GotOptions,
  Headers as GotHeaders,
  Method,
} from 'got';
import { Agent } from 'http';
import { URL } from 'url';
import { mintToken, MintTokenParams, MintTokenResponse } from './api-endpoints';
import { buildRequestError, HTTPResponseError } from './errors';

import {
  Logger,
  LogLevel,
  logLevelSeverity,
  makeConsoleLogger,
} from './logging';

export interface ClientOptions {
  auth: string;
  timeoutMs?: number;
  baseUrl?: string;
  logLevel?: LogLevel;
  logger?: Logger;
  agent?: Agent;
  coinviseVersion?: string;
}

export interface RequestParameters {
  path: string;
  method: Method;
  query?: QueryParams;
  body?: {
    [k: string]: unknown;
  };
  auth?: string;
}

export default class Client {
  #auth: string;
  #logger: Logger;
  #logLevel: LogLevel;
  #got: Got;

  // TODO: change to something meaningful
  static readonly defaultCoinviseVersion = '2021-05-13';

  public constructor(options: ClientOptions) {
    this.#auth = options?.auth;
    this.#logLevel = options?.logLevel ?? LogLevel.WARN;
    this.#logger = options?.logger ?? makeConsoleLogger(this.constructor.name);

    const prefixUrl = (options?.baseUrl ?? 'https://api.coinvise.co') + '/v1/';
    const timeout = options?.timeoutMs ?? 60_000;
    const coinviseVersion =
      options?.coinviseVersion ?? Client.defaultCoinviseVersion;

    this.#got = got.extend({
      prefixUrl,
      timeout,
      headers: {
        'Notion-Version': coinviseVersion,
        // TODO: update with format appropriate for telemetry, use version from package.json
        'user-agent': 'notionhq-client/0.1.0',
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
    auth,
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
        headers: this.authAsHeaders(auth ?? this.#auth),
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
   * Transforms an API key or access token into a headers object suitable for an HTTP request.
   *
   * This method uses the instance's value as the default when the input is undefined. If neither are defined, it returns
   * an empty object
   *
   * @param auth API key or access token
   * @returns headers key-value object
   */
  private authAsHeaders(auth?: string): GotHeaders {
    const headers: GotHeaders = {};
    const authHeaderValue = auth ?? this.#auth;
    if (authHeaderValue !== undefined) {
      headers['authorization'] = `Bearer ${authHeaderValue}`;
    }
    return headers;
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

/*
 * Type aliases to support the generic request interface.
 */
type QueryParams = GotOptions['searchParams'];
