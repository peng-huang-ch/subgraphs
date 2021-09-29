// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asERC20(): string | null {
    let value = this.get("asERC20");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asERC20(value: string | null) {
    if (value === null) {
      this.unset("asERC20");
    } else {
      this.set("asERC20", Value.fromString(value as string));
    }
  }

  get ERC20balances(): Array<string> {
    let value = this.get("ERC20balances");
    return value.toStringArray();
  }

  set ERC20balances(value: Array<string>) {
    this.set("ERC20balances", Value.fromStringArray(value));
  }

  get ERC20approvalsOwner(): Array<string> {
    let value = this.get("ERC20approvalsOwner");
    return value.toStringArray();
  }

  set ERC20approvalsOwner(value: Array<string>) {
    this.set("ERC20approvalsOwner", Value.fromStringArray(value));
  }

  get ERC20approvalsSpender(): Array<string> {
    let value = this.get("ERC20approvalsSpender");
    return value.toStringArray();
  }

  set ERC20approvalsSpender(value: Array<string>) {
    this.set("ERC20approvalsSpender", Value.fromStringArray(value));
  }

  get ERC20transferFromEvent(): Array<string> {
    let value = this.get("ERC20transferFromEvent");
    return value.toStringArray();
  }

  set ERC20transferFromEvent(value: Array<string>) {
    this.set("ERC20transferFromEvent", Value.fromStringArray(value));
  }

  get ERC20transferToEvent(): Array<string> {
    let value = this.get("ERC20transferToEvent");
    return value.toStringArray();
  }

  set ERC20transferToEvent(value: Array<string>) {
    this.set("ERC20transferToEvent", Value.fromStringArray(value));
  }
}

export class ERC20Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ERC20Contract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ERC20Contract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ERC20Contract", id.toString(), this);
  }

  static load(id: string): ERC20Contract | null {
    return store.get("ERC20Contract", id) as ERC20Contract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get totalSupply(): string {
    let value = this.get("totalSupply");
    return value.toString();
  }

  set totalSupply(value: string) {
    this.set("totalSupply", Value.fromString(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get approvals(): Array<string> {
    let value = this.get("approvals");
    return value.toStringArray();
  }

  set approvals(value: Array<string>) {
    this.set("approvals", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC20Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ERC20Balance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ERC20Balance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ERC20Balance", id.toString(), this);
  }

  static load(id: string): ERC20Balance | null {
    return store.get("ERC20Balance", id) as ERC20Balance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get account(): string | null {
    let value = this.get("account");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set account(value: string | null) {
    if (value === null) {
      this.unset("account");
    } else {
      this.set("account", Value.fromString(value as string));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }

  get transferFromEvent(): Array<string> {
    let value = this.get("transferFromEvent");
    return value.toStringArray();
  }

  set transferFromEvent(value: Array<string>) {
    this.set("transferFromEvent", Value.fromStringArray(value));
  }

  get transferToEvent(): Array<string> {
    let value = this.get("transferToEvent");
    return value.toStringArray();
  }

  set transferToEvent(value: Array<string>) {
    this.set("transferToEvent", Value.fromStringArray(value));
  }
}

export class ERC20Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ERC20Approval entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ERC20Approval entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ERC20Approval", id.toString(), this);
  }

  static load(id: string): ERC20Approval | null {
    return store.get("ERC20Approval", id) as ERC20Approval | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get spender(): string {
    let value = this.get("spender");
    return value.toString();
  }

  set spender(value: string) {
    this.set("spender", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class ERC20Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ERC20Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ERC20Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ERC20Transfer", id.toString(), this);
  }

  static load(id: string): ERC20Transfer | null {
    return store.get("ERC20Transfer", id) as ERC20Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get from(): string | null {
    let value = this.get("from");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set from(value: string | null) {
    if (value === null) {
      this.unset("from");
    } else {
      this.set("from", Value.fromString(value as string));
    }
  }

  get fromBalance(): string | null {
    let value = this.get("fromBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromBalance(value: string | null) {
    if (value === null) {
      this.unset("fromBalance");
    } else {
      this.set("fromBalance", Value.fromString(value as string));
    }
  }

  get to(): string | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set to(value: string | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromString(value as string));
    }
  }

  get toBalance(): string | null {
    let value = this.get("toBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set toBalance(value: string | null) {
    if (value === null) {
      this.unset("toBalance");
    } else {
      this.set("toBalance", Value.fromString(value as string));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
