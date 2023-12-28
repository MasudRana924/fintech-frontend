import { Alert, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { createSignUp } from '../../state/user/signupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';


const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { error, success } = useSelector(
        (state) => state.signup
    );
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("phone", phone);
        myForm.set("password", password);
        if (!phone && !password) {
            message.error("নাম্বার ও পিন প্রদান করুণ")
        }
        if (phone.length >= 11) {
            dispatch(createSignUp(myForm));
        }

    };
    // useEffect(() => {

    //     if (success) {
    //         navigate('/account/login'); 
    //     }
    // }, [success, navigate]);
    useEffect(() => {
        if (success) {
            // Show success message
            message.info("Registration successful");
            // Navigate after 1 second
            const timerId = setTimeout(() => {
                navigate('/account/login');
            }, 1000);
            // Cleanup the timer to avoid memory leaks
            return () => clearTimeout(timerId);
        }
    }, [success, navigate]);
    return (
        <div className="flex  items-center justify-center mt-12 lg:mt-52">
            <div className=" flex  items-center justify-center mt-12 lg:mt-52">
                <div className="lg:w-5/12 2xl:w-3/12 lg:border lg:rounded-lg lg:shadow-lg">
                    {/* <img src={logo} alt="" className="w-2/4 mx-auto h-24 lg:mt-8" /> */}
                    <div className="flex flex-1 items-center justify-center mx-auto ">
                        {/* <Lottie animationData={logoAnimation} className="h-28 w-28"></Lottie> */}
                    </div>
                    <div className="mt-6 p-8">
                        {/* <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Create a M-pay account</h2> */}
                        <h2 className="text-start text-md font-medium leading-6 text-gray-900">একাউন্ট নেই ?  নতুন তৈরি করুন</h2>
                        {
                            error ? <Alert severity="error" className="mt-5">{error}</Alert> : null
                        }
                        <form action="" className="space-y-6 py-6 mt-6" onSubmit={registerSubmit}>

                            <TextField
                                // id="input-with-icon-textfield"
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
                                label="পি-ক্যাশপিন"
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

                            <div className="flex  items-center justify-between">

                                <div>
                                    <span className="text-sm tracking-wide text-gray-400 mt-5">একাউন্ট রয়েছে ?</span> <Link to="/account/login"> <span className="text-sm font-semibold leading-6 text-blue-500">লগইন করুন</span>
                                    </Link>
                                </div>
                                {
                                    phone.length > 10 && password.length === 5 ? <button className='h-12 w-12  bg-blue-500 border-blue-500 hover:bg-blue-500  hover:border-blue-500 border rounded-full'>
                                        <GiCheckMark className="text-white text-xl ml-3"></GiCheckMark>
                                    </button> : <button disabled className='h-12 w-12  bg-gray-500 border-gray-500 hover:bg-gray-500  hover:border-gray-500 border rounded-full disabled'>
                                        <GiCheckMark className="text-white text-xl ml-3"></GiCheckMark>
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;