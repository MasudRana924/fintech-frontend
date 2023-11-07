import React from 'react';
import { BsLightbulb, BsBagFill,BsBook } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiChipsBag,GiGrowth } from "react-icons/gi";
import { FaRegMoneyBillAlt, FaHandHoldingUsd } from "react-icons/fa";
import {AiOutlineSend, AiOutlineIdcard,AiFillFund } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { SiRemix } from "react-icons/si";
import { Link } from 'react-router-dom';
import { message } from 'antd';
import './Main.css'
import { useState } from 'react';

const PaymentCategory = () => {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active);
    }
    const handleClick = (e) => {
        e.preventDefault();
        message.error("কাজ চলিতেছে");
    }
    return (
        <div className="mt-16 lg:mt-24 border border-white bg-white rounded-lg ml-2 mr-2 shadow-lg">
            <div className="flex justify-around mt-2">
                <div>
                    <Link to="/send">
                        <AiOutlineIdcard className="text-3xl text-violet-500 mb-1"></AiOutlineIdcard>
                        <p className="paymentCategory-text font-medium">সেন্ড মানি</p>
                    </Link>
                </div>
                <div >
                    <Link to="/cashout">
                        <div className="flex">
                            <BiMenuAltLeft className="text-3xl  text-violet-500  mb-1">ট</BiMenuAltLeft>
                            <p className="text-sm font-thin text-violet-500 mb-1 mt-2">ট</p>
                        </div>
                        <p className="paymentCategory-text  font-medium  text-start" >ক্যাশ আউট</p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <FaRegMoneyBillAlt className="text-3xl text-violet-500  mb-1"></FaRegMoneyBillAlt>
                    <p className="paymentCategory-text font-medium  text-start">রিচার্জ</p>
                </div>
                <div >
                    <Link to="/payment/number">
                        <BsBagFill className="text-3xl text-violet-500 mb-1"></BsBagFill>
                        <p className="paymentCategory-text font-medium  text-start">পেমেন্ট</p>
                    </Link>
                </div>
            </div>
            <div className="mt-5 flex justify-around mb-4" >
                <div onClick={handleClick}>
                    <Link to="">
                        <AiOutlineSend className="text-3xl text-violet-500 mb-1"></AiOutlineSend>
                        <p className="paymentCategory-text  text-start font-medium ">এ্যাড মানি</p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <BsLightbulb className="text-3xl  text-violet-500  mb-1"></BsLightbulb>
                    <p className="paymentCategory-text text-start  font-medium">পে-বিল</p>
                </div>
                <div >
                    <Link to="/savings">
                        <GiChipsBag className="text-3xl text-violet-500  mb-1"></GiChipsBag>
                        <p className="paymentCategory-text text-start font-medium">সেভিংস</p>
                    </Link>
                </div>
                <div>
                    <Link to="/apply/loan">
                        <FaHandHoldingUsd className="text-3xl text-violet-500 mb-1"></FaHandHoldingUsd>
                        <p className=" text-start paymentCategory-text  font-medium">লোন</p>
                    </Link>
                </div>
            </div>
            <div className={active ? "mt-5 flex justify-around mb-4":"hidden"} >
                <div onClick={handleClick}>
                    <Link to="">
                        <SiRemix className="text-3xl text-violet-500 mb-1"></SiRemix>
                        <p className="paymentCategory-text  text-start font-medium ">রেমিট্যান্স</p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <BsBook className="text-3xl   text-violet-500  mb-1"></BsBook>
                    <p className="paymentCategory-text text-start  font-medium">এডুকেশন ফি</p>
                </div> 
                <div onClick={handleClick}>
                    <Link to="">
                        <GiGrowth className="text-3xl text-violet-500 mb-1"></GiGrowth>
                        <p className="paymentCategory-text  text-start font-medium ">বিনিময় </p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <AiFillFund className="text-3xl   text-violet-500  mb-1"></AiFillFund>
                    <p className="paymentCategory-text text-start  font-medium">বিনিয়োগ</p>
                </div> 
            </div>
            <div className="flex flex-1 justify-center items-center mb-1" onClick={showMenu}>
            <button className={active ? "flex items-center justify-center border border-gray rounded-full  p-1 text-red-500 w-24 see-more-btn ":"flex items-center justify-center border border-gray rounded-full  p-1 text-violet-500 w-24 see-more-btn "}>{active ? ' বন্ধ করুন ':'আরো দেখুন'}<RiArrowDownSFill className={active ? "text-red-500 text-2xl":"text-violet-500 text-2xl"} ></RiArrowDownSFill></button>
            </div>
        </div>
    );
};

export default PaymentCategory;