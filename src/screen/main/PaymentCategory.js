import React from 'react';
import { BsLightbulb, BsBagFill, BsBook, BsLightningCharge } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiChipsBag, } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineSend, } from "react-icons/ai";
import { MdOutlineSendToMobile } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Main.css'


const PaymentCategory = () => {
    return (
        <div className="mt-16 lg:mt-24 border border-gray-100 bg-gray-100 rounded-lg ml-2 mr-2 payment-category-section">
            {/* <p className="text-start text-xs m-4">পি-ক্যাশ সেবাসমূহ</p> */}
            <div className="flex justify-around mt-4 mb-4">
                <div className=" bg-teal-300 border rounded-lg p-2 w-20 h-16">
                    <Link to="/send">

                        <div className="flex justify-center">
                            <MdOutlineSendToMobile className="text-3xl  text-red-500  mb-1">ট</MdOutlineSendToMobile>
                            <p className="text-sm font-thin text-red-500 mb-1 mt-2">ট</p>
                        </div>
                        <p className="paymentCategory-text  font-medium text-center">সেন্ড মানি</p>
                    </Link>
                </div>
                <div className="bg-fuchsia-300 border-fuchsia-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/cashout">
                        <div className="flex justify-center">
                            <BiMenuAltLeft className="text-3xl  text-lime-500  mb-1">ট</BiMenuAltLeft>
                            <p className="text-sm font-thin text-lime-500 mb-1 mt-2">ট</p>
                        </div>
                        <p className="paymentCategory-text  font-medium  text-start" >ক্যাশ আউট</p>
                    </Link>
                </div>
                <div className="bg-cyan-300 border-cyan-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/recharge">
                        <div className="flex justify-center">
                            <BsLightningCharge className="text-3xl text-violet-500  mb-1 "></BsLightningCharge>
                        </div>
                        <p className="paymentCategory-text font-medium  text-center">রিচার্জ</p>
                    </Link>
                </div>
                <div className="border rounded-lg p-2 w-20 h-16 bg-amber-300 border-amber-300">
                    <Link to="/payment/number">
                        <div className="flex justify-center">
                            <BsBagFill className="text-3xl text-blue-400 mb-1 "></BsBagFill>
                        </div>

                        <p className="paymentCategory-text font-medium  text-center">পেমেন্ট</p>
                    </Link>
                </div>
            </div>
            <div className="mt-5 flex justify-around mb-4" >
                <div className="bg-blue-300 border-blue-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/add/money">
                        <div className="flex justify-center">
                            <AiOutlineSend className="text-3xl text-teal-500 mb-1"></AiOutlineSend>
                        </div>
                        <p className="paymentCategory-text text-center font-medium ">এ্যাড মানি</p>
                    </Link>
                </div>
                <div className="bg-violet-300 border-violet-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/pay/bill">
                        <div className="flex justify-center">
                            <BsLightbulb className="text-3xl  text-red-500  mb-1"></BsLightbulb>
                        </div>
                        <p className="paymentCategory-text text-center  font-medium">পে-বিল</p></Link>
                </div>
                <div className="bg-rose-300 border-rose-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/savings">
                        <div className="flex justify-center">
                            <GiChipsBag className="text-3xl text-teal-700  mb-1"></GiChipsBag>
                        </div>
                        <p className="paymentCategory-text text-center font-medium">সেভিংস</p>
                    </Link>
                </div>
                <div className="bg-emerald-300 border-emerald-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/apply/loan">
                        <div className="flex justify-center">
                            <FaHandHoldingUsd className="text-3xl text-fuchsia-500 mb-1"></FaHandHoldingUsd>
                        </div>
                        <p className="text-center paymentCategory-text  font-medium">লোন</p>
                    </Link>
                </div>
            </div>
            <div className="mt-5 ml-2 mb-4" >
                <div className=" bg-orange-300 border-orange-300 rounded-lg p-2 w-20 h-16">
                    <Link to="/education/bill">
                        <div className="flex justify-center">
                            <BsBook className="text-3xl   text-cyan-400  mb-1"></BsBook>
                        </div>
                        <p className="paymentCategory-text text-center  font-medium">এডুকেশন ফি</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PaymentCategory;