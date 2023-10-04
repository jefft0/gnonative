// @generated by protoc-gen-connect-es v1.0.0
// @generated from file rpc.proto (package land.gno.gnomobile.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Call_Reply, Call_Request, GenerateRecoveryPhrase_Reply, GenerateRecoveryPhrase_Request, Query_Reply, Query_Request, SetChainID_Reply, SetChainID_Request, SetNameOrBech32_Reply, SetNameOrBech32_Request, SetPassword_Reply, SetPassword_Request, SetRemote_Reply, SetRemote_Request } from "./gnomobiletypes_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateAccount_Reply, CreateAccount_Request, GetActiveAccount_Reply, GetActiveAccount_Request, HelloReply, HelloRequest, ListKeyInfo_Reply, ListKeyInfo_Request, SelectAccount_Reply, SelectAccount_Request } from "./rpc_pb.js";

/**
 * GnomobileService is the service to interact with the Gno blockchain
 *
 * @generated from service land.gno.gnomobile.v1.GnomobileService
 */
export const GnomobileService = {
  typeName: "land.gno.gnomobile.v1.GnomobileService",
  methods: {
    /**
     * Set the connection addresse for the remote node. If you don't call this,
     * the default is "127.0.0.1:26657"
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.SetRemote
     */
    setRemote: {
      name: "SetRemote",
      I: SetRemote_Request,
      O: SetRemote_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Set the chain ID for the remote node. If you don't call this, the default
     * is "dev"
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.SetChainID
     */
    setChainID: {
      name: "SetChainID",
      I: SetChainID_Request,
      O: SetChainID_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Set the nameOrBech32 for the account in the keybase, used for later
     * operations
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.SetNameOrBech32
     */
    setNameOrBech32: {
      name: "SetNameOrBech32",
      I: SetNameOrBech32_Request,
      O: SetNameOrBech32_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Set the password for the account in the keybase, used for later operations
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.SetPassword
     */
    setPassword: {
      name: "SetPassword",
      I: SetPassword_Request,
      O: SetPassword_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Generate a recovery phrase of BIP39 mnemonic words using entropy from the
     * crypto library random number generator. This can be used as the mnemonic in
     * CreateAccount.
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.GenerateRecoveryPhrase
     */
    generateRecoveryPhrase: {
      name: "GenerateRecoveryPhrase",
      I: GenerateRecoveryPhrase_Request,
      O: GenerateRecoveryPhrase_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Get the keys informations in the keybase
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.ListKeyInfo
     */
    listKeyInfo: {
      name: "ListKeyInfo",
      I: ListKeyInfo_Request,
      O: ListKeyInfo_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Create a new account the keybase using the name an password specified by
     * SetAccount
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.CreateAccount
     */
    createAccount: {
      name: "CreateAccount",
      I: CreateAccount_Request,
      O: CreateAccount_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * SelectAccount selects the active account to use for later operations
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.SelectAccount
     */
    selectAccount: {
      name: "SelectAccount",
      I: SelectAccount_Request,
      O: SelectAccount_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * GetActiveAccount gets the active account which was set by SelectAccount.
     * If there is no active account, then return ErrNoActiveAccount.
     * (To check if there is an active account, use ListKeyInfo and check the
     * length of the result.)
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.GetActiveAccount
     */
    getActiveAccount: {
      name: "GetActiveAccount",
      I: GetActiveAccount_Request,
      O: GetActiveAccount_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Make an ABCI query to the remote node.
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.Query
     */
    query: {
      name: "Query",
      I: Query_Request,
      O: Query_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Call a specific realm function.
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.Call
     */
    call: {
      name: "Call",
      I: Call_Request,
      O: Call_Reply,
      kind: MethodKind.Unary,
    },
    /**
     * Hello is for debug purposes
     *
     * @generated from rpc land.gno.gnomobile.v1.GnomobileService.Hello
     */
    hello: {
      name: "Hello",
      I: HelloRequest,
      O: HelloReply,
      kind: MethodKind.Unary,
    },
  }
};
