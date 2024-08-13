import React, { useEffect } from 'react';
import { blog } from '../data/blog';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getDate } from '../utils/getDate';

const CourseDetails = () => {
    // const location = useLocation();
    // const CourseTitle = decodeURIComponent(location.pathname.substring(1).split("/")[1]);
    const { courseTitle } = useParams();
    console.log("CourseTitle", courseTitle);
    const data = blog.filter((data) => data.title === courseTitle.replaceAll("-", " "));
    // useEffect(() => {

    // }, [location, CourseTitle]);

    return (
        <section id="blog" className=" py-10 lg:py-20 lg:mx-20 p-4">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{`${courseTitle}`}</h2>
                <hr className=" flex justify-center items-center w-40 h-1 mb-8 bg-blue-500" />
            </div>

            <div className="flex flex-col gap-6 text-left">
                <div className="py-10 px-5 lg:p-20 text-left" dangerouslySetInnerHTML={{ __html: data[0]?.content }} />
            </div>

        </section>
    );
};

export default CourseDetails;
