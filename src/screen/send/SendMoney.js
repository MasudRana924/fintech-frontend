import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneToStore,addtypeToStore } from '../../state/transaction/sendSlice';
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
        <div className="bg-rose-500 h-10 rounded-b-lg ">
            <div className="flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-2 ml-5">সেন্ড মানি</p>
            </div>
            <div className="w-full flex mt-16 pl-2">

                <TextField
                    id="input-with-icon-textfield"
                    label="এম-পে একাউন্ট"
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
                <button className="w-12 bg-rose-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
               
            </div>
        </div>
    );
};

export default SendMoney;