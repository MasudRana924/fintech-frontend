import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillTrophy, AiOutlineFileUnknown } from "react-icons/ai";
import { FiLogOut, FiSettings, FiInfo } from "react-icons/fi";
import { BiTransfer, BiMenuAltRight,BiMapPin } from "react-icons/bi";
import { PiHeadsetDuotone } from "react-icons/pi";
import { MdOutlineDiscount,MdOutlineNotificationsNone,MdOfflineShare } from "react-icons/md";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import { Link } from 'react-router-dom';
import { logout } from '../../state/user/loginSlice';
import { fetchtuserDetails } from '../../state/user/userDetailsSlice';
import Skeleton from '@mui/material/Skeleton';
import MyPkash from './MyPkash';
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
                <div className="flex justify-between items-center mr-3">
                    <Link to="/reward">
                        <AiFillTrophy className="text-white text-2xl "></AiFillTrophy>
                    </Link>
                    {/* <BiMenuAltRight className="text-white text-3xl ml-5 lg:hidden block " onClick={showMenu}></BiMenuAltRight> */}
                    <Link to="/settings/list">
                    <FiSettings className="text-white text-xl ml-5 lg:hidden block " ></FiSettings>
                    </Link>
                   
                </div>
            </div>
            <PaymentCategory></PaymentCategory>
            <MyPkash></MyPkash>
            <SUggestion ></SUggestion>
            <Sliderr></Sliderr>
            <Others></Others> 
        </div>
    );
};

export default Main;