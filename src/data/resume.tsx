import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Batham",
  initials: "RB",
  url: "https://rahulbatham767.github.io/Portfolio/",
  location: "Gwalior,M.P",
  locationLink: "https://www.google.com/maps/place/Gwalior",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Telegram.",
  summary:
    "Aspiring web developer with a solid foundation in web technologies and hands-on experience through various projects and internships. Known for creativity, discipline, proactivity, and a fast learning pace, committed to continuous improvement and delivering high-quality work. Eager to bring skills and passion for web development to a dynamic team.",
  avatarUrl: "/me1.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Javascript",
    "TailwindCSS",
    "AWS",
    "MySQL",
    "MongoDB",
    "Git",
    "Sanity",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rahulbatham767@gmail.com",
    tel: "+917999754170",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahulbatham767",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rahul-batham767",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "rahulbatham767@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Oasis InfoByte",
      badges: [],
      href: "https://oasisinfobyte.com/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/oasis.jpeg",
      start: "January 2023",
      end: "February 2023",
      description:
        "Developed and maintained web applications using HTML, CSS, JavaScript, and React, focusing on responsive layouts for cross-device compatibility. He optimized frontend performance through refactoring, lazy loading, and caching, ensured consistent user experience with cross-browser testing and debugging, and collaborated with UX/UI designers to translate mockups into functional interfaces while documenting the codebase using Git for version control.",
    },
    {
      company: "Hukkum It Solutions",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: " ",
      start: "September 2023",
      end: "November 2023",
      description:
        "Focus on frontend development, integrating components with backend APIs for asynchronous data fetching and display, contributing innovative ideas in team discussions, and implementing state management using Redux or Context API with open-source libraries.",
    },

    {
      company: "Salesforce",
      href: "https://www.salesforce.com/in/",
      badges: [],
      location: "Remote",
      title: "Salesforce Developer Intern",
      logoUrl: "/salesforce.png",
      start: "November 2023",
      end: "January 2024",
      description:
        "Configured Salesforce org settings, customized objects, fields, user permissions, and automated business processes using workflows, process builder, and flows.Proficient in Apex development, including writing triggers, classes, unit testing, and debugging. Utilized Salesforce CLI and configured VS Code with Salesforce extensions for development, deployment, and version control.",
    },
  ],
  education: [
    {
      school: "Cambridge School Dabra",
      href: "https://schools.org.in/gwalior/23040115997/cambridge-school-dabra-1-12-cbse-dabra.html",
      degree: "Higher Secondary School",
      logoUrl: "/cambridge.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Institute of Technology and Managment Gwalior",
      href: "https://www.itmgoi.in/",
      degree: "Bachelor's of Technology(B.Tech)",
      logoUrl: "https://www.itmgoi.in/new_assets/images/ITM_Logo.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Text To Animation",
      href: "https://text-to-animation.vercel.app/",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "Generate images and animations from text prompts using advanced AI models like RunwayML, Stable Diffusion, and Kaleido.Effortlessly remove image backgrounds with an integrated tool for enhanced visual aesthetics",
      technologies: [
        "React",
        "Node Js",
        "Daisy ui",
        "Redux",
        "Cloudinary",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://text-to-animation.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/text-to-animation.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "iNotebook",
      href: "https://inotebook-frontend-three.vercel.app/",
      dates: "January 2023 - February 2023",
      active: true,
      description:
        "Developed a user-friendly note-taking tool with a focus on simplicity for easy organization and quick access to notes.Implemented a secure and intuitive user authentication system, including registration, login, and password reset via email verification.",
      technologies: ["React", "Node Js", "Express", "Redux", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://inotebook-frontend-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/iNotebook.png",
    },
    {
      title: "TextUtils",
      href: "https://rahulbatham767.github.io/TextUtils/",
      dates: "February 2023 - March 2023",
      active: true,
      description:
        "Developed a website with the primary functionalities of calculating typing speed and reading content aloud. Integrated functionality to measure and display typing speed based on user input. Implemented a feature to convert text content into speech, enhancing accessibility and usability.",
      technologies: ["React", "Node Js", "Express", "MongoDB", "BOotstrap"],
      links: [
        {
          type: "Website",
          href: "https://rahulbatham767.github.io/TextUtils/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/text.PNG",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;
