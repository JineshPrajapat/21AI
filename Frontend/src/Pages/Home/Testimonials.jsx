import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import jinesh from '../../../src/assets/images/jinesh.png';

const testimonialsData = [
    {
        img: jinesh,
        name: 'Saul Goodman',
        title: 'Ceo & Founder',
        rating: 5,
        quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
    {
        img: jinesh,
        name: 'Sara Wilsson',
        title: 'Designer',
        rating: 5,
        quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
    },
    {
        img: jinesh,
        name: 'Jena Karlis',
        title: 'Store Owner',
        rating: 5,
        quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
    },
    {
        img: jinesh,
        name: 'Matt Brandon',
        title: 'Freelancer',
        rating: 5,
        quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    },
    {
        img: jinesh,
        name: 'John Larson',
        title: 'Entrepreneur',
        rating: 5,
        quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id="testimonials" className="testimonials section bg-blue-400 py-20 relative flex justify-center bg-cover bg-no-repeat bg-center mt-10" style={{ backgroundImage: `url('/assets/video/jinesh.png')` }}>
            <div className="container relative z-30" data-aos="fade-up" data-aos-delay="100">
                <div className="carousel relative overflow-hidden">
                    <div className="carousel-inner flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="carousel-item flex-shrink-0 w-full px-4">
                                <div className="testimonial-item text-center">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="testimonial-img mx-auto rounded-full border-4 border-gray-200"
                                        style={{ width: '100px' }}
                                    />
                                    <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
                                    <h4 className="text-sm text-gray-500">{testimonial.title}</h4>
                                    <div className="stars my-3 flex justify-center items-center">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="italic text-gray-600 max-w-md mx-auto">
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>{testimonial.quote}</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={goToPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 duration-500 hover:bg-blue-600  text-white p-2 rounded-full">
                       <IoIosArrowDown className='rotate-90 text-3xl'/>
                    </button>
                    <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 duration-500  hover:bg-blue-600 text-white p-2 rounded-full">
                        <IoIosArrowDown className='-rotate-90 text-3xl'/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
