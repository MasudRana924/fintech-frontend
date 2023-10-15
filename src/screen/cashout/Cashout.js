import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { message } from 'antd';
import { addPhoneToStore, addtypeToStore } from '../../state/transaction/sendSlice';
import { useDispatch, useSelector } from 'react-redux';
import { takeAgentNumber } from '../../state/transaction/agentNumberSlice';
import { useEffect } from 'react';
import { BiUserCircle } from 'react-icons/bi';
const Cashout = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [receiverphone, setPhone] = useState('');
    const senderphone = user.phone
    const type = 'Cash Out';
    const receiverType = "Received Money";
    const data = { receiverphone }
    const handleStore = (e) => {
        e.preventDefault();
        if (receiverphone) {
            dispatch(takeAgentNumber({
                data, userToken
            }));
            dispatch(addPhoneToStore({ receiverphone, senderphone }));
            dispatch(addtypeToStore({ type, receiverType }));
            
        } 
    }
    const { success, errorr } = useSelector(
        (state) => state.takeAgentNumber
    );
    useEffect(() => {
        if (success) {
            navigate('/cash/out/money');
        }if(errorr){
            message.error("এই নাম্বারে ক্যাশ আউট সম্ভব না")
        }
    }, [success, navigate,errorr]);
    const handleSuggest=(e)=>{
        e.preventDefault();
       const  receiverphone="01952254063"
        const data={ receiverphone }
        if (receiverphone) {
            dispatch(takeAgentNumber({
                data, userToken
            }));
            dispatch(addPhoneToStore({ receiverphone, senderphone }));
            dispatch(addtypeToStore({ type, receiverType }));
        }
    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">ক্যাশ আউট</p>
            </div>
            <div className="w-full flex mt-16 pl-2 ">

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
                />
                {
                    receiverphone.length === 11 ? <button className="w-12 bg-violet-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button> : <button className="w-12 bg-gray-500" disabled onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
                }
                        

            </div>
            <div className="mt-6 w-full pl-2 pr-2 mb-96">
                <div className="">
                    <p className="text-start text-sm pt-3 ml-3">Suggest</p>
                    <div className="flex mt-4" onClick={handleSuggest}>
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm" >+01952254063</p>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default Cashout;