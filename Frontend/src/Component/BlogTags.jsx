import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { blog } from "../data/blog";
import BlogCard from "./BlogCard";
import Heading from "./Heading";

const BlogTags = () => {

    const { tagName } = useParams();

    const filteredData = blog.filter((data) => data.tags.includes(tagName));
    // console.log("filteredData", filteredData);
    return (

        <div className="py-10 px-5 lg:p-20 text-left">

            <Heading text={`${tagName}`} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {
                    filteredData.map((post) => <BlogCard post={post} />)
                }
            </div>


        </div>

    )
};

export default BlogTags;