import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../Component/BlogCard';
import { setBlog } from '../Reducer/Slice/blogSlice';
import { BASE_URL } from '../Services/api';
import { fetchData } from '../Services/apiConnector';
import CommingSoon from '../Component/CommingSoon';
import PreLoader from '../Component/PreLoader';

const Blog = () => {
    const blog = useSelector((state) => state.blog.blogData);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Blogs";      
          
        setIsLoading(true);
        fetchData(`${BASE_URL}/blog.json`, (data) => {
            const sortedBlogs = data.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
            dispatch(setBlog(sortedBlogs));
            setIsLoading(false);
        });
    }, [dispatch]);

    return (
        <section id="blog" className="py-10 lg:py-20 lg:mx-20 p-4">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Blogs</h2>
                <hr className="flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>

            {isLoading ? (
                <PreLoader />
            ) : blog?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {blog.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <CommingSoon />
            )}
        </section>
    );
};

export default Blog;
