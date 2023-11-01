import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-16">Inbox</p> */}
                <p className="text-white text-md mt-4 ml-8">সাপোর্ট</p>
            </div>
            <div className=" mt-24 ">
                <div className="m-4 border  p-2">
                    <p className="text-xs text-start text-gray-900">যে কোন তথ্য বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করূণ</p>
                    <div className="flex items-center justify-center  mt-4 gap-4">
                    <p className="text-violet-500 text-md">ফোন </p>
                    <p>+8801952254063</p>
                    </div>
                    <div className="flex items-center justify-center  mt-4 gap-4">
                    <p className="text-violet-500 text-md"> ইমেইল</p>
                    <p>support.trustpay@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Support;