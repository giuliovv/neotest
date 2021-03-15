import './App.css';
// import { createClient, createTokenSmartContract } from './neo-one';
import { ContractsProvider, createClient } from './neo-one';

function App() {
  const client = createClient();
  // const token = createTokenSmartContract(client);
  // console.log(token)
  return (
    <ContractsProvider client={client}>
      {/* <WithContracts>{({ token }) => <div onClick={() => token.withdraw.confirmed()}>Withdraw</div>}</WithContracts> */}
    </ContractsProvider>
  );
}

export default App;
