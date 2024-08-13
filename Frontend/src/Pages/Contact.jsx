import React from 'react';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const contactInfo = [
    {
        icon: IoLocationOutline,
        title: 'Address',
        description: 'A108 Adam Street, New York, NY 535022',
    },
    {
        icon: IoCallOutline,
        title: 'Call Us',
        description: '+91 8905 0097 54',
    },
    {
        icon: HiOutlineMail,
        title: 'Email Us',
        description: 'info@21ai.com',
    },
];

const Contact = () => {
    return (
        <section id="contact" className="contact section py-20 lg:px-20 dark:bg-gray-900">
            <div className="container mx-auto mb-10 text-center" data-aos="fade-up">
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Contact</h2>
                    <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-t bg-blue-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 px-4">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>

            <div className="container mx-auto px-3" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white dark:bg-gray-800 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] rounded-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex gap-4 items-center text-left dark:text-white">
                                <div className='w-12 h-12 rounded-full border-[1px] border-blue-500 flex items-center justify-center'>
                                    <info.icon className={` text-blue-500 text-2xl `}></info.icon>
                                </div>
                                <div className='flex flex-col justify-start text-left'>
                                    <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form
                    className="bg-white dark:bg-gray-800 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] rounded-lg md:p-8 py-8 px-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                className="form-control w-full p-3 bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-control w-full p-3 bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                                placeholder="Your Email"
                                required
                            />
                        <div className="col-span-2">
                            <input
                                type="text"
                                name="subject"
                                className="form-control w-full p-3 bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <textarea
                                name="message"
                                rows="6"
                                className="form-control w-full p-3 bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <div className="col-span-2 text-center">
                            {/* <div className="loading mb-4">Loading</div>
                            <div className="error-message mb-4"></div>
                            <div className="sent-message mb-4">
                                Your message has been sent. Thank you!
                            </div> */}
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-6 rounded-full transition hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
                {/* End Contact Form */}
            </div>
        </section>
    );
};

export default Contact;
