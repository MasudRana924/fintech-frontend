import React from 'react';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';
const BottomNavigations = () => {
    const [value, setValue] = React.useState(0);
    return (
        <div className=" border h-12 rounded-lg bottom-navigation bg-blue-300 border-blue-300">
            <div className="flex justify-between items-center ml-4 mr-4 mt-2">
                <div className="">
                    <Link to="/">
                    <RiHome2Line className='text-white text-2xl flex justify-center'/>
                    </Link>
                    {/* <p className="text-xs">হোম</p> */}
                </div>
                <div>
                    <Link to="/all/transactions">
                    <FaMoneyBillTransfer className='text-white text-2xl flex justify-center'/>
                    </Link>
                    {/* <p className="text-xs">লেনদেন</p> */}
                </div>
                <div>
                    <Link to="/settings/list">
                    <FiSettings className='text-white text-2xl flex justify-center'/>
                    </Link>
                    {/* <p className="text-xs">সেটিংস</p> */}
                </div>

            </div>
         
        </div>
    );
};

export default BottomNavigations;