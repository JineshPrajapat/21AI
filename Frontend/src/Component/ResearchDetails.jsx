import React, {useState ,useEffect } from 'react';
import {useParams, Link } from 'react-router-dom';
import { getDate } from '../utils/getDate';
import { IoIosArrowForward } from "react-icons/io";
import Heading from './Heading';
import { getDecodeURL } from '../utils/getDecodeURL';
import { fetchData } from '../Services/apiConnector';
import { BASE_URL } from '../Services/api';
import { setSingleResearchData } from '../Reducer/Slice/researchSlice';
import { useDispatch, useSelector } from 'react-redux';



const ResearchDetails = () => {
    const dispatch = useDispatch();
    const { researchTitle, postTitle } = useParams();
    const researchDetail = useSelector(state =>state.research.singleResearchData);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(`${BASE_URL}/research.json`, setData);
    }, [postTitle, researchTitle ]);

    useEffect(()=>{
        if(data){
            console.log("research data", data[researchTitle.replaceAll("-", " ")]);
            const filteredData = data[researchTitle.replaceAll("-", " ")]?.find((item) => item.title === postTitle.replaceAll("-", " "));
            dispatch(setSingleResearchData(filteredData));
        }
    }, [data]);


    // console.log("researchDetail", researchDetail);

    return (
        <section id="researcchdetails" className=" py-10 lg:py-20 dark:bg-gray-500 lg:px-20 p-4">

            <div className="mb-10 text-gray-600 dark:text-slate-300 flex items-center">
                <Link to={`/Researches/${researchTitle}`} className=" hover:text-gray-800 dark:hover:text-slate-300 hover:underline" >{getDecodeURL(researchTitle)}</Link>
                <IoIosArrowForward />
                <Link to={`/Research/${researchTitle}/${postTitle}`} className=" hover:text-gray-800 dark:hover:text-slate-300 hover:underline" >{getDecodeURL(postTitle)}</Link>
            </div>

            <Heading text={getDecodeURL(postTitle)}/>

            <div className="flex flex-col gap-6 text-left dark:text-slate-300">
                <div className="py-10 px-5 lg:p-20 text-left dark:text-slate-300" dangerouslySetInnerHTML={{ __html: researchDetail?.content }} />
            </div>

        </section>
    );
};

export default ResearchDetails;
