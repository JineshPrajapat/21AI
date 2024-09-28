import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name:'project',
    initialState:{
        projectDetails:"",
    },

    reducers:{
        setProjectDetails : (state, action) =>{
            state.projectDetails = action.payload;
        },
    }
});

export const {setProjectDetails} =projectSlice.actions;
export default projectSlice.reducer;

