import React, { useState, useEffect } from 'react';
import { blog } from '../data/blog';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getDate } from '../utils/getDate';
import Heading from '../Component/Heading';
import CommingSoon from '../Component/CommingSoon';
import { setCourseData } from '../Reducer/Slice/courseSlice';
import { BASE_URL } from '../Services/api';
import { fetchData } from '../Services/apiConnector';
import { useDispatch, useSelector } from 'react-redux';

const Courses = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const courseData = useSelector((state) => state.course.courseData)

    const CourseTitle = decodeURIComponent(location.pathname.substring(1).split("/")[1].replaceAll("-", " "));

    const [isloading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchData(`${BASE_URL}/course.json`, setData);
        setIsLoading(false);
    }, [location, CourseTitle]);

    useEffect(() => {
        setIsLoading(true);
        if (data) {
            console.log("research data", data);
            dispatch(setCourseData(data));
        }
        setIsLoading(false)
    }, [data]);

    return (
        <section id="blog" className=" py-10 lg:py-20 lg:mx-20 p-4">
            <Heading text={`Courses / ${CourseTitle}`} />

            <div className="flex flex-col gap-6 text-left">
                {!courseData?.length > 0 && (CourseTitle != "Quantum Computing") ? courseData?.map((post) => {
                    console.log("poat", post);
                    return (

                        <NavLink to={`/Course/${CourseTitle && (CourseTitle).replaceAll(" ", "-")}/${post.title && (post?.title).replaceAll(" ", "-")}`}

                            key={post.postId}
                            className=" dark:bg-gray-800 dark:text-white dark:border-none rounded-lg overflow-hidden transition-transform transform border-[2px] border-slate-100 shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <div className=" p-4 flex flex-col-reverse lg:flex-row lg:gap-10 items-center">
                                <div className="w-full md:w-max flex justify-end text-sm text-gray-500 dark:text-gray-300">
                                    <span className=' whitespace-nowrap w-full'>{getDate(post?.publishedDate)}</span>

                                </div>
                                <h2 className="w-full text-sm lg:text-xl font-semibold mb-2 duration-500 dark:hover:text-blue-400 ">{post.title}</h2>


                            </div>
                        </NavLink>
                    )
                })
                    :
                    <CommingSoon />
                }
            </div>

        </section>
    );
};

export default Courses;
