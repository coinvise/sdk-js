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

interface MarketplaceABIInterface extends ethers.utils.Interface {
  functions: {
    "addItem(string,uint256,address)": FunctionFragment
    "addItemMeta(string,uint256,address,address,bytes32,bytes32,uint8)": FunctionFragment
    "buyItem(uint256,address)": FunctionFragment
    "buyToken(uint256,address,uint256)": FunctionFragment
    "depositToken(address,uint256,uint256)": FunctionFragment
    "getDeposit(address,uint256)": FunctionFragment
    "getDepositIdsFromOwner(address)": FunctionFragment
    "getItem(address,uint256)": FunctionFragment
    "getOwnerBalance()": FunctionFragment
    "nonces(address)": FunctionFragment
    "owner()": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "transferOwnership(address)": FunctionFragment
    "withdraw()": FunctionFragment
    "withdrawOwnerBalance()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addItem", values: [string, BigNumberish, string]): string
  encodeFunctionData(
    functionFragment: "addItemMeta",
    values: [string, BigNumberish, string, string, BytesLike, BytesLike, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: "buyItem", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "buyToken", values: [BigNumberish, string, BigNumberish]): string
  encodeFunctionData(functionFragment: "depositToken", values: [string, BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: "getDeposit", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "getDepositIdsFromOwner", values: [string]): string
  encodeFunctionData(functionFragment: "getItem", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "getOwnerBalance", values?: undefined): string
  encodeFunctionData(functionFragment: "nonces", values: [string]): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string
  encodeFunctionData(functionFragment: "withdrawOwnerBalance", values?: undefined): string

  decodeFunctionResult(functionFragment: "addItem", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "addItemMeta", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "depositToken", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getDepositIdsFromOwner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getItem", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getOwnerBalance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdrawOwnerBalance", data: BytesLike): Result

  events: {
    "Bought(address,uint256,address,address,uint256,uint256)": EventFragment
    "Deposited(uint256,address,address,uint256,uint256)": EventFragment
    "ItemAdded(uint256,address,uint256,address)": EventFragment
    "ItemBought(uint256,address,address,uint256,address)": EventFragment
    "OwnershipTransferred(address,address)": EventFragment
    "Withdrawn(address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "Bought"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ItemAdded"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ItemBought"): EventFragment
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment
}

export type BoughtEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, BigNumber] & {
    user: string
    depositId: BigNumber
    owner: string
    token: string
    amount: BigNumber
    price: BigNumber
  }
>

export type DepositedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber] & {
    depositId: BigNumber
    depositor: string
    token: string
    amount: BigNumber
    price: BigNumber
  }
>

export type ItemAddedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string] & {
    _itemId: BigNumber
    owner: string
    amount: BigNumber
    token: string
  }
>

export type ItemBoughtEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, string] & {
    _itemId: BigNumber
    owner: string
    user: string
    amount: BigNumber
    token: string
  }
>

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>

export type WithdrawnEvent = TypedEvent<[string, BigNumber] & { user: string; amount: BigNumber }>

export class MarketplaceABI extends BaseContract {
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

  interface: MarketplaceABIInterface

  functions: {
    addItem(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    addItemMeta(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      creator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    buyItem(
      _itemId: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    buyToken(
      _depositId: BigNumberish,
      _owner: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    depositToken(
      _token: string,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getDeposit(
      _owner: string,
      _depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, BigNumber, BigNumber, BigNumber]>

    getDepositIdsFromOwner(_owner: string, overrides?: CallOverrides): Promise<[BigNumber[]]>

    getItem(
      _owner: string,
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, BigNumber, BigNumber]>

    getOwnerBalance(overrides?: CallOverrides): Promise<[BigNumber]>

    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    withdrawOwnerBalance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>
  }

  addItem(
    _title: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  addItemMeta(
    _title: string,
    _amount: BigNumberish,
    _token: string,
    creator: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  buyItem(
    _itemId: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  buyToken(
    _depositId: BigNumberish,
    _owner: string,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  depositToken(
    _token: string,
    _amount: BigNumberish,
    _price: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getDeposit(
    _owner: string,
    _depositId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string, string, BigNumber, BigNumber, BigNumber]>

  getDepositIdsFromOwner(_owner: string, overrides?: CallOverrides): Promise<BigNumber[]>

  getItem(
    _owner: string,
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string, string, BigNumber, BigNumber]>

  getOwnerBalance(overrides?: CallOverrides): Promise<BigNumber>

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  withdrawOwnerBalance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  callStatic: {
    addItem(_title: string, _amount: BigNumberish, _token: string, overrides?: CallOverrides): Promise<void>

    addItemMeta(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      creator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    buyItem(_itemId: BigNumberish, _owner: string, overrides?: CallOverrides): Promise<void>

    buyToken(_depositId: BigNumberish, _owner: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    depositToken(
      _token: string,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getDeposit(
      _owner: string,
      _depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, BigNumber, BigNumber, BigNumber]>

    getDepositIdsFromOwner(_owner: string, overrides?: CallOverrides): Promise<BigNumber[]>

    getItem(
      _owner: string,
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, BigNumber, BigNumber]>

    getOwnerBalance(overrides?: CallOverrides): Promise<BigNumber>

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>

    withdraw(overrides?: CallOverrides): Promise<void>

    withdrawOwnerBalance(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    "Bought(address,uint256,address,address,uint256,uint256)"(
      user?: null,
      depositId?: null,
      owner?: null,
      token?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, BigNumber],
      {
        user: string
        depositId: BigNumber
        owner: string
        token: string
        amount: BigNumber
        price: BigNumber
      }
    >

    Bought(
      user?: null,
      depositId?: null,
      owner?: null,
      token?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber, BigNumber],
      {
        user: string
        depositId: BigNumber
        owner: string
        token: string
        amount: BigNumber
        price: BigNumber
      }
    >

    "Deposited(uint256,address,address,uint256,uint256)"(
      depositId?: null,
      depositor?: string | null,
      token?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber],
      {
        depositId: BigNumber
        depositor: string
        token: string
        amount: BigNumber
        price: BigNumber
      }
    >

    Deposited(
      depositId?: null,
      depositor?: string | null,
      token?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber],
      {
        depositId: BigNumber
        depositor: string
        token: string
        amount: BigNumber
        price: BigNumber
      }
    >

    "ItemAdded(uint256,address,uint256,address)"(
      _itemId?: null,
      owner?: string | null,
      amount?: null,
      token?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { _itemId: BigNumber; owner: string; amount: BigNumber; token: string }
    >

    ItemAdded(
      _itemId?: null,
      owner?: string | null,
      amount?: null,
      token?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      { _itemId: BigNumber; owner: string; amount: BigNumber; token: string }
    >

    "ItemBought(uint256,address,address,uint256,address)"(
      _itemId?: null,
      owner?: string | null,
      user?: string | null,
      amount?: null,
      token?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, string],
      {
        _itemId: BigNumber
        owner: string
        user: string
        amount: BigNumber
        token: string
      }
    >

    ItemBought(
      _itemId?: null,
      owner?: string | null,
      user?: string | null,
      amount?: null,
      token?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, string],
      {
        _itemId: BigNumber
        owner: string
        user: string
        amount: BigNumber
        token: string
      }
    >

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>

    "Withdrawn(address,uint256)"(
      user?: null,
      amount?: null
    ): TypedEventFilter<[string, BigNumber], { user: string; amount: BigNumber }>

    Withdrawn(user?: null, amount?: null): TypedEventFilter<[string, BigNumber], { user: string; amount: BigNumber }>
  }

  estimateGas: {
    addItem(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    addItemMeta(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      creator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    buyItem(
      _itemId: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    buyToken(
      _depositId: BigNumberish,
      _owner: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    depositToken(
      _token: string,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getDeposit(_owner: string, _depositId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getDepositIdsFromOwner(_owner: string, overrides?: CallOverrides): Promise<BigNumber>

    getItem(_owner: string, _itemId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getOwnerBalance(overrides?: CallOverrides): Promise<BigNumber>

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    withdrawOwnerBalance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    addItem(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    addItemMeta(
      _title: string,
      _amount: BigNumberish,
      _token: string,
      creator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    buyItem(
      _itemId: BigNumberish,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    buyToken(
      _depositId: BigNumberish,
      _owner: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    depositToken(
      _token: string,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getDeposit(_owner: string, _depositId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getDepositIdsFromOwner(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getItem(_owner: string, _itemId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getOwnerBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    withdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    withdrawOwnerBalance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>
  }
}