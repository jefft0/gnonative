// @generated by protoc-gen-es v1.7.0
// @generated from file gnonativetypes.proto (package land.gno.gnonative.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * messages
 *
 * @generated from message land.gno.gnonative.v1.SetRemoteRequest
 */
export const SetRemoteRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.SetRemoteRequest",
  () => [
    { no: 1, name: "remote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SetRemoteResponse
 */
export const SetRemoteResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.SetRemoteResponse",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GetRemoteRequest
 */
export const GetRemoteRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetRemoteRequest",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GetRemoteResponse
 */
export const GetRemoteResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetRemoteResponse",
  () => [
    { no: 1, name: "remote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SetChainIDRequest
 */
export const SetChainIDRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.SetChainIDRequest",
  () => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SetChainIDResponse
 */
export const SetChainIDResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.SetChainIDResponse",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GetChainIDRequest
 */
export const GetChainIDRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetChainIDRequest",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GetChainIDResponse
 */
export const GetChainIDResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetChainIDResponse",
  () => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SetPasswordRequest
 */
export const SetPasswordRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.SetPasswordRequest",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SetPasswordResponse
 */
export const SetPasswordResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.SetPasswordResponse",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GenerateRecoveryPhraseRequest
 */
export const GenerateRecoveryPhraseRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GenerateRecoveryPhraseRequest",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GenerateRecoveryPhraseResponse
 */
export const GenerateRecoveryPhraseResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GenerateRecoveryPhraseResponse",
  () => [
    { no: 1, name: "phrase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.KeyInfo
 */
export const KeyInfo = proto3.makeMessageType(
  "land.gno.gnonative.v1.KeyInfo",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pub_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Coin holds some amount of one currency.
 * A negative amount is invalid.
 *
 * @generated from message land.gno.gnonative.v1.Coin
 */
export const Coin = proto3.makeMessageType(
  "land.gno.gnonative.v1.Coin",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.BaseAccount
 */
export const BaseAccount = proto3.makeMessageType(
  "land.gno.gnonative.v1.BaseAccount",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "pub_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.ListKeyInfoRequest
 */
export const ListKeyInfoRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.ListKeyInfoRequest",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.ListKeyInfoResponse
 */
export const ListKeyInfoResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.ListKeyInfoResponse",
  () => [
    { no: 1, name: "keys", jsonName: "key_info", kind: "message", T: KeyInfo, repeated: true },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HasKeyByNameRequest
 */
export const HasKeyByNameRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.HasKeyByNameRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HasKeyByNameResponse
 */
export const HasKeyByNameResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.HasKeyByNameResponse",
  () => [
    { no: 1, name: "has", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HasKeyByAddressRequest
 */
export const HasKeyByAddressRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.HasKeyByAddressRequest",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HasKeyByAddressResponse
 */
export const HasKeyByAddressResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.HasKeyByAddressResponse",
  () => [
    { no: 1, name: "has", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HasKeyByNameOrAddressRequest
 */
export const HasKeyByNameOrAddressRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.HasKeyByNameOrAddressRequest",
  () => [
    { no: 1, name: "name_or_bech32", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HasKeyByNameOrAddressResponse
 */
export const HasKeyByNameOrAddressResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.HasKeyByNameOrAddressResponse",
  () => [
    { no: 1, name: "has", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetKeyInfoByNameRequest
 */
export const GetKeyInfoByNameRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetKeyInfoByNameRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetKeyInfoByNameResponse
 */
export const GetKeyInfoByNameResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetKeyInfoByNameResponse",
  () => [
    { no: 1, name: "key", jsonName: "key_info", kind: "message", T: KeyInfo },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetKeyInfoByAddressRequest
 */
export const GetKeyInfoByAddressRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetKeyInfoByAddressRequest",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetKeyInfoByAddressResponse
 */
export const GetKeyInfoByAddressResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetKeyInfoByAddressResponse",
  () => [
    { no: 1, name: "key", jsonName: "key_info", kind: "message", T: KeyInfo },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetKeyInfoByNameOrAddressRequest
 */
export const GetKeyInfoByNameOrAddressRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetKeyInfoByNameOrAddressRequest",
  () => [
    { no: 1, name: "name_or_bech32", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetKeyInfoByNameOrAddressResponse
 */
export const GetKeyInfoByNameOrAddressResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetKeyInfoByNameOrAddressResponse",
  () => [
    { no: 1, name: "key", jsonName: "key_info", kind: "message", T: KeyInfo },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.CreateAccountRequest
 */
export const CreateAccountRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.CreateAccountRequest",
  () => [
    { no: 1, name: "name_or_bech32", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "mnemonic", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bip39_passwd", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "account", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.CreateAccountResponse
 */
export const CreateAccountResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.CreateAccountResponse",
  () => [
    { no: 1, name: "key", jsonName: "key_info", kind: "message", T: KeyInfo },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SelectAccountRequest
 */
export const SelectAccountRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.SelectAccountRequest",
  () => [
    { no: 1, name: "name_or_bech32", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.SelectAccountResponse
 */
export const SelectAccountResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.SelectAccountResponse",
  () => [
    { no: 1, name: "key", jsonName: "key_info", kind: "message", T: KeyInfo },
    { no: 2, name: "has_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.GetActiveAccountRequest
 */
export const GetActiveAccountRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetActiveAccountRequest",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.GetActiveAccountResponse
 */
export const GetActiveAccountResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.GetActiveAccountResponse",
  () => [
    { no: 1, name: "key", jsonName: "key_info", kind: "message", T: KeyInfo },
    { no: 2, name: "has_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.QueryAccountRequest
 */
export const QueryAccountRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.QueryAccountRequest",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.QueryAccountResponse
 */
export const QueryAccountResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.QueryAccountResponse",
  () => [
    { no: 1, name: "account_info", kind: "message", T: BaseAccount },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.DeleteAccountRequest
 */
export const DeleteAccountRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.DeleteAccountRequest",
  () => [
    { no: 1, name: "name_or_bech32", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "skip_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.DeleteAccountResponse
 */
export const DeleteAccountResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.DeleteAccountResponse",
  [],
);

/**
 * @generated from message land.gno.gnonative.v1.QueryRequest
 */
export const QueryRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.QueryRequest",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.QueryResponse
 */
export const QueryResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.QueryResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.RenderRequest
 */
export const RenderRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.RenderRequest",
  () => [
    { no: 1, name: "package_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "args", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.RenderResponse
 */
export const RenderResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.RenderResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.QEvalRequest
 */
export const QEvalRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.QEvalRequest",
  () => [
    { no: 1, name: "package_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expression", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.QEvalResponse
 */
export const QEvalResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.QEvalResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.CallRequest
 */
export const CallRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.CallRequest",
  () => [
    { no: 1, name: "package_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fnc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "args", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "gas_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "gas_wanted", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
    { no: 6, name: "send", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.CallResponse
 */
export const CallResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.CallResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.RunRequest
 */
export const RunRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.RunRequest",
  () => [
    { no: 1, name: "package", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gas_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gas_wanted", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
    { no: 4, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.RunResponse
 */
export const RunResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.RunResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.AddressToBech32Request
 */
export const AddressToBech32Request = proto3.makeMessageType(
  "land.gno.gnonative.v1.AddressToBech32Request",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.AddressToBech32Response
 */
export const AddressToBech32Response = proto3.makeMessageType(
  "land.gno.gnonative.v1.AddressToBech32Response",
  () => [
    { no: 1, name: "bech32_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.AddressFromBech32Request
 */
export const AddressFromBech32Request = proto3.makeMessageType(
  "land.gno.gnonative.v1.AddressFromBech32Request",
  () => [
    { no: 1, name: "bech32_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.AddressFromBech32Response
 */
export const AddressFromBech32Response = proto3.makeMessageType(
  "land.gno.gnonative.v1.AddressFromBech32Response",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HelloRequest
 */
export const HelloRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.HelloRequest",
  () => [
    { no: 1, name: "name", jsonName: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HelloResponse
 */
export const HelloResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.HelloResponse",
  () => [
    { no: 1, name: "greeting", jsonName: "Greeting", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HelloStreamRequest
 */
export const HelloStreamRequest = proto3.makeMessageType(
  "land.gno.gnonative.v1.HelloStreamRequest",
  () => [
    { no: 1, name: "name", jsonName: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message land.gno.gnonative.v1.HelloStreamResponse
 */
export const HelloStreamResponse = proto3.makeMessageType(
  "land.gno.gnonative.v1.HelloStreamResponse",
  () => [
    { no: 1, name: "greeting", jsonName: "Greeting", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

