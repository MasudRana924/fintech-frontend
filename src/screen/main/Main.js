import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillTrophy } from "react-icons/ai";
import Sliderr from './Sliderr';
import PaymentCategory from './PaymentCategory';
import Transactions from '../../pages/user/Transactions';



const Main = () => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    return (
        <div>
            <div className="bg-rose-500 h-16 rounded-b-lg flex justify-between">
                <div className="flex">
                    <div className="w-16">
                        <img src={user.avatar.url} alt="" className="h-12 w-12 ml-2 mt-2 absolute " />
                    </div>
                    <div>
                        {
                            user.name ? <p>{user.name}</p> : <p className="mt-2 text-white text-start text-sm font-thin">Hello Mr. User</p>
                        }
                        <p className="pl-1 text-start text-rose-500 text-sm  font-thin w-20 bg-white rounded-lg mt-1">Tk <span className="">{user.amount}</span></p>
                    </div>
                </div>
                <div className="flex justify-between mt-3 mr-6">
                    <AiFillTrophy className="text-white text-3xl"></AiFillTrophy>
                    {/* <GrDocumentTransfer className="text-white text-3xl"></GrDocumentTransfer> */}
                </div>
            </div>
            
            <PaymentCategory></PaymentCategory>

            <Sliderr></Sliderr>
            <Transactions></Transactions>
        </div>
    );
};

export default Main;