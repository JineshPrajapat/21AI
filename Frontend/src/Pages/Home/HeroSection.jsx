import React, { useEffect } from "react";
import images from "../../constants/images";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        document.title = "Garud 21AI";
        AOS.init();
    }, []);

    return (
        <section id="hero" className="hero h-[calc(100vh-68px)] lg:mb-20 scroll-mt-[12vh] section dark-background">
            <div  className=" relative w-full h-full ">
                <video
                    preload="auto"
                    className="w-full h-full bg-slate-950 object-cover filter brightness-50"
                    loop
                    autoPlay
                    muted
                >
                    <source src={images?.backgroundanimated} type="video/mp4" />
                </video>
                <div  className="absolute w-full lg:px-60 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-center -mt-6">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h1 className="text-2xl lg:text-6xl mx-5 font-bold ">Re-Engineering Business Operations with AI and Latest Inovation.</h1>
                        <h3 className="mt-10 lg:text-3xl mx-5 text-xl font-semibold ">Artificial Intelligence 21 Centuary</h3>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection