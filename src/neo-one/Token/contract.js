/* @hash ca4cca0c9a479ab83c299574ae33677f */
// tslint:disable
/* eslint-disable */
import { tokenABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AZ1cv6gkqcj6erqJYH7mW9KCoTYudjF42g',
    },
  },
  abi: tokenABI,
  sourceMaps,
};

export const createTokenSmartContract = (client) => client.smartContract(definition);
