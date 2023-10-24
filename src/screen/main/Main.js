import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillTrophy, AiOutlineMenu ,AiOutlineFileUnknown} from "react-icons/ai";
import { FiLogOut, FiSettings,FiInfo } from "react-icons/fi";
import { BiHomeAlt2, BiTransfer } from "react-icons/bi";
import { PiHeadsetDuotone} from "react-icons/pi";
import { MdOutlineDiscount} from "react-icons/md";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { logout } from '../../state/user/loginSlice';
import { fetchtuserDetails } from '../../state/user/userDetailsSlice';
import Skeleton from '@mui/material/Skeleton';
import Mybkash from './Mybkash';
import SUggestion from './SUggestion';
import Others from './Others';
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
        <div className="lg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg main-ui-container">
            <div className=" w-full lg:w-1/4  bg-violet-500 h-16 rounded-b-lg flex justify-between main-navbar">
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatar?.url ? <Link to="/profile">
                                <img src={user.avatar.url} alt="" className="h-12 w-12 ml-2 mt-2 absolute " /></Link> :
                                <Skeleton variant="circular" width={40} height={40} className="ml-3 mt-2" />

                        }
                    </div>
                    <div>
                        {
                            user?.firstname && user?.lastname ? <p className="mt-2 text-white text-start text-sm font-thin">{user.firstname} {user.lastname}</p> : <Skeleton variant="text" className=" mt-2" width={80} height={25} />
                        }
                        {
                            user?.amount ? <p className="pl-2 text-start text-violet-500 text-medium  font-medium w-28 bg-white rounded-lg mt-1">ট <span className="">{user.amount}.00</span></p> : <Skeleton variant="text" className=" mt-2" width={120} height={30} />
                        }

                    </div>
                </div>
                <div className="flex justify-between mt-3 mr-3">
                    <Link to="/reward">
                        <AiFillTrophy className="text-white text-3xl"></AiFillTrophy>
                    </Link>
                    <AiOutlineMenu className="text-white text-3xl ml-5 lg:hidden block" onClick={showMenu}></AiOutlineMenu>
                </div>
            </div>
            <PaymentCategory></PaymentCategory>
            <Mybkash></Mybkash>
            <Sliderr></Sliderr>
            <SUggestion ></SUggestion>
            <Others></Others>

            {/* navbar for small device */}
            <ul className={active ? 'bg-white border border-white  flex-col flex fixed inset-0 left-1/4 lg:left-3/4  uppercase   gap-6   lg:block  text-black text-start ml-16 ' : 'hidden'}>

                <div className="flex justify-between mt-8 ">
                    <p className="text-md text-violet-500 ml-5 ">এম-পে মেন্যু</p>
                    <RxCross1 className="text-xl mr-2  text-rose-500" onClick={showMenu}></RxCross1>

                </div>
                <ul className="">
                    <Link to="/main">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <BiHomeAlt2 className="mr-1 text-xl text-violet-500"></BiHomeAlt2> <span className="ml-5">
                            হোম </span></button>
                    </Link>
                    <Link to="/all/transactions">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <BiTransfer className="mr-1 text-xl text-violet-500"></BiTransfer> <span className="ml-5">
                            লেনদেন সমূহ</span></button>
                    </Link>
                    <Link to="/user/info">
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
                    <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={() => dispatch(logout())}> <FiLogOut className="mr-1 text-md mt-1 text-violet-500"></FiLogOut> <span className="ml-5">
                        লগআউট</span></button>

                </ul>
            </ul>
        </div>
    );
};

export default Main;