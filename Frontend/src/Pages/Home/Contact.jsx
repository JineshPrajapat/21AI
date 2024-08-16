import React, { useRef } from 'react';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import useFormStatus from '../../hooks/useFormStatus';
import emailjs from "@emailjs/browser"
import { SERVICE_ID, SERVICE_PUBLIC_KEY, SERVICE_TEMPLATE } from '../../Services/api';


const contactInfo = [
    {
        icon: IoLocationOutline,
        title: 'Address',
        description: 'Udaipur, Rajasthan',
    },
    {
        icon: IoCallOutline,
        title: 'Call Us',
        description: '+91 8905009854',
    },
    {
        icon: HiOutlineMail,
        title: 'Email Us',
        description: 'team@garud21ai.com',
    },
];

const Contact = () => {

    const form = useRef();
    const { status, error, startSubmitting, submitSuccess, submitError, resetFormStatus } = useFormStatus();

    const sendEmail = (e) => {
        e.preventDefault();
        startSubmitting();

        emailjs.sendForm(SERVICE_ID, SERVICE_TEMPLATE, form.current, SERVICE_PUBLIC_KEY)
            .then(
                () => {
                    submitSuccess();
                    // alert('Message successfully sent!');
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    submitError('Failed to send the message, please try again.');
                    // console.error('EmailJS error:', error);
                }
            )
            .catch((error) => {
                submitError('An unexpected error occurred, please try again later.');
                // console.error('Unexpected error:', error);
            });
    };



    return (
        <section id="contact" className={`contact section py-20 lg:px-20 dark:bg-gray-900 scroll-mt-[11vh]`}>
            <div className="container mx-auto mb-10 text-center" data-aos="fade-up">
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Contact</h2>
                    <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-t bg-blue-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 px-4">
                    <span>Let's Work Together</span><br />
                    For work inquires feel free to get in touch with us
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
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white dark:text-gray-200 dark:bg-gray-800 shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] rounded-lg md:p-8 py-8 px-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            className="form-control w-full p-3 outline-none bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-control w-full p-3 outline-none bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                            placeholder="Your Email"
                            required
                        />
                        <div className="col-span-2">
                            <input
                                type="text"
                                name="subject"
                                className="form-control w-full p-3 outline-none bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <textarea
                                name="message"
                                rows="6"
                                className="form-control w-full p-3 outline-none bg-slate-50 dark:bg-gray-700 border border-gray-300 rounded focus:border-blue-500"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <div className="col-span-2 text-center">
                            {status === 'error' && <div className="error-message mb-4 text-red-500">{error}</div>}
                            {status === 'success' && <div className="sent-message mb-4 text-green-500">Your message has been sent. Thank you!</div>}
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white py-2 px-6 rounded-full transition hover:bg-blue-600 ${status === 'submitting' ? 'cursor-not-allowed opacity-50' : ''}`}
                                disabled={status === 'submitting'}
                            >
                                { status === 'submitting' ? "Sending..." :"Send Message"}
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Contact;
