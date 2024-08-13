import React, { useEffect } from 'react';
import { blog } from '../data/blog';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getDate } from '../utils/getDate';

const Courses = () => {
    const location = useLocation();
    const CourseTitle = decodeURIComponent(location.pathname.substring(1).split("/")[1]);

    useEffect(() => {

    }, [location, CourseTitle]);

    return (
        <section id="blog" className=" py-10 lg:py-20 lg:mx-20 p-4">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{`Courses / ${CourseTitle}`}</h2>
                <hr className=" flex justify-center items-center w-40 h-1 mb-8 bg-blue-500" />
            </div>

            <div className="flex flex-col gap-6 text-left">
                {blog.map((post) => {
                    return (

                        <NavLink to={`/Courses/${(post.title).replaceAll(" ", "-")}`}

                            key={post.postId}
                            className=" dark:bg-gray-800 dark:text-white dark:border-none rounded-lg overflow-hidden transition-transform transform border-[2px] border-slate-100 shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <div className=" p-4 flex flex-col-reverse lg:flex-row lg:gap-10 items-center">
                                <div className="w-full md:w-max flex justify-end text-sm text-gray-500 dark:text-gray-300">
                                    <span className=' whitespace-nowrap w-full'>{getDate(post.publishedDate)}</span>
                                 
                                </div>
                                <h2 className="w-full text-sm lg:text-xl font-semibold mb-2 duration-500 dark:hover:text-blue-400 ">{post.title}</h2>
                              

                            </div>
                        </NavLink>
                    )
                })}
            </div>

        </section>
    );
};

export default Courses;
