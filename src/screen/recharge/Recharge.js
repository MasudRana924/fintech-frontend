import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

const Recharge = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg bg-gray-50 min-h-screen">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-5 ">মোবাইল রিচার্জ</p>
            </div>
            <div className="border rounded ml-2 mr-2 mt-8 p-2 bg-white border-white">
                <p className="text-gray-500 text-start  text-xs mb-4 ">যার জন্য</p>
                <div className="flex ">
                    <input type="text" placeholder='নাম্বার দিন' className="w-full text-sm p-2 border border-gray-200 rounded " />
                    <button className="bg-white w-12 absolute ml-72 mt-2 " > <FiArrowRight className="text-gray-500 text-2xl ml-2"></FiArrowRight></button>
                </div>

            </div>
            <div className="border rounded ml-2 mr-2 mt-4 p-2 bg-white border-white ">
                <p className="text-gray-500 text-start  text-xs mb-4 ">আমার একাউন্ট</p>
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-white border-white" /></Link> :
                                <Skeleton variant="text" className=" mt-2" width={10} height={10} />
                        }
                    </div>
                    <div>
                        {
                            user?.firstname && user?.lastname ? <p className="mt-2 text-gray-500 text-start text-xs font-medium">{user.firstname} {user.lastname}</p> : <Skeleton variant="text" className=" mt-2" width={80} height={25} />
                        }
                        {
                            user?.amount ? <p className="text-start text-gray-500 text-xs font-medium w-32 bg-white rounded-lg mt-1">ট <span className="">{user.amount}.00</span></p> : <Skeleton variant="text" className=" mt-2" width={126} height={30} />
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recharge;