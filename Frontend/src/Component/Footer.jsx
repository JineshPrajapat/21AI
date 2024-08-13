import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImLinkedin2 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


const socialink = [

    {
        imgUrl: RiTwitterXLine,
        link: "#"
    },
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
        link: "/courses"
    },
    {
        name: "Machine Learning",
        link: '/Course/Machine Learning'
    },
    {
        name: "Natural Language Processing ",
        link: '/Course/Natural Language Processing'
    },
    {
        name: "Computer Vision",
        link: '/Course/Computer Vision'
    },
]

const Research = [
    {
        name: "Machine Learning",
        link: '/Research/Machine Learning'
    },
    {
        name: "Natural Language Processing ",
        link: '/Research/Natural Language Processing'
    },
    {
        name: "Computer Vision",
        link: '/Research/Machine Learning'
    },
    {
        name: "AI Application",
        link: '/Research/AI Application'
    },
]

const contactUs = [
    {
        name: "+91 9972148403​",
        link: "tel:+91 9972148403​",
        imgUrl: BsTelephoneFill
    },
    {
        name: "+91 9319339686",
        link: "tel:+91 9319339686",
        imgUrl: BsTelephoneFill
    },
    {
        name: "team@ai21.com",
        link: "mailto:team@ai21.com",
        imgUrl: HiOutlineMail
    },
]




const Footer = () => {
    return (
        <footer className='bg-black flex flex-col items-center  text-white px-5 py-3 md:px-20 md:py-5'>
            <div className="flex flex-col  items-center gap-1 mb-4">
                <div className="flex justify-center w-full">
                    <NavLink
                        to="/"
                        className="text-left font-inter italic font-extrabold text-2xl lg:text-5xl"
                    >
                        21AI
                    </NavLink>
                </div>
                <div className="text-xl font-normal text-left w-full">
                    Reengineering Business operations with AI is latest innovation
                </div>
            </div>


            <div className='flex flex-col w-full gap-4 justify-start md:grid grid-cols-3 md:justify-between py-4 whitespace-nowrap'>

                {/* contact */}
                <div className='contact text-left'>
                    <h2 className='text-lg font-semibold uppercase pb-2'>Contact Us</h2>
                    <div className='flex flex-col gap-1 lg:pb-8 '>
                        {contactUs.map((data, index) => (
                            <div className='flex text-base items-center gap-2'>
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
                    <h2 className='text-lg font-semibold uppercase pb-2'>Courses</h2>
                    <div className='flex flex-col list-disc pl-2'>
                        {courses.map((data, index) => (
                            <li className='text-base '><a href={data?.link}>{data.name}</a></li>
                        ))}
                    </div>
                </div>

                <div className='research text-left '>
                    <h2 className='text-lg font-semibold uppercase pb-2'>Quick Links</h2>
                    <div className='flex flex-col list-disc pl-2'>
                        {Research.map((data, index) => (
                            <li className='text-base'><a href={data?.link}>{data.name}</a></li>
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