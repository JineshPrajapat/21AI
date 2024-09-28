import React, { useEffect } from "react";
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {

    useEffect(() => {
        
        AOS.init();
        // animating words
        const selectTyped = document.querySelector('.typed');
        if (selectTyped) {
            const typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
            const typed = new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
            });

            return () => {
                typed.destroy();
            };
        }

    }, []);

    return (
        <section id="hero" className="hero h-[calc(100vh-68px)] lg:mb-20 scroll-mt-[12vh] section dark-background">
            <div className=" relative w-full h-full ">
                <video
                    preload="auto"
                    className="w-full h-full bg-slate-950 object-cover filter brightness-50"
                    loop
                    autoPlay
                    muted
                >
                    <source src="https://res.cloudinary.com/dqvkis3qg/video/upload/v1727452593/Portfolio/backgroundanimated_yvakqk.mp4" type="video/mp4" />
                </video>
                <div className="absolute w-full lg:px-60 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-center -mt-6">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h1 className="text-3xl lg:text-6xl lg:mx-5 font-bold mb-3 ">I am Jinesh Prajapat</h1>
                        <h3 className=" text-2xl lg:text-5xl font-semibold ">Full Stack Developer</h3>
                        {/* <p>
                            <span
                                className="typed text-2xl lg:text-5xl font-semibold"
                                data-typed-items="Developer, Freelancer, Photographer"
                            ></span>
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection