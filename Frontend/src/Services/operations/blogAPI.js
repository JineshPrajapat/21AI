import { apiConnector } from "../apiConnector";
import { blogEndpoints } from "../api";

const {
    GET_ALL_BLOGS_API,
    GET_BLOG_API,
    GET_BLOG_TAG_API
} = blogEndpoints;

export const getAllBlogs = async()=>{
    let result = [];
    try{
        const response = await apiConnector({
            method :"GET",
            url :"GET_ALL_BLOGS_API"
        });

        if(!response){
            throw new Error(`Could not fetch blogs`);
        }
        console.log("response", response)
        result = response;
    }
    catch(err)
    {
        console.log(err);
    }

    return result;
}