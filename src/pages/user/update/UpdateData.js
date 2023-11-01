import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../../jsons/takedata.json';

const UpdateData = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="bg-violet-500 h-16 flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">তথ্য হালনাগাদ</p>
            </div>
            <div className="mt-8">
            <Lottie animationData={animation} className=" w-3/4 mx-auto h-64"></Lottie>
            <p className="text-xs text-center ">আপনার জাতীয় পরিচয় পত্রের সামনের ও পিছনের ছবি তুলে দিন</p>
            </div>
           
        </div>
    );
};

export default UpdateData;