import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtransactions } from '../../state/user/mytransactionSlice';
import AllTransaction from './AllTransaction';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Loader from '../loader/Loader';


const AllTransactions = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { transactions } = useSelector(state => state.transactions.mytransactions);
    const { isLoading } = useSelector(state => state.transactions);
    useEffect(() => {
        dispatch(fetchtransactions({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (!isLoading && transactions?.length > 0) {
        content = transactions.map(transaction => <AllTransaction key={transaction._id} transaction={transaction} />)
    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg">
            <div className="w-full flex bg-violet-500 h-16 rounded-b-lg main-navbar">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-16">Inbox</p> */}
                <p className="text-white text-md mt-4 ml-8">লেনদেন সমূহ</p>
            </div>
            {
                isLoading ? <div className=" mt-20">
                    <Loader ></Loader>
                </div> : <div>
                    <div className="mt-20 pl-2 pr-2  flex items-center justify-between  border rounded h-12">
                        <p className="text-gray-900 text-xs">ফিল্টার করুন </p>
                        <div className="flex gap-4">
                        <button className="border rounded-lg border-green-500 h-6 w-12 text-xs text-green-500">+ ইন</button>
                        <button className="border rounded-lg border-red-500 h-6 w-12 text-xs text-red-500">- আউট</button>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto  lg:px-0 " >
                        {content}
                    </div>
                </div>
            }
        </div>
    );
};

export default AllTransactions;