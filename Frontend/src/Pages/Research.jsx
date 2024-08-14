import React, { useEffect, useState } from 'react';
import { blog } from '../data/blog';
import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getDate } from '../utils/getDate';
import Heading from '../Component/Heading';
import { fetchData } from '../Services/apiConnector';
import { useDispatch, useSelector } from 'react-redux';
import { setResearch } from '../Reducer/Slice/researchSlice';
import { BASE_URL } from '../Services/api';
import CommingSoon from '../Component/CommingSoon';
import PreLoader from '../Component/PreLoader';

const Research = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const research = useSelector((state) => state.research.researchData)
    const researchTitle = decodeURIComponent(location.pathname.substring(1).split("/")[1].replaceAll("-", " "));

    const [isloading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        fetchData(`${BASE_URL}/research.json`, setData);
        setIsLoading(false);
    }, [location, researchTitle]);

    useEffect(() => {
        setIsLoading(true);
        if (data) {
            console.log("research data", data[researchTitle]);
            dispatch(setResearch(data[researchTitle]));
        }
        setIsLoading(false)
    }, [data]);

    return (
        <section id="blog" className=" py-10 lg:py-20 lg:mx-20 p-4">

            <Heading text={`Research / ${researchTitle}`} />

            {!isloading ?
                <div className="flex flex-col gap-6 text-left">
                    {research?.length > 0 ? research?.map((post) => {
                        return (

                            <NavLink to={`/Research/${(researchTitle).replaceAll(" ", "-")}/${(post.title).replaceAll(" ", "-")}`}

                                key={post.postId}
                                className=" dark:bg-gray-800 dark:text-white dark:border-none rounded-lg overflow-hidden transition-transform transform border-[2px] border-slate-100 shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <div className=" p-4 flex flex-col-reverse lg:flex-row lg:gap-10 items-center">
                                    <div className="w-full md:w-max flex justify-end text-sm text-gray-500 dark:text-gray-300">
                                        <span className=' whitespace-nowrap w-full'>{getDate(post.publishedDate)}</span>

                                    </div>
                                    <h2 className="w-full text-sm lg:text-xl font-semibold mb-2 duration-500 dark:hover:text-blue-400 ">{post.title}</h2>


                                </div>
                            </NavLink>
                        )
                    })
                        :
                        <CommingSoon />
                    }
                </div>
                :
                <PreLoader />
            }

        </section>
    );
};

export default Research;
