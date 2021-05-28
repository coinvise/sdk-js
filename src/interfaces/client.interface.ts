import { Agent } from 'http';
import { Logger, LogLevel } from '../logging';
import { Options as GotOptions, Method } from 'got';

export interface ClientOptions {
  accessId: string;
  privateKey: string;
  timeoutMs?: number;
  baseUrl?: string;
  logLevel?: LogLevel;
  logger?: Logger;
  agent?: Agent;
}

export interface RequestParameters {
  path: string;
  method: Method;
  query?: QueryParams;
  body?: {
    [k: string]: unknown;
  };
}

export interface User {
  username: string;
  webhookUrl: string;
}

/*
 * Type aliases to support the generic request interface.
 */
type QueryParams = GotOptions['searchParams'];
