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
                    { _id: 0, label: 'Machine Learning', path: '/Research/Machine Learning' },
                    { _id: 1, label: 'Computer Vision', path: '/Research/Computer Vision' },
                    { _id: 2, label: 'Natural Language Processing', path: '/Research/Natural Language Processing' },
                    { _id: 3, label: 'AI Application', path: '/Research/AI Application' },
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
                    { _id: 4, label: 'Quantom Computing', path: '/Courses/Quantom Computing' },
                ],
            },
            { _id: 2, label: 'NewsLetter', path: "/NewsLetter" },
        ],
    },
    { _id: 5, label: 'Contact', path: '#contact' },
];

const HeaderMobile = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isSuubMenuVisible, setIsSubMenuVisible] = useState(Array(0));
    const [isActive, setIsActive] = useState(Array(0));
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleVisible = (id) => {
        setIsVisible(
            !isVisible
        );
        setIsSubMenuVisible(Array(0));
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
            navigate(path);
        }
        setIsOpen(false)
        setIsSubMenuVisible(Array(0))
        setIsActive(Array(0))
        setIsVisible(false);
    };

    return (
        <>
            <header className={`sticky top-0 flex items-center bg-black text-white p-4 transition-all duration-500 z-[99]`}>
                <div className="w-full flex items-center justify-between relative ">
                    <Link to="/" className="flex items-center">
                        <div className="h-20"><img src={logo2} alt='logo' className=' h-full w-full' /></div>
                    </Link>
                    {!isOpen ? <IoIosApps className='text-3xl z-[999]' onClick={() => { setIsOpen(!isOpen) }} /> : <IoMdClose className='text-3xl z-[999] text-black absolute top-10 right-4' onClick={() => { setIsOpen(!isOpen); setIsVisible(false); setIsSubMenuVisible(Array(0)); setIsActive(Array(0)); }} />}
                </div>
                <div className={`h-screen z-[10] w-screen fixed inset-0   py-10 ${isOpen ? "bg-opacity-80 bg-gray-900" : ""}`}>
                    {isOpen && (<div className='bg-white h-[90vh] text-black flex flex-col overflow-x-auto overflow-y-scroll space-y-4 backdrop-blur mx-5 py-5  rounded-xl '>
                        {navLinks?.map((link, index) => (
                            <div key={index} className={`bg-white flex flex-col  px-4 mx-5 ${index === 0 ? "mt-5" : ""}  text-black rounded-md ${index === 0 ? "rounded-t-xl" : "border-none"} ${index + 1 === navLinks?.length ? " rounded-b-xl" : "border-none"}`}>
                                {link?.label === 'More' ? (<>
                                    <div className={`text-left flex justify-between font-medium items-center ${isVisible ? " text-blue-600" : ""}`} onClick={() => { handleVisible(link._id); }}>
                                        <p>{link?.label}</p>
                                        <div ><IoIosArrowDown className={`${isVisible ? ' rotate-180' : ''}`} /></div>
                                    </div>
                                    {isVisible && (<div className='bg-gray-100 p-4 rounded-lg flex flex-col gap-y-2'>
                                        {link?.Menu?.map((menuItem, index) => (
                                            <div key={index} className="text-left">
                                                {menuItem.label === 'NewsLetter' ?
                                                    (<div onClick={() => handleNavClick(menuItem?.path)}> {menuItem?.label} </div>) :
                                                    (<>
                                                        <div className="flex flex-row items-center justify-between mb-1 " onClick={() => { handleSubMenuVisible(menuItem._id); }}>
                                                            <p className="flex flex-row items-center gap-x-2 text-richblack-50 font-normal">{menuItem?.label} </p>
                                                            <div ><IoIosArrowDown className={`  ${isSuubMenuVisible?.includes(menuItem._id) ? ' rotate-180' : ''}`} /> </div>
                                                        </div>
                                                        {isSuubMenuVisible?.includes(menuItem._id) && (
                                                            <div className='flex flex-col font-light px-2'>
                                                                {menuItem?.subMenu?.map((submenuItem, index) => (
                                                                    <div key={index} onClick={() => { handleActive(submenuItem._id); handleNavClick(submenuItem.path) }}>
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
            </header>

        </>
    );
};

export default HeaderMobile;
