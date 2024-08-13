import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { blog } from "../data/blog";

const BlogDetails = () => {

    const { blogTitle } = useParams();
    const data = blog.filter((data) => data.title === blogTitle.replaceAll("-", " "));
    console.log("data", data);
    return (
        <div className="py-10 px-5 lg:p-20 text-left" dangerouslySetInnerHTML={{ __html: data[0].content }} />
    )
};

export default BlogDetails;
