import { BigNumber, CallOverrides, Signer } from "ethers";
import omit from "lodash.omit";
import { CHAIN_ID } from "./constants/chains";
import { ContractsEnum, CONTRACT_ADDRESSES } from "./constants/contracts";
import { UnsupportedChainError } from "./errors/UnsupportedChainError";
import { ContractWriteProviders, writeToContract } from "./helpers/contract";
import { Multisend__factory } from "./typechain/abis/types";
import { MultisendArgs, MultisendNativeTokenArgs } from "./types/airdrop";

/**
 * Coinvise SDK class
 */
export class Coinvise {
  signer: Signer;

  constructor(signer: Signer) {
    this.signer = signer;
  }

  /**
   * Multi-send specified amounts of native/ERC20 token to given addresses
   * @returns Promise of transaction hash
   * @throws UnsupportedChainError
   */
  async multisend<T extends ContractWriteProviders>(
    params: MultisendArgs<T>
  ): Promise<string> {
    const { chainId = CHAIN_ID.MAINNET, airdrops } = params;

    const isMultisendNativeTokenArgs = <T extends ContractWriteProviders>(
      params: MultisendArgs<T>
    ): params is MultisendNativeTokenArgs<T> => {
      return !!params.isNativeToken;
    };

    const isNativeToken = isMultisendNativeTokenArgs(params);
    const contractAddress =
      CONTRACT_ADDRESSES[ContractsEnum.multisend][chainId];

    if (!contractAddress) {
      throw new UnsupportedChainError(
        `Unsupported chain ${chainId} for multi-send`
      );
    }

    if (airdrops.length === 0) {
      throw new Error("Airdrops length should be greater than zero");
    }

    const functionName = isNativeToken ? "multisendEther" : "multisendToken";

    const addresses = airdrops.map(({ address }) => address);
    const amounts = airdrops.map(({ amount }) => amount);
    const args = isNativeToken
      ? [addresses, amounts]
      : [params.tokenAddress, addresses, amounts];

    const overrides: CallOverrides = {};

    if (isNativeToken) {
      const totalAmount =
        amounts.length > 0
          ? amounts.reduce((total, curr) => total.add(curr), BigNumber.from(0))
          : BigNumber.from(0);

      overrides.value = totalAmount;
    }

    const writerAddress = await this.signer.getAddress();

    const contract = Multisend__factory.connect(contractAddress, this.signer);

    return writeToContract({
      contract,
      functionName,
      args,
      overrides,
      writerAddress,
      ...omit(params, ["airdrops", "chainId", "isNativeToken", "tokenAddress"]),
    });
  }
}
