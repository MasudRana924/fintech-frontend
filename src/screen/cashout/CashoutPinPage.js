import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPasswordToStore} from '../../state/transaction/sendSlice';
import { TextField,InputAdornment } from '@mui/material';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { createTakePassword } from '../../state/transaction/takePasswordSlice';
import { useEffect } from 'react';
import { message } from 'antd';
const CashoutPinPage = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const { success, errorr } = useSelector(
        (state) => state.takePassword
    );
    const navigate = useNavigate();
    const [password, setPass] = useState();
    const data = {password }
    const handleTransfer = (e) => {
        e.preventDefault();
        if (password) {
            dispatch(createTakePassword({
                data, userToken
            }));
            dispatch(addPasswordToStore({ password }))
        } 
    }
    useEffect(() => {
        if (success) {
             navigate('/cash/out/confirm');
        }if(errorr){
            message.error("সটিক পাসওয়ার্ড দিন")
        }
    }, [success, navigate,errorr]);
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg  ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-5">Send Money</p> */}
                <p className="text-white text-md mt-2 ml-5">ক্যাশ আউট</p>
            </div>

            <div className=" flex mt-16 m-2 lg:mb-44">

                <TextField
                    id="input-with-icon-textfield"
                    label="পিন নাম্বার দিন"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                     value={password} onChange={(e) => setPass(e.target.value)}
                />
                {
                password ?  <button className='w-12 bg-violet-500' onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>: <button className='w-12 bg-gray-500' onClick={handleTransfer} disabled> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>
              }

            </div>
        </div>
    );
};

export default CashoutPinPage;