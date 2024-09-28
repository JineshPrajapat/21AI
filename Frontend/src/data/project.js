export const projectItems = [
    {
        title: "Chat Application",
        description: "This is a real-time peer-to-peer messaging application built to enable users to communicate seamlessly. The app offers essential chat functionalities like message delivery, deletion, and status updates, along with the ability to track message history and user online status.",
        features: [
            "Real-time peer-to-peer communication.",
            "Update and delete shared messages.",
            "Track whether messages have been seen or unseen.",
            "Display timestamps for when messages are delivered and seen.",
            "Green dot on profile indicates the user is online.",
            "Search conversations and find new users.",
            "Highlight unseen messages with a count of unread messages.",
            "View chat history with precise timestamps.",
        ],
        technology: ["MongoDB", "ExpressJs", "ReactJs", "Redux", "NodeJs", "Socket.io"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727425210/Portfolio/chatApp_qs6uxs.png",
        link: 'https://drive.google.com/file/d/1kFfJLn1TB1WA5mydvMT0QsnGY4YxZKY_/view?usp=drive_link',
        category: "MERN",
        repositoryName : "Chat-Application",
        Date: "August, 2024"
    },
    {
        title: "Friend Finder",
        description: "Designed and developed a company website with a modern and intuitive UI/UX. The website includes essential pages such as Services, About, FAQ, and Contact.",
        features:[
            "The website allows the owner to perform CRUD operations on a blog section, sharing insights on trending technologies like AI/ML.",
        ],
        technology: ["MongoDB", "ExpressJs", "ReactJs", "Redux", "NodeJs"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727425214/Portfolio/friendFinderApp_qvcudz.png",
        link: 'https://friend-connections.vercel.app/',
        progress: "yes",
        category: "MERN",
        repositoryName : "Friend-Finder",
        Date:"September, 2024"
    },
    {
        title: "Chatlytics",
        description: "Discover the magic of Python in web app! Explore chat patterns, usage stats, and more with ease. Gain insights through dynamic visualizations and understand your talks.",
        features:[
            "Users can upload WhatsApp chats (without media) – group or private – to explore insights like message stats, timelines, activity maps, word clouds, and download visual graphs. Chats aren't stored.",
        ],
        technology: ["Python", "Streamlit"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727425149/Portfolio/chatlytics_ae5tps.png",
        link: 'https://chatlytics.streamlit.app/',
        category: "Python",
        repositoryName : "Chatlytics",
        Date: "April, 2024"
    },
    {
        title: "Beyond School Application",
        description: "A user-friendly web app enables seamless course enrollment, payment processing, and sends verification emails post-payment for enhanced user experience.",
        features:[
            "Users can easily sign in or sign up using their Google account, getting straight into our platform without any hassle.",
            "Integration with Razorpay ensures that buying courses is a breeze– users can complete their purchase with just a click.",
            "With Express.js, our RESTfull API facilitates smooth communication, allowing users to interact with our platform effortlessly.",
        ],
        technology: ["MongoDB", "ExpressJS", "ReactJS", "NodeJs"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727425137/Portfolio/beyondscoolApp_xal9ba.png",
        link: 'https://www.beyondscool.com/',
        production: "yes",
        category: "MERN",
        repositoryName : "",
        Date:"April, 2024"
    },
    {
        title: "Restaurant Application",
        description: "The Restaurant website offers a delightful dining experience. Users can easily explore the menu, reserve tables, contact the restaurant, and leave reviews. With a stunning UI and user-friendly interface, it's a breeze to navigate. Once logged in, users can reserve tables, subscribe, and share their reviews effortlessly.",
        features: [
                "A restaurant application that ensures real-time availability for reservations.",
                "Explore and filter diverse menu, sharing dining experiences through reviews and ratings, easily contact therestaurant, all within a responsive and intuitive UI/UX design.",
                "Enable customers to reserve tables with real-time availability checks, slot selection, and booking payment,powered by PostgreSQL for efficient data handling.",
                "The admin panel facilitates seamless management of reservations, menu items, and more, supporting CRUDoperations to ensure efficient backend operations.",
        ],
        technology: ["PostgreSQL", "ExpressJS", "ReactJS", "NodeJs", "Razorpay-payement-gatway"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727426684/Portfolio/restaurantApp_a1ahk6.png",
        link: 'https://khaao-restaurant.vercel.app/',
        // progress: "Yes",
        category: "PERN",
        repositoryName : "Khaao-Restaurant",
        Date:"August, 2023"
    },
    {
        title: "Quiz App",
        description: "This interactive quiz application offering a dynamic user experience with automated time control for each question. The app ensures smooth transitions between questions while keeping the user engaged with visual cues, such as time alerts and real-time score tracking.",
        features: [
            "Each question is presented with a 60-second timer, ensuring users must make a selection within the given timeframe.",
            "The timer automatically transitions to the next question when the countdown reaches zero, maintaining a seamless flow of the quiz.",
            "During the last 10 seconds of each question, the countdown turns red to alert users that time is running out, enhancing the user experience with a visual cue.",
            "After the 60-second interval expires, the application automatically moves to the next question, reducing manual input and enhancing user focus.",
            "Scores are calculated dynamically based on correct answers, and the final result is displayed immediately at the end of the quiz.",
            "Smooth in-page transitions and state changes are handled by jQuery, providing an efficient and responsive interface."
        ],
        technology: ["HTML", "CSS", "Javascript",  "jQuery"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727425201/Portfolio/quizApp_ksxcx7.png",
        link: 'https://jineshprajapat.github.io/QuizApp/',
        category: "Javascript",
        repositoryName : "QuizApp",
        Date:"April, 2024"
    },
    {
        title: "College Community Application",
        description: "Our college community website seamlessly connects alumni with current students, fostering a dynamic exchange of experiences and opportunities. Users can effortlessly browse profiles, share insights on placements and competitive exams, and engage in discussions on various topics. Job opportunities are curated for easy access, and users can save discussions and opportunities for future reference. The site offers robust search and filtering options, enabling users to find relevant content and connect with peers based on criteria like branch and graduation year.",
        features: [
            "This platform facilitates requestless networking among alumni and students, offering advanced profile browsing with robust filters based on criteria such as field of study and graduation year.",
            "Dynamic hub for career opportunities, where users can effortlessly share job and internship openings.",
            "The discussion feature supports nested comments, while interview experiences inspire and provide ideas to others.",
            "A bookmark feature enables users to save discussions, job listings, and interview insights for future reference, enhancing convenience and accessibility on the platform.",
            "Peer-to-peer chat using Socket.IO is integrated, allowing users to see the online status, know if messages are viewed, and share images, videos, along with messages."
        ],
        technology: ["MongoDB", "ExpressJS", "ReactJS", "Redux", "NodeJs", "Scoket.io"],
        imageUrl: "https://res.cloudinary.com/dqvkis3qg/image/upload/v1727425177/Portfolio/communityApp_bfwfe3.png",
        link: 'https://ctae-website.vercel.app/',
        // production: "yes",
        progress: "yes",
        category: "MERN",
        repositoryName : "College-Community-Application",
        Date:"February, 2024"
    },
];