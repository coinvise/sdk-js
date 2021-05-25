import type { Method } from 'got';
import { APIMessage } from './api-types';

export const mintToken: Endpoint = {
  method: 'PUT',
  pathParams: [],
  queryParams: [],
  bodyParams: [],
  path: () => 'token',
};

export type MintTokenParams = {
  name: string;
  symbol: string;
  minterAddress: string;
  chainId: number;
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
