import React, { useState } from 'react';
import { FiZoomIn } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { projectItems } from "../../data/project";
import PreLoader from '../../Component/PreLoader';

const Project = () => {
    const [activeFilter, setActiveFilter] = useState('*');
    const [loadedImages, setLoadedImages] = useState({}); // To track which images are loaded

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const handleImageLoad = (index) => {
        setLoadedImages((prevState) => ({
            ...prevState,
            [index]: true, // Mark the image at this index as loaded
        }));
    };

    return (
        <section id="projects" className="scroll-mt-[11vh] section py-12 px-3 lg:p-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto text-center mb-12" data-aos="fade-up" data-aos-delay="100">
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Projects</h2>
                    <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-justify lg:text-center lg:text-2xl ">
                    Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
            </div>


            <div className="container mx-auto dark:text-slate-200">
                {/* Portfolio Filters */}

                {/* <ul className="flex justify-center space-x-4 mt-10 mb-6" data-aos="fade-up" data-aos-delay="100">
                    <li
                        className={`cursor-pointer ${activeFilter === '*' ? 'text-blue-600' : ''}`}
                        onClick={() => handleFilterChange('*')}
                    >
                        All
                    </li>
                    <li
                        className={`cursor-pointer ${activeFilter === '.MERN' ? 'text-blue-600' : ''}`}
                        onClick={() => handleFilterChange('.MERN')}
                    >
                        MERN Stack
                    </li>
                    <li
                        className={`cursor-pointer ${activeFilter === '.PERN' ? 'text-blue-600' : ''}`}
                        onClick={() => handleFilterChange('.PERN')}
                    >
                        PERN Stack
                    </li>
                    <li
                        className={`cursor-pointer ${activeFilter === '.Python' ? 'text-blue-600' : ''}`}
                        onClick={() => handleFilterChange('.Python')}
                    >
                        Python
                    </li>
                    <li
                        className={`cursor-pointer ${activeFilter === '.Javascript' ? 'text-blue-600' : ''}`}
                        onClick={() => handleFilterChange('.Javascript')}
                    >
                        Javascript
                    </li>
                </ul> */}


                {/* Portfolio Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
                    {projectItems?.filter(item => activeFilter === '*' || item.category === activeFilter.substring(1)).map((item, index) => (
                        <div key={item?.id} className="relative group" data-aos="fade-up" data-aos-delay="200">

                            {!loadedImages[index] && (
                                <div className="absolute inset-0 max-w-[375px] h-[212px] bg-slate-300 flex items-center justify-center">
                                    <PreLoader />
                                </div>
                            )}
                            <div className='max-h-64  bg-slate-200'>
                                <img
                                    src={item?.imageUrl}
                                    alt={item?.title}
                                    className={`w-full max-h-52 object-cover ${!loadedImages[index] ? 'hidden' : ''}`}
                                    onLoad={() => handleImageLoad(index)}  // Mark image as loaded when it's done
                                />
                            </div>
                            <div className={`absolute bottom-0 left-4 right-4 p-4 bg-white dark:bg-slate-700 dark:text-white bg-opacity-90 opacity-0 group-hover:opacity-100 group-hover:bottom-4 text-black flex flex-col justify-center items-start transition-all duration-300 ${!loadedImages[index] ? 'hidden' : ''}`}>
                                <h4 className="text-xl font-semibold">{item.title}</h4>
                                <div className='flex justify-between gap-4 text-gray-600 dark:text-gray-400'>
                                    <p className="line-clamp-2 text-left">{item.description}</p>
                                    <div className='flex'>
                                        <a href={item.imageUrl} title={item.title} className="text-2xl mr-4 hover:text-blue-500">
                                            <FiZoomIn />
                                        </a>
                                        <NavLink to={`/${item?.repositoryName ? item?.repositoryName : item.title}`} title="Project Details" className="text-2xl hover:text-blue-500">
                                            <BsLink45Deg />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
