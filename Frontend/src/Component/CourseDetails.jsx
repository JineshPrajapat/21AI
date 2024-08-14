import React, { useEffect } from 'react';
import { blog } from '../data/blog';
import { useParams, Link } from 'react-router-dom';
import { getDate } from '../utils/getDate';
import { getDecodeURL } from '../utils/getDecodeURL';
import Heading from './Heading';
import { IoIosArrowForward } from 'react-icons/io';

const CourseDetails = () => {
    const { courseTitle, postTitle } = useParams();
    console.log("CourseTitle", courseTitle);
    const data = blog.filter((data) => data.title === postTitle.replaceAll("-", " "));
    // useEffect(() => {

    // }, [location, CourseTitle]);

    return (
        <section id="coursedetails" className=" py-10 lg:py-20 dark:bg-gray-500 lg:px-20 p-4">

            <div className="mb-10 text-gray-600 dark:text-slate-300 flex items-center">
                <Link to={`/Courses/${courseTitle}`} className=" hover:text-gray-800 dark:hover:text-slate-300 hover:underline" >{getDecodeURL(courseTitle)}</Link>
                <IoIosArrowForward />
                <Link to={`/Course/${courseTitle}/${postTitle}`} className=" hover:text-gray-800 dark:hover:text-slate-300 hover:underline" >{getDecodeURL(postTitle)}</Link>
            </div>

            <Heading text={`${postTitle}`} />

            <div className="flex flex-col gap-6 text-left dark:text-slate-300">
                <div className="py-10 px-5 lg:p-20 text-left dark:text-black" dangerouslySetInnerHTML={{ __html: data[0]?.content }} />
            </div>

        </section>
    );
};

export default CourseDetails;
