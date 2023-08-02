import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillTrophy, AiOutlineMenu } from "react-icons/ai";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { BiHomeAlt2, BiTransfer } from "react-icons/bi";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import Transactions from '../../pages/user/Transactions';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { logout } from '../../state/user/loginSlice';
import { fetchtuserDetails } from '../../state/user/userDetailsSlice';
import Skeleton from '@mui/material/Skeleton';
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
        <div>
            <div className="bg-rose-500 h-16 rounded-b-lg flex justify-between">
                <div className="flex">
                    <div className="w-16">
                        {
                            user?.avatar?.url ? <img src={user.avatar.url} alt="" className="h-12 w-12 ml-2 mt-2 absolute " /> :
                                <Skeleton variant="rectangular" className="h-32 w-12 ml-2 mt-5 absolute border rounded-lg " />

                        }

                    </div>
                    <div>
                        {
                            user?.firstname && user?.lastname ? <p className="mt-2 text-white text-start text-sm font-thin">{user.firstname}{user.lastname}</p> : null
                        }
                        {/* {
                            firstname && lastname ? <p className="mt-2 text-white text-start text-sm font-thin">{firstname}{lastname}</p> : null
                        } */}
                        {
                            user?.amount ? <p className="pl-1 text-start text-rose-500 text-sm  font-thin w-28 bg-white rounded-lg mt-1">Tk <span className="">{user.amount}</span></p> : null
                        }

                    </div>
                </div>
                <div className="flex justify-between mt-3 mr-3">
                    <AiFillTrophy className="text-white text-3xl"></AiFillTrophy>
                    <AiOutlineMenu className="text-white text-3xl ml-5" onClick={showMenu}></AiOutlineMenu>
                    {/* <GrDocumentTransfer className="text-white text-3xl"></GrDocumentTransfer> */}
                </div>
            </div>

            <PaymentCategory></PaymentCategory>

            <div className="mb-10">
                <Sliderr></Sliderr>
            </div>
            <Transactions></Transactions>


            <ul className={active ? '  border border-gray-200 flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start ml-16 ' : 'hidden'}>
                <div className="h-16 bg-rose-500 w-full border border-rose-500">
                   <div className="w-1/4 mx-auto ">
                   {
                        user?.avatar?.url ? <img src={user.avatar.url} alt="" className="h-12 w-12 ml-2 mt-2 absolute " /> :
                            <Skeleton variant="rectangular" className="h-32 w-12 ml-2 mt-5 absolute border rounded-lg " />

                    }
                   </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-md text-rose-500 ml-5 ">এম-পে মেন্যু</p>
                    <RxCross1 className="text-xl mr-2  text-rose-500" onClick={showMenu}></RxCross1>

                </div>
                <ul>
                    <Link to="/main">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <BiHomeAlt2 className="mr-1 text-xl text-rose-500"></BiHomeAlt2> <span className="ml-5">
                            হোম </span></button>
                    </Link>
                    <Link to="/all/transactions">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <BiTransfer className="mr-1 text-xl text-rose-500"></BiTransfer> <span className="ml-5">
                            লেনদেন সমূহ</span></button>
                    </Link>
                    <Link to="/settings">
                        <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={showMenu}> <FiSettings className="mr-1 text-xl text-rose-500"></FiSettings> <span className="ml-5">
                            সেটিংস </span></button>
                    </Link>
                    <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={() => dispatch(logout())}> <FiLogOut className="mr-1 text-md mt-1 text-rose-500"></FiLogOut> <span className="ml-5">
                        লগআউট</span></button>

                </ul>
            </ul>
        </div>
    );
};

export default Main;