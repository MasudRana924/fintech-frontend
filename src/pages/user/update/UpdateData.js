import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { GrContactInfo } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../../jsons/takedata.json';

const UpdateData = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg bg-gray-100 min-h-screen">
            <div className="bg-violet-500 h-16 flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">তথ্য হালনাগাদ</p>
            </div>
            <div className="ml-2 mr-2 mt-8 bg-white">
            <Lottie animationData={animation} className="  h-44 border border-white rounded"></Lottie>
            </div>
            <div className="m-2  border rounded bg-white border-white ">
                
                     <p className="text-center text-violet-500 text-md mt-8">অনুগ্রহ করেন আপনার তথ্য হালনাগাদ করুন </p>
                     <p className="text-sm text-start p-2 mb-8">আপনার ট্রাস্ট পে একাউন্টটি যদি NID নাম্বার দিয়ে নিবন্ধন না করা হয়ে থাকে তাহলে তথ্য আপডেট করুন। সকল তথ্য জানতে সাপোর্ট সেন্টারে যোগাযোগ করুন।</p>
                   
            </div>
           
        </div>
    );
};

export default UpdateData;