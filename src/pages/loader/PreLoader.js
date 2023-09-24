import React from 'react';
import logo from '../../images/logo (2).png'
const PreLoader = () => {
    return (
        <div className="container w-2/4 mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto mt-64  lg:mt-96 justify-items-center">
        <div className="ml-5 w-3/4 mx-auto lg:ml-28  ">
            <img src={logo} alt="" className="w-full h-16"/>
        </div>
    </div>
    );
};

export default PreLoader;