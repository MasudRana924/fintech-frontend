import React from 'react';

const AllTransaction = ({transaction}) => {
    return (
        <div className="card col-span-12  md:col-span-3  gap-4 lg:col-span-4  2xl:col-span-3 ">
            <div className="text-start flex justify-between gap-5">

                <div className="flex">
                    <img src={transaction.receiveuserAvatar} alt="" className="h-10 w-10 mt-2" />
                    <div>
                        {/* <p className="text-xs font-thin ml-2">{transaction.type}</p> */}
                        {
                            transaction.type === 'Send Money' ? <p className="text-sm  text-red-400 font-thin ml-2">সেন্ড মানি </p> : null
                        }
                        {
                            transaction.type === 'Cash Out' ? <p className="text-sm  text-rose-500 font-thin ml-2">ক্যাশ আউট </p> : null
                        }
                        {
                            transaction.type === 'Mobile Recharge ' ? <p className="text-sm  text-rose-500 font-thin ml-2">রিচার্জ </p> : null
                        }
                        <p className="text-xs font-thin ml-2 mt-1">{transaction.phone}</p>
                        <p className="text-xs font-thin ml-2 mt-1">Trans ID : {transaction.tranId}</p>
                    </div>
                </div>
                {
                    transaction.type === 'Send Money' ? <p className="text-sm  text-red-400 font-semibold"> - {transaction.amount}</p> : null
                }
                {
                    transaction.type === 'Cash Out' ? <p className="text-sm  text-rose-500 font-semibold"> - {transaction.amount}</p> : null
                }
                {
                    transaction.type === 'Mobile Recharge ' ? <p className="text-sm  text-rose-500 font-semibold"> - {transaction.amount}</p> : null
                }
            </div>
        </div>
    );
};

export default AllTransaction;