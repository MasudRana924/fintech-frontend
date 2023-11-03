import React from 'react';
import { BsSend, BsLightbulb,BsBagFill } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiChipsBag } from "react-icons/gi";
import { FaRegMoneyBillAlt, FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { message } from 'antd';
import './Main.css'
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
                        <AiOutlineIdcard className="text-3xl text-violet-500 mb-1"></AiOutlineIdcard>
                        {/* <p className="paymentCategory-text font-thin">send money</p> */}
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
                    <FaRegMoneyBillAlt className="text-3xl text-gray-300  mb-1"></FaRegMoneyBillAlt>
                    <p className="paymentCategory-text font-medium text-gray-300  text-start">রিচার্জ</p>
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
                        <BsSend className="text-3xl text-gray-300 mb-1"></BsSend>
                        <p className="paymentCategory-text  text-start font-medium text-gray-300">এ্যাড মানি</p>
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <BsLightbulb className="text-3xl  text-gray-300  mb-1"></BsLightbulb>
                    <p className="paymentCategory-text text-start text-gray-300 font-medium">পে-বিল</p>
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

        </div>
    );
};

export default PaymentCategory;