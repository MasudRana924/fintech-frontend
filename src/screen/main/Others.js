import React from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { BsTicket} from 'react-icons/bs';
import { AiFillInsurance,AiFillShopping} from 'react-icons/ai';
import { CgGames} from 'react-icons/cg';
import { SiYourtraveldottv} from 'react-icons/si';
import { Link } from 'react-router-dom';

const Others = () => {
    return (
        <div className="pl-2 pr-2 mb-4">
        <div className="mt-4 h-32 border rounded-lg">
            <div className="flex justify-between mt-2 pl-2 pr-2 ">
                <p className="text-xs text-start ml-2">অন্যান্য সেবাসমূহ </p>
                <p className="text-xs text-start ml-2 text-violet-500"></p>
            </div>
            <div className="flex justify-between mt-2 pl-4 pr-2 ">
                <div>
                    <Link to="/main">
                        <BsTicket className="text-xl text-violet-500 ml-2 mb-1"></BsTicket>
                        <p className="text-xs font-thin">টিকিট </p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <BiSolidDonateHeart className="text-xl text-violet-500 ml-4 mb-1"></BiSolidDonateHeart>
                        <p className="text-xs font-thin">ডোনেশন</p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <AiFillInsurance className="text-xl text-violet-500 ml-3 mb-1"></AiFillInsurance>
                        <p className="text-xs font-thin">ইন্সুরেন্স</p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <CgGames className="text-xl text-violet-500 ml-2  mb-1"></CgGames>
                        <p className="text-xs font-thin">গেমস</p>
                    </Link>
                </div>
            </div>
            <div className="flex  mt-3 pl-4 pr-2 ">
                <div>
                    <Link to="/main">
                        <SiYourtraveldottv className="text-xl text-violet-500 ml-2 mb-1"></SiYourtraveldottv>
                        <p className="text-xs font-thin">ট্রাভেল </p>
                    </Link>
                </div>
                <div className="ml-4">
                    <Link to="/main">
                        <AiFillShopping className="text-xl text-violet-500 ml-6 mb-1"></AiFillShopping>
                        <p className="text-xs font-thin ml-6">শপিং</p>
                    </Link>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Others;