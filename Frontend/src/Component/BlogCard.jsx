import React from "react";
import { NavLink } from "react-router-dom";
import { getDate } from "../utils/getDate";

const BlogCard = ({ post }) => {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-all transform duration-500 hover:-translate-y-2 hover:border-blue-600 border-b-4 border-transparent" key={post.postId}>
                <NavLink to={`/Blog/${(post.title).replaceAll(" ", '-')}`}>
                    <span className="text-xl underline font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition">{post.title}</span>
                </NavLink>
                <p className=" text-sm mt-1 dark:text-slate-400">
                    By
                    <span className=" italic">
                        {post?.author ?? " Bhoop Singh"}
                    </span>
                </p>

                <p className=" text-sm mt-1 dark:text-slate-400">Posted On {getDate(post.publishedDate)}</p>

                <p className="mt-4 text-sm text-justify text-gray-600 dark:text-gray-300">
                    {(post.summary).substring(0, 200)}... <NavLink to={`/Blog/${(post.title).replaceAll(" ", '-')}`} className="text-black dark:text-white font-semibold underline">Read more</NavLink>
                </p>

                <div className="mt-2">
                    {post.tags.map((tag, index) => (
                        <NavLink key={index} to={`/Blog/tag/${tag.replaceAll(" ", "-")}`}>
                            <span className=" text-blue-700 text-xs mr-2 font-bold">{`#${tag}`}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogCard;