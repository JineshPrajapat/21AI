import React from "react";

const Heading = ({text}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className="text-xl lg:text-4xl text-left font-semibold text-gray-800 dark:text-white">{text}</h2>
            <hr className=" flex justify-center items-center w-40 h-1 mb-8 bg-blue-500" />
        </div>
    );
};

export default Heading;