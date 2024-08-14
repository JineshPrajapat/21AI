import { createSlice } from "@reduxjs/toolkit";

const newsLetterSlice = createSlice({
    name: 'research',
    initialState : {
        newsLetterData :[],
        singleNewsLetterData : []
    },

    reducers:{
        setNewsLetterData : (state, action)=>{
            state.newsLetterData = action.payload;
        },
        setSingleNewsLetterData : (state, action) =>{
            state.newsLetterData = action.payload;
        },
    }
});

export const {setNewsLetterData, setSingleNewsLetterData} = newsLetterSlice.actions;
export default newsLetterSlice.reducer;