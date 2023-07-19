import React from 'react';

const Transaction = ({transaction}) => {
    return (
        <div className="card col-span-12  md:col-span-3  gap-4 lg:col-span-4  2xl:col-span-3 ">
           <div className="text-start flex gap-5">
            <p className="text-sm font-thin ">{transaction.type}</p>
            <p className="text-sm font-thin ">{transaction.phone}</p>
            <p className="text-sm font-thin ">tk{transaction.amount}</p>
           </div>
    </div>
    );
};

export default Transaction;