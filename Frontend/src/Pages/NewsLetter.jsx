import React, { useEffect, useState } from 'react';
import { blog } from '../data/blog';
import { NavLink } from 'react-router-dom';
import { getDate } from '../utils/getDate';
import Heading from '../Component/Heading';
import { fetchData } from '../Services/apiConnector';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../Services/api';
import { setNewsLetterData, setSingleNewsLetterData } from '../Reducer/Slice/newsLetterSlice';
import CommingSoon from '../Component/CommingSoon';
import PreLoader from '../Component/PreLoader';

const NewsLetter = () => {

    const newsLetter = useSelector((state) => state.blog.blogData);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    
    useEffect(() => {
        document.title = "NewsLetter";

        setIsLoading(true);
        fetchData(`${BASE_URL}/newsletter.json`, (data) => {
            const sortedNewsLetter = data.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
            dispatch(setNewsLetterData(sortedNewsLetter));
            setIsLoading(false);
        });
    }, [dispatch]);


    console.log("data from github", newsLetter);

    return (
        <section id="blog" className=" py-10 lg:py-20 lg:mx-20 p-4">
            <Heading text={"NewsLetter"} />

            {isLoading ? (
                <PreLoader />
            ) : newsLetter.length > 0 ? (
                <div className="flex flex-col gap-6 text-left">
                    {newsLetter.map((post) => {
                        return (

                            <NavLink to={``}

                                key={post?.postId}
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
                    })}
                </div>
            ) : (
                <CommingSoon />
            )}

        </section>
    );
};

export default NewsLetter;
