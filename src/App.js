import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './pages/loader/Loader';
import Home from './screen/home/Home';
import Login from './screen/auth/Login';
import Signup from './screen/auth/Signup';
import Main from './screen/main/Main';
import SendMoney from './screen/send/SendMoney';

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
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route path="/send" element={<SendMoney></SendMoney>}></Route>
       
        </Routes>
      </BrowserRouter>
    
    </div>}
  </div>
  );
}

export default App;
