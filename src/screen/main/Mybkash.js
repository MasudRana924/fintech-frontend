import React from 'react';
import { BiSolidOffer, BiSolidContact } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Mybkash = () => {
    return (
        <div className="pl-2 pr-2">
            <div className="mt-4 h-20 border rounded-lg">
                <div className="flex justify-between mt-2 pl-2 pr-2 ">
                    <p className="text-xs text-start ml-2">আমার এম-ক্যাশ </p>
                    <p className="text-xs text-start ml-2 text-violet-500">সব দেখুন</p>
                </div>
                <div className="flex  mt-2 pl-4 pr-2 ">
                    <div>
                        <Link to="/main">
                            <BiSolidOffer className="text-xl text-violet-500 ml-2 mb-1"></BiSolidOffer>
                            <p className="text-xs font-thin">My Offer</p>
                        </Link>
                    </div>
                    <div className="ml-4">
                        <Link to="/main">
                            <BiSolidContact className="text-xl text-violet-500 ml-6 mb-1"></BiSolidContact>
                            <p className="text-xs font-thin">Priyo Number</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mybkash;