import { Button, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch } from 'react-redux';
import { addPhoneToStore,addtypeToStore } from '../../state/transaction/sendSlice';
const SendMoney = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [phone,setPhone]=useState('');
    const type='Send Money'
    const handleStore = (e) => {
        e.preventDefault();
        if(phone){
            dispatch(addPhoneToStore(phone));
        dispatch(addtypeToStore(type));
        navigate('/sendmoney');
        }else{
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
                <p className="text-white text-md mt-2 ml-5">সেন্ড মানি</p>
            </div>
            <div className="w-full flex mt-16 pl-2">

                <TextField
                    id="input-with-icon-textfield"
                    label="Phone"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalPhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                value={phone} onChange={(e) => setPhone(e.target.value)}
                />
                <button className="w-12 bg-rose-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
               
            </div>
        </div>
    );
};

export default SendMoney;