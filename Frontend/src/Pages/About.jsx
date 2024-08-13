import React from "react";
import jinesh from "../../src/assets/images/jinesh.png"

const About = () => {
    return (
        <section id="about" class="" data-aos="fade-up"
        data-aos-delay="100">
            <main className=" px-8 py-10 lg:m-20 rounded-md shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] dark:bg-gray-800 flex flex-col gap-6 lg:flex-row justify-between items-center">
                <div className="lg:w-1/3 flex flex-col justify-start items-center ">
                    <div className=" w-64 h-64 rounded-full mb-4">
                        <img src={jinesh} className="w-full h-full rounded-full" alt='profileImage' />
                    </div>
                    <div className="flex flex-col gap-2 justify-start items-start text-slate-700 dark:text-slate-300">
                        <p className="text-left"><strong>Name: </strong><span>Jinesh Prajapat</span></p>
                        <p className="text-left"><strong>Profile: </strong><span>Machine Learning Engineer</span></p>
                        <p className="text-left"><strong>Email: </strong><span>bs9396684@gmail.com</span></p>
                        <p className="text-left"><strong>Phone: </strong><span>+91-7023337229</span></p>
                    </div>
                </div>

                <div className="lg:w-3/4 text-xl text-justify text-slate-700 dark:text-slate-300">
                    <h4 className="text-left text-3xl pb-2 text-black dark:text-white font-bold">About me</h4>
                    <hr className="w-20 h-1 mb-8 bg-blue-500" />
                    <p>
                        Curabitur non nulla sit amet nisl tempus convallis quis ac
                        lectus. Curabitur arcu erat, accumsan id imperdiet et,
                        porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor accumsan
                        tincidunt.
                    </p>
                    <br />
                    <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vivamus suscipit tortor eget felis porttitor volutpat.
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit
                        amet dui. porttitor at sem.
                    </p>
                    <br />
                    <p>
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla porttitor
                        accumsan tincidunt. Mauris blandit aliquet elit, eget
                        tincidunt nibh pulvinar a.
                    </p>
                </div>
            </main>
        </section>
    )
};

export default About;