import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import  { useState } from 'react';
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
      const data={firstname,lastname}
      const registerSubmit = (e) => {
          e.preventDefault();
          dispatch(updateName({data,userToken}));
      };
    return (
        <div className="lg:w-5/12 2xl:w-3/12 mx-auto lg:mt-36">
        <div className="h-10 flex justify-between">
            <div className="w-1/4">
                <Link to="/main">
                    <FiArrowLeft className="text-rose-500 text-2xl mt-2 ml-2"></FiArrowLeft>
                </Link>
            </div>
            {/* <p className="text-white text-md mt-2 ml-5">নাম পরিবর্তন করুন</p> */}
            <Link to="/main">
            <button className="text-rose-500 text-md mt-1 mr-5">skip</button>
            </Link>
        </div>
        <form action="" className="space-y-6 mt-12  p-4" onSubmit={registerSubmit}>
                    
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
                        {/* {
                            isLoading ? <button className=" btn btn-md w-full  bg-emerald-500 border-emerald-500 hover:bg-emerald-500 hover:border-emerald-500 mb-5">
                                <Rings
                                    height={40}
                                    width={60}
                                    color="red"
                                    visible={true}
                                    secondaryColor="red"
                                    className="border"

                                />
                            </button> : <button className=" btn btn-md w-full  bg-emerald-500 border-emerald-500 hover:bg-emerald-500 hover:border-emerald-500 mb-5">
                                <span className="font-semibold text-white text-lg">Login</span>
                            </button>
                        } */}
                        <button className="h-12 w-full  bg-rose-500 border-rose-500 hover:bg-rose-500 hover:border-rose-500 mb-5">
                            <span className="font-semibold text-white text-lg">পরবর্তী</span>
                        </button>
                        
                    </div>
                </form>
    </div>
    );
};

export default UpdateInfo;