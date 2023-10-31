import React from 'react';
import './Loader.css';
import Lottie from "lottie-react";
import preloaderAnimation from './preloader.json';
const PreLoader = () => {
    return (
        <div className="flex flex-1 items-center justify-center mx-auto min-h-screen">
            <Lottie animationData={preloaderAnimation} className=" h-36 w-36"></Lottie>
        </div>
    );
};

export default PreLoader;