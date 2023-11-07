import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillTrophy, AiOutlineFileUnknown} from "react-icons/ai";
import { FiLogOut, FiSettings, FiInfo } from "react-icons/fi";
import { BiTransfer, BiMenuAltRight } from "react-icons/bi";
import { PiHeadsetDuotone } from "react-icons/pi";
import { MdOutlineDiscount } from "react-icons/md";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import { Link } from 'react-router-dom';
import { logout } from '../../state/user/loginSlice';
import { fetchtuserDetails } from '../../state/user/userDetailsSlice';
import Skeleton from '@mui/material/Skeleton';
import Mybkash from './Mybkash';
import SUggestion from './SUggestion';
import Others from './Others';
import './Main.css'
import avatar from '../../images/man.png'
const Main = () => {
    const dispatch = useDispatch();
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    useEffect(() => {
        dispatch(fetchtuserDetails({ userToken }));
    }, [dispatch, userToken]);
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );

    return (
        <div className="lg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg main-ui-container min-h-screen bg-gray-50">
            <div className=" w-full lg:w-1/4  bg-violet-500 h-16 rounded-b-lg flex justify-between main-navbar">
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-white border-violet-500" /></Link> :
                                <Link to="/profile">
                                    <img src={avatar} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full " /></Link>
                        }
                    </div>
                    <div>
                        {
                            user?.firstname && user?.lastname ? <p className="mt-2 text-white text-start text-xs font-medium">{user.firstname} {user.lastname}</p> : <Skeleton variant="text" className=" mt-2" width={80} height={25} />
                        }
                        {
                            user?.amount ? <p className="pl-2 text-start text-violet-500 text-medium  font-medium w-32 bg-white rounded-lg mt-1">ট <span className="">{user.amount}.00</span></p> : <Skeleton variant="text" className=" mt-2" width={126} height={30} />
                        }
                    </div>
                </div>
                <div className="flex justify-between mt-3 mr-3">
                    <Link to="/reward">
                        <AiFillTrophy className="text-white text-2xl mt-2"></AiFillTrophy>
                    </Link>
                    <BiMenuAltRight className="text-white text-2xl ml-5 lg:hidden block mt-2" onClick={showMenu}></BiMenuAltRight>
                </div>
            </div>
            <PaymentCategory></PaymentCategory>
            <Mybkash></Mybkash>
            <Sliderr></Sliderr>    
            <Others></Others>
            <SUggestion ></SUggestion>
           

            {/* navbar for small device */}
            <ul className={active ? 'bg-white border border-white  flex-col flex fixed inset-0 left-1/4 lg:left-3/4  uppercase   gap-6   lg:block  text-black text-start ml-16 ' : 'hidden'}>


                <ul className="mt-16">

                    <Link to="/all/transactions">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <BiTransfer className="mr-1 text-xl text-violet-500"></BiTransfer> <span className="ml-5">
                            লেনদেন সমূহ</span></button>
                    </Link>
                    <Link to="/user/update/info">
                        <button className="flex text-md w-full text-start ml-5 mt-5" onClick={showMenu}> <FiInfo className="mr-1 text-xl text-violet-500"></FiInfo> <span className="ml-5">
                            তথ্য হালনাগাদ</span></button>
                    </Link>
                    <Link to="/cuppon">
                        <button className="flex text-md w-full text-start ml-5 mt-5" onClick={showMenu}> <MdOutlineDiscount className="mr-1 text-xl text-violet-500"></MdOutlineDiscount> <span className="ml-5">
                            কুপন</span></button>
                    </Link>
                    <Link to="/info">
                        <button className="flex text-md w-full text-start ml-5 mt-5" onClick={showMenu}> <AiOutlineFileUnknown className="mr-1 text-xl text-violet-500"></AiOutlineFileUnknown> <span className="ml-5">
                            ট্রাস্ট-পে নিয়ে জানুন </span></button>
                    </Link>
                    <Link to="/support">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <PiHeadsetDuotone className="mr-1 text-xl text-violet-500"></PiHeadsetDuotone> <span className="ml-5">
                            সাপোর্ট </span></button>
                    </Link>
                    <Link to="/settings">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <FiSettings className="mr-1 text-xl text-violet-500"></FiSettings> <span className="ml-5">
                            সেটিংস </span></button>
                    </Link>
                    <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={() => dispatch(logout())}> <FiLogOut className="mr-1 text-md mt-1 text-red-500"></FiLogOut> <span className="ml-5">
                        লগআউট</span></button>
                </ul>
            </ul>
        </div>
    );
};

export default Main;