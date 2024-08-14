import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
    {
        question: 'What is the difference between Machine Learning and Artificial Intelligence?',
        answer: 'Artificial Intelligence (AI) refers to the broader field of research and development aimed at creating machines that can perform tasks that typically require human intelligence. Machine Learning (ML) is a subset of AI that involves training algorithms to learn from data and make predictions or decisions without being explicitly programmed.',
    },
    {
        question: 'How does AI integration with existing systems benefit businesses?',
        answer: 'AI integration with existing systems can bring numerous benefits to businesses, including increased efficiency, improved accuracy, enhanced customer experience, and better decision-making. It can also help automate repetitive tasks, reduce costs, and uncover new business opportunities.',
    },
    {
        question: 'What is the role of Natural Language Processing (NLP) in AI?',
        answer: 'Natural Language Processing (NLP) is a subfield of AI that focuses on the interaction between computers and humans in natural language. NLP enables computers to understand, interpret, and generate human language, which has numerous applications in areas such as chatbots, sentiment analysis, and language translation.',
    },
    {
        question: 'Can AI models be biased, and how can we mitigate this?',
        answer: "Yes, AI models can be biased if they are trained on biased data or if the algorithms used to develop them are flawed. To mitigate bias, it's essential to ensure that the training data is diverse and representative, and to use techniques such as data preprocessing, regularization, and ensemble methods to reduce bias.",
    },
    {
        question: 'What is the difference between supervised, unsupervised, and reinforcement learning in Machine Learning?',
        answer: 'Supervised learning involves training models on labeled data to make predictions on new, unseen data. Unsupervised learning involves training models on unlabeled data to discover patterns or relationships. Reinforcement learning involves training models to make decisions based on rewards or penalties received from the environment.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq section py-12 px-3 lg:px-20 bg-gray-50 dark:bg-gray-900 mt-10">
            <div className="container mx-auto">
                <div className="row flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="100">
                        <div className="content px-5 text-left">
                            <h3 className="text-3xl font-normal text-gray-800 dark:text-white">
                                <span>Frequently Asked </span><strong>Questions</strong>
                            </h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-2/3" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container space-y-6">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item p-6 text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg transition ${activeIndex === index ? 'faq-active' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="flex justify-between items-center gap-x-2 lg:text-lg text-sm font-semibold text-gray-800 dark:text-white  cursor-pointer transition">
                                        <div className='flex max-w-[90%] items-start justify-center hover:text-blue-500'>
                                            <span className="num text-blue-500 pr-2">{index + 1}.</span>
                                            <span>{item.question}</span>
                                        </div>
                                        <IoIosArrowDown className={`text-2xl lg:text-xl w-max hover:text-blue-500 text-gray-800 dark:text-white cursor-pointer transition-transform duration-300 ${activeIndex === index ? '-rotate-180 text-blue-500' : ''}`} />
                                    </h3>
                                    <div className={` mt-4 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                        <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
