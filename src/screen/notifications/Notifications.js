import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Notifications = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg min-h-screen">
            <div className="w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-4 ml-8">  নোটিফিকেশন</p>
            </div>

            <div>
                <div className=" ml-2 mr-2 mt-32 border border-violet-400 bg-violet-400 rounded p-4">
                    <div className=" mt-4">
                      
                        <p className="text-xl text-white ">অভিনন্দন  </p>
                    </div>
                    <p className="text-sm text-white  text-start mt-4">আপনি রেজিষ্ট্রেশন করে ৫০টাকা বোনাস পেয়েছেন </p>
                </div>
            </div>

        </div>
    );
};

export default Notifications;