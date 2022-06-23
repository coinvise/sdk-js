/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons"

interface VestingFactoryInterface extends ethers.utils.Interface {
  functions: {
    "deployVestingProxy(address,address,uint256,uint256,uint256,uint256)": FunctionFragment
    "owner()": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "setVestingImplAddress(address)": FunctionFragment
    "transferOwnership(address)": FunctionFragment
    "upgradeProxy(address)": FunctionFragment
    "vesting()": FunctionFragment
  }

  encodeFunctionData(
    functionFragment: "deployVestingProxy",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "setVestingImplAddress", values: [string]): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string
  encodeFunctionData(functionFragment: "upgradeProxy", values: [string]): string
  encodeFunctionData(functionFragment: "vesting", values?: undefined): string

  decodeFunctionResult(functionFragment: "deployVestingProxy", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setVestingImplAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "upgradeProxy", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "vesting", data: BytesLike): Result

  events: {
    "OwnershipTransferred(address,address)": EventFragment
    "VestingProxyDeployed(address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
  getEvent(nameOrSignatureOrTopic: "VestingProxyDeployed"): EventFragment
}

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>

export type VestingProxyDeployedEvent = TypedEvent<[string, string] & { _creator: string; _vestingProxy: string }>

export class VestingFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: VestingFactoryInterface

  functions: {
    deployVestingProxy(
      _tokenAddress: string,
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _totalTokens: BigNumberish,
      _noOfMonths: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    setVestingImplAddress(
      _vesting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    upgradeProxy(
      _vestingProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    vesting(overrides?: CallOverrides): Promise<[string]>
  }

  deployVestingProxy(
    _tokenAddress: string,
    _beneficiary: string,
    _start: BigNumberish,
    _cliff: BigNumberish,
    _totalTokens: BigNumberish,
    _noOfMonths: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setVestingImplAddress(
    _vesting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  upgradeProxy(
    _vestingProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  vesting(overrides?: CallOverrides): Promise<string>

  callStatic: {
    deployVestingProxy(
      _tokenAddress: string,
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _totalTokens: BigNumberish,
      _noOfMonths: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    setVestingImplAddress(_vesting: string, overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>

    upgradeProxy(_vestingProxy: string, overrides?: CallOverrides): Promise<void>

    vesting(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    "VestingProxyDeployed(address,address)"(
      _creator?: string | null,
      _vestingProxy?: string | null
    ): TypedEventFilter<[string, string], { _creator: string; _vestingProxy: string }>

    VestingProxyDeployed(
      _creator?: string | null,
      _vestingProxy?: string | null
    ): TypedEventFilter<[string, string], { _creator: string; _vestingProxy: string }>
  }

  estimateGas: {
    deployVestingProxy(
      _tokenAddress: string,
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _totalTokens: BigNumberish,
      _noOfMonths: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setVestingImplAddress(
      _vesting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    upgradeProxy(_vestingProxy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    vesting(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    deployVestingProxy(
      _tokenAddress: string,
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _totalTokens: BigNumberish,
      _noOfMonths: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    setVestingImplAddress(
      _vesting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    upgradeProxy(
      _vestingProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    vesting(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}