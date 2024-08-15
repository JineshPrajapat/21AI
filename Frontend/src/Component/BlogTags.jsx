import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { blog } from "../data/blog";
import BlogCard from "./BlogCard";
import Heading from "./Heading";
import { IoIosArrowForward } from "react-icons/io";
import { fetchData } from "../Services/apiConnector";
import { BASE_URL } from "../Services/api";
import { useSelector, useDispatch } from "react-redux";
import { setTag } from "../Reducer/Slice/blogSlice";
import CommingSoon from "./CommingSoon";

const BlogTags = () => {

    const { tagName } = useParams();
    const dispatch = useDispatch();
    const tagData = useSelector(state => state.blog.tagData);

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(`${BASE_URL}/blog.json`, setData);
    }, [ tagName ]);

    useEffect(()=>{
        if(data){
            const filteredData = data?.filter((item) => item.tags.includes(tagName.replaceAll("-", " ")));
            dispatch(setTag(filteredData));
        }
    }, [data]);

      console.log("data from github", tagData);
    // console.log("filteredData", filteredData);
    return (

        <div className="py-10 px-5 lg:p-20 text-left">
            <div className="mb-10 text-sm text-gray-400 dark:text-slate-400 flex items-center gap-1 text-left overflow-y-auto overflow-x-scroll">
                <Link to={"/"} className=" hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Home"}</Link>
                /
                <Link to={"/Blog"} className=" hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Blog"}</Link>
                /
                <Link to={"/Blog"} className="hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{"Tag"}</Link>
                /
                <Link to={`/Blog/${tagName}`} className="hover:text-gray-600 dark:hover:text-slate-300 whitespace-nowrap" >{tagName}</Link>
            </div>

            <Heading text={`${tagName}`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {tagData.length>0  ? 
                   tagData?.map((post) => <BlogCard post={post} />)
                   :
                   <CommingSoon/>
                }
            </div>


        </div>

    )
};

export default BlogTags;