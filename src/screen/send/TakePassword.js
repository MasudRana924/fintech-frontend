import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPasswordToStore } from '../../state/transaction/sendSlice';
import { InputAdornment, TextField } from '@mui/material';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { createTakePassword } from '../../state/transaction/takePasswordSlice';
import { message } from 'antd';
const TakePassword = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const { success, errorr } = useSelector(
        (state) => state.takePassword
    );
    const navigate = useNavigate();
    const { receiverphone, } = useSelector(state => state.type.receiverphone);
    const { amount } = useSelector(state => state.type.amount);
    const [password, setPass] = useState();
    const data={password}
    const handleTransfer = (e) => {
        e.preventDefault();
        if (password) {
            dispatch(createTakePassword({
                data, userToken
            }));
            dispatch(addPasswordToStore({ password }))
        } 
    }

    useEffect(() => {
        if (success) {
             navigate('/confirm/sendmoney');
        }if(errorr){
            message.error("সটিক পাসওয়ার্ড দিন")
        }
    }, [success, navigate,errorr]);
    return (
        <div className=" lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="flex bg-blue-500 h-16 rounded-b-lg">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-5">Send Money</p> */}
                <p className="text-white text-md mt-4 ml-5">সেন্ড মানি</p>
            </div>

            <div className="mt-6 w-full pl-2 pr-2">
                <div className="bg-gray-100 h-20 border rounded-lg">
                    <p className="text-start text-sm pt-3 ml-3">প্রাপক</p>
                    <div className="flex ml-14">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">{receiverphone}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 w-full pl-2 pr-2 ">
                <div className="flex justify-between bg-gray-100 h-20 border rounded-lg">
                    <div className="mt-4">
                        <p className="text-sm ml-3 ">পরিমান</p>
                        <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm ml-3 ">চার্জ</p>
                        <p className="text-xs ml-3 mt-2">TK 00</p>
                    </div>
                    <div className="mt-4 mr-6">
                        <p className="text-sm ml-3 ">সর্বমোট</p>
                        <p className="text-xs ml-3 mt-2">TK {amount}.00</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex mt-16 pl-2 pr-2 mb-96">

                <TextField
                    id="input-with-icon-textfield"
                    label="পিন নাম্বার দিন"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                     value={password} onChange={(e) => setPass(e.target.value)}
                />
              {
                password ?  <button className='w-12 bg-blue-500' onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>: <button className='w-12 bg-gray-500' onClick={handleTransfer} disabled> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
              }

            </div>
        </div>
    );
};

export default TakePassword;
