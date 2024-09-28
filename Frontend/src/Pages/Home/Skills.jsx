import React from 'react';
import images from '../../constants/images';


const technologies = [
    {
        name: "C++",
        icon: images.cplusplus
    },
    {
        name: "Python",
        icon: images?.python
    },
    {
        name: "SQL",
        icon: images.sql
    },
    {
        name: "HTML 5",
        icon: images.html,
    },
    {
        name: "CSS 3",
        icon: images.css,
    },
    {
        name: "Scss",
        icon: images.scss,
    },
    {
        name: "JavaScript",
        icon: images.javascript,
    },
    {
        name: "Tailwind CSS",
        icon: images.tailwindcss,
    },
    {
        name: "React JS",
        icon: images.reactjs,
    },
    {
        name: "Redux",
        icon: images.redux,
    },
    {
        name: "Node JS",
        icon: images.nodejs,
    },
    {
        name: "Express JS",
        icon: images.expressjs,
    },
    {
        name: "MongoDB",
        icon: images.mongodb,
    },
    {
        name: "Mongoose",
        icon: images.mongoose,
    },
    {
        name: "PostgreSQL",
        icon: images.postgresql,
    },
];

const tools = [
    {
        name: "VS Code",
        icon: images.vscode,
    },
    {
        name: "Git",
        icon: images.git,
    },
    {
        name: "Github",
        icon: images.github,
    },
    {
        name: "MongoDB Compass",
        icon: images.mongodb,
    },
    {
        name: "Postman",
        icon: images.postman,
    },
    {
        name: "Ubuntu",
        icon: images.ubuntu,
    },
];


const Skills = () => {
    return (
        <section id="skills" className="services scroll-mt-[11vh] section py-12 px-3 lg:p-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto text-center mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Skills</h2>
                    <hr className=" flex justify-center items-center w-16 h-1 mb-8 bg-blue-500" />
                </div>
                {/* <p className="mt-4 text-gray-600 dark:text-gray-400 ">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p> */}
            </div>.

            <div className="flex-center-center flex-col" data-aos="fade-up" data-aos-delay="100">
                <div className=" flex flex-wrap  justify-center gap-10 ">
                    {technologies.map((item, i) => (
                        <div key={i} className="flex-around-center w-[80px] flex-col" data-aos="fade-up" data-aos-delay="100" >
                            <img src={item.icon} width="100%" alt={item.name} />
                            <p className="text-center dark:text-white whitespace-nowrap">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-center-center mt-20 flex-col" data-aos="fade-up" data-aos-delay="100">
                <h3 className="dark:text-slate-300 text-3xl">Tools and Software</h3>
                <div className="mt-2 flex flex-wrap  justify-center gap-10 ">
                    {tools.map((item, i) => (
                        <div key={i} className="flex-around-center w-[80px] flex-col" data-aos="fade-up" data-aos-delay="100">
                            <img src={item.icon} width="100%" alt={item.name} />
                            <p className="text-center dark:text-white">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Skills;
