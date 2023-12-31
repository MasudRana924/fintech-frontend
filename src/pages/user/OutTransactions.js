import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOutTransactions } from '../../state/user/mytransactionSlice';
import AllTransaction from './AllTransaction';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Loader from '../loader/Loader';
import Alert from 'antd/es/alert/Alert';

const OutTransactions = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { transactions } = useSelector(state => state.transactions.myOutTransactions);
    const { isLoading } = useSelector(state => state.transactions);
    useEffect(() => {
        dispatch(fetchOutTransactions({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if(transactions?.length <= 0){
        content=<div className="w-full ">
            <Alert message="দুঃখিত আপনি  এখনও কোন লেনদেন করেন নি" type="error"className="w-full" />
        </div>
    }
    if (!isLoading && transactions?.length > 0) {
        content = transactions.map(transaction => <AllTransaction key={transaction._id} transaction={transaction} />)
    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-8">লেনদেন সমূহ</p>
            </div>
            <div className="flex justify-between mt-20 ml-4 mr-4">
                <Link to="/all/transactions">
                    <button className="h-8 w-16 text-gray-900 leading-6 font-semibold bg-gray-400 border-gray-400 rounded-lg">সব</button>
                </Link>
                <div className="flex gap-2">
                    <Link to="/all/in/transactions">
                        <button className="text-xs h-8 w-16 text-gray-900 leading-6 font-semibold bg-green-200 border  border-green-200 rounded-lg">
                        ক্যাশ ইন</button>
                    </Link>

                    <Link to="/all/out/transactions">
                        <button className="text-xs h-8 w-20 text-gray-900 leading-6 font-semibold border bg-red-200 border-red-200 rounded-lg">
                        ক্যাশ আউট</button>
                    </Link>
                </div>

            </div>
            {
                isLoading ? <div className="mt-4">
                    <Loader ></Loader>
                </div> :
                    <div
                    className={transactions?.length>0 ?"grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto  lg:px-0 mt-4":"w-3/4 mx-auto mt-8"} >
                        {content}
                    </div>

            }
        </div>
    );
};

export default OutTransactions;