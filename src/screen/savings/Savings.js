import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { GiReceiveMoney } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import MySavings from '../../pages/user/Savings';

const Savings = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg min-h-screen bg-gray-50">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">সেভিংস </p>
            </div>
            <div className="border m-4 rounded-lg p-2 shadow-md border-white bg-white">
                <div className="w-1/4 mx-auto mt-2">
                    <GiReceiveMoney className=" h-12 w-16 text-violet-500"></GiReceiveMoney>
                </div>
                <p className="text-xs text-start pl-8 mt-4">জমানো টাকার সহজ হিসাব দেখুন</p>
                <p className="text-xs text-start pl-8 mt-2">১০০ টাকা থেকে সেভিংস শুরু হোক ট্রাস্ট-পে তে </p>
                <p className="text-xs text-start pl-8 mt-2">সাধারন সেভিংস </p>
                <p className="text-xs text-start pl-8 mt-2 mb-2">ইসলামিক সেভিংস </p>
            </div>
           <MySavings></MySavings>





            <div className="w-full lg:hidden h-12 bg-violet-500 success-btn">
              <Link to="/create/savings">
              <button className="text-white pl-2 pr-2 pt-2 text-sm ">নতুন সেভিংস স্কিম খুলুন  সহজেই</button>
              </Link>
            </div>
        </div>
    );
};

export default Savings;