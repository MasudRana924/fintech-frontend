import React from 'react';
import {InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addAmountToStore} from '../../state/transaction/sendSlice';
import { message } from 'antd';
const TransferMoney = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState();
    const handleTransfer = (e) => {
        e.preventDefault();
        if (amount) {
            dispatch(addAmountToStore({amount}));
            navigate('/confirm/password');
        } else {
            message.error("টাকা প্রদান করুণ")
        }

    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg  ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-5">Send Money</p> */}
                <p className="text-white text-md mt-4 ml-5">সেন্ড মানি</p>
            </div>
            <div className="w-full flex mt-16 pl-2 mb-96">

                <TextField
                    id="input-with-icon-textfield"
                    label="টাকার পরিমাণ"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {/* <AttachMoneyIcon /> */}
                                ৳
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                />
                <button className="w-12 bg-violet-500" onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

            </div>
        </div>
    );
};

export default TransferMoney;