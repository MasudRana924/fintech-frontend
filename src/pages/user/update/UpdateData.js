import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../../jsons/takedata.json';
import { CgNotes } from "react-icons/cg";
import { PiAddressBookLight } from "react-icons/pi";
import { MdControlCamera } from "react-icons/md";

const UpdateData = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg bg-gray-100 min-h-screen">
            <div className="bg-blue-500 h-16 flex">
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
                <p className="text-sm text-start p-2 mb-8">আপনার পি-ক্যাশ একাউন্টটি যদি NID নাম্বার দিয়ে নিবন্ধন না করা হয়ে থাকে তাহলে তথ্য আপডেট করুন। সকল তথ্য জানতে সাপোর্ট সেন্টারে যোগাযোগ করুন।</p>

            </div>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 p-2">নিচের ধাপ অনুযায়ী আপনার তথ্য  প্রদান করুন</p>
            </div>
            <div className="m-2 bg-white border-white ">
                <div className="flex justify-around pt-4 pb-8">
                    <div>
                        <Link to="/send">

                            <div className="flex">
                                <PiAddressBookLight className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></PiAddressBookLight>

                            </div>
                            <p className="paymentCategory-text font-medium">NID এর ছবি দিন</p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/cashout">
                            <div className="flex">
                                <MdControlCamera className="text-4xl border rounded-full p-1  text-violet-500   mb-1"></MdControlCamera>

                            </div>
                            <p className="paymentCategory-text  font-medium  text-start" >আপনার ছবি দিন  </p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/recharge">
                            <CgNotes className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></CgNotes>
                            <p className="paymentCategory-text font-medium  text-start">প্রয়োজনীয় তথ্য দিন</p></Link>
                    </div>

                </div>

            </div>
            <div className="w-full lg:hidden h-12 bg-blue-500 success-btn">
              <Link to="/set/user/info">
              <button className="text-white pl-2 pr-2 pt-2 text-sm ">শুরু করুন</button>
              </Link>
            </div>
        </div>
    );
};

export default UpdateData;