import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import logo from '../../images/logo (2).png';
import { createLogin } from '../../state/user/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { Alert } from 'antd';

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
            message.error("Enter Phone or Password")
        }
    };
    useEffect(() => {
        if (user) {
            navigate('/main');
            // toast.info('Login Succesfull');
        }
    }, [user, navigate, error]);
    return (
        <div>
            <div className=" flex flex-col items-center justify-center mt-12 lg:mt-52 mb-20 ">
                <div className="lg:w-5/12 2xl:w-3/12 lg:border rounded-lg lg:shadow-lg">
                    <img src={logo} alt="" className="w-3/4 mx-auto h-16 lg:mt-8" />
                    <div className="mt-6 p-8">
                        <h2 className="text-start text-md font-medium leading-6 text-gray-800">আপনার ট্রাস্ট পে একাউন্টে</h2>
                        <h2 className="text-start mt-2 text-md font-medium leading-6 text-gray-800">লগ ইন করুন</h2>
                        {/* {
                            error ? <Alert severity="error" className="mt-5">{error}</Alert> : null
                        } */}
                        {
                            error ? <Alert message={error} type="error" className="mt-4" /> : null
                        }
                        <form action="" className="space-y-6 py-6 mt-6" onSubmit={registerSubmit}>

                            <TextField
                                // id="input-with-icon-textfield"
                                id="standard-basic"
                                label="একাউন্ট নাম্বার"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalPhoneIcon />
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
                                            <LockOpenIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                className="w-full py-3 px-6"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />


                            <div className="flex justify-between">
                                <div className="text-start">
                                    <Link to="/forgot/password"> <span className="mt-3 text-sm font-medium leading-6 text-violet-500">পিন ভূলে গেছেন ?</span>
                                    </Link>
                                </div>

                                {
                                    isLoading ? <button className='h-12 w-12  bg-violet-500 border-violet-500 hover:bg-violet-500  hover:border-violet-500 border rounded-full '>
                                        <span className="font-semibold text-white text-xs">লোডিং</span>
                                    </button> : <button className='h-12 w-12  bg-violet-500 border-violet-500 hover:bg-violet-500  hover:border-violet-500 border rounded-full'>
                                        <GiCheckMark className="text-white text-xl ml-3"></GiCheckMark>
                                    </button>
                                }

                            </div>
                            <div>
                                <span className="text-sm tracking-wide text-gray-400 mt-5">একাউন্ট নেই ? </span> <Link to="/signup"> <span className="text-sm font-semibold leading-6 text-violet-500">নতুন তৈরি করুন</span>
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