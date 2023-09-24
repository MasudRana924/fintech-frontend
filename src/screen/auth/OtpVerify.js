import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, InputAdornment, TextField } from '@mui/material';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const OtpVerify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [fourthNumber, setFourthNumber] = useState('');
    const [fifthNumber, setFifthNumber] = useState('');
    const activationCode = (firstNumber + secondNumber + thirdNumber + fourthNumber, fifthNumber);
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("activationCode", activationCode);
        // dispatch(createVerify(myForm));
    };
    // useEffect(() => {
    //     if (success) {
    //         navigate('/login');
    //          toast.info('Login Succesfull');
    //     }
    // }, [success, navigate,]);
    return (

        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">পাসওয়ার্ড রিকোভার</p>
            </div>
            <div className="w-3/4 lg:w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 lg:mb-64 mt-12">
                <div className="px-6 py-4">
                    <h3 className="mt-4 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Enter OTP</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="flex justify-between gap-4 w-full mt-8">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"
                                value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"
                                value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)}
                            />
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"
                                value={thirdNumber} onChange={(e) => setThirdNumber(e.target.value)} />
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"
                                value={fourthNumber} onChange={(e) => setFourthNumber(e.target.value)} />
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"
                                value={fifthNumber} onChange={(e) => setFifthNumber(e.target.value)} />
                        </div>
                        {/* {
                        error ? <Alert classNameName="mt-4" severity="error">{error}</Alert> : null
                    } */}
                        <div className=" mt-8 mb-4">
                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-50">
                                Verify
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default OtpVerify;