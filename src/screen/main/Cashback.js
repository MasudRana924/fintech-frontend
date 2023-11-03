import React from 'react';
import Lottie from "lottie-react";
import cashbackAnimation from '../../jsons/cashback.json';
const Cashback = () => {
    return (
        <div className="h-64">
             <Lottie animationData={cashbackAnimation} className=" h-58 w-full border"></Lottie>
        </div>
    );
};

export default Cashback;