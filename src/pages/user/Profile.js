import { Skeleton } from '@mui/material';
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiEdit } from 'react-icons/fi';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineQrcode } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import flag from '../../images/bangladesh.png';
import QRCode from "qrcode"
import { useState } from 'react';
import { addQRToStore } from '../../state/transaction/sendSlice';
import { logout } from '../../state/user/loginSlice';
import { FiLogOut } from "react-icons/fi";
const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const [src, setSrc] = useState('');
    const QRGenrator = (e) => {
        e.preventDefault();
        QRCode.toDataURL(`https://m-pay.vercel.app/${user?.phone}`).then(setSrc);
        dispatch(addQRToStore(src));
        console.log('src', src);
        if (src) {
            navigate("/my/qrcode")
        }
    }

    return (
        <div className="lg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">প্রোফাইল</p>
            </div>

            <div className="border ml-2 mr-2 mt-4 rounded-lg">
                <div className="flex flex-1 items-center justify-center">
                    {
                        user?.avatar?.url ? <Link to="/profile">
                            <img src={user.avatar.url} alt="" className="h-24 w-24   " /></Link> :
                            <Skeleton variant="circular" width={40} height={40} className=" mt-2" />

                    }

                </div>
                <div className="flex flex-1 justify-center items-center">
                    {
                        user?.firstname && user?.lastname ? <p className="pt-4 text-gray-900 text-center text-sm font-medium mb-4">{user.firstname} {user.lastname}</p> : <Skeleton variant="text" className=" mt-2" width={80} height={25} />
                    }
                    <img src={flag} alt="" className="w-10 h-10" />
                </div>
            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-10 ">
                <Link to="/update/name">
                    <FiEdit className="text-violet-500 text-2xl mt-1 ml-2"></FiEdit>
                </Link>
                <Link to="/update/name">
                    <p className="text-sm font-medium mt-2 ml-2">নাম পরিবর্তন </p>
                </Link>
                <Link to="/update/name">
                    <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                </Link>

            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-5 ">
                <Link to="/update/name">
                    <BiImageAdd className="text-violet-500 text-2xl mt-2 ml-2"></BiImageAdd>
                </Link>
                <Link to="/update/image">
                    <p className="text-start text-sm font-medium mt-2 ml-2">ছবি পরিবর্তন</p>
                </Link>
                <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-5 " onClick={QRGenrator}>
                <Link >
                    <AiOutlineQrcode className="text-violet-500 text-2xl mt-2 ml-2"></AiOutlineQrcode>
                </Link>
                <Link >
                    <p className="text-start text-sm font-medium mt-2 ml-2">আমার কিউআরকোড</p>
                </Link>
                <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
            </div>
            <div className="hidden w-full h-10 border border-slate-100 lg:flex justify-between mt-5 ">
                <Link to="/all/transactions">
                    <BiImageAdd className="text-violet-500 text-2xl mt-2 ml-2"></BiImageAdd>
                </Link>
                <Link to="/all/transactions">
                    <p className="text-start text-sm font-medium mt-2 ml-2">লেনদেন সমূহ</p>
                </Link>
                <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
            </div>
            <div className="hidden  lg:flex flex-1 justify-center items-center gap-2 mb-44 border border-slate-100 mt-5">
                <FiLogOut className="mr-1 text-md mt-4 text-violet-500"></FiLogOut>
                <button className=" text-md  text-start mt-5" onClick={() => dispatch(logout())}>  <span className="">
                    লগআউট</span></button>
            </div>
        </div>
    );
};

export default Profile;