import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import HeaderMobile from './HeaderMobile';
import DarkModeToggle from './DarkModeToggle';
import images from '../constants/images';

const navLinks = [
    { _id: 0, label: 'Home', path: "#hero" },
    { _id: 1, label: 'About', path: "#about" },
    { _id: 2, label: 'Services', path: '#services' },
    { _id: 3, label: 'Blog', path: "/Blog" },
    {
        _id: 4, label: 'More',
        subMenu: [
            {
                _id: 0, label: 'Research',
                subMenu: [
                    { _id: 0, label: 'Machine Learning', path: '/Researches/Machine Learning' },
                    { _id: 1, label: 'Computer Vision', path: '/Researches/Computer Vision' },
                    { _id: 2, label: 'Natural Language Processing', path: '/Researches/Natural Language Processing' },
                    { _id: 3, label: 'AI Application', path: '/Researches/AI Application' },
                ],
            },
            {
                _id: 1, label: 'Courses',
                subMenu: [
                    { _id: 0, label: 'Machine Learning ', path: '/Courses/Machine Learning' },
                    { _id: 1, label: 'Computer Vision ', path: '/Courses/Computer Vision' },
                    { _id: 2, label: 'Deep Learning ', path: '/Courses/Deep Learning' },
                    { _id: 3, label: 'Natural Language Processing', path: '/Courses/Natural Language Processing' },
                    { _id: 4, label: 'Quantum Compunting', path: '/Courses/Quantum Computing' },
                ],
            },
            { _id: 2, label: 'NewsLetter', path: "/NewsLetter" },
        ],
    },
    { _id: 5, label: 'Contact', path: '#contact' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const [hoveredSubDropdown, setHoveredSubDropdown] = useState(null);
    const [activeSection, setActiveSection] = useState("/");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (path) => {
        if (path && path.startsWith("#")) {
            const sectionId = path.substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                const offset = 100;
                const sectionPosition = section.offsetTop - 100;
                // window.scrollTo({ top: sectionPosition, behavior: "smooth" })
                section.scrollIntoView({ behavior: "smooth" });
            } else {
                navigate("/");
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const offset = 100;
                        const sectionPosition = section.offsetTop - 150;
                        // window.scrollTo({ top: sectionPosition, behavior: "smooth" })
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
            setActiveSection(path);
        } else {
            navigate(path);
            setActiveSection(path);
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks
                .filter(link => link?.path && link?.path?.startsWith("#"))
                .map(link => document.getElementById(link.path.substring(1)));

            let currentSection = "/";
            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop - 100; // Adjust as needed
                    if (window.scrollY >= sectionTop) {
                        currentSection = `#${section.id}`;
                    }
                }
            });

            console.log(activeSection);

            setActiveSection(currentSection);
            console.log("activeSection", activeSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <header className={`sticky top-0 flex items-center bg-black dark:bg-gray-950 shadow-sm lg:shadow-none dark:shadow-md dark:shadow-gray-800 shadow-white text-white p-4 transition-all duration-500 z-[997] ${isMobileMenuOpen ? 'shadow-md' : ''} `}>
            <div className="container lg:mx-20 flex items-center justify-between relative">
                <div className='flex items-center justify-between w-full'>
                    <Link to="/" className="flex items-center gap-1">
                        <div className=" h-8 lg:h-14"><img src={images?.garud} alt='logo' className=' h-full w-full' /></div>
                        <div className=" h-6 lg:h-10"><img src={images?.brandName} alt='logo' className=' h-full w-full' /></div>
                    </Link>
                    <div className='lg:hidden'>
                        <DarkModeToggle />
                    </div>
                </div>

                {windowWidth < 1024 && isMobileMenuOpen ?

                    <>
                        <HeaderMobile
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                        />
                    </>
                    :
                    <nav className={`lg:flex lg:items-center lg:relative lg:shadow-none flex gap-8  ${!isMobileMenuOpen ? "hidden" : ""}`}>
                        <ul className={`text-left list-none py-4 lg:flex lg:space-x-10 ${isMobileMenuOpen ? 'flex flex-col space-y-4 p-4 bg-white mx-6 my-10 h-[90vh] text-black rounded-md overflow-x-auto overflow-y-scroll' : 'lg:flex-row'}`} >
                            {navLinks.map((link, index) => {
                                console.log("link.path chek", link?.path)
                                return (
                                    <li
                                        key={index}
                                        className="relative"
                                        onMouseEnter={() => setHoveredDropdown(index)}
                                        onMouseLeave={() => setHoveredDropdown(null)}
                                    >
                                        <span
                                            onClick={() => handleNavClick(link?.path)}
                                            className={`cursor-pointer relative font-medium transition-all duration-500 flex items-center justify-between gap-1
                                        before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-[-5px] before:left-0 lg:before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
                                        hover:before:scale-x-100 ${activeSection === link.path ? "lg:before:scale-x-100 text-blue-600 lg:text-white" : ""}`}
                                        >
                                            {link?.label}
                                            {link?.subMenu && <IoIosArrowDown />}
                                        </span>

                                        {link.subMenu && (
                                            <ul
                                                className={`${!isMobileMenuOpen ? "absolute left-0 mt-4 w-max bg-white dark:bg-gray-800 dark:text-gray-300 text-black  rounded-md shadow-lg" : "bg-gray-100 rounded-md"} transition-all duration-300 ease-in ${hoveredDropdown === index ? 'lg:translate-y-0 lg:opacity-100 visible' : 'lg:translate-y-4 lg:opacity-0 lg:invisible '}`}
                                                onMouseEnter={() => setHoveredDropdown(index)}
                                                onMouseLeave={() => setHoveredDropdown(null)}
                                            >
                                                {link?.subMenu.map((subLink, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="relative"
                                                        onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                        onMouseLeave={() => setHoveredSubDropdown(null)}
                                                    >
                                                        <span
                                                            onClick={() => handleNavClick(subLink?.path && (subLink?.path).replaceAll(" ", "-"))}
                                                            className={`cursor-pointer flex items-center justify-between gap-2 px-4 py-2 hover:text-blue-700 transition-all duration-500 ${isMobileMenuOpen ? "font-normal" : ""}`}
                                                        >
                                                            {subLink.label}
                                                            {subLink?.subMenu && <IoIosArrowDown />}
                                                        </span>
                                                        {subLink.subMenu && (
                                                            <ul
                                                                className={`${!isMobileMenuOpen ? "absolute right-full top-0 mt-0 w-max bg-white dark:bg-gray-800 dark:text-gray-300 text-black rounded-md shadow-lg" : ""} transition-all duration-300 ease-in ${hoveredSubDropdown === subIndex ? 'translate-x-2 lg:translate-x-0 lg:opacity-100 lg:visible block' : 'lg:translate-x-4 lg:opacity-0 lg:invisible hidden'
                                                                    }`}
                                                                onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                                onMouseLeave={() => setHoveredSubDropdown(null)}

                                                            >
                                                                {subLink.subMenu.map((deepLink, deepIndex) => (
                                                                    <li key={deepIndex}>
                                                                        <span
                                                                            onClick={() => handleNavClick(deepLink.path && (deepLink.path).replaceAll(" ", "-"))}
                                                                            className={`cursor-pointer block px-4 py-2 hover:text-blue-700 transition-all duration-300 ${isMobileMenuOpen ? "font-light" : ""}`}
                                                                        >
                                                                            {deepLink.label}
                                                                        </span>
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
                        <DarkModeToggle />
                    </nav>
                }
                {/* <IoMdClose className={`${isMobileMenuOpen ? " z-[1000] text-black dark:text-slate-300" : "hidden "} absolute top-8 right-2 text-2xl`} onClick={() => setIsMobileMenuOpen(false)} /> */}
                <IoIosApps className='lg:hidden text-3xl' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

            </div>
        </header>
    );
};

export default Header;
