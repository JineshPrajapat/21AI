import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { blog } from '../data/blog';
import { getDate } from '../utils/getDate';
import BlogCard from '../Component/BlogCard';
import Heading from '../Component/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { setBlog } from '../Reducer/Slice/blogSlice';
import { BASE_URL } from '../Services/api';
import { fetchData } from '../Services/apiConnector';
import CommingSoon from '../Component/CommingSoon';
import PreLoader from '../Component/PreLoader';

const Blog = () => {

    const blog = useSelector((state) => state.blog.blogData);
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        fetchData(`${BASE_URL}/blog.json`, setData);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        if (data) {
            dispatch(setBlog(data));
        }
        setIsLoading(false);
    }, [data]);

    console.log("data from github", blog);


    return (
        <section id="blog" className="py-10 lg:py-20 lg:mx-20 p-4">

            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Blogs</h2>
                <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>

            {!isloading ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {blog?.length > 0 ?

                        blog?.map((post) => {
                            return (
                                <BlogCard post={post} />
                            )
                        })

                        :
                        <CommingSoon />
                    }
                </div>
                :
                <PreLoader />
            }

        </section>
    );
};

export default Blog;
