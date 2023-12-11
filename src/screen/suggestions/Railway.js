import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CiLock } from "react-icons/ci";
const Railway = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className=" w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <CiLock className="text-white text-2xl mt-4 ml-5" />
                    <p className="text-white text-sm mt-5 "> Home | Bangladesh Rail ...</p>
                </div>
            </div>
            <div className="w-full mt-16">
                <iframe
                    className="w-full min-h-screen"
                    src="https://eticket.railway.gov.bd/"
                    title="Introduction To WiseGPT"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default Railway;