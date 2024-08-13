import React from "react";
import { NavLink } from "react-router-dom";
import { getDate } from "../utils/getDate";

const BlogCard = ({ post }) => {
    return (
        <div>
            <div className="p-5 border-[2px] rounded-xl border-slate-100" key={post.postId}>
                <NavLink to={`/Blog/${(post.title).replaceAll(" ", '-')}`}>
                    <span className=" font-bold text-lg hover:underline">{post.title}</span>
                </NavLink>
                <p className=" text-sm mt-1">
                    By
                    <span className=" italic">
                        {post?.author ?? " Bhoop Singh"}
                    </span>
                </p>

                <p className=" text-sm mt-1">Posted On {getDate(post.publishedDate)}</p>

                <p className="mt-4">
                    {(post.summary).substring(0, 300)}...
                </p>

                <div className="mt-2">
                    {post.tags.map((tag, index) => (
                        <NavLink key={index} to={`/Blog/tag/${tag.replaceAll(" ", "-")}`}>
                            <span className=" text-blue-700 text-xs mr-2 font-bold underline">{`#${tag}`}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;