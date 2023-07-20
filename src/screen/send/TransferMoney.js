import React from 'react';
import {InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { createSendMoney } from '../../state/transaction/sendMoneySlice';
import { clearStore } from '../../state/transaction/sendSlice';
const TransferMoney = () => {
    const dispatch = useDispatch();
    const {loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const navigate = useNavigate();
    const { type,receiverType} = useSelector(state => state.type.type);
    const {receiverphone ,senderphone} = useSelector(state => state.type.receiverphone);
    console.log(senderphone);
    const [amount, setAmount] = useState('');
    const data = { receiverphone, type, amount,receiverType ,senderphone}
    const handleTransfer = (e) => {
        e.preventDefault();
        if (amount) {
            dispatch(createSendMoney({
                data, userToken
            }));
             dispatch(clearStore());
            navigate('/success');
        } else {
            alert('enter phone')
        }

    }
    return (
        <div className="bg-rose-500 h-10 rounded-b-lg ">
            <div className="flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-5">Send Money</p> */}
                <p className="text-white text-md mt-2 ml-5">সেন্ড মানি</p>
            </div>
            <div className="w-full flex mt-16 pl-2">

                <TextField
                    id="input-with-icon-textfield"
                    label="টাকার পরিমাণ"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachMoneyIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                />
                <button className="w-12 bg-rose-500" onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

            </div>
        </div>
    );
};

export default TransferMoney;