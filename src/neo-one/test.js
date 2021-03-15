/* @hash 01ce881d14f2d93d6d01f7f6d8620418 */
// tslint:disable
/* eslint-disable */
import { createWithContracts } from '@neo-one/smart-contract-test';
import * as path from 'path';

export const withContracts = createWithContracts([
  { name: 'Token', filePath: path.resolve(__dirname, '../../neo-one/contracts/Token.ts') },
]);
