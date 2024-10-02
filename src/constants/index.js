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
    eplanet,
    northstar,
    threejs,
    capstonedImage,
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
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
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
    // {
    //   name: "Firebase",
    //   icon: firebase,
    // },
    {
      name: "Flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "Associate Software Engineer",
      company_name: "Northstar Technologies",
      icon: northstar,
      iconBg: "#FFFFF7",
      date: "April 2024 - Present",
      points: [
        "Analyzed application flows and optimized filter effectiveness for comprehensive coverage",
        "Made adjustments based on logs to ensure application performance remained smooth without breaking",
        "Created runtime options for enabling/disabling filters and collecting logs for enhanced flexibility and monitoring",
        "Successfully deployed filters to production, demonstrating effective integration and impact",
      ],
    },
    {
      title: "Trainee Software Engineer",
      company_name: "Northstar Technologies",
      icon: northstar,
      iconBg: "#FFFFF7",
      date: "February 2024 - April 2024",
      points: [
        "Configured OWASP Dependency-Check with Ant, identifying and addressing multiple vulnerable jars",
        "Conducted pentesting using Burp Suite and addressed OWASP Top 10 vulnerabilities",
        "Developed 6 high-impact filters for a Spring and Struts-based enterprise app, enhancing security across the entire system",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Eplanet Global",
      icon: eplanet,
      iconBg: "#FFFFF7",
      date: "October 2023 - February 2024",
      points: [
        "Orchestrated the development of a Flutter-based mobile application adhering to the MVVM architecture",
        "Collaborated seamlessly with QA testers, designers, and developers across teams",
        "Engineered a suite of reusable components, translating over 20 intricate Figma designs into responsive screens",
        "Consumed Rest APIs and managed state using Bloc and Cubit, optimizing efficiency",
        "Strategically implemented Singleton and Factory patterns, streamlining project scalability and maintainability",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Hasin consistently demonstrated strong dedication, attention to detail, and a proactive approach to tasks. His commitment to achieving excellence in their work was evident in a project we collaborated on. With a solid work ethic and excellent communication skills, Hasin proved to be a valuable asset to the team. I highly recommend Hasin and am confident in their ability to excel in any professional endeavor. Best wishes for continued success!",
      name: "Muhammad Abdullah",
      designation: "Lead SWE",
      company: "Eplanet Global",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQFpUdGQeEewrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1648750365651?e=1729728000&v=beta&t=Ur5RSEewMpRqsByaBq_4EuN9znQMlhviVZN182IUVwQ",
      profile: "https://www.linkedin.com/in/mabdullahmahmood"
    },
    {
      testimonial:
        "I highly recommend Hasin Zaman based on their exceptional performance during their internship at EPlanet Global. Hasin Zaman consistently demonstrated strong analytical skills, a quick learning ability, and a proactive approach to tasks. Their positive attitude, teamwork, and adaptability make them a valuable asset to any team. I am confident that Hasin Zaman will excel in their future endeavors.",
      name: "Mubeen Jamal",
      designation: "Lead SWE",
      company: "Eplanet Global",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQFKjFoBHYwP9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1597867024456?e=1729728000&v=beta&t=pGiqBAfzq9KS2byQ2hD5qncXLez-RsHEzmLhDa8BiLU",
      profile: "https://www.linkedin.com/in/mubeen-jamal"
    },
    {
      testimonial:
        "Hasin is a person with positive attitude, effective communication, and collaborative spirit which makes him a valuable team member. He approached tasks with enthusiasm and consistently delivered quality work. I believe his commitment to learning and his proactive approach will serve him well in any future endeavors. Wish you good luck and success in your career. :)",
      name: "Jharna Samtani",
      designation: "HRBP",
      company: "Eplanet Global",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQH6piunSvkhGw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1727102998000?e=1728514800&v=beta&t=87xQfQqeYTg9yxZij56D-NECRXrBpRa6BS9Asglneno",
      profile: "https://www.linkedin.com/in/jharna-s-16b000133/"
    }
  ];
  
  const projects = [
    {
      name: "Capstoned",
      description:
        "AI-powered system that streamlines project management with secure access, originality checks, and real-time communication.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: capstonedImage,
      source_code_link: "https://github.com/TahaMirza50/Capstoned",
    },
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
    // {
    //   name: "Promptopia",
    //   description:
    //     "A practice project by Javascript Mastery. A CRUD for prompts along with google authentication.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwindcss",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "googleauth",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: promptopiaImage,
    //   source_code_link: "https://promptopia-nextjs-hasin-riki.vercel.app/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };