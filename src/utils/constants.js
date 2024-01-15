import { about_1, about_2, about_3, about_4 } from '../../public';
import { bootstrap, css, figma, gitlab, html, javascript, framerMotion, npm, react, tailwind, vscode, vite } from '../../public';
import { dessayPhoto, youtubeClone, tastyBites, portfolio } from '../../public';


export const navLink = [
    {
        id: 1,
        title: "About",
        path: "#about"
    },
    {
        id: 2,
        title: "Skills",
        path: "#skills"
    },
    {
        id: 3,
        title: "Projects",
        path: "#projects"
    }
];


export const aboutPic = [
    about_1, about_2, about_3, about_4
];


export const aboutMe = [
    "$coding", "$learning", "$goals", "$responsible", "$adaptive"
];


export const skills = [
    {
        logo: html,
        title: "HTML",
    },
    {
        logo: css,
        title: "CSS",
    },
    {
        logo: javascript,
        title: "Javascript",
    },
    {
        logo: tailwind,
        title: "Tailwind",
    },
    {
        logo: bootstrap,
        title: "Bootstrap",
    },
    {
        logo: react,
        title: "React",
    },
    {
        logo: vite,
        title: "Vite",
    },
    {
        logo: framerMotion,
        title: "Framer Motion",
    },
    {
        logo: figma,
        title: "Figma",
    },
    {
        logo: gitlab,
        title: "Gitlab",
    },
    {
        logo: npm,
        title: "NPM",
    },
    {
        logo: vscode,
        title: "VSCode"
    },
];

export const projects = [
    {
        id: 1,
        img: dessayPhoto,
        heading: "Photography Website",
        title: "Dessay Photography Shots",
        description: "This project is a collaborative effort with Dessay, a talented and aspiring photographer, who graciously allowed me to design and develop her portfolio using her collection of captivating shots.",
        tools: [
            "Vite", "React", "Tailwind"
        ],
        btn: "Take a look",
        link: "https://dessay-photography.vercel.app/",
        github: "https://github.com/francisnpls/Dessay-photography"
    },
    {
        id: 2,
        img: youtubeClone,
        heading: "Youtube Clone",
        title: "With Public Youtube API",
        description: "This project aims to replicate the iconic features of YouTube while practicing the capabilities of the API to ensure real-time data and a dynamic user interface.",
        tools: [
            "Vite", "React", "Tailwind", "Rapid API"
        ],
        btn: "Take a look",
        link: "https://youtube-clone-own.netlify.app/",
        github: "https://github.com/francisnpls/Youtube_clone"
    },
    {
        id: 3,
        img: tastyBites,
        heading: "E-commerce Web",
        title: "Tasty Bites",
        description: "This food e-commerce website was just built using HTML, CSS, and JS and is still not fully developed. It is a response to a challenge from my front-end mentoring.",
        tools: [
            "HTML", "CSS", "Bootstrap", "Javascript",
        ],
        btn: "Take a look",
        link: "https://tasty-bites-eight.vercel.app/",
        github: "https://github.com/francisnpls/food-store"
    },
    {
        id: 4,
        img: portfolio,
        heading: "Personal Portfolio",
        title: "Front-End Portfolio Website",
        description: "My complete personal portfolio to showcase the skills and projects that I build along the way.",
        tools: [
            "Vite", "React", "Tailwind", "Framer Motion"
        ],
        btn: "Take a look",
        github: "https://github.com/francisnpls/francisnpls-bongshesh"
    }
];