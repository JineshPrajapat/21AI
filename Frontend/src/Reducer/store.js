import {configureStore }  from '@reduxjs/toolkit';
import blogSlice from './Slice/blogSlice';
import researchSlice from './Slice/researchSlice';
import courseSlice from './Slice/courseSlice';
import newsLetterSlice from './Slice/newsLetterSlice';
import projectSlice from './Slice/projectSlice';

export const store = configureStore({
    reducer:{
        project: projectSlice,
        blog : blogSlice,
        research : researchSlice,
        course : courseSlice,
        newsLetter : newsLetterSlice
    }
});