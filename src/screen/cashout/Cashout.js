import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import {useState} from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { addPhoneToStore, addtypeToStore } from '../../state/transaction/sendSlice';
import { useDispatch, useSelector } from 'react-redux';
const Cashout = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
  const user=loggeduser.user;
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [receiverphone,setPhone]=useState('');
    const senderphone=user.phone
    const type='Cash Out';
    const receiverType="Received Money"
    const handleStore = (e) => {
        e.preventDefault();
        if(receiverphone){
            dispatch(addPhoneToStore({receiverphone,senderphone}));
            dispatch(addtypeToStore({type,receiverType}));
        navigate('/cash/out/money');
        }else{
            alert('enter phone')
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
            <div className="w-full flex mt-16 pl-2 mb-96">

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
                <button className="w-12 bg-violet-500" onClick={handleStore}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

            </div>
        </div>
    );
};

export default Cashout;