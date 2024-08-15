import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo2 from '../assets/images/logo_white.svg'

const navLinks = [
    { _id: 0, label: 'Home', path: "#hero" },
    { _id: 1, label: 'About', path: "#about" },
    { _id: 2, label: 'Services', path: '#services' },
    { _id: 3, label: 'Blog', path: "/Blog" },
    {
        _id: 4, label: 'More',
        Menu: [
            {
                _id: 0,
                label: 'Research',
                subMenu: [
                    { _id: 0, label: 'Machine Learning', path: '/Researches/Machine Learning' },
                    { _id: 1, label: 'Computer Vision', path: '/Researches/Computer Vision' },
                    { _id: 2, label: 'Natural Language Processing', path: '/Researches/Natural Language Processing' },
                    { _id: 3, label: 'AI Application', path: '/Researches/AI Application' },
                ],
            },
            {
                _id: 1,
                label: 'Courses',
                subMenu: [
                    { _id: 0, label: 'Machine Learning ', path: '/Courses/Machine Learning' },
                    { _id: 1, label: 'Computer Vision ', path: '/Courses/Computer Vision' },
                    { _id: 2, label: 'Deep Learning ', path: '/Courses/Deep Learning' },
                    { _id: 3, label: 'Natural Language Processing', path: '/Courses/Natural Language Processing' },
                    { _id: 4, label: 'Quantum Computing', path: '/Courses/Quantum Computing' },
                ],
            },
            { _id: 2, label: 'NewsLetter', path: "/NewsLetter" },
        ],
    },
    { _id: 5, label: 'Contact', path: '#contact' },
];

const HeaderMobile = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isSuubMenuVisible, setIsSubMenuVisible] = useState(Array(0));
    const [isActive, setIsActive] = useState(Array(0));
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const handleVisible = (id) => {
        setIsVisible(
            !isVisible
        );
        setIsSubMenuVisible(Array(0));
        // setIsMobileMenuOpen(false);
    };

    const handleSubMenuVisible = (id) => {
        setIsSubMenuVisible(
            !isSuubMenuVisible.includes(id)
                ? [id]
                : isSuubMenuVisible.filter((e) => e !== id)
        );
    };

    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id)
                ? [id]
                : isActive.filter((e) => e !== id)
        );
    };

    const handleNavClick = (path) => {
        if (path && path.startsWith("#")) {
            const sectionId = path.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            } else {
                navigate("/");
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
         

        } else {

            console.log("path", path)
            navigate(path);
        }
        setIsOpen(false)
        setIsSubMenuVisible(Array(0))
        setIsActive(Array(0))
        setIsVisible(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={` flex items-center bg-black text-white p-4 transition-all duration-500 z-[997]`}>
                <div className={` fixed inset-0   py-10 ${isOpen ? "bg-opacity-80 bg-gray-900 z-[997]" : "z-[0]"}`}>
                    {isOpen && (<div className='bg-white dark:bg-gray-900  h-[90vh] text-black flex flex-col overflow-x-auto overflow-y-scroll space-y-4 backdrop-blur mx-5  rounded-xl '>
                        {navLinks?.map((link, index) => (
                            <div key={index} className={`bg-whit dark:text-slate-300 flex flex-col  px-4 mx-5 ${index === 0 ? "mt-5" : ""}  text-black rounded-md ${index === 0 ? "rounded-t-xl" : "border-none"} ${index + 1 === navLinks?.length ? " rounded-b-xl" : "border-none"}`}>
                                {link?.label === 'More' ? (<>
                                    <div className={`text-left flex justify-between font-medium items-center ${isVisible ? " text-blue-600" : ""}`} onClick={() => { handleVisible(link._id); }}>
                                        <p>{link?.label}</p>
                                        <div ><IoIosArrowDown className={`${isVisible ? ' rotate-180' : ''}`} /></div>
                                    </div>
                                    {isVisible && (<div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col gap-y-2'>
                                        {link?.Menu?.map((menuItem, index) => (
                                            <div key={index} className="text-left">
                                                {menuItem.label === 'NewsLetter' ?
                                                    (<div onClick={() => handleNavClick(menuItem?.path && (menuItem?.path).replaceAll(" ", "-"))}> {menuItem?.label} </div>) :
                                                    (<>
                                                        <div className="flex flex-row items-center justify-between mb-1 " onClick={() => { handleSubMenuVisible(menuItem._id); }}>
                                                            <p className="flex flex-row items-center gap-x-2 text-richblack-50 font-normal">{menuItem?.label} </p>
                                                            <div ><IoIosArrowDown className={`  ${isSuubMenuVisible?.includes(menuItem._id) ? ' rotate-180' : ''}`} /> </div>
                                                        </div>
                                                        {isSuubMenuVisible?.includes(menuItem._id) && (
                                                            <div className='flex flex-col font-light px-2'>
                                                                {menuItem?.subMenu?.map((submenuItem, index) => (
                                                                    <div key={index} onClick={() => { handleActive(submenuItem._id); handleNavClick(submenuItem.path && (submenuItem.path).replaceAll(" ", "-")) }}>
                                                                        {submenuItem?.label}
                                                                    </div>
                                                                ))}</div>
                                                        )}
                                                    </>)}
                                            </div>
                                        ))}
                                    </div>)}
                                </>) : (<a onClick={() => handleNavClick(link.path)} className="flex flex-row font-medium gap-x-2 items-center" href={link.path}>
                                    {link?.label}
                                </a>)}
                            </div>
                        ))}
                    </div>)}
                </div>

                <IoMdClose className={`${isMobileMenuOpen ? " z-[1000] text-black dark:text-slate-300" : "hidden "} absolute top-8 right-2 text-2xl`} onClick={() => setIsMobileMenuOpen(false)} />

            </header>

        </>
    );
};

export default HeaderMobile;
