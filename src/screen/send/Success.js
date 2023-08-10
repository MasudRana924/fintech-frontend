import React from 'react';
import {useNavigate } from 'react-router-dom';
import { GiCheckMark } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { BiUserCircle } from 'react-icons/bi';
import { clearStore } from '../../state/transaction/sendSlice';
const Success = () => {
    const { transactions } = useSelector(state => state.sendMoney.sendmoney);
    const { type} = useSelector(state => state.type.type);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick=()=>{
        dispatch(clearStore());
        navigate('/main');
    }
    return (
        <div>
            <div className="flex">
            </div>
            <div className="w-full p-2 flex justify-between">
                <div className="">
                    {
                        type ==='Send Money' ? <p className="text-rose-500 mt-5 text-md text-start">আপনার সেন্ড মানি</p>: null
                    }
                     {
                        type ==='Cash Out' ? <p className="text-rose-500 mt-5 text-md text-start">আপনার ক্যাশ আউট </p>:null
                    }
                   
                    <p className="text-green-500 mt-2 text-md text-start">সফল হয়েছে </p>
                </div>
                <GiCheckMark className="text-green-500 text-xl mt-6 ml-2"></GiCheckMark>

            </div>
            
            {
                transactions ? <div>
                    <div className="flex ml-6 mt-6 mb-6">
                        <BiUserCircle className="h-10 w-12 text-gray-400 "></BiUserCircle>
                        <p className="mt-2 text-sm">{transactions.receiverphone}</p>
                    </div>
            <hr />
            <div className="pl-3 pr-3">
                <div className="flex justify-between">
                    <p className=" mt-5  text-start text-rose-500 text-md">ট্রানজেকশন আইডি</p>
                    <p className="text-gray-900 mt-5 f text-start text-md">{transactions.tranId}</p>
                </div>
                <div className="flex justify-between">
                    <p className=" mt-5  text-start text-rose-500 text-md">সর্বমোট</p>
                    <p className="text-gray-900 mt-5  text-start text-md ">{transactions.amount}.00 TK</p>
                </div>
                <div className="flex justify-between">
                    <p className=" mt-5  text-start text-rose-500 text-md">চার্জ</p>
                    <p className="text-gray-900 mt-5  text-start text-md">00.00 TK</p>
                </div>
            </div>
                </div>:null
            }
            <div className="w-full h-12 bg-rose-500 success-btn">
               <button onClick={handleClick} className="text-white pl-2 pr-2 pt-2 ">পরবর্তী</button>
            </div>
        </div>
    );
};

export default Success;