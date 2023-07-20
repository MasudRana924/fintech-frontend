import React from 'react';
import { FiArrowLeft,FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <div>
            <div className="flex bg-rose-500 h-10 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-xl mt-1 ml-5">সেটিংস</p>
            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-10 ">
                <Link to="/update/name">
                   <p className="mt-2 ml-2">নাম পরিবর্তন করুন</p>
                </Link>
                <FiArrowRight className="text-rose-500 text-2xl mt-2 mr-2"></FiArrowRight>
            </div>
            <div className="w-full h-10 border border-slate-100 flex justify-between mt-5 ">
                <Link to="/update/name">
                   <p className="mt-2 ml-2">ছবি পরিবর্তন করুন</p>
                </Link>
                <FiArrowRight className="text-rose-500 text-2xl mt-2 mr-2"></FiArrowRight>
            </div>
        </div>
    );
};

export default Settings;