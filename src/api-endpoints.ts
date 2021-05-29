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
