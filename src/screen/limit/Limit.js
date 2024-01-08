import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Limit = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg min-h-screen bg-gray-50">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">লিমিট
                </p>
            </div>
            <div className="m-4 flex justify-between items-center border-b">
                <Link>
                    <p className="text-fuchsia-500 text-sm">
                        দৈনিক লিমিট
                    </p>
                </Link>
                <Link to="/monthly/limit">
                    <p className=" text-sm">
                    মাসিক লিমিট
                    </p>
                </Link>

            </div>
            <div className=" ml-4 mr-4 mt-4">
                <div className="flex gap-4">
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm">এজেন্ট থেকে ক্যাশ ইন</p>
                    </div>
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm">১৫ বার </p>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm">ক্যাশ আউট ১</p>
                    </div>
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm">১৫ বার </p>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm"> সেন্ড মানি আন লিমিটেড</p>
                    </div>
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm">লিমিটেড</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm"> পে বিল  </p>
                    </div>
                    <div className="border rounded h-12 p-2 w-full">
                        <p className="text-sm">৫০ বার</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Limit;