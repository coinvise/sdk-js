import { Signer } from "ethers";
import { CHAIN_ID } from "../constants";
import {
  ContractWriteAdditionalParams,
  ContractWriteProviders,
} from "../helpers";

export type AirDropItem = {
  address: string[];
  amount: number[];
};

export type MultisendBaseArgs = {
  sender: Signer;
  airdrops: AirDropItem[];
  chainId?: CHAIN_ID;
};

export type MultisendNativeTokenArgs<
  T extends ContractWriteProviders = ContractWriteProviders
> = MultisendBaseArgs &
  ContractWriteAdditionalParams<T> & { isNativeToken: true };

export type MultisendERC20TokenArgs<
  T extends ContractWriteProviders = ContractWriteProviders
> = MultisendBaseArgs &
  ContractWriteAdditionalParams<T> & {
    isNativeToken?: false;
    tokenAddress: string;
  };

export type MultisendArgs<
  T extends ContractWriteProviders = ContractWriteProviders
> = MultisendERC20TokenArgs<T> | MultisendNativeTokenArgs<T>;
