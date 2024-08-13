import React, { useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navLinks = [
    { label: 'Home', path: "/" },
    { label: 'About', path: "#about" },
    { label: 'Services', path: '#services' },
    {
        label: 'More',
        subMenu: [
            { label: 'Blog', path: "/blog" },
            {
                label: 'Research',
                subMenu: [
                    { label: 'Machine Learning', path: '/Research/Machine Learning' },
                    { label: 'Computer Vision', path: '/Research/Computer Vision' },
                    { label: 'Natural Language Processing', path: '/Research/Natural Language Processing' },
                    { label: 'AI Application', path: '/Research/AI Application' },
                ],
            },
            {
                label: 'Courses',
                subMenu: [
                    { label: 'Machine Learning ', path: '/Course/Machine Learning' },
                    { label: 'Computer Vision ', path: '/Course/Computer Vision' },
                    { label: 'Deep Learning ', path: '/Course/Deep Learning' },
                    { label: 'Natural Language Processing', path: '/Course/Natural Language Processing' },
                ],
            },
            { label: 'NewsLetter', path: "/NewsLetter" },
        ],
    },
    { label: 'Contact', path: '#contact' },
];


const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const [hoveredSubDropdown, setHoveredSubDropdown] = useState(null);

    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const matchRoute = (route) => {
        if (!route) {
            console.error("Undefined route passed to matchRoute");
            return false;
        }
        console.log("location.pathname:", location.pathname, "route:", route);
        const match = matchPath({ path: route }, location.pathname);
        if (!match) {
            console.warn(`No match found for route: ${route} with pathname: ${location.pathname}`);
        }
        return !!match;
    };

    return (
        <header className={`sticky top-0 flex items-center bg-black text-white p-4 transition-all duration-500 z-[997] ${isMobileMenuOpen ? 'shadow-md' : ''}`}>
            <div className="container lg:mx-20 flex items-center justify-between relative">
                <a href="index.html" className="flex items-center">
                    <h1 className="text-3xl font-bold m-0">21AI</h1>
                </a>

                <nav className={`lg:flex lg:items-center lg:relative  lg:shadow-none z-[9997] ${isMobileMenuOpen ? 'fixed inset-0 bg-gray-900 bg-opacity-80' : 'hidden'}`}>
                <IoMdClose className='lg:hidden absolute top-2 right-2 text-2xl' onClick={()=> setIsMobileMenuOpen(false)} />
                    <ul className={` text-left list-none py-4 lg:flex lg:space-x-10 ${isMobileMenuOpen ? 'flex flex-col space-y-4 p-4 bg-white mx-6 my-10 h-[90vh] text-black rounded-md overflow-x-auto overflow-y-scroll' : 'lg:flex-row'}`} >
                        {navLinks.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredDropdown(index)}
                                    onMouseLeave={() => setHoveredDropdown(null)}
                                >
                                    <a
                                        href={link?.path}
                                        onClick={() => {
                                            if (link?.path) {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}
                                        className={`relative font-medium transition-all duration-500 flex items-center justify-between gap-1
        before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-[-5px] before:left-0 lg:before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
        hover:before:scale-x-100 ${matchRoute(link?.path) ? "lg:before:scale-x-100 text-blue-600 lg:text-white" : ""}`}
                                    >
                                        {link?.label}
                                        {link?.subMenu && <IoIosArrowDown />}
                                    </a>

                                    {link.subMenu && (
                                        <ul
                                            className={`${!isMobileMenuOpen ? "absolute left-0 mt-4 w-max bg-white text-black rounded-md shadow-lg" : " bg-gray-100 rounded-md"} transition-all duration-300 ease-in ${hoveredDropdown === index ? 'lg:translate-y-0 lg:opacity-100 visible' : 'lg:translate-y-4 lg:opacity-0 lg:invisible '}`}
                                            onMouseEnter={() => setHoveredDropdown(index)}
                                            onMouseLeave={() => setHoveredDropdown(null)}
                                        >
                                            {link.subMenu.map((subLink, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="relative"
                                                    onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                    onMouseLeave={() => setHoveredSubDropdown(null)}
                                                >
                                                    <Link
                                                        to={subLink.path}
                                                        className={`flex items-center justify-between gap-2 px-4 py-2 hover:text-blue-700 transition-all duration-500 ${isMobileMenuOpen ? "font-normal" : ""}`}
                                                    >
                                                        {subLink.label}
                                                        {subLink?.subMenu && <IoIosArrowDown />}
                                                    </Link>
                                                    {subLink.subMenu && (
                                                        <ul
                                                            className={`${!isMobileMenuOpen ? "absolute right-full top-0 mt-0 w-max bg-white text-black rounded-md shadow-lg" : ""} transition-all duration-300 ease-in ${hoveredSubDropdown === subIndex ? 'translate-x-2 lg:translate-x-0 lg:opacity-100 lg:visible block' : 'lg:translate-x-4 lg:opacity-0 lg:invisible hidden'
                                                                }`}
                                                            onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                            onMouseLeave={() => setHoveredSubDropdown(null)}
                                                        >
                                                            {subLink.subMenu.map((deepLink, deepIndex) => (
                                                                <li key={deepIndex}>
                                                                    <Link
                                                                        to={deepLink.path}
                                                                        onClick={() => {
                                                                            if (deepLink?.path) {
                                                                                setIsMobileMenuOpen(false);
                                                                            }
                                                                        }}
                                                                        className={`block px-4 py-2 hover:text-blue-700 transition-all duration-300 ${isMobileMenuOpen ? "font-light" : ""}`}
                                                                    >
                                                                        {deepLink.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <IoIosApps className='lg:hidden text-3xl' onClick={toggleMobileMenu} />

            </div>
        </header>
    );
};

export default Header;
