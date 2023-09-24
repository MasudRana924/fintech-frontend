import React from 'react';
import { } from 'react-icons/bi';
import bikroy from '../../images/bikroy.png';
import ten from '../../images/10.png';
import daraz from '../../images/daraz.png';
import railway from '../../images/railway.jpg';
import { Link } from 'react-router-dom';
const SUggestion = () => {
    return (
        <div className="pl-2 pr-2">
            <div className="mt-4 h-20 border rounded-lg">
                <div className="flex justify-between mt-2 pl-2 pr-2 ">
                    <p className="text-xs text-start ml-2">সাজেশন </p>
                    <p className="text-xs text-start ml-2 text-violet-500">সব দেখুন</p>
                </div>
                <div className="flex  mt-2 pl-4 pr-2 mb-2">
                    <div>
                        <Link to="/main">
                           <img src={bikroy} alt="" className="h-6 ml-5"/>
                            <p className="text-xs font-thin">বিক্রয় ডট.কম</p>
                        </Link>
                    </div>
                    <div className="ml-4">
                        <Link to="/main">
                        <img src={ten} alt="" className="h-6 ml-5"/>
                            <p className="text-xs font-thin">টেন মিনিট স্কুল</p>
                        </Link>
                    </div>
                    <div className="ml-4">
                        <Link to="/main">
                        <img src={daraz} alt="" className="h-6 ml-2"/>
                            <p className="text-xs font-thin">দারাজ</p>
                        </Link>
                    </div>
                    <div className="ml-4">
                        <Link to="/main">
                        <img src={railway} alt="" className="h-6 ml-5"/>
                            <p className="text-xs font-thin">বাংলাদেশ রেলওয়ে</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SUggestion;