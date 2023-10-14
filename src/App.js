import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Profile from './pages/user/Profile';
import QRCode from './pages/user/QRCode';
import Loan from './screen/loan/Loan';
import Savings from './screen/savings/Savings';
import Confirm from './screen/cashout/Confirm';
import CashOutSuccess from './screen/cashout/Success';

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
            <Route path="/account/login" element={<Login></Login>}></Route>
            <Route path="/account/signup" element={<Signup></Signup>}></Route>
            <Route path="/main" element={<PrivateRoute><Main></Main></PrivateRoute>}></Route>
            <Route path="/send" element={<PrivateRoute><SendMoney></SendMoney></PrivateRoute>}></Route>
            <Route path="/all/transactions" element={<PrivateRoute><AllTransactions></AllTransactions></PrivateRoute>}></Route>
            <Route path="/sendmoney" element={<PrivateRoute><TransferMoney></TransferMoney></PrivateRoute>}></Route>
            <Route path="/confirm/password" element={<PrivateRoute><TakePassword></TakePassword></PrivateRoute>}></Route>
            <Route path="/confirm/sendmoney" element={<PrivateRoute><ConfirmSendMoney></ConfirmSendMoney></PrivateRoute>}></Route>
            <Route path="/success" element={<PrivateRoute><Success></Success></PrivateRoute>}></Route>
            <Route path="/cashout" element={<PrivateRoute><Cashout></Cashout></PrivateRoute>}></Route>
            <Route path="/cash/out/money" element={<PrivateRoute><ConfirmCashout></ConfirmCashout></PrivateRoute>}></Route>
            <Route path="/cash/out/confirm" element={<PrivateRoute><CashoutPinPage></CashoutPinPage></PrivateRoute>}></Route>
            <Route path="/confirm/cashout" element={<PrivateRoute><Confirm></Confirm></PrivateRoute>}></Route>
            <Route path="/cashout/success" element={<PrivateRoute><CashOutSuccess></CashOutSuccess></PrivateRoute>}></Route>
            <Route path="/settings" element={<PrivateRoute><Settings></Settings></PrivateRoute>}></Route>
            <Route path="/update/name" element={<PrivateRoute><UpdateName></UpdateName></PrivateRoute>}></Route>
            <Route path="/update" element={<PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>}></Route>
            <Route path="/forgot/password" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path="/verify" element={<OtpVerify></OtpVerify>}></Route>
            <Route path="/reward" element={<PrivateRoute><Reward></Reward></PrivateRoute>}></Route>
            <Route path="/profile" element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
            <Route path="/my/qrcode" element={<PrivateRoute><QRCode></QRCode></PrivateRoute>}></Route>
            <Route path="/apply/loan" element={<PrivateRoute><Loan></Loan></PrivateRoute>}></Route>
            <Route path="/savings" element={<PrivateRoute><Savings></Savings></PrivateRoute>}></Route>

          </Routes>
        </BrowserRouter>

      </div>}
    </div>
  );
}

export default App;
