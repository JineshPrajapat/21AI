import React from 'react';
import { FaRobot, FaLanguage, FaPaintBrush, FaMobileAlt, FaGlobe, FaChartBar } from 'react-icons/fa';


const servicesData = [
    {
        icon: FaRobot,
        title: 'AI-Powered Conversational Bot',
        description: 'Experience the future of customer engagement with our AI-driven chatbot, designed to provide personalized and efficient support to your users.',
        link: '',
    },
    {
        icon: FaLanguage,
        title: 'Tailored Language Models',
        description: 'Unlock the full potential of language models with our custom fine-tuning and RAG (Retrieve, Augment, Generate) capabilities, delivering unparalleled accuracy and relevance.',
        link: '',
    },
    {
        icon: FaPaintBrush,
        title: 'Artificial Imagination Studio',
        description: 'Bring your creative vision to life with our custom AI generative image solutions, producing stunning visuals that captivate and inspire your audience.',
        link: '',
    },
    {
        icon: FaMobileAlt,
        title: 'AI-Infused Mobile Apps',
        description: "Elevate your mobile app's intelligence with our expert AI model integration, enhancing user experience and driving business success through data-driven insights.",
        link: '',
    },
    {
        icon: FaGlobe,
        title: 'Intelligent Web Solutions',
        description: "Transform your website into a cutting-edge digital platform with our AI model integration, providing personalized user experiences, improved engagement, and increased conversions.",
        link: '',
    },
    {
        icon: FaChartBar,
        title: 'AI-Powered Data Analytics and Visualization',
        description: 'Unlock the hidden potential of your data with our AI-powered analytics and visualization service, uncovering trends, patterns, and correlations that drive informed business decisions and growth.',
        link: '',
    },
];


const Services = () => {
    return (
        <section id="services" className="services scroll-mt-[11vh] section py-12 px-3 lg:p-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto text-center mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Services</h2>
                    <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 ">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {servicesData.map((service, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        key={index}
                        className="relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-all transform duration-500 hover:-translate-y-2 hover:border-blue-600 border-b-4 border-transparent"
                    >
                        <div className=" mb-4 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                            <service.icon className="text-4xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition">{service.title}</h3>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
