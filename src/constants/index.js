import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    techcareer,
    willing,
    chatgpt,
    netflix,
    apple,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack software developer Bootcamp,",
      company_name: "Tech-career",
      icon: techcareer,
      iconBg: "#E6DEDD",
      date: "March 2022 - Jan 2023",
      points: [
        "10 months of professional Bootcamp in software engineering and web development expertise.",
      ],
    },
    {
      title: "Internship in Full Stack Development",
      company_name: "Willing App",
      icon: willing,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "As part of my job, I am responsible for developing full stack web application using MERN stack.",
        "Construction and arrangement of components.",
        "Work amongst the server side (Back end).",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "ChatGpt",
      description:
        "ChatGPT application with the use of OpenAI API to create a chatbot, and the option to choose different OpenAI models.",
      tags: [
        {
          name: "Typescript",
          color: "dark-blue-text-gradient",
        },
        {
          name: "Next.jS 13",
          color: "pink-text-gradient",
        },
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
      ],
      image: chatgpt,
      source_code_link: "https://github.com/AvielSheto/ChatGPT-Clone",
    },
    {
      name: "Netfilx",
      description:
        "Streaming service management Full stack web application using MERN stack",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB ",
          color: "green-text-gradient",
        },
        {
          name: "Redux-toolkit",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "dark-blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/AvielSheto/Streaming-service-management-MERN",
    },
    {
      name: "Apple Store",
      description:
        "React app using redux, routing, Firebase, style and mobile responsiveness with Bootstraps and MUI.",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
      ],
      image: apple,
      source_code_link: "https://github.com/AvielSheto/Apple-Store-Clone",
    },
  ];
  
  export { services, technologies, experiences,  projects };