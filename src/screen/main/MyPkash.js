import React from 'react';
import { BiSolidOffer, BiSolidContact } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MyPkash = () => {
    return (
        <div className="ml-2 mr-2">
            <div className="mt-4 h-24 border rounded-lg border-stone-100 bg-stone-100">
                <div className="flex justify-between mt-2 pl-2 pr-2 ">
                    <p className="text-xs text-start ml-2">আমার পি-ক্যাশ </p>
                    <p className="text-xs text-start ml-2 text-violet-500">সব দেখুন</p>
                </div>
                <div className="flex gap-4 mt-2 pl-4 pr-2 mb-4">
                    <div>
                        <Link to="/main">
                            <BiSolidOffer className="text-3xl text-violet-500 ml-2 mb-1"></BiSolidOffer>
                            <p className="paymentCategory-text  font-medium  text-start ">My Offer</p>
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/main">
                            <BiSolidContact className="text-3xl text-teal-500 ml-6 mb-1"></BiSolidContact>
                            <p className="paymentCategory-text  font-medium  text-start">Priyo Number</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPkash;