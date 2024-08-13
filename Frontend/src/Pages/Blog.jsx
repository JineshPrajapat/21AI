import React from 'react';
import { blog } from '../data/blog';

const Blog = () => {
    return (
        <div className=" py-20 lg:mx-20 p-4">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Blogs</h2>
                <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {blog.map((post) => (
                    <div
                        key={post.postId}
                        className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <img
                            src={post.imgURL}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 ">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                                <span>{post.tags.join(", ")}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
