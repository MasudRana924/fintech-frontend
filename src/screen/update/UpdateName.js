import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft, } from "react-icons/fi";

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { errorClean, updateName } from '../../state/user/updateNameSlice';
const UpdateName = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const data = { firstname, lastname }
    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(updateName({ data, userToken }));
    };
    const { updateNameSuccess } = useSelector(
        (state) => state.updateName
    );
    useEffect(() => {
        if (user) {
            setFirstName(user.firstname)
            setLastName(user.lastname)
        }
        if (updateNameSuccess) {
            navigate('/main');
            dispatch(errorClean());
        }
    }, [updateNameSuccess, navigate,user,dispatch]);
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg min-h-screen">
            <div className="bg-violet-500 h-16 flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">নাম পরিবর্তন করুন</p>
            </div>
            <form action="" className="space-y-6 mt-12  " onSubmit={registerSubmit}>

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
                    className="w-full m-4"
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
                <div className="submit-bottom-btn w-full">

                    <button className="h-12 w-full  bg-violet-500 border-violet-500 hover:bg-violet-500 hover:border-violet-500 mb-5">
                        <span className="font-semibold text-white text-lg">পরবর্তী</span>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default UpdateName;