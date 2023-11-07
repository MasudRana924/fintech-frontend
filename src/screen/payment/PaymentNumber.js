import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addPhoneToStore, addtypeToStore } from '../../state/transaction/sendSlice';
import { useEffect } from 'react';
import { takeMercentNumber } from '../../state/transaction/mercentNumberSlice';
import { message } from 'antd';
const PaymentNumber = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const { success, errorr } = useSelector(
        (state) => state.takeMercentNumber
    );
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [receiverphone, setPhone] = useState('');
    const senderphone = user.phone
    const type = 'Payment';
    const receiverType = "Received Money";
    const data = { receiverphone }

    const handleStore = (e) => {
        e.preventDefault();
        if (receiverphone) {
            dispatch(takeMercentNumber({
                data, userToken
            }));
            dispatch(addPhoneToStore({ receiverphone, senderphone }));
            dispatch(addtypeToStore({ type, receiverType }));
        }
    }
    useEffect(() => {
        if (success) {
            navigate('/payment/amount');
        } if (errorr) {
            message.error("এই নাম্বারে পে মানি সম্ভব না")
        }
    }, [success, navigate, errorr]);

    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">পেমেন্ট</p>
            </div>
            <div className="w-full flex mt-12 pl-2 pr-2">

                <TextField
                    id="input-with-icon-textfield"
                    label="ট্রাস্ট পে একাউন্ট"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalPhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                    value={receiverphone} onChange={(e) => setPhone(e.target.value)}
                    required
                />
                {
                    receiverphone.length === 11 ? <button className="w-12 bg-violet-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button> : <button className="w-12 bg-gray-500" disabled onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
                }

            </div>
            <p className="text-start text-xs m-2 text-gray-400">১১ ডিজিটের মার্সেন্ট নাম্বার প্রদান করুণ</p>
        </div>
    );
};

export default PaymentNumber;