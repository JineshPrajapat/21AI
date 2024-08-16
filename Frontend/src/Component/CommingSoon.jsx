import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CommingSoon = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
        AOS.refresh(); 
    }, []);

    return (
        <div className='flex items-center h-[50vh] justify-center dark:text-slate-300 text-xs lg:text-4xl font-bold'
            data-aos="fade-up"
            data-aos-delay="300"
        >
            <p className='text-center'>Launching Soon: Keep an Eye Out!</p>
        </div>
    )
};

export default CommingSoon
