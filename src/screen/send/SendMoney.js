import { Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const SendMoney = () => {
    return (
        <div className="bg-rose-500 h-16 rounded-b-lg ">
            <div className="flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-5 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-4 ml-5">Send Money</p>
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
                // value={phone} onChange={(e) => setPhone(e.target.value)}
                />
                <button className="w-12 bg-rose-500"> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
               
            </div>
        </div>
    );
};

export default SendMoney;