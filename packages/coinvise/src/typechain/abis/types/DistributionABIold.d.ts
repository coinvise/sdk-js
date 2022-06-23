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
  PayableOverrides,
  CallOverrides,
} from "ethers"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons"

interface DistributionABIoldInterface extends ethers.utils.Interface {
  functions: {
    "claim(address,uint256,string,uint8,bytes32,bytes32)": FunctionFragment
    "createCampaign(address,uint256,uint256)": FunctionFragment
    "getCampaign(address,uint256)": FunctionFragment
    "getCampaignIdsFromManager(address)": FunctionFragment
    "multisend(address,address[],uint256)": FunctionFragment
    "owner()": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "transferOwnership(address)": FunctionFragment
    "withdraw()": FunctionFragment
  }

  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish, string, BigNumberish, BytesLike, BytesLike]
  ): string
  encodeFunctionData(functionFragment: "createCampaign", values: [string, BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: "getCampaign", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "getCampaignIdsFromManager", values: [string]): string
  encodeFunctionData(functionFragment: "multisend", values: [string, string[], BigNumberish]): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "createCampaign", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCampaign", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCampaignIdsFromManager", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "multisend", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result

  events: {
    "CampaignCreated(address,uint256)": EventFragment
    "Multisent(address,uint256,uint256)": EventFragment
    "OwnershipTransferred(address,address)": EventFragment
    "UserRewarded(address,uint256,address,address,uint256)": EventFragment
    "Withdrawn(address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "CampaignCreated"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Multisent"): EventFragment
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
  getEvent(nameOrSignatureOrTopic: "UserRewarded"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment
}

export type CampaignCreatedEvent = TypedEvent<[string, BigNumber] & { managerAddress: string; campaignId: BigNumber }>

export type MultisentEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    tokenAddress: string
    recipientsAmount: BigNumber
    amount: BigNumber
  }
>

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>

export type UserRewardedEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber] & {
    managerAddress: string
    campaignId: BigNumber
    userAddress: string
    tokenAddress: string
    amount: BigNumber
  }
>

export type WithdrawnEvent = TypedEvent<[string, BigNumber] & { recipient: string; amount: BigNumber }>

export class DistributionABIold extends BaseContract {
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

  interface: DistributionABIoldInterface

  functions: {
    claim(
      _campaignManager: string,
      _campaignId: BigNumberish,
      _slug: string,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    createCampaign(
      _tokenAddress: string,
      _linksAmount: BigNumberish,
      _amountPerLink: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getCampaign(
      _campaignManager: string,
      _campaignId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>

    getCampaignIdsFromManager(_campaignManager: string, overrides?: CallOverrides): Promise<[BigNumber[]]>

    multisend(
      _token: string,
      _recipients: string[],
      _amountPerAddress: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>
  }

  claim(
    _campaignManager: string,
    _campaignId: BigNumberish,
    _slug: string,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  createCampaign(
    _tokenAddress: string,
    _linksAmount: BigNumberish,
    _amountPerLink: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getCampaign(
    _campaignManager: string,
    _campaignId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>

  getCampaignIdsFromManager(_campaignManager: string, overrides?: CallOverrides): Promise<BigNumber[]>

  multisend(
    _token: string,
    _recipients: string[],
    _amountPerAddress: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  callStatic: {
    claim(
      _campaignManager: string,
      _campaignId: BigNumberish,
      _slug: string,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    createCampaign(
      _tokenAddress: string,
      _linksAmount: BigNumberish,
      _amountPerLink: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getCampaign(
      _campaignManager: string,
      _campaignId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>

    getCampaignIdsFromManager(_campaignManager: string, overrides?: CallOverrides): Promise<BigNumber[]>

    multisend(
      _token: string,
      _recipients: string[],
      _amountPerAddress: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>

    withdraw(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    "CampaignCreated(address,uint256)"(
      managerAddress?: string | null,
      campaignId?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { managerAddress: string; campaignId: BigNumber }>

    CampaignCreated(
      managerAddress?: string | null,
      campaignId?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { managerAddress: string; campaignId: BigNumber }>

    "Multisent(address,uint256,uint256)"(
      tokenAddress?: string | null,
      recipientsAmount?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { tokenAddress: string; recipientsAmount: BigNumber; amount: BigNumber }
    >

    Multisent(
      tokenAddress?: string | null,
      recipientsAmount?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { tokenAddress: string; recipientsAmount: BigNumber; amount: BigNumber }
    >

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    "UserRewarded(address,uint256,address,address,uint256)"(
      managerAddress?: string | null,
      campaignId?: BigNumberish | null,
      userAddress?: string | null,
      tokenAddress?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        managerAddress: string
        campaignId: BigNumber
        userAddress: string
        tokenAddress: string
        amount: BigNumber
      }
    >

    UserRewarded(
      managerAddress?: string | null,
      campaignId?: BigNumberish | null,
      userAddress?: string | null,
      tokenAddress?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        managerAddress: string
        campaignId: BigNumber
        userAddress: string
        tokenAddress: string
        amount: BigNumber
      }
    >

    "Withdrawn(address,uint256)"(
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<[string, BigNumber], { recipient: string; amount: BigNumber }>

    Withdrawn(
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<[string, BigNumber], { recipient: string; amount: BigNumber }>
  }

  estimateGas: {
    claim(
      _campaignManager: string,
      _campaignId: BigNumberish,
      _slug: string,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    createCampaign(
      _tokenAddress: string,
      _linksAmount: BigNumberish,
      _amountPerLink: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getCampaign(_campaignManager: string, _campaignId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getCampaignIdsFromManager(_campaignManager: string, overrides?: CallOverrides): Promise<BigNumber>

    multisend(
      _token: string,
      _recipients: string[],
      _amountPerAddress: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    claim(
      _campaignManager: string,
      _campaignId: BigNumberish,
      _slug: string,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    createCampaign(
      _tokenAddress: string,
      _linksAmount: BigNumberish,
      _amountPerLink: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getCampaign(
      _campaignManager: string,
      _campaignId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getCampaignIdsFromManager(_campaignManager: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    multisend(
      _token: string,
      _recipients: string[],
      _amountPerAddress: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>
  }
}