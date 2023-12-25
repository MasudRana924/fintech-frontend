import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { TbUserCancel } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Loan = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg min-h-screen bg-gray-50">
            <div className="flex bg-blue-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">লোন</p>
            </div>
            <div className="border m-4 rounded-lg p-2 shadow-md bg-white border-white">
               <div className="w-1/4 mx-auto mt-4">
               <TbUserCancel className=" h-12 w-16 text-red-500"></TbUserCancel>
               </div>
                <p className="text-md text-center mt-4">দুংখিত আপনার ট্রাস্ট-পে একাউন্টটি লোন গ্রহণের উপযুক্ত হয়নি </p>
                <p className="text-xs text-center mt-4">আর্থিক প্রতিষ্ঠানের লোন প্রদানের নীতিমালার অধীনে লোন নেওয়ার জন্য উপযুক্ত হতে নিয়মিত ট্রাস্ট-পে ব্যাবহার করূণ। </p>
                <Link to="/main">
                {/* <p className="text-sm text-violet-500 text-center mt-4 mb-4">হোম-এ ফিরে যাই</p> */}
                <button className="mt-4 mb-4 text-violet-500 text-xs border border-violet-500 p-1 rounded-md">হোম-এ ফিরে যাই</button>
                </Link>

            </div>
        </div>
    );
};

export default Loan;
