import React from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSavings } from '../../state/savings/savingsSlice';
import { useEffect } from 'react';
import { message } from 'antd';
const CreateSavings = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');
    const [durations, setDuration] = useState('');
    const data=({amount,durations})
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(amount && durations){
            dispatch(createSavings({
                data, userToken
            }));
        }else{
            message.error("জমার ধরন , টাকার পরিমান সিলেক্ট করুন")
        }
    }
    const { successs, errorr } = useSelector(
        (state) => state.savings
    );
    useEffect(() => {
        if (successs) {
            message.success("সেভিংস ক্রিয়েটেড")
        }if(errorr){
            message.error("এই নাম্বারে ক্যাশ আউট সম্ভব না")
        }
    }, [successs,errorr]);
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-blue-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">সেভিংস </p>
            </div>
            <div className=" m-4">
                <p className="text-start text-xs">সেভিংস স্কিম নির্বাচন করূণ</p>

                <div className="border mt-4 p-2">
                    <p className="text-start text-xs">জমার ধরন</p>
                    <select className="w-full h-12 border border-violet-500 rounded mt-2" value={amount} onChange={(e) => setAmount(e.target.value)}  >
                        <option  className="text-sm">টাকার পরিমান সিলেক্ট করুন</option>
                        <option >500 </option>
                        <option >1000</option>
                        <option >1500 </option>
                        <option >2000 </option>
                    </select>
                </div>
                <div className="border mt-4 p-2">
                    <p className="text-start text-xs">সময়কাল (বছর)</p>
                    <select className="w-full h-12 border border-violet-500 rounded mt-2" value={durations} onChange={(e) => setDuration(e.target.value)}  >
                        <option  >সময়কাল (বছর) সিলেক্ট করুন</option>
                        <option >1</option>
                        <option >2</option>
                        <option >3 </option>
                       
                    </select>
                </div>
            </div>
            <div className="w-full lg:hidden h-12 bg-violet-500 success-btn">
                <Link to="/create/savings">
                    <button className="text-white pl-2 pr-2 pt-2 text-sm " onClick={handleSubmit}>আপনার সেভিংস স্কিম খুলুন  সহজেই</button>
                </Link>
            </div>
        </div>
    );
};

export default CreateSavings;