import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtransactions } from '../../state/user/mytransactionSlice';
import AllTransaction from './AllTransaction';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Rings } from 'react-loader-spinner';

const AllTransactions = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { transactions,isLoading, } = useSelector(state => state.transactions.mytransactions);
   
    useEffect(() => {
        dispatch(fetchtransactions({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (!isLoading  && transactions?.length > 0) {

        content = transactions.map(transaction => <AllTransaction key={transaction._id} transaction={transaction} />)
    }
    return (
        <div>
           
            <div className="flex bg-rose-500 h-10 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                {/* <p className="text-white text-xl mt-1 ml-16">Inbox</p> */}
                <p className="text-white text-sm mt-3 ml-8">লেনদেন সমূহ</p>
            </div>
           <div
                className="grid grid-cols-12 gap-4 m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto  lg:px-0 min-h-[300px]  md:mt-16 lg:mt-16 " >
                {content}
            </div>
            
        </div>
    );
};

export default AllTransactions;