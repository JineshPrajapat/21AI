import React from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";


const socialink = [

    {
        label: "Gmail",
        imgUrl: IoMdMail,
        link: "mailto:prajapatjinesh585@gmail.com"
    },
    {
        label: "Leetcode Profile",
        imgUrl: SiLeetcode,
        link: "https://leetcode.com/u/Jinesh_Prajapat/"
    },
    {
        label: "Github",
        imgUrl: SiGithub,
        link: "https://github.com/JineshPrajapat"
    },
    {
        label: "LinkedIn",
        imgUrl: ImLinkedin2,
        link: "https://www.linkedin.com/in/jinesh-prajapat"
    },
];

const Footer = () => {
    return (
        <footer className='bg-black dark:bg-gray-950 shadow-2xl shadow-white flex flex-col items-center  text-white px-5 py-3 md:px-20 md:py-5'>
            <div className="text-base font-normal text-center my-6 w-full">
                Let's build something incredible together.
            </div>

            <a href="https://drive.google.com/file/d/1vCzcNZrBFsLalc8SPFTIk5VR_jRAkzOT/view?usp=drive_link" target='__blank' className='p-2 px-4 duration-500 border-blue-400 hover:border-blue-500 border text-blue-500 uppercase rounded-md flex items-center justify-center gap-1 md:text-xl'>Resume <GoArrowUpRight  className="text-2xl font-semibold"/></a>

            <div className='social link flex items-center gap-6 my-6 '>
                {socialink?.map((data, index) => (
                    <a
                        href={data.link}
                        target="_blank"
                        title={data?.label}
                        className='w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border-2 border-white duration-500 hover:bg-white hover:text-black'
                    >
                        <data.imgUrl alt="" className='text-xl' />
                    </a>
                ))}
            </div>


            <hr className=" flex justify-center items-center w-full h-[1px] mb-2 bg-white" />
            <div className='text-xs font-normal'>Copyright © 2024 - Jinesh Prajapat. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer;