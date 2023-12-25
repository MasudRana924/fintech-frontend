import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addAmountToStore } from '../../state/transaction/sendSlice';
import { InputAdornment, TextField } from '@mui/material';
import { BiUserCircle } from 'react-icons/bi';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Paymentamount = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const { receiverphone} = useSelector(
        (state) => state.takeMercentNumber.number
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState();
    const handleTransfer = (e) => {
        e.preventDefault();
        dispatch(addAmountToStore({ amount }));
        navigate('/payment/password');
    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
        <div className="flex bg-blue-500 h-16 rounded-b-lg  ">
            <div className="w-1/4">
                <Link to="/main">
                    <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                </Link>
            </div>
            <p className="text-white text-md mt-4 ml-5">পেমেন্ট</p>
        </div>
        <div className="border m-2">
            <p className="text-xs text-start m-2">প্রাপক</p>
            <div className="flex  mt-2 mb-2">

                <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                <p className="mt-2 text-sm">{receiverphone}</p>
            </div>
        </div>
        <div className="border m-2 ">
            <div className="flex m-4">
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
                {
                    amount ? <button className="w-12 bg-blue-500 " onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button> : <button className="w-12 bg-gray-500 " onClick={handleTransfer} disabled> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
                }
            </div>
            <p className="text-sm mb-4">বর্তমান ব্যালেন্স  {user?.amount}.00 ট </p>
        </div>
    </div>
    );
};

export default Paymentamount;