import React from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CreateSavings = () => {
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('');
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
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
                        {/* <option  >Select Slots</option> */}
                        <option >৫০০ টাকা</option>
                        <option >১০০০ টাকা</option>
                        <option >১৫০০ র্টাকা</option>
                        <option >২০০০ র্টাকা</option>
                    </select>
                </div>
                <div className="border mt-4 p-2">
                    <p className="text-start text-xs">সময়কাল</p>
                    <select className="w-full h-12 border border-violet-500 rounded mt-2" value={duration} onChange={(e) => setDuration(e.target.value)}  >
                        {/* <option  >Select Slots</option> */}
                        <option >১ বছর</option>
                        <option >২ বছর</option>
                        <option >৩ বছর</option>
                       
                    </select>
                </div>
            </div>
            <div className="w-full lg:hidden h-12 bg-violet-500 success-btn">
                <Link to="/create/savings">
                    <button className="text-white pl-2 pr-2 pt-2 text-sm ">আপনার সেভিংস স্কিম খুলুন  সহজেই</button>
                </Link>
            </div>
        </div>
    );
};

export default CreateSavings;