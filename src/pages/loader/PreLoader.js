import React from 'react';
import logo from '../../images/logo (2).png';
import './Loader.css'
import { ThreeDots } from 'react-loader-spinner';
const PreLoader = () => {
    return (
        <div className="w-full  mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto bg-violet-500">
        <div className="ml-5 w-3/4 mx-auto lg:ml-28  container">
            <div className="flex flex-1 items-center justify-center ">
                <div >
                <p className="pt-72 pl-12 text-3xl text-white pre-title-text">ট্রাস্ট-পে</p>
                <div className="pl-20">
                <ThreeDots 
                     color="#fff"
                    strokeWidth="3"
                    animationDuration="0.75"
                    width="48"
                    visible={true}
                />
                </div>
                </div>

            </div>
        </div>
        <div className="w-1/4 mx-auto">
        <p className=" text-center text-white text-sm version-text">version 1.0</p>
        </div>
    </div>
    );
};

export default PreLoader;