import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navLinks = [
    { label: 'Home', path: "#hero" },
    { label: 'About', path: "#about" },
    { label: 'Services', path: '#services' },
    { label: 'Blog', path: "/Blog" },
    {
        label: 'More',
        subMenu: [
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
                    { label: 'Machine Learning ', path: '/Courses/Machine Learning' },
                    { label: 'Computer Vision ', path: '/Courses/Computer Vision' },
                    { label: 'Deep Learning ', path: '/Courses/Deep Learning' },
                    { label: 'Natural Language Processing', path: '/Courses/Natural Language Processing' },
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
    const [activeSection, setActiveSection] = useState("/");

    const navigate = useNavigate();
    const location = useLocation();

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

    return (
        <header className={`sticky top-0 flex items-center bg-black text-white p-4 transition-all duration-500 z-[997] ${isMobileMenuOpen ? 'shadow-md' : ''}`}>
            <div className="container lg:mx-20 flex items-center justify-between relative">
                <Link to="/" className="flex items-center">
                    <h1 className="text-3xl font-bold m-0">21AI</h1>
                </Link>

                <nav className={`lg:flex lg:items-center lg:relative lg:shadow-none z-[9997] ${isMobileMenuOpen ? 'fixed inset-0 bg-gray-900 bg-opacity-80' : 'hidden'}`}>
                    <IoMdClose className='lg:hidden absolute top-2 right-2 text-2xl' onClick={() => setIsMobileMenuOpen(false)} />
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
                                        onClick={() => handleNavClick(link.path)}
                                        className={`cursor-pointer relative font-medium transition-all duration-500 flex items-center justify-between gap-1
                                        before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-[-5px] before:left-0 lg:before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-in-out
                                        hover:before:scale-x-100 ${activeSection === link.path ? "lg:before:scale-x-100 text-blue-600 lg:text-white" : ""}`}
                                    >
                                        {link.label}
                                        {link?.subMenu && <IoIosArrowDown />}
                                    </span>

                                    {link.subMenu && (
                                        <ul
                                            className={`${!isMobileMenuOpen ? "absolute left-0 mt-4 w-max bg-white text-black rounded-md shadow-lg" : "bg-gray-100 rounded-md"} transition-all duration-300 ease-in ${hoveredDropdown === index ? 'lg:translate-y-0 lg:opacity-100 visible' : 'lg:translate-y-4 lg:opacity-0 lg:invisible '}`}
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
                                                    <span
                                                        onClick={() => handleNavClick(subLink?.path)}
                                                        className={`cursor-pointer flex items-center justify-between gap-2 px-4 py-2 hover:text-blue-700 transition-all duration-500 ${isMobileMenuOpen ? "font-normal" : ""}`}
                                                    >
                                                        {subLink.label}
                                                        {subLink?.subMenu && <IoIosArrowDown />}
                                                    </span>
                                                    {subLink.subMenu && (
                                                        <ul
                                                            className={`${!isMobileMenuOpen ? "absolute right-full top-0 mt-0 w-max bg-white text-black rounded-md shadow-lg" : ""} transition-all duration-300 ease-in ${hoveredSubDropdown === subIndex ? 'translate-x-2 lg:translate-x-0 lg:opacity-100 lg:visible block' : 'lg:translate-x-4 lg:opacity-0 lg:invisible hidden'
                                                                }`}
                                                            onMouseEnter={() => setHoveredSubDropdown(subIndex)}
                                                            onMouseLeave={() => setHoveredSubDropdown(null)}
                                                            
                                                        >
                                                            {subLink.subMenu.map((deepLink, deepIndex) => (
                                                                <li key={deepIndex}>
                                                                    <span
                                                                        onClick={() => handleNavClick(deepLink.path)}
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
                </nav>

                <IoIosApps className='lg:hidden text-3xl' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
        </header>
    );
};

export default Header;
