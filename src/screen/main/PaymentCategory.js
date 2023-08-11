import React from 'react';
import { BsSend ,BsLightbulb,BsSave,BsBook} from "react-icons/bs";
import { BiMoneyWithdraw,BiSolidPlaneTakeOff } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiWechatPayLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const PaymentCategory = () => {
    return (
        <div className="mt-20">
                <div className="flex justify-around">
                    <div>
                        <Link to="/send">
                        <BsSend className="text-xl text-rose-500 ml-4 mb-1"></BsSend>
                        {/* <p className="text-xs font-thin">send money</p> */}
                        <p className="text-xs font-thin">সেন্ড মানি</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cashout">
                        <BiMoneyWithdraw className="text-xl  text-rose-500 ml-5 mb-1"></BiMoneyWithdraw>
                        {/* <p className="text-xs font-thin">cashout</p> */}
                        <p className="text-xs font-thin">ক্যাশ আউট</p>
                        </Link>
                       
                    </div>
                    <div>
                        <FaRegMoneyBillAlt className="text-xl text-rose-500 ml-2 mb-1"></FaRegMoneyBillAlt>
                        {/* <p className="text-xs font-thin">mobile recharge</p> */}
                        <p className="text-xs font-thin">রিচার্জ</p>
                    </div>
                    <div>
                    <RiWechatPayLine className="text-xl text-rose-500 ml-3 mb-1"></RiWechatPayLine>
                    <p className="text-xs font-thin">পেমেন্ট</p>
                    {/* <p className="text-xs font-thin">make payment</p> */}
                   </div>
               
                </div>
                <div className="mt-5 flex justify-around">
                    <div>
                        <Link to="/send">
                        <BsSend className="text-xl text-rose-500 ml-4 mb-1"></BsSend>
                        <p className="text-xs font-thin">এ্যাড মানি</p>
                        </Link>
                    </div>
                    <div>
                        <BsLightbulb className="text-xl  text-rose-500 ml-6 mb-1"></BsLightbulb>
                        <p className="text-xs font-thin ml-4">পে-বিল</p>
                    </div>
                    <div>
                        <BsSave className="text-xl text-rose-500 ml-6 mb-1"></BsSave>
                        <p className="text-xs font-thin ml-4">সেভিংস</p>
                    </div>
                    <div>
                    <RiWechatPayLine className="text-xl text-rose-500  mb-1"></RiWechatPayLine>
                    <p className="text-xs font-thin">লোন</p>
                   </div>
                </div>
                <div className="mt-5 flex ">
                    <div>
                        <Link to="/send">
                        <BiSolidPlaneTakeOff className="text-xl text-rose-500 ml-8 mb-1"></BiSolidPlaneTakeOff>
                        <p className="text-xs font-thin ml-6">রেমিটেন্স</p>
                        </Link>
                    </div>
                    <div>
                        <BsBook className="text-xl  text-rose-500 ml-20 mb-1"></BsBook>
                        <p className="text-xs font-thin ml-16">এডুকেশন ফি</p>
                    </div>
                    
                </div>
            </div>
    );
};

export default PaymentCategory;