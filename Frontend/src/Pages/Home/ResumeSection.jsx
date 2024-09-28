import React from 'react';

const ResumeSection = () => {
    return (
        <section id="resume" className="services scroll-mt-[11vh] section py-12 px-3 lg:p-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto text-center mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Resume</h2>
                    <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                </div>
            </div>

            {/* Resume Content */}
            <div className="container mx-auto text-left">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    {/* Left Column */}
                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">

                        <h3 className="resume-title text-2xl font-semibold text-gray-800 dark:text-white mb-6">Education</h3>
                        <div className={`className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500`}>
                            <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">B.Tech in Artificial Intelligence & Data Science</h4>
                            <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">2021 - 2025</h5>
                            <p className="italic text-gray-600 dark:text-gray-400 mb-4">College of Technology and Engineering, Udaipur</p>
                        </div>
                        

                        <div className={`className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500`}>
                            <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">XII Central Board of Secondary Education</h4>
                            <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">2021</h5>
                            <p className="italic text-gray-600 dark:text-gray-400 mb-4">Mahaveer Public Sr. Sec. School, Rishabdeo</p>
                        </div>

                        <div className={`className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500`}>
                            <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">X Central Board of Secondary Education</h4>
                            <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">2019</h5>
                            <p className="italic text-gray-600 dark:text-gray-400 mb-4">Mahaveer Public Sr. Sec. School, Rishabdeo</p>
                        </div>
                        
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title text-2xl font-semibold text-gray-800 dark:text-white mb-6">Professional Experience</h3>

                        <div className={`className="resume-item relative border-l-2 border-blue-500 pl-5 mb-6 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white dark:before:bg-slate-900 before:border-2 before:border-blue-500`}>
                            <h4 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-300">Full Stack Developer</h4>
                            <h5 className="text-base font-semibold bg-accent/10 inline-block p-1 rounded-md mb-2 dark:text-gray-400">April, 2024 - June, 2024</h5>
                            <p className="italic text-gray-600 dark:text-gray-400 mb-4">KapiNova, Udaipur</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                                <li>Integrated Firebase authentication to enable Google sign-in and sign-up, securely handling user identity and session management within the BeyondSchool application.</li>
                                <li>Implemented the Razorpay payment gateway, streamlining the course purchasing process by allowing users to complete transactions with one-click functionality, including handling post-payment verification emails.</li>
                                <li>Designed and implemented robust API endpoints for managing user authentication, course enrollment, and payment processing, ensuring smooth communication between the client and server.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
