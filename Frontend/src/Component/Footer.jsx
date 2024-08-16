import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ImLinkedin2 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo2 from '../assets/images/garud21ai.svg'
import images from '../constants/images';


const socialink = [

    // {
    //     imgUrl: RiTwitterXLine,
    //     link: "#"
    // },
    {
        imgUrl: SiGithub,
        link: "https://github.com/JineshPrajapat"
    },
    {
        imgUrl: ImLinkedin2,
        link: "https://www.linkedin.com/in/jinesh-prajapat"
    },
];

const courses = [
    {
        name: "Deep Learning",
        link: "/Courses/Deep Learning"
    },
    {
        name: "Machine Learning",
        link: '/Courses/Machine Learning'
    },
    {
        name: "Natural Language Processing ",
        link: '/Courses/Natural Language Processing'
    },
    {
        name: "Computer Vision",
        link: '/Courses/Computer Vision'
    },
]

const Research = [
    {
        name: "Machine Learning",
        link: '/Researches/Machine Learning'
    },
    {
        name: "Natural Language Processing ",
        link: '/Researches/Natural Language Processing'
    },
    {
        name: "Computer Vision",
        link: '/Researches/Computer Vision'
    },
    {
        name: "AI Application",
        link: '/Researches/AI Application'
    },
]

const contactUs = [
    // {
    //     name: "+91 9972148403​",
    //     link: "tel:+91 9972148403​",
    //     imgUrl: BsTelephoneFill
    // },
    {
        name: "+91 8905009854",
        link: "tel:+91 8905009854",
        imgUrl: BsTelephoneFill
    },
    {
        name: "team@garud21ai.com",
        link: "mailto:prajapatjinesh585.com",
        imgUrl: HiOutlineMail
    },
]




const Footer = () => {
    return (
        <footer className='bg-black dark:bg-gray-950 shadow-2xl shadow-white flex flex-col items-center  text-white px-5 py-3 md:px-20 md:py-5'>
            <div className="flex flex-col  items-center gap-1 my-8">
                <div className="flex justify-center w-full ">
                    <NavLink
                        to="/"
                        className="text-left flex items-center gap-1 font-inter italic font-extrabold text-2xl lg:text-5xl"
                    >
                        <div className=" h-8 lg:h-14"><img src={images?.garud} alt='logo' className=' h-full w-full' /></div>
                        <div className=" h-6 lg:h-10"><img src={images?.brandName} alt='logo' className=' h-full w-full' /></div>
                    </NavLink>
                </div>
                <div className="text-base font-normal text-center lg:text-left w-full">
                    Reengineering Business operations with AI is latest innovation
                </div>
            </div>


            <div className='flex flex-col w-full gap-8 justify-start md:grid grid-cols-3 md:justify-between py-4 whitespace-nowrap'>

                {/* contact */}
                <div className='contact text-left'>
                    <h2 className='text-lg font-semibold uppercase pb-2'>Contact Us</h2>
                    <div className='flex flex-col gap-1 lg:pb-8 '>
                        {contactUs.map((data, index) => (
                            <div className='flex text-base items-center gap-2 text-gray-400'>
                                <div className='w-6 h-6 flex items-center'>
                                    <data.imgUrl alt="" />
                                </div>
                                <a href={data.link}>{data.name}</a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* course */}
                <div className='Courses text-left'>
                    <h2 className='text-xl font-semibold uppercase pb-1'>Courses</h2>
                    <div className='flex flex-col gap-2 list-none'>
                        {courses.map((data, index) => (
                            <li className='text-base duration-300 transition-all ease-in-out text-gray-400 hover:underline'><Link to={data?.link && (data?.link).replaceAll(" ", "-")}>{data.name}</Link></li>
                        ))}
                    </div>
                </div>

                <div className='research text-left '>
                    <h2 className='text-xl font-semibold uppercase pb-1'>Research</h2>
                    <div className='flex flex-col gap-2 list-none'>
                        {Research.map((data, index) => (
                            <li className='text-base duration-300 transition-all ease-in-out text-gray-400 hover:underline'><Link to={data?.link && (data?.link).replaceAll(" ", "-")}>{data.name}</Link></li>
                        ))}
                    </div>
                </div>

            </div>

            <div className='social link flex items-center gap-6 mb-4 '>
                {socialink.map((data, index) => (
                    <a
                        href={data.link}
                        target="_blank"
                        className='w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border-2 border-white duration-500 hover:bg-white hover:text-black'
                    >
                        <data.imgUrl alt="" />
                    </a>
                ))}
            </div>


            <hr className=" flex justify-center items-center w-full h-[1px] mb-2 bg-white" />
            <div className='text-xs font-normal'>AI21  © 2024. All Rights Reserved.
                <NavLink to="/privacypolicy">
                    Privacy Policy
                </NavLink> </div>
        </footer>
    )
}

export default Footer;