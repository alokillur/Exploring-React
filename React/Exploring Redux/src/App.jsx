import  CreateCustomer  from './Redux/features/customers/CreateCustomer'
import  Customer  from './Redux/features/customers/Customer'
import  AccountOperations  from './Redux/features/accounts/AccountOperations'
import  BalanceDisplay  from './Redux/features/accounts/BalanceDisplay'
import { useSelector } from 'react-redux'

function App() {
  const fullName = useSelector(store => store.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      { fullName === "" ? 
      <CreateCustomer />
      :
      <>
        <Customer />
        <AccountOperations /> 
        <BalanceDisplay />
      </>
      }
    </div>
  );
}

export default App;
