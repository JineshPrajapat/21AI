import { createSlice } from "@reduxjs/toolkit";

const researchSlice = createSlice({
    name: 'research',
    initialState : {
        researchData :[],
        singleResearchData :[]
    },

    reducers:{
        setResearch : (state, action)=>{
            state.researchData = action.payload;
        },
        setSingleResearchData : (state, action) =>{
            state.singleResearchData = action.payload;
        }

    }
});

export const {setResearch, setSingleResearchData} = researchSlice.actions;
export default researchSlice.reducer;