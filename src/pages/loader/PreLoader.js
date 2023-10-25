import React from 'react';
import './Loader.css';
import logo from '../../images/mainlogo.png'
const PreLoader = () => {
    return (
        <div className="w-full  mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto ">
        <div className="ml-5 w-3/4 mx-auto lg:ml-28  container">
            <div className="flex flex-1 items-center justify-center ">
                <div >
                {/* <p className="pt-72 pl-12 text-4xl text-white pre-title-text">ট্রাস্ট-পে</p> */}
                <img src={logo} alt="" className="mt-72 h-24 w-32 ml-12"/>
                </div>
            </div>
        </div>
        <div className="w-1/4 mx-auto">
        <p className=" text-center text-violet-500 text-sm version-text ">version 1.0</p>
        </div>
    </div>
    );
};

export default PreLoader;