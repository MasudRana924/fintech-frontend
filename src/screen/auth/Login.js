import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { CiLocationOn, CiHeadphones } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { createLogin } from '../../state/user/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { Alert } from 'antd';
import Lottie from "lottie-react";
import logoAnimation from '../../jsons/auth.json';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, loggeduser, isLoading } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("phone", phone);
        myForm.set("password", password);
        if (phone && password) {
            dispatch(createLogin(myForm));
        } else {
            message.error("নাম্বার ও পিন প্রদান করুণ")
        }
    };
    useEffect(() => {
        if (user) {
            navigate('/main');
        }

    }, [user, navigate, error]);
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-12 lg:mt-52  ">
                <div className="lg:w-5/12 2xl:w-3/12 lg:border rounded-lg lg:shadow-lg">
                    <div className="flex flex-1 items-center justify-center mx-auto ">
                        {/* <Lottie animationData={logoAnimation} className="h-28 w-28"></Lottie> */}
                        
                    </div>
                    <div className="mt-6 p-8">
                        <h2 className="text-start text-md font-medium leading-6 text-gray-800">আপনার ট্রাস্ট পে একাউন্টে</h2>
                        <h2 className="text-start mt-2 text-md font-medium leading-6 text-violet-500">লগ ইন করুন</h2>

                        {
                            error ? <Alert message={error} type="error" className="mt-4" /> : null
                        }
                        <form action="" className="space-y-6 py-6 mt-6" onSubmit={registerSubmit}>

                            <TextField

                                id="standard-basic"
                                label="একাউন্ট নাম্বার"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">

                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                className="w-full py-3 px-6"
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                            <TextField
                                id="standard-basic"

                                label="ট্রাস্ট-পে পিন"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                className="w-full py-3 px-6"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex items-center justify-between">
                                <div className="text-start">
                                    <Link to="/forgot/password"> <span className="mt-3 text-sm font-medium leading-6 text-violet-500">পিন ভূলে গেছেন ?</span>
                                    </Link>
                                </div>
                                {
                                    isLoading ? <button className='h-12 w-12  bg-violet-500 border-violet-500 hover:bg-violet-500  hover:border-violet-500 border rounded-full '>
                                        <span className="font-semibold text-white text-xs">লোডিং</span>
                                    </button> : <div>
                                        {
                                            phone.length === 11 && password.length === 5 ? <button className='h-12 w-12  bg-violet-500 border-violet-500 hover:bg-violet-500  hover:border-violet-500 border rounded-full'>
                                                <GiCheckMark className="text-white text-xl ml-3"></GiCheckMark>
                                            </button> : <button disabled className='h-12 w-12  bg-gray-500 border-gray-500 hover:bg-gray-500  hover:border-gray-500 border rounded-full disabled'>
                                                <GiCheckMark className="text-white text-xl ml-3"></GiCheckMark>
                                            </button>
                                        }
                                    </div>
                                }
                            </div>
                            <div>
                                <span className="text-sm tracking-wide text-gray-400 mt-5">একাউন্ট নেই ? </span> <Link to="/account/signup"> <span className="text-sm font-semibold leading-6 text-violet-500">নতুন তৈরি করুন</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;