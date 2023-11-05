import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import preloaderAnimation from '../../jsons/reward.json';
import coinAnimation from '../../jsons/coin.json';


const Reward = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-4 ml-8">  রিওয়ার্ডস</p>
            </div>
            <div className="flex flex-1 items-center justify-center mx-auto mt-16">
                <Lottie animationData={preloaderAnimation} className=" h-48 w-48"></Lottie>
            </div>
            <div className="w-3/4 mx-auto ">
                {
                    user?.point ? <div className="flex  justify-between  w-full border border-violet-500 rounded h-12 ">
                        <div>
                            <p className="text-violet-500 text-sm mb-4 m-4"> {user?.point < 1000 ? "সিলভার" : user?.point > 1000 ? "গোল্ড":""}</p>
                        </div>
                        <div>
                            <div className="flex flex-1 items-center justify-center mr-4 ">
                                <Lottie animationData={coinAnimation} className=" h-12 w-12"></Lottie>
                                <p className="text-sm text-violet-500">{user?.point}</p>
                            </div>
                        </div>
                    </div> : <div className="w-full border border-red-500 rounded h-12 ">
                        <div>
                            <p className="text-red-500 text-sm mb-4 m-2">দুঃখিত আপনার কোন রিওয়ার্ড পয়েন্ট নেই</p>
                        </div>
                        
                    </div>
                }
                


            </div>

        </div>
    );
};

export default Reward;