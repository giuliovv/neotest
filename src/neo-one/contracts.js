/* @hash e9b71efa16cd1eb7264b6a1e1ff2393e */
// tslint:disable
/* eslint-disable */
import { createTokenSmartContract } from './Token/contract';

export const createContracts = (client) => ({
  token: createTokenSmartContract(client),
});
