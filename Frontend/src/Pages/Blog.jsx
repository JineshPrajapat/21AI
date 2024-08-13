import React from 'react';
import { Link } from 'react-router-dom';
import { blog } from '../data/blog';

const Blog = () => {
    return (
        <section id="blog" className="py-10 lg:py-20 lg:mx-20 p-4">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Blogs</h2>
                <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {blog.map((post) => (
                    <div
                        key={post.postId}
                        className="bg-white dark:bg-gray-800 dark:text-white dark:border-none rounded-lg overflow-hidden transition-transform transform shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <img
                            src={post.imgURL}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <Link to={`/Blog/${post.title}`} className="p-4">
                            <h2 className="text-xl font-semibold mb-2 ">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
                            {/* <div  dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                                <span>{post.tags.join(", ")}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Blog;
