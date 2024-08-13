import React, { useEffect } from 'react';
import { blog } from '../data/blog';
import { useLocation } from 'react-router-dom';

const Research = () => {
    const location = useLocation();
    const ResearchTitle = decodeURIComponent(location.pathname.substring(1).split("/")[1]);

    useEffect(() => {

    }, [location, ResearchTitle]);

    return (
        <section id="blog" className="py-10 lg:py-20 lg:mx-20 p-4">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{`Research / ${ResearchTitle}`}</h2>
                <hr className=" flex justify-center items-center w-40 h-1 mb-8 bg-blue-500" />
            </div>

            <div className="flex flex-col gap-6 text-left">
                {blog.map((post) => {
                    return (
                        <div

                            key={post.postId}
                            className="bg-white dark:bg-gray-800 dark:text-white dark:border-none rounded-lg overflow-hidden transition-transform transform border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >

                            <div className=" p-4 flex flex-col-reverse lg:flex-row lg:gap-10 items-center">
                                <div className="w-full md:w-max flex justify-end text-sm text-gray-500 dark:text-gray-300">
                                    <span text>{new Date(post.publishedDate).toLocaleDateString()}</span>
                                    {/* <span>{post.tags.join(", ")}</span> */}
                                </div>
                                <h2 className="w-full text-sm lg:text-xl font-semibold mb-2 duration-500 dark:hover:text-blue-400 ">{post.title}</h2>
                                {/* <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p> */}
                                {/* <div  dangerouslySetInnerHTML={{ __html: post.content }}></div> */}

                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    );
};

export default Research;
