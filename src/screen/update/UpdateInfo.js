import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { FiArrowLeft, } from "react-icons/fi";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../../state/user/updateNameSlice';
const UpdateInfo = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const data = { firstname, lastname }
    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(updateName({ data, userToken }));
    };
    return (
        <div className="lg:w-5/12 2xl:w-3/12 mx-auto lg:mt-36 lg:border lg:rounded-lg lg:shadow-lg min-h-screen">
            <div className="h-10 flex justify-between mt-8">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-violet-500 text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <Link to="/main">
                    <button className="text-rose-500 text-xl mt-1 mr-5">skip</button>
                </Link>
            </div>
            <form action="" className="space-y-6 mt-12 p-4 mb-24" onSubmit={registerSubmit}>

                <TextField
                    id="input-with-icon-textfield"
                    // label="Phone"
                    label="নামের প্রথম অংশ"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    className="w-full py-3 px-6"
                    value={firstname} onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    id="input-with-icon-textfield"
                    // label="Password"
                    label="নামের শেষ অংশ"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    className="w-full py-3 px-6"
                    value={lastname} onChange={(e) => setLastName(e.target.value)}
                />
                <div>
                
                    <button className="h-12 w-full  bg-violet-500 border-violet-500 hover:bg-violet-500 hover:border-violet-500 mb-5">
                        <span className="font-semibold text-white text-lg ">পরবর্তী</span>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default UpdateInfo;