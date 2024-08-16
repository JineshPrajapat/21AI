import React from "react";
import jinesh from "../../../src/assets/images/jinesh.png";
// import { useHeaderHeight } from "../../Context/HeaderHeightContext";

const About = () => {

    return (
        <section id="about" className="scroll-mt-[11vh] py-12 section px-3 lg:p-20" data-aos="fade-up"
            data-aos-delay="100">
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">About Us</h2>
                <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
            </div>
            <main className=" px-8 py-10 rounded-md shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] dark:bg-gray-800 flex flex-col gap-6 lg:flex-row justify-between items-center">
                <div className="lg:w-1/3 flex flex-col justify-start items-center ">
                    <div className=" w-64 h-64 rounded-full mb-4">
                        <img src={jinesh} className="w-full h-full rounded-full" alt='profileImage' />
                    </div>
                    <div className="flex flex-col gap-2 justify-start items-start text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        <p className="text-left"><strong>Name: </strong><span>Jinesh Prajapat</span></p>
                        <p className="text-left"><strong>Profile: </strong><span>Software Developer Engineer</span></p>
                        <p className="text-left"><strong>Email: </strong><span>prajapatjinesh585@gmail.com</span></p>
                        <p className="text-left"><strong>Phone: </strong><span>+91-7023337229</span></p>
                    </div>
                </div>

                <div className="lg:w-3/4 lg:text-xl text-sm text-justify text-slate-700 dark:text-slate-300">



                    <p>
                    I am Jinesh Prajapat, currently pursuing an B.Tech in Artificial Intelligence and Data Science Engineering at the College of Technology And Engineering, Udaipur. Originally from Udaipur, the City of Lakes.
                    </p>
                    <br />
                    <p>
                    I'm a curious tech enthusiast, always on the lookout for new adventures and learning opportunities. Innovation fuels my fire, and I thrive on finding imaginative solutions to all kinds of problems. Whether it's tackling a coding challenge or brainstorming a new project idea. I have a strong passion for tackling problems using data structures and algorithms.
                    </p>
                    <br />
                    <p>
                    I am excited to contribute my creativity and analytical mindset to develop efficient and elegant solutions that address real-world challenges.
                    </p>

                </div>
            </main>
        </section>
    )
};

export default About;