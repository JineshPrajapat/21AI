import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Heading from "./Heading";
import { getDecodeURL } from "../utils/getDecodeURL";
import { fetchData } from "../Services/apiConnector";
import { setSingleBlogData } from "../Reducer/Slice/blogSlice";
import { BASE_URL } from "../Services/api";
import { useDispatch, useSelector } from "react-redux";
import PreLoader from "./PreLoader";

const BlogDetails = () => {
    const { blogTitle } = useParams();
    const dispatch = useDispatch();
    const blogDetail = useSelector(state => state?.blog?.singleBlogData);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.title = blogDetail?.content ? (blogTitle).replaceAll("-", " ") : "Page not found - Garud21AI";

        setIsLoading(true);
        fetchData(`${BASE_URL}/blog.json`, (data) => {
            const filteredData = data?.find((item) => item.title === blogTitle.replaceAll("-", " "));
            dispatch(setSingleBlogData(filteredData));
            setIsLoading(false);
        });
    }, [blogTitle, dispatch]);

    return (
        <div className=" py-10 px-5 lg:py-20 dark:bg-gray-500 lg:px-20 p-4">
            <div className="mb-10 text-sm text-gray-400 dark:text-slate-400 flex gap-1 items-center text-left overflow-y-auto overflow-x-scroll">
                <Link to={"/"} className=" hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Home"}</Link>
                /
                <Link to={"/Blog"} className=" hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Blog"}</Link>
                /
                <Link to={`/Blog/${blogTitle}`} className="hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{getDecodeURL(blogTitle)}</Link>
            </div>

            {isLoading ? (
                <PreLoader />
            ) : blogDetail?.content ? (
                <>
                    <Heading text={getDecodeURL(blogTitle)} />
                    <div className="" dangerouslySetInnerHTML={{ __html: blogDetail?.content }} />
                </>
            ) : (
                <div className="flex justify-center items-center lg:text-3xl dark:text-slate-300">
                    <p>Blog not found!</p>
                </div>
            )}
        </div>
    )
};

export default BlogDetails;