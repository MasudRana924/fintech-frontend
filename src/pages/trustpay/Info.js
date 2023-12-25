import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="w-full flex bg-blue-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-16">Inbox</p> */}
                <p className="text-white text-md mt-4 ml-8">  পি-ক্যাশ নিয়ে জানুন</p>
            </div>
            <div className=" mt-24 ">
                <div className="m-4">
                <video src="" controls className="w-full">   </video>
                    
                </div>
            </div>

        </div>
    );
};

export default Info;