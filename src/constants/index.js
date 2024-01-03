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
    tailwind,
    nodejs,
    mongodb,
    git,
    firebase,
    flutter,
    akodra,
    eplanet,
    threejs,
    goalzoneImage,
    supapayImage,
    promptopiaImage,
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
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Next.js Developer",
      icon: backend,
    },
    {
      title: "Nest.js Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Akodra",
      icon: akodra,
      iconBg: "#FFFFF7",
      date: "July 2023 - August 2023",
      points: [
        "Gathered requirements for a live project.",
        "Developed complete backend of project on Nest.js framework.",
        "Worked on a website on React and an admin portal on Next.",
        "Did 20% unit testing of backend using Jest",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Eplanet Global",
      icon: eplanet,
      iconBg: "#FFFFF7",
      date: "October 2023 - Present",
      points: [
        "Working on MVVM architecture of a mobile based live application on Flutter.",
        "Collaborating with cross-functional teams including ui designers, qa testers, and other developers to create high-quality app.",
        "Developing reusable components and converting Figma designs to screens.",
        "Ensuring responsive screens, implementing Restful apis, and managing state with Bloc and Cubit state management.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Hasin Zaman based on their exceptional performance during their internship at EPlanet Global. Hasin Zaman consistently demonstrated strong analytical skills, a quick learning ability, and a proactive approach to tasks. Their positive attitude, teamwork, and adaptability make them a valuable asset to any team. I am confident that Hasin Zaman will excel in their future endeavors.",
      name: "Mubeen Jamal",
      designation: "Lead SWE",
      company: "Eplanet Global",
      image: "https://media.licdn.com/dms/image/C4E03AQFKjFoBHYwP9g/profile-displayphoto-shrink_200_200/0/1597867024456?e=1709769600&v=beta&t=nlj3YMG-tUdqDK-dTt8TKWq-bCeMApJdbrB9abWhD9g",
    }
  ];
  
  const projects = [
    {
      name: "Goalzone",
      description:
        "A web app for booking grounds, registering players, registering teams, and finding opponent teams.",
      tags: [
        {
          name: "mongo",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
      ],
      image: goalzoneImage,
      source_code_link: "https://github.com/hasin-riki/Goalzone-Web-Application",
    },
    {
      name: "Supapay",
      description:
        "A mobile application that provides basic financial services, such as mobile banking and customer support.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bloc",
          color: "pink-text-gradient",
        },
      ],
      image: supapayImage,
      source_code_link: "https://github.com/hasin-riki/Supapay-Fintech-App",
    },
    {
      name: "Promptopia",
      description:
        "A practice project by Javascript Mastery. A CRUD for prompts along with google authentication.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "googleauth",
          color: "pink-text-gradient",
        },
      ],
      image: promptopiaImage,
      source_code_link: "https://promptopia-nextjs-hasin-riki.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };