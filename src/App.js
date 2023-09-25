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
import UpdateInfo from './screen/update/UpdateInfo';
import PreLoader from './pages/loader/PreLoader';
import CashoutPinPage from './screen/cashout/CashoutPinPage';
import ForgotPassword from './screen/auth/ForgotPassword';
import OtpVerify from './screen/auth/OtpVerify';
import Reward from './pages/user/Reward';
import TakePassword from './screen/send/TakePassword';
import ConfirmSendMoney from './screen/send/ConfirmSendMoney';

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
      <PreLoader></PreLoader>
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
          <Route path="/confirm/password" element={<TakePassword></TakePassword>}></Route>
          <Route path="/confirm/sendmoney" element={<ConfirmSendMoney></ConfirmSendMoney>}></Route>
          <Route path="/success" element={<Success></Success>}></Route>
          <Route path="/cashout" element={<Cashout></Cashout>}></Route>
          <Route path="/cash/out/money" element={<ConfirmCashout></ConfirmCashout>}></Route>
          <Route path="/cash/out/confirm" element={<CashoutPinPage></CashoutPinPage>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/update/name" element={<UpdateName></UpdateName>}></Route>
          <Route path="/update" element={<UpdateInfo></UpdateInfo>}></Route>
         <Route path="/forgot/password" element={<ForgotPassword></ForgotPassword>}></Route>
         <Route path="/verify" element={<OtpVerify></OtpVerify>}></Route>
         <Route path="/reward" element={<Reward></Reward>}></Route>
       
        </Routes>
      </BrowserRouter>
    
    </div>}
  </div>
  );
}

export default App;
