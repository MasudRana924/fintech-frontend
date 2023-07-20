import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { useSelector } from 'react-redux';
const Success = () => {
    const { transactions } = useSelector(state => state.sendMoney.sendmoney);
    return (
        <div>
            <div className="flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-rose-500 text-2xl mt-5 ml-2"></FiArrowLeft>
                    </Link>
                </div>
            </div>
            <div className="w-1/4 mx-auto">
                <GiCheckMark className="text-rose-500 text-7xl mt-5 ml-2"></GiCheckMark>
               
            </div>
            <div className="w-2/4 mx-auto">
            <p className="text-rose-500 mt-5 text-xl">Success</p>
            </div>
            {
                transactions ? <div>
                    <div className="w-2/4 mx-auto">
                <p className="text-gray-900 mt-5 font-semibold">{transactions.phone}</p>
            </div>
            <hr />
            <div className="pl-3 pr-3">
                <div className="flex justify-between">
                    <p className=" mt-5 font-semibold text-start text-rose-500">Transaction ID</p>
                    <p className="text-gray-900 mt-5 font-semibold text-start ">{transactions.tranId}</p>
                </div>
                <div className="flex justify-between">
                    <p className=" mt-5 font-semibold text-start text-rose-500">Amount</p>
                    <p className="text-gray-900 mt-5 font-semibold text-start ">{transactions.amount}.00 TK</p>
                </div>
                <div className="flex justify-between">
                    <p className=" mt-5 font-semibold text-start text-rose-500">Charge</p>
                    <p className="text-gray-900 mt-5 font-semibold text-start ">00 TK</p>
                </div>
            </div>
                </div>:null
            }
            <div>
               <Link to="/main">
               <button className="h-10 bg-rose-500 border rounded-lg text-white pl-2 pr-2 mt-5 font-semibold">Back to Home</button>
               </Link>
            </div>
        </div>
    );
};

export default Success;