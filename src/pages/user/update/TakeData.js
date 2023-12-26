import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const TakeData = () => {
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg bg-gray-100 min-h-screen">
            <div className="bg-blue-500 h-16 flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">তথ্য হালনাগাদ</p>
            </div>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 p-2">আপনার NID এর সামনের ছবি তুলুন </p>
            </div>
            <form action="" >
                <div className="data-image-section  flex flex-1 items-center justify-center gap-2 mt-2 ">
                    <img
                        alt=""
                        className="w-3/4 mx-auto  h-36  border-white bg-white "

                    />
                    <label className=' border border-blue-500 bg-blue-500'>
                        +
                        <br />
                        <input
                            type="file"
                            name="avatarLogo"
                            multiple
                            accept="image/png,image/jpeg,image/webp"
                        />
                    </label>
                </div>
                <div className="w-full lg:hidden h-12 bg-blue-500 success-btn">
                    <button className="text-white pl-2 pr-2 pt-2 ">পরবর্তী</button>
                </div>
            </form>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 p-2">আপনার NID এর পিছনের ছবি তুলুন</p>
            </div>
           <div className="" >
           <form action="" >
                <div className="data-image-section  flex flex-1 items-center justify-center gap-2 mt-2 ">
                    <img
                        alt=""
                        className="w-3/4 mx-auto  h-36  border-white bg-white "

                    />
                    <label className='border border-blue-500 bg-blue-500'>
                        +
                        <br />
                        <input
                            type="file"
                            name="avatarLogo"
                            multiple
                            accept="image/png,image/jpeg,image/webp"
                        />
                    </label>
                </div>
                <div className="w-full lg:hidden h-12 bg-blue-500 success-btn">
                    <button className="text-white pl-2 pr-2 pt-2 ">পরবর্তী</button>
                </div>
            </form>
           </div>
        </div>
    );
};

export default TakeData;