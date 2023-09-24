import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneToStore,addtypeToStore } from '../../state/transaction/sendSlice';
import { BiUserCircle } from 'react-icons/bi';
const SendMoney = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
  const user=loggeduser.user;
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [receiverphone,setPhone]=useState('');
    const senderphone=user.phone
    const type='Send Money';
    const receiverType="Received Money"
    const handleStore = (e) => {
        e.preventDefault();
        if(receiverphone){
        dispatch(addPhoneToStore({receiverphone,senderphone}));
        dispatch(addtypeToStore({type,receiverType}));
        navigate('/sendmoney');
        }else{
            alert('enter phone')
        }
        
    }
    console.log(receiverphone);
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">সেন্ড মানি</p>
            </div>
            <div className="w-full flex mt-12 pl-2">

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
                <button className="w-12 bg-violet-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
               
            </div>
            <div className="mt-6 w-full pl-2 pr-2 mb-12">
                <div className="">
                    <p className="text-start text-sm pt-3 ml-3">Suggest</p>
                    <div className="flex mt-4">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254063</p>
                    </div>
                    <div className="flex  mt-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254063</p>
                    </div>
                    <div className="flex  mt-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254064</p>
                    </div>
                    <div className="flex  mt-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254065</p>
                    </div>
                    <div className="flex  mt-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254066</p>
                    </div>
                    <div className="flex  mt-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254067</p>
                    </div>
                    <div className="flex mt-2">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">+8801952254068</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;