import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Services/apiConnector';
import { generateReadmeUrl } from '../utils/generateReadmeLink';
import { setProjectDetails } from '../Reducer/Slice/projectSlice';
import PreLoader from '../Component/PreLoader';
import { projectItems } from '../data/project';
import NotFound from '../Component/NotFound';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Initialize Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProjectDetails = () => {
    const markdownContent = useSelector((state) => state.project.projectDetails);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { repositoryName } = useParams();

    const project = projectItems?.find((project) => project?.repositoryName === repositoryName || project.title === repositoryName);

    useEffect(() => {
        setIsLoading(true);

        console.log("hello", generateReadmeUrl(repositoryName));
        if (repositoryName) {
            fetchData(generateReadmeUrl(repositoryName), (data) => {
                dispatch(setProjectDetails(data));
                setIsLoading(false);
            });

            fetch(generateReadmeUrl(repositoryName))
                .then((response) => response.text()) // Get the content as text
                .then((text) => {
                    dispatch(setProjectDetails(text))
                })
                .catch((error) => {
                    console.error('Error fetching the markdown content:', error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }, [repositoryName]);

    return (

        <section id="portfolio-details" className="scroll-mt-[11vh] section py-12 px-3 lg:p-20 bg-white dark:bg-gray-900">
            {project ?
                <div className="container mx-auto text-center lg:mb-12">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{project?.title}</h2>
                        <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                    </div>
                </div>
                :
                <NotFound />
            }

            {/* Portfolio Details Section */}
            <main className="main pt-4 pb-8">
                {project &&
                    <div className='flex justify-center items-center '>
                        <img src={project?.imageUrl} alt="App 1" className="w-full max-h-[90vh] object-contain" />
                    </div>
                }
                {/* Swiper Slider */}
                {/* <Swiper
                            loop={true}
                            speed={600}
                            autoplay={{ delay: 5000 }}
                            slidesPerView="auto"
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                            pagination={{ el: '.swiper-pagination', clickable: true, type: 'bullets' }}
                            className="portfolio-details-slider"
                        >
                            <SwiperSlide><img src="assets/img/portfolio/app-1.jpg" alt="App 1" className="w-full" /></SwiperSlide>
                            <SwiperSlide><img src="assets/img/portfolio/product-1.jpg" alt="Product 1" className="w-full" /></SwiperSlide>
                            <SwiperSlide><img src="assets/img/portfolio/branding-1.jpg" alt="Branding 1" className="w-full" /></SwiperSlide>
                            <SwiperSlide><img src="assets/img/portfolio/books-1.jpg" alt="Books 1" className="w-full" /></SwiperSlide>
                        </Swiper>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-pagination"></div> */}

                {/* Details Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 lg:gap-24 mt-12 lg:mt-32">
                    
                    {isLoading ? (
                        <PreLoader />
                    ) : markdownContent != "404: Not Found" ? (
                        <div className="w-full h-auto lg:h-[90vh] bg-white dark:bg-gray-900 dark:text-white rounded-lg overflow-auto">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4 text-left" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-3 text-left" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-xl font-medium mb-2 text-left" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-4 text-left leading-relaxed" {...props} />,
                                    a: ({ node, ...props }) => (
                                        <a
                                            className="text-blue-600 hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            {...props}
                                        />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <ul className="list-disc pl-5 mb-4 text-left justify-start" {...props} />
                                    ),
                                    ol: ({ node, ...props }) => (
                                        <ol className="list-decimal pl-5 mb-4 text-left justify-start" {...props} />
                                    ),
                                    li: ({ node, ...props }) => (
                                        <li className="mb-1 text-left mx-3 lg:mx-8 justify-start" {...props} />
                                    ),
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4 text-left" {...props} />
                                    ),
                                    code: ({ node, inline, className, children, ...props }) => (
                                        <code
                                            className={`bg-gray-100 text-red-600 px-1 py-0.5 rounded ${className}`}
                                            {...props}
                                        >
                                            {children}
                                        </code>
                                    ),
                                }}
                            >
                                {markdownContent}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        <div className='lg:w-[70vw] text-left dark:text-white'>
                            <div className='mb-8'>
                                {/* Project Description */}
                                <p className='text-gray-800 dark:text-gray-300'>{project?.description}</p><br />

                                {/* Project Features */}
                                {project?.features && (
                                    <>
                                        <h4 className='text-xl font-semibold mb-4'>Features:</h4>
                                        <ul className='list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-300'>
                                            {project?.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul><br />
                                    </>
                                )}

                                {/* Project Status */}
                                {project?.production && (
                                    <p className='underline italic text-right text-green-600 dark:text-green-400 mt-4'>
                                        In Production
                                    </p>
                                )}
                                {project?.progress && (
                                    <p className='underline italic text-right text-yellow-500 dark:text-yellow-300 mt-4'>
                                        In Working
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Project Information */}
                    {project &&
                        <div className="text-left mt-16 lg:mt-0 rounded-md shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] dark:shadow-xl dark:bg-slate-800 px-4 py-8">
                            <h3 className="text-xl font-bold dark:text-white mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-500 whitespace-nowrap">Project information</h3>
                            <ul className="space-y-4 text-sm ">
                                <li className='flex flex-col dark:text-white'><strong className='text-gray-400 uppercase'>Category: </strong>Web Application</li>
                                {/* <li className='flex flex-col dark:text-white'><strong className='text-gray-400 uppercase'>Client: </strong> ASU Company</li> */}
                                <li className='flex flex-col dark:text-white'><strong className='text-gray-400 uppercase'>Project date: </strong>{project?.Date}</li>
                                <li className='flex flex-col dark:text-white'><strong className='text-gray-400 uppercase pb-1'>Technology: </strong>
                                    <ul className='flex gap-3 flex-wrap mb-6 dark:text-black'>
                                        {project?.technology && project?.technology.map((tech, index) => {
                                            return (
                                                <li className='bg-gray-300 px-2 p-1 rounded-full'>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li className='flex gap-2 whitespace-nowrap'>
                                    {project?.repositoryName &&
                                        <div>
                                            <a href={`https://github.com/JineshPrajapat/${project?.repositoryName}`} target='__blank' className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Source Code</a>
                                        </div>
                                    }
                                    <div>
                                        <a href={project?.link} target='__blank' className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Visit Website</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </main>
        </section>
    );
};

export default ProjectDetails;
