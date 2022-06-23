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

interface TokenABIInterface extends ethers.utils.Interface {
  functions: {
    "addMinter(address)": FunctionFragment
    "addPauser(address)": FunctionFragment
    "allowance(address,address)": FunctionFragment
    "approve(address,uint256)": FunctionFragment
    "balanceOf(address)": FunctionFragment
    "burn(uint256)": FunctionFragment
    "burnFrom(address,uint256)": FunctionFragment
    "cap()": FunctionFragment
    "decimals()": FunctionFragment
    "decreaseAllowance(address,uint256)": FunctionFragment
    "increaseAllowance(address,uint256)": FunctionFragment
    "isMinter(address)": FunctionFragment
    "isPauser(address)": FunctionFragment
    "mint(address,uint256)": FunctionFragment
    "name()": FunctionFragment
    "pause()": FunctionFragment
    "paused()": FunctionFragment
    "redeem(uint256,bytes32)": FunctionFragment
    "renounceMinter()": FunctionFragment
    "renouncePauser()": FunctionFragment
    "symbol()": FunctionFragment
    "totalSupply()": FunctionFragment
    "transfer(address,uint256)": FunctionFragment
    "transferFrom(address,address,uint256)": FunctionFragment
    "unpause()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addMinter", values: [string]): string
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string
  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "cap", values?: undefined): string
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string
  encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "isMinter", values: [string]): string
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "name", values?: undefined): string
  encodeFunctionData(functionFragment: "pause", values?: undefined): string
  encodeFunctionData(functionFragment: "paused", values?: undefined): string
  encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, BytesLike]): string
  encodeFunctionData(functionFragment: "renounceMinter", values?: undefined): string
  encodeFunctionData(functionFragment: "renouncePauser", values?: undefined): string
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string

  decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "cap", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceMinter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renouncePauser", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result

  events: {
    "Approval(address,address,uint256)": EventFragment
    "MinterAdded(address)": EventFragment
    "MinterRemoved(address)": EventFragment
    "Paused(address)": EventFragment
    "PauserAdded(address)": EventFragment
    "PauserRemoved(address)": EventFragment
    "TokenRedeemed(address,uint256,bytes32)": EventFragment
    "Transfer(address,address,uint256)": EventFragment
    "Unpaused(address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment
  getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment
  getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment
  getEvent(nameOrSignatureOrTopic: "TokenRedeemed"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string
    spender: string
    value: BigNumber
  }
>

export type MinterAddedEvent = TypedEvent<[string] & { account: string }>

export type MinterRemovedEvent = TypedEvent<[string] & { account: string }>

export type PausedEvent = TypedEvent<[string] & { account: string }>

export type PauserAddedEvent = TypedEvent<[string] & { account: string }>

export type PauserRemovedEvent = TypedEvent<[string] & { account: string }>

export type TokenRedeemedEvent = TypedEvent<
  [string, BigNumber, string] & {
    redeemer: string
    amount: BigNumber
    messageHash: string
  }
>

export type TransferEvent = TypedEvent<[string, string, BigNumber] & { from: string; to: string; value: BigNumber }>

export type UnpausedEvent = TypedEvent<[string] & { account: string }>

export class TokenABI extends BaseContract {
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

  interface: TokenABIInterface

  functions: {
    addMinter(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    cap(overrides?: CallOverrides): Promise<[BigNumber]>

    decimals(overrides?: CallOverrides): Promise<[number]>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    name(overrides?: CallOverrides): Promise<[string]>

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    paused(overrides?: CallOverrides): Promise<[boolean]>

    redeem(
      amount: BigNumberish,
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    renounceMinter(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    renouncePauser(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    symbol(overrides?: CallOverrides): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>
  }

  addMinter(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  addPauser(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

  burn(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  burnFrom(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  cap(overrides?: CallOverrides): Promise<BigNumber>

  decimals(overrides?: CallOverrides): Promise<number>

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isMinter(account: string, overrides?: CallOverrides): Promise<boolean>

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>

  mint(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  paused(overrides?: CallOverrides): Promise<boolean>

  redeem(
    amount: BigNumberish,
    messageHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  renounceMinter(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  renouncePauser(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  symbol(overrides?: CallOverrides): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  callStatic: {
    addMinter(account: string, overrides?: CallOverrides): Promise<void>

    addPauser(account: string, overrides?: CallOverrides): Promise<void>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    burnFrom(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    cap(overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<number>

    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>

    mint(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    name(overrides?: CallOverrides): Promise<string>

    pause(overrides?: CallOverrides): Promise<void>

    paused(overrides?: CallOverrides): Promise<boolean>

    redeem(amount: BigNumberish, messageHash: BytesLike, overrides?: CallOverrides): Promise<void>

    renounceMinter(overrides?: CallOverrides): Promise<void>

    renouncePauser(overrides?: CallOverrides): Promise<void>

    symbol(overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    unpause(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>

    "MinterAdded(address)"(account?: string | null): TypedEventFilter<[string], { account: string }>

    MinterAdded(account?: string | null): TypedEventFilter<[string], { account: string }>

    "MinterRemoved(address)"(account?: string | null): TypedEventFilter<[string], { account: string }>

    MinterRemoved(account?: string | null): TypedEventFilter<[string], { account: string }>

    "Paused(address)"(account?: null): TypedEventFilter<[string], { account: string }>

    Paused(account?: null): TypedEventFilter<[string], { account: string }>

    "PauserAdded(address)"(account?: string | null): TypedEventFilter<[string], { account: string }>

    PauserAdded(account?: string | null): TypedEventFilter<[string], { account: string }>

    "PauserRemoved(address)"(account?: string | null): TypedEventFilter<[string], { account: string }>

    PauserRemoved(account?: string | null): TypedEventFilter<[string], { account: string }>

    "TokenRedeemed(address,uint256,bytes32)"(
      redeemer?: null,
      amount?: null,
      messageHash?: null
    ): TypedEventFilter<[string, BigNumber, string], { redeemer: string; amount: BigNumber; messageHash: string }>

    TokenRedeemed(
      redeemer?: null,
      amount?: null,
      messageHash?: null
    ): TypedEventFilter<[string, BigNumber, string], { redeemer: string; amount: BigNumber; messageHash: string }>

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>

    "Unpaused(address)"(account?: null): TypedEventFilter<[string], { account: string }>

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>
  }

  estimateGas: {
    addMinter(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    addPauser(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    burn(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    cap(overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    paused(overrides?: CallOverrides): Promise<BigNumber>

    redeem(
      amount: BigNumberish,
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    renounceMinter(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    renouncePauser(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    addMinter(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    cap(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isMinter(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    isPauser(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>

    redeem(
      amount: BigNumberish,
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    renounceMinter(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    renouncePauser(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>
  }
}
