import React from 'react';
import { RotatingLines } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className="container w-2/4 mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto mt-12 lg:mt-12 justify-items-center">
            <div className="ml-16 w-2/4 mx-auto lg:ml-28 lg:w-1/4 ">

                <RotatingLines
                    strokeColor="#000000"
                    strokeWidth="3"
                    animationDuration="0.75"
                    width="36"
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Loader;