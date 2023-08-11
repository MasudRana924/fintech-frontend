import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import logo from '../../images/loggo.png';
import { createLogin } from '../../state/user/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
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
        dispatch(createLogin(myForm));
    };
    useEffect(() => {
        if (user) {
            navigate('/update');
            // toast.info('Login Succesfull');
        }
    }, [user, navigate,]);
    return (
        <div>
            <div className=" flex flex-col items-center justify-center mt-12 lg:mt-52 mb-20">
                <div className="lg:w-5/12 2xl:w-3/12">
                    <img src={logo} alt="" className="w-1/4 mx-auto h-8" />
                    <div className="mt-6 p-8">
                        {/* <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Login</h2> */}
                        <h2 className="text-start text-md font-medium leading-6 text-gray-800">আপনার এম-পে একাউন্টে</h2>
                        <h2 className="text-start text-md font-medium leading-6 text-gray-800">লগ ইন করুন</h2>
                        {
                            error ? <Alert severity="error" className="mt-5">{error}</Alert> : null
                        }
                        <form action="" className="space-y-6 py-6 mt-6" onSubmit={registerSubmit}>

                            <TextField
                                id="input-with-icon-textfield"
                                // label="Phone"
                                label="একাউন্ট নাম্বার"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalPhoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                className="w-full py-3 px-6"
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                            <TextField
                                id="input-with-icon-textfield"
                                // label="Password"
                                label="এম-পে পিন"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                className="w-full py-3 px-6"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className="mt-5 text-start">
                                <Link to="/forgot/password"> <span className="text-sm font-thin leading-6 text-rose-500">পিন ভূলে গেছেন ?</span>
                                </Link>
                            </div>
                            <div>

                                {/* {
                                    isLoading ? <div className="w-1/4 mx-auto">
                                        <Rings
                                            height={40}
                                            width={60}
                                            color="red"
                                            visible={true}
                                            secondaryColor="red"
                                            className="border"

                                        />
                                    </div> : <button className="h-12 w-full  bg-rose-500 border-rose-500 hover:bg-rose-500 hover:border-rose-500 mb-5">
                                        <span className="font-semibold text-white text-lg">পরবর্তী</span>
                                    </button>
                                } */}
<button className="h-12 w-full  bg-rose-500 border-rose-500 hover:bg-rose-500 hover:border-rose-500 mb-5">
                                        <span className="font-semibold text-white text-lg">পরবর্তী</span>
                                    </button>
                                <span className="text-sm tracking-wide text-gray-400 mt-5">একাউন্ট নেই ? ?</span> <Link to="/signup"> <span className="text-sm font-semibold leading-6 text-rose-500">নতুন তৈরি করুন</span>
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