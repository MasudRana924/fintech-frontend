import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillTrophy } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import { Link } from 'react-router-dom';
import { fetchtuserDetails } from '../../state/user/userDetailsSlice';
import Skeleton from '@mui/material/Skeleton';
import MyPkash from './MyPkash';
import SUggestion from './SUggestion';
import Others from './Others';
import './Main.css'
import avatar from '../../images/man.png'
import BottomNavigations from './BottomNavigation';
import { ScrollShadow } from '@nextui-org/react';
const Main = () => {
    const dispatch = useDispatch();
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    useEffect(() => {
        dispatch(fetchtuserDetails({ userToken }));
    }, [dispatch, userToken]);
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );

    return (
        <div className="lg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg main-ui-container ">
            <div className=" w-full lg:w-1/4   h-16 rounded-b-lg flex justify-between main-navbar">
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatarLogo ? <Link to="/profile">
                                <img src={user.avatarLogo} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-violet-500 border-violet-500" /></Link> :
                                <Link to="/profile">
                                    <img src={avatar} alt="" className="h-10 w-10 ml-2 mt-2 absolute border rounded-full bg-violet-500 border-violet-500 " /></Link>
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
                        <AiFillTrophy className="text-white text-xl "></AiFillTrophy>
                    </Link>
                    <Link to="/notifications">
                        <BsBell className="text-white text-md ml-5 lg:hidden block " ></BsBell>
                    </Link>
                </div>
            </div>
            {/* <PaymentCategory></PaymentCategory>
            <MyPkash></MyPkash>
            <SUggestion ></SUggestion>
            <Others></Others> 
           <Sliderr></Sliderr> */}
           <ScrollShadow hideScrollBar className=" mt-20 w-full h-full">
                <PaymentCategory></PaymentCategory>
                <MyPkash></MyPkash>
                <SUggestion ></SUggestion>
                <Others></Others>
                <Sliderr></Sliderr>
            </ScrollShadow>
            <BottomNavigations></BottomNavigations>
            <BottomNavigations></BottomNavigations>
        </div>
    );
};

export default Main;