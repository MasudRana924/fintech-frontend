import React from 'react';
import { formatDate } from '../../utilities/helper';
import { useSelector } from 'react-redux';
import logo from '../../images/logo (2).png'

const AllTransaction = ({ transaction }) => {
    const { loggeduser, } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    
    return (
        <div className="card col-span-12  md:col-span-3  gap-4 lg:col-span-4  2xl:col-span-3 ">
            <div className="text-start flex justify-between gap-5">

                <div className="flex">
                    
                    <div>
                        {
                            user._id === transaction.senduserId ? <div>
                                <img src={transaction.receiveuserAvatar} alt="" className="h-10 w-10 mt-2" />
                            </div> :  <img src={logo} alt="" className="h-10 w-10 mt-2" />
                        }
                        {
                            user._id === transaction.receiveuserId ? <div>
                                <img src={user?.avatar?.url} alt="" className="h-10 w-10 mt-2" />
                            </div> : null
                        }
                    </div>
                    <div>
                        {
                            user._id === transaction.senduserId ? <div>
                                <p className="text-xs font-thin ml-2 mt-1">{transaction.type}</p>

                                <p className="text-xs font-thin ml-2 mt-1">{transaction.receiverphone}</p>

                            </div> : null
                        }
                        {
                            user._id === transaction.receiveuserId ? <div>
                                <p className="text-xs font-thin ml-2 mt-1">{transaction.receiverType}</p>

                                <p className="text-xs font-thin ml-2 mt-1">{transaction.senderphone}</p>

                            </div> : null
                        }

                        <p className="text-xs font-thin ml-2 mt-1">Trans ID : {transaction.tranId}</p>
                    </div>
                </div>
                <div>
                    {
                        user._id === transaction.senduserId ? <div>
                            <p className="text-xs font-medium mt-2 text-end text-red-500">- {transaction.amount}.00TK</p>

                        </div> : null
                    }
                     {
                        user._id === transaction.receiveuserId ? <div>
                            <p className="text-xs font-medium  mt-2 text-end text-green-500">+ {transaction.amount}.00TK</p>

                        </div> : null
                    }
                    <div>
                        <p className="text-xs font-thin text-end mt-5">{formatDate(transaction.createdAt)}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllTransaction;