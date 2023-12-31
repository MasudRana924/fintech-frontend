import React  from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineDownload } from 'react-icons/ai';
import { PiShareFatLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { message } from 'antd';
const QRCode = () => {
    const { qrcode } = useSelector(state => state.type);
    const downloadQRCode = (e) => {
        e.preventDefault();
        saveAs(qrcode, 'orcode.png')
    }
    const handleShare=(e)=>{
        e.preventDefault();
        message.error("কাজ চলিতেছে")
    }
    return (
        <div className="lg:w-1/4 lg:mx-auto lg:mt-24 lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/profile">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">আমার QR code</p>
            </div>
            <div className="flex flex-1 items-center justify-center border rounded-lg ml-2 mr-2 mt-4">
                <img src={qrcode} alt="" className="w-3/4 mx-auto"/>
            </div>

            <div>
                <p className="mt-8 text-center text-xs text-violet-500 font-medium">QR কোড শেয়ার করুণ </p>
                <div className="flex flex-1 items-center justify-center mt-4 gap-4">
                    <button className="flex border p-2 text-violet-500 text-xs gap-2 border-violet-500 rounded-lg" onClick={downloadQRCode}>
                        <AiOutlineDownload className="text-violet-500 text-xl"></AiOutlineDownload>
                        ডাউনলোড করুণ
                    </button>
                    <button className="flex border p-2 text-xs gap-2 border-violet-500 rounded-lg text-violet-500" onClick={handleShare}> <PiShareFatLight className="text-violet-500 text-xl"></PiShareFatLight> শেয়ার করুণ </button>

                </div>
            </div>
        </div>
    );
};

export default QRCode;