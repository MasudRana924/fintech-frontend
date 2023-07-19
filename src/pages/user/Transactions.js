import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtransactions } from '../../state/user/mytransactionSlice';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';

const Transactions = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { transactions, isLoading, isError, error } = useSelector(state => state.transactions.mytransactions);
    useEffect(() => {
        dispatch(fetchtransactions({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (!isLoading && !isError && transactions?.length > 0) {

        content = transactions.map(transaction => <Transaction key={transaction._id} transaction={transaction} />)
    }
    return (
        <div className="w-full ">
            <div className="flex justify-between pl-3 pr-3">
                <p className="text-sm font-thin">Transactions</p>
               <Link to="/all/transactions">
               <p className="text-sm font-thin text-rose-500">all</p>
               </Link>
            </div>
            <div className="w-full grid grid-cols-12 mt-5 lg:mt-10 gap-5 pl-3 pr-3">
                {content}
            </div>

        </div>
    );
};

export default Transactions;