import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name:'blog',
    initialState:{
        blogData:[],
        singleBlogData :[],
        tagData:[]
    },

    reducers:{
        setBlog : (state, action) =>{
            state.blogData = action.payload;
        },
        setSingleBlogData : (state, action) =>{
            state.singleBlogData = action.payload;
        },
        setTag :(state, action)=>{
            state.tagData = action.payload
        }
    }
});

export const {setBlog, setSingleBlogData, setTag } =blogSlice.actions;
export default blogSlice.reducer;

