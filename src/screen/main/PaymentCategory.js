import React from 'react';
import { BsSend, BsLightbulb, BsSave, BsBook } from "react-icons/bs";
import { BiMoneyWithdraw, BiSolidPlaneTakeOff } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiWechatPayLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { message } from 'antd';

const PaymentCategory = () => {

    const handleClick = (e) => {
        e.preventDefault();
        message.error("কাজ চলিতেছে");
    }
    return (
        <div className="mt-20 lg:mt-24 border rounded ml-2 mr-2">
            <div className="flex justify-around mt-2">
                <div>
                    <Link to="/send">
                        <BsSend className="text-xl text-violet-500 ml-4 mb-1"></BsSend>
                        {/* <p className="text-xs font-thin">send money</p> */}
                        <p className="text-xs font-medium">সেন্ড মানি</p>
                    </Link>
                </div>
                <div >
                    <Link to="/cashout">
                        <BiMoneyWithdraw className="text-xl  text-violet-500 ml-5 mb-1"></BiMoneyWithdraw>
                        {/* <p className="text-xs font-thin">cashout</p> */}
                        <p className="text-xs font-medium " >ক্যাশ আউট</p>
                    </Link>

                </div>
                <div onClick={handleClick}>
                    <FaRegMoneyBillAlt className="text-xl text-gray-300 ml-2 mb-1"></FaRegMoneyBillAlt>
                    {/* <p className="text-xs font-thin">mobile recharge</p> */}
                    <p className="text-xs font-medium text-gray-300">রিচার্জ</p>
                </div>
                <div >
                 <Link to="/payment/number">
                    <RiWechatPayLine className="text-xl text-violet-500 ml-3 mb-1"></RiWechatPayLine>
                    <p className="text-xs font-medium ">পেমেন্ট</p>
                   </Link>
                </div>
            </div>
            <div className="mt-5 flex justify-around" >
                <div onClick={handleClick}>
                    <Link to="">
                        <BsSend className="text-xl text-gray-300 ml-4 mb-1"></BsSend>
                        <p className="text-xs font-medium text-gray-300">এ্যাড মানি</p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <BsLightbulb className="text-xl  text-gray-300 ml-6 mb-1"></BsLightbulb>
                    <p className="text-xs font-medium ml-4 text-gray-300">পে-বিল</p>
                </div>
                <div >
                    <Link to="/savings">
                        <BsSave className="text-xl text-violet-500 ml-6 mb-1"></BsSave>
                        <p className="text-xs font-medium ml-3 ">সেভিংস</p>
                    </Link>

                </div>
                <div>
                    <Link to="/apply/loan">
                        <RiWechatPayLine className="text-xl text-violet-500 mb-1"></RiWechatPayLine>
                        <p className=" text-start text-xs font-medium ">লোন</p>
                    </Link>

                </div>
            </div>
            <div className="mt-5 flex mb-4">
                <div onClick={handleClick}>
                    <Link to="">
                        <BiSolidPlaneTakeOff className="text-xl text-gray-300 ml-12 mb-1"></BiSolidPlaneTakeOff>
                        <p className="text-start text-xs font-medium ml-10 text-gray-300">রেমিটেন্স</p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <BsBook className="text-xl  text-gray-300 ml-20 mb-1"></BsBook>
                    <p className=" text-start text-xs font-medium ml-16 text-gray-300">এডুকেশন ফি</p>
                </div>

            </div>
        </div>
    );
};

export default PaymentCategory;