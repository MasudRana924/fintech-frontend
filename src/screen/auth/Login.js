import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { createLogin } from '../../state/user/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { Alert } from 'antd';
import { FaFingerprint } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    height: 400,
    boxShadow: 24,
    p: 4,
};


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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-12 lg:mt-52  ">
                <div className="lg:w-5/12 2xl:w-3/12 lg:border rounded-lg lg:shadow-lg">
                    <div className="flex flex-1 items-center justify-center mx-auto ">
                        {/* <Lottie animationData={logoAnimation} className="h-28 w-28"></Lottie> */}

                    </div>
                    <div className="mt-6 p-8">
                        <h2 className="text-start text-md font-medium leading-6 text-gray-800">আপনার পি-ক্যাশ একাউন্টে</h2>
                       <div className="flex items-center justify-between">
                       <h2 className="text-start mt-2 text-md font-medium leading-6 text-violet-500">লগ ইন করুন</h2>
                       <FaFingerprint className="text-3xl text-violet-500 mt-4" onClick={handleOpen}/>
                       </div>

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

                                label="পি-ক্যাশ পিন"
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
                                            </button> : <button disabled className='h-12 w-12  bg-gray-500 border-gray-500 hover:bg-gray-500  hover:border-gray-500 border rounded-full disabled '>
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


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-xl text-start ml-2">Verify it's you </p>
                    <p className="text-xs text-start ml-2 mt-4 text-gray-500">pCash requires your confirmation</p>
                     <div className="flex justify-center items-center mt-8">
                     <FaFingerprint className="border p-2 text-7xl rounded-full bg-violet-500 text-white"></FaFingerprint>
                     </div>
                     <p className="text-md text-gray-600 text-start ml-2" onClick={handleClose}>CANCEL</p>
                </Box>
            </Modal>
        </div>
    );
};

export default Login;