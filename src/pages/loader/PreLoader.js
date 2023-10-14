import React from 'react';
import logo from '../../images/logo (2).png';
import './Loader.css'
const PreLoader = () => {
    return (
        <div className="w-full  mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto bg-violet-500">
        <div className="ml-5 w-3/4 mx-auto lg:ml-28  container">
            <div className="flex flex-1 items-center justify-center ">
                <p className="pt-96 text-lg text-white">ট্রাস্ট-পে</p>
            </div>
        </div>
    </div>
    );
};

export default PreLoader;