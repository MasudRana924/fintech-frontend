import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillTrophy ,AiOutlineMenu} from "react-icons/ai";
import { FiLogOut,FiSettings} from "react-icons/fi";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import Transactions from '../../pages/user/Transactions';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { logout } from '../../state/user/loginSlice';

const Main = () => {
    const dispatch = useDispatch();
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
   
    const user = loggeduser.user;
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    // const {firstname,lastname } = useSelector(
    //     (state) => state.updateName.updateName.user
    // );

    return (
        <div>
            <div className="bg-rose-500 h-16 rounded-b-lg flex justify-between">
                <div className="flex">
                    <div className="w-16">
                        {
                           user?.avatar?.url ? <img src={user.avatar.url} alt="" className="h-12 w-12 ml-2 mt-2 absolute " />:<img src="hello" alt="" className="h-12 w-12 ml-2 mt-2 absolute " />
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
                            user?.amount? <p className="pl-1 text-start text-rose-500 text-sm  font-thin w-20 bg-white rounded-lg mt-1">Tk <span className="">{user.amount}</span></p>:null
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

            <Sliderr></Sliderr>
            {
                user?<Transactions></Transactions>:null
            }

            <ul className={active ? '  border border-gray-200 flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start ml-16 ' : 'hidden'}>
                <div className="grid grid-cols-2 md:gap-96">
                    <RxCross1 className="text-xl ml-5  mt-5 " onClick={showMenu}></RxCross1>

                </div>
                <ul>
                    
                    <Link to="/settings">
                    
                    <button className="flex text-md w-3/4 text-start ml-5"> <FiSettings className="mr-1 text-xl "></FiSettings> সেটিংস</button>
                    </Link>
                    <button className="flex text-md w-3/4 text-start ml-5 mt-5" onClick={() => dispatch(logout())}> <FiLogOut className="mr-1 text-md mt-1"></FiLogOut> লগআউট</button>

                </ul>
                </ul>
        </div>
    );
};

export default Main;