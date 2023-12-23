import React from 'react';
import { AiOutlineFileUnknown,AiOutlineClose } from 'react-icons/ai';
import { BiMapPin, BiTransfer } from 'react-icons/bi';
import {  FiArrowRight, FiInfo, FiLogOut, FiSettings } from 'react-icons/fi';
import { MdOfflineShare, MdOutlineDiscount, MdOutlineNotificationsNone } from 'react-icons/md';
import { PiHeadsetDuotone } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../state/user/loginSlice';
import avatar from '../../images/man.png'
const ALlSettingsList = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg bg-gray-50 min-h-screen">
              <div className=" w-full lg:w-1/4 bg-gray-50   h-16 rounded-b-lg flex justify-between main-navbar">
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-white border-violet-500" /></Link> :
                                <Link to="/profile">
                                    <img src={avatar} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full " /></Link>
                        }
                    </div>
                    
                </div>
                <div className="flex justify-between items-center mr-3">
                   
                    <Link to="/">
                    <AiOutlineClose className="text-gray-900 text-xl ml-5 lg:hidden block " ></AiOutlineClose>
                    </Link>
                   
                </div>
            </div>

            <div className="mt-20">
                <Link to="/all/transactions">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between mt-10 ">
                        <BiTransfer className="text-violet-500 text-2xl mt-1 ml-2"></BiTransfer>
                        <p className="text-sm font-medium mt-2 ml-2">লেনদেন সমূহ</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/user/update/info">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <FiInfo className="text-violet-500 text-2xl mt-1 ml-2"></FiInfo>
                        <p className="text-sm font-medium mt-2 ml-2">তথ্য হালনাগাদ</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/user/update/info">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <MdOutlineNotificationsNone className="text-violet-500 text-2xl mt-1 ml-2"></MdOutlineNotificationsNone>
                        <p className="text-sm font-medium mt-2 ml-2">নোটিফিকেশন</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <MdOfflineShare className="text-violet-500 text-2xl mt-1 ml-2"></MdOfflineShare>
                        <p className="text-sm font-medium mt-2 ml-2">রেফার</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <BiMapPin className="text-violet-500 text-2xl mt-1 ml-2"></BiMapPin>
                        <p className="text-sm font-medium mt-2 ml-2">ম্যাপ</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/cuppon">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <MdOutlineDiscount className="text-violet-500 text-2xl mt-1 ml-2"></MdOutlineDiscount>
                        <p className="text-sm font-medium mt-2 ml-2">কুপন</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/info">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <AiOutlineFileUnknown className="text-violet-500 text-2xl mt-1 ml-2"></AiOutlineFileUnknown>
                        <p className="text-sm font-medium mt-2 ml-2">পি-ক্যাশ নিয়ে জানুন</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">
                <Link to="/support">
                    <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                        <PiHeadsetDuotone className="text-violet-500 text-2xl mt-1 ml-2"></PiHeadsetDuotone>
                        <p className="text-sm font-medium mt-2 ml-2">সাপোর্ট</p>
                        <FiArrowRight className="text-gray-400 text-2xl mt-2 mr-2"></FiArrowRight>
                    </div></Link>
            </div>
            <div className="mt-2">

                <div className="m-2 h-10 border borderwhite bg-white border-white flex justify-between">
                    <button className="flex justify-center items-center text-sm   w-3/4 text-start text-red-500 ml-5 " onClick={() => dispatch(logout())}>
                        <FiLogOut className="mr-1 text-md mt-1 text-red-500"></FiLogOut>
                        <span className="ml-5">
                            লগআউট</span>
                    </button>
                </div>
            </div>




        </div>
    );
};

export default ALlSettingsList;