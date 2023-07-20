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
        <div className="bg-rose-500 h-10 rounded-b-lg ">
            <div className="flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-2 ml-5">ক্যাশ আউট</p>
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

export default Cashout;