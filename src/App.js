import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './pages/loader/Loader';
import Home from './screen/home/Home';
import Login from './screen/auth/Login';
import Signup from './screen/auth/Signup';
import Main from './screen/main/Main';
import SendMoney from './screen/send/SendMoney';
import AllTransactions from './pages/user/AllTransactions';
import TransferMoney from './screen/send/TransferMoney';
import Success from './screen/send/Success';
import Cashout from './screen/cashout/Cashout';
import ConfirmCashout from './screen/cashout/ConfirmCashout';
import PrivateRoute from './pages/privateroute/PrivateRoute';
import Settings from './screen/settings/Settings';
import UpdateName from './screen/update/UpdateName';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
    {loading ? <div>
      <Loader></Loader>
    </div> : <div className="App">
    
      <BrowserRouter>
       
        <Routes >
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/main" element={<PrivateRoute><Main></Main></PrivateRoute>}></Route>
          <Route path="/send" element={<SendMoney></SendMoney>}></Route>
          <Route path="/all/transactions" element={<AllTransactions></AllTransactions>}></Route>
          <Route path="/sendmoney" element={<TransferMoney></TransferMoney>}></Route>
          <Route path="/success" element={<Success></Success>}></Route>
          <Route path="/cashout" element={<Cashout></Cashout>}></Route>
          <Route path="/cash/out/money" element={<ConfirmCashout></ConfirmCashout>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/update/name" element={<UpdateName></UpdateName>}></Route>
       
        </Routes>
      </BrowserRouter>
    
    </div>}
  </div>
  );
}

export default App;
