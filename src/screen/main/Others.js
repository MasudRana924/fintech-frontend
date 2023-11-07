import React from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { BsTicket } from 'react-icons/bs';
import { AiFillInsurance } from 'react-icons/ai';
import { CgGames } from 'react-icons/cg';

import { Link } from 'react-router-dom';

const Others = () => {
    return (<div className="ml-2 mr-2  shadow-lg border border-white bg-white rounded-lg ">
        <div className="mt-4 mb-2">
            <div className="flex justify-between mt-2 pl-2 pr-2 ">
                <p className="text-xs text-start ml-2">অন্যান্য সেবাসমূহ </p>
                <p className="text-xs text-start ml-2 text-violet-500"></p>
            </div>
            <div className="flex justify-between mt-2 pl-4 pr-2 ">
                <div>
                    <Link to="/main">
                        <BsTicket className="text-3xl text-amber-500  mb-1"></BsTicket>
                        <p className="paymentCategory-text  font-medium  text-start">টিকিট </p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <BiSolidDonateHeart className="text-3xl text-lime-500  mb-1"></BiSolidDonateHeart>
                        <p className="paymentCategory-text  font-medium  text-start">ডোনেশন</p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <AiFillInsurance className="text-3xl text-violet-500  mb-1"></AiFillInsurance>
                        <p className="paymentCategory-text  font-medium  text-start">ইন্সুরেন্স</p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <CgGames className="text-3xl text-blue-500   mb-1"></CgGames>
                        <p className="paymentCategory-text  font-medium  text-start">গেমস</p>
                    </Link>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Others;