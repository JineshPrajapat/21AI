import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { blog } from "../data/blog";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "./Heading";
import { getDecodeURL } from "../utils/getDecodeURL";
import { fetchData } from "../Services/apiConnector";
import { setSingleBlogData } from "../Reducer/Slice/blogSlice";
import { BASE_URL } from "../Services/api";
import { useDispatch, useSelector } from "react-redux";

const BlogDetails = () => {
    const { blogTitle } = useParams();
    const dispatch = useDispatch();
    const blogDetail = useSelector(state =>state.blog.singleBlogData);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(`${BASE_URL}/blog.json`, setData);
    }, [ blogTitle ]);

    useEffect(()=>{
        if(data){
            const filteredData = data?.find((item) => item.title === blogTitle.replaceAll("-", " "));
            dispatch(setSingleBlogData(filteredData));
        }
    }, [data]);

    // console.log("data", blogDetail);

    return (
        <div className=" py-10 px-5 lg:py-20 dark:bg-gray-500 lg:px-20 p-4">
            <div className="mb-10 text-sm text-gray-400 dark:text-slate-400 flex gap-1 items-center text-left overflow-y-auto overflow-x-scroll">
                <Link to={"/"} className=" hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Home"}</Link>
                /
                <Link to={"/Blog"} className=" hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Blog"}</Link>
                /
                <Link to={`/Blog/${blogTitle}`} className="hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{getDecodeURL(blogTitle)}</Link>
            </div>
            <Heading text={getDecodeURL(blogTitle)}/>
            <div className="" dangerouslySetInnerHTML={{ __html: blogDetail?.content }} />
        </div>
    )
};

export default BlogDetails;