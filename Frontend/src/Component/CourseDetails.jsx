import React, { useState,useEffect } from 'react';
import { blog } from '../data/blog';
import { useParams, Link } from 'react-router-dom';
import { getDecodeURL } from '../utils/getDecodeURL';
import Heading from './Heading';
import { BASE_URL } from '../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import PreLoader from './PreLoader';
import { setCourseData } from '../Reducer/Slice/courseSlice';
import { fetchData } from '../Services/apiConnector';

const CourseDetails = () => {
    const dispatch = useDispatch();
    const { courseTitle, postTitle } = useParams();
    const data = blog.filter((data) => data.title === postTitle.replaceAll("-", " "));
    const courseDetail = useSelector(state => state.course.courseData);

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        document.title =  courseDetail ? (postTitle).replaceAll("-", " ") : "Page not found - Garud21AI";

        setIsLoading(true);
        fetchData(`${BASE_URL}/course.json`, (data) => {
            // const filteredData = data[courseTitle.replaceAll("-", " ")]?.find((item) => item.title === postTitle.replaceAll("-", " "));
            dispatch(setCourseData(data));
            setIsLoading(false);
        });
    }, [postTitle,courseDetail, dispatch]);

    return (
        <section id="coursedetails" className=" py-10 lg:py-20 dark:bg-gray-500 lg:px-20 p-4">

            <div className="mb-10 text-gray-600 dark:text-slate-300 flex items-center gap-1 text-xs text-left overflow-y-auto overflow-x-scroll">
                <Link to={`/Courses/${courseTitle}`} className=" hover:text-gray-800 dark:hover:text-slate-300 hover:underline whitespace-nowrap" >{getDecodeURL(courseTitle)}</Link>
                /
                <Link to={`/Course/${courseTitle}/${postTitle}`} className=" hover:text-gray-800 dark:hover:text-slate-300 hover:underline whitespace-nowrap" >{getDecodeURL(postTitle)}</Link>
            </div>

            {isLoading ? (
                <PreLoader />
            ) : courseDetail ? (
                <>
                    <Heading text={`${postTitle}`} />

                    <div className="flex flex-col gap-6 text-left dark:text-slate-300">
                        <div className="py-10 px-5 lg:p-20 text-left dark:text-black" dangerouslySetInnerHTML={{ __html: data[0]?.content }} />
                    </div>
                </>
            ) : (
                <p>Content Not Found</p>
            )}

        </section>
    );
};

export default CourseDetails;
