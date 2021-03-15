/* @hash 0c01e4061ac5ec8b4bd79f99acb8421d */
// tslint:disable
/* eslint-disable */
import { DeveloperTools } from '@neo-one/client';
import * as React from 'react';
import { createClient, createDeveloperClients } from './client';
import { createTokenSmartContract } from './Token/contract';

const Context = React.createContext(undefined);

export const ContractsProvider = ({
  client: clientIn,
  developerClients: developerClientsIn,
  localClients: localClientsIn,
  host,
  children,
}) => {
  const client = clientIn === undefined ? createClient(host) : clientIn;
  const developerClients = developerClientsIn === undefined ? createDeveloperClients(host) : developerClientsIn;
  DeveloperTools.enable({ client, developerClients });

  return (
    <Context.Provider
      value={{
        client,
        developerClients,
        token: createTokenSmartContract(client),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const WithContracts = ({ children }) => <Context.Consumer>{children}</Context.Consumer>;

export const useContracts = () => React.useContext(Context);
