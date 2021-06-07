import type { Method } from 'got';
import { APIMessage } from './interfaces/api-types';
import { User } from './interfaces/client.interface';

export const mintToken: Endpoint = {
  method: 'PUT',
  pathParams: [],
  queryParams: [],
  bodyParams: [],
  path: () => 'token',
};

export const changeWebhookUrl: Endpoint = {
  method: 'PATCH',
  pathParams: [],
  queryParams: [],
  bodyParams: [],
  path: () => 'users/webhook',
};

export type MintTokenParams = {
  name: string;
  symbol: string;
  minterAddress: string;
  chainId: number;
};

export type ChangeWebhookUrlParams = {
  webhookUrl: string;
};

export type ChangeWebhookUrlResponse = {
  data: User;
  message: APIMessage.UPDATED;
};

export interface MintTokenResponse {
  data: {
    finishUrl: string;
    name: string;
    symbol: string;
    minterAddress: string;
    chainId: number;
    decimals: number;
    userId: string;
    minted: boolean;
  };
  message: APIMessage.CREATED;
}

interface Endpoint {
  method: Method;
  pathParams: string[];
  queryParams: string[];
  bodyParams: string[];
  path: () => string;
}

export type VerifyWebhookParams = {
  /**
   * Raw text body payload received from Coinvise.
   */
  payload: string | Buffer;

  /**
   * Value of the `x-coinvise-webhook-signature` header from Coinvise.
   * Typically a string.
   *
   * Note that this is typed to accept an array of strings
   * so that it works seamlessly with express's types,
   * but will throw if an array is passed in practice
   * since express should never return this header as an array,
   * only a string.
   */
  header: string | Buffer | Array<string>;

  /**
   * Your Webhook Signing Secret for this endpoint (e.g., 'whsec_...').
   */
  secret: string;

  /**
   * Seconds of tolerance on timestamps.
   */
  tolerance?: number;
};

export type GenerateWebhookSecretResponse = {
  data: {
    secret: string;
  };
  message: APIMessage.GENERATED;
};

export const generateWebhookSecret: Endpoint = {
  method: 'GET',
  pathParams: [],
  queryParams: [],
  bodyParams: [],
  path: () => 'users/webhook/generate',
};
