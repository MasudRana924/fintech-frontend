import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '##308FE8',
  },
}));
const Reward = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-16">Inbox</p> */}
                <p className="text-white text-sm mt-4 ml-8"> ট্রাস্ট-পে রিওয়ার্ডস</p>
            </div>
            <div className="mt-24 ml-2 mr-2 border-ywllow-500 rounded-lg shadow-md h-44 bg-yellow-500">
                 <div class="flex items-center justify-between  p-4">
                    <span class="text-md font-medium text-white dark:text-gray-400">{user?.firstname} {user?.lastname}</span>
                    <div className="flex gap-2">
                        <AiFillStar className="text-white text-md font-bold mt-1"></AiFillStar>
                        <p className="text-white text-md font-bold ">{user?.point}</p>
                        <p className="text-white text-md font-bold ">পয়েন্ট</p>
                    </div>
                </div>
               <div className="w-3/4 mx-auto mt-8">
                {
                    user?.point< 1000? <div>
                        <p className="text-white text-sm mb-4">সিলভার</p>
                    </div>:null
                }
                 {
                    user?.point> 1000? <div>
                        <p>গোল্ড </p>
                    </div>:null
                }
               <BorderLinearProgress variant="determinate" value={user?.point} />
               </div>
                
            </div>
        </div>
    );
};

export default Reward;