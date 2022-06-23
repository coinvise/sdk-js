/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { TransactionResponse } from "@ethersproject/abstract-provider";
import Safe from "@gnosis.pm/safe-core-sdk";
import SafeServiceClient from "@gnosis.pm/safe-service-client";
import { CallOverrides, Contract, ethers } from "ethers";
import { CHAIN_ID } from "../constants";

type ContractWriteBaseParams<T extends Contract = Contract> = {
  writerAddress: string;
  contract: T;
  functionName: keyof T & string;
  args: unknown[];
  overrides: CallOverrides;
};

type ContractWriteAdditionalParamsForSafe = {
  safeSdk: Safe;
  safeService: SafeServiceClient;
};

type ContractWriteAdditionalParamsForBiconomy = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  biconomy: any;
  walletProvider: ethers.providers.Web3Provider;
  contractName: string;
  contractVersion: string;
  contractAddress: string;
  chainId: number;
};

export type ContractWriteProviders = "biconomy" | "gnosis-safe" | "ethers";

export type ContractWriteAdditionalParams<
  T extends ContractWriteProviders = ContractWriteProviders
> = T extends "biconomy"
  ? ContractWriteAdditionalParamsForBiconomy
  : T extends "gnosis-safe"
  ? ContractWriteAdditionalParamsForSafe
  : Record<string, never>;

export type ContractWriteParams<
  T extends ContractWriteProviders = ContractWriteProviders,
  U extends Contract = Contract
> = T extends "biconomy"
  ? ContractWriteBaseParams<U> & ContractWriteAdditionalParams<"biconomy">
  : T extends "gnosis-safe"
  ? ContractWriteBaseParams<U> & ContractWriteAdditionalParams<"gnosis-safe">
  : ContractWriteBaseParams<U>;

export const writeToContractWithSafe = async <T extends Contract>({
  contract,
  functionName,
  args,
  overrides,
  writerAddress,
  safeSdk,
  safeService,
}: ContractWriteParams<"gnosis-safe", T>) => {
  // Create gnosis tx
  const safeTx = await safeSdk.createTransaction({
    to: contract.address,
    data: contract.interface.encodeFunctionData(functionName, args),
    value: overrides?.value ? overrides.value.toString() : "0",
  });
  await safeSdk.signTransaction(safeTx);
  const safeTxHash = await safeSdk.getTransactionHash(safeTx);

  // Send tx to gnosis for further confirmations and eventual execution
  await safeService.proposeTransaction({
    safeAddress: safeSdk.getAddress(),
    safeTransaction: safeTx,
    safeTxHash,
    senderAddress: writerAddress,
  });

  return safeTxHash;
};

export const writeToContractWithBiconomy = async <T extends Contract>({
  contract,
  functionName,
  args,
  writerAddress,
  biconomy,
  walletProvider,
  contractName,
  contractVersion,
  contractAddress,
  chainId,
}: ContractWriteParams<"biconomy", T>) => {
  const contractWithBiconomy = contract.connect(
    biconomy.getSignerByAddress(writerAddress)
  );
  const userNonce = await contractWithBiconomy.getNonce(writerAddress);
  const functionSignature = contractWithBiconomy.interface.encodeFunctionData(
    functionName,
    args
  );
  const typedMessage = getTypedMessage(
    contractName,
    contractVersion,
    userNonce,
    writerAddress,
    functionSignature,
    contractAddress,
    chainId
  );
  const signature = (await walletProvider.send("eth_signTypedData_v4", [
    writerAddress,
    JSON.stringify(typedMessage),
  ])) as string;

  const { r, s, v } = ethers.utils.splitSignature(signature);

  const response = (await contractWithBiconomy.executeMetaTransaction(
    writerAddress,
    functionSignature,
    r,
    s,
    v
  )) as TransactionResponse;

  return response.hash;
};

export const writeToContractWithEthers = async <T extends Contract>({
  contract,
  functionName,
  args,
  overrides,
}: ContractWriteParams<"ethers", T>) => {
  const params = [...args, ...(overrides ? [overrides] : [])];
  const response = (await contract[functionName](
    ...params
  )) as TransactionResponse;
  return response.hash;
};

export function isBiconomyParams(
  params: ContractWriteAdditionalParams<ContractWriteProviders>
): params is ContractWriteAdditionalParams<"biconomy">;
export function isBiconomyParams<U extends Contract>(
  params: ContractWriteParams<ContractWriteProviders, U>
): params is ContractWriteParams<"biconomy", U>;
export function isBiconomyParams(
  params: ContractWriteAdditionalParams | ContractWriteParams
): params is
  | ContractWriteAdditionalParams<"biconomy">
  | ContractWriteParams<"biconomy"> {
  return (params as ContractWriteParams<"biconomy">).biconomy != null;
}

export function isGnosisSafeParams(
  params: ContractWriteAdditionalParams<ContractWriteProviders>
): params is ContractWriteAdditionalParams<"gnosis-safe">;
export function isGnosisSafeParams<U extends Contract>(
  params: ContractWriteParams<ContractWriteProviders, U>
): params is ContractWriteParams<"gnosis-safe", U>;
export function isGnosisSafeParams(
  params: ContractWriteAdditionalParams | ContractWriteParams
): params is
  | ContractWriteAdditionalParams<"gnosis-safe">
  | ContractWriteParams<"gnosis-safe"> {
  return (params as ContractWriteParams<"gnosis-safe">).safeSdk != null;
}

export const writeToContract = async <
  T extends ContractWriteProviders = ContractWriteProviders,
  U extends Contract = Contract
>(
  params: ContractWriteParams<T, U>
): Promise<string> => {
  if (isBiconomyParams(params)) {
    return writeToContractWithBiconomy(params);
  }
  if (isGnosisSafeParams(params)) {
    return writeToContractWithSafe(params);
  }
  return writeToContractWithEthers(params);
};

export const getTypedMessage = (
  name: string,
  version: string,
  nonce: string,
  address: string,
  functionSignature: string,
  contractAddress: string,
  chainId: CHAIN_ID
) => {
  return {
    domain: {
      name,
      version,
      salt: chainId,
      verifyingContract: contractAddress,
    },
    primaryType: "MetaTransaction",
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "salt", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      MetaTransaction: [
        { name: "nonce", type: "uint256" },
        { name: "from", type: "address" },
        { name: "functionSignature", type: "bytes" },
      ],
    },
    message: {
      nonce: parseInt(nonce),
      from: address,
      functionSignature,
    },
  };
};
