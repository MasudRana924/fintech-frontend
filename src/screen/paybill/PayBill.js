import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaInternetExplorer } from "react-icons/fa";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { IoIosWater } from "react-icons/io"
import { BsFillTelephoneFill, BsLightningCharge } from 'react-icons/bs';
import { PiTelevisionSimple, PiNotebookBold } from "react-icons/pi";
import { InputAdornment, TextField } from '@mui/material';
const PayBill = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-0 lg:border lg:rounded-lg lg:shadow-lg bg-gray-50 min-h-screen">
            <div className="flex bg-blue-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main" >
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2" ></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-sm mt-5 ">পে বিল</p>
            </div>
            <div className="border rounded ml-2 mr-2 mt-8 p-2 bg-white border-white">
                <p className="text-gray-500 text-start  text-xs mb-4 ">প্রতিষ্ঠান খুঁজুন</p>
                <div className="flex ">
                    <div className="w-full flex mt-6 pl-2 pr-2">

                        <TextField
                            id="input-with-icon-textfield"
                            label="প্রতিষ্ঠানের নাম দিন"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {/* <LocalPhoneIcon /> */}
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            className="w-full"
                            // value={receiverphone} onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <button className="w-12 bg-blue-500"> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

                    </div>
                </div>

            </div>
            <div className="m-2 bg-white border-white ">
                <p className="text-sm text-start text-gray-500 pl-2">সব প্রতিষ্ঠান</p>
            </div>
            <div className="m-2 bg-white border-white ">
                <div className="flex justify-around pt-4">
                    <div>
                        <Link to="/send">

                            <div className="flex">
                                <BsLightningCharge className="text-4xl border rounded-full p-1 text-violet-500  mb-1">ট</BsLightningCharge>

                            </div>
                            <p className="paymentCategory-text font-medium">বিদ্যুৎ</p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/cashout">
                            <div className="flex">
                                <MdOutlineLocalGasStation className="text-4xl border rounded-full p-1  text-violet-500   mb-1">ট</MdOutlineLocalGasStation>

                            </div>
                            <p className="paymentCategory-text  font-medium  text-start" >গ্যাস</p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/recharge">
                            <IoIosWater className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></IoIosWater>
                            <p className="paymentCategory-text font-medium  text-start">পানি</p></Link>
                    </div>
                    <div >
                        <Link to="/payment/number">
                            <FaInternetExplorer className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></FaInternetExplorer>
                            <p className="paymentCategory-text font-medium  text-start">ইন্টারনেট</p>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-12 ml-8 pt-4 pb-8">
                    <div >
                        <Link to="/send">

                            <div className="flex">
                                <PiTelevisionSimple className="text-4xl border rounded-full p-1 text-violet-500  mb-1">ট</PiTelevisionSimple>

                            </div>
                            <p className="paymentCategory-text font-medium">টিভি </p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/cashout">
                            <div className="flex">
                                <BsFillTelephoneFill className="text-4xl border rounded-full p-1  text-violet-500   mb-1"></BsFillTelephoneFill>

                            </div>
                            <p className="paymentCategory-text  font-medium  text-start" >টেলিফোন </p>
                        </Link>
                    </div>
                    <div >
                        <Link to="/recharge">
                            <PiNotebookBold className="text-4xl border rounded-full p-1 text-violet-500  mb-1"></PiNotebookBold>
                            <p className="paymentCategory-text font-medium  text-start">অন্যান্য</p></Link>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default PayBill;