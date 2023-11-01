import React from 'react';
import Lottie from "lottie-react";
import preloaderAnimation from '../../jsons/preloader.json';
const Loader = () => {
    return (
        <div className="container w-2/4 mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto mt-12 lg:mt-12 justify-items-center">
            <div className="flex flex-1 items-center justify-center mx-auto">
                <p className="text-sm font-medium pt-8">লোড হচ্ছে</p>
                <Lottie animationData={preloaderAnimation} className=" h-24 w-24 mt-4"></Lottie>
            </div>
        </div>
    );
};

export default Loader;