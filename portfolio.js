import emoji from "react-easy-emoji";

export const greetings = {
  name: "Jay Sharma",
  title: "Hi, I'm Jay",
  description:
    "Proficient in the analysis of software design requirements and extensive experience in front-end development. Additionally, I am skilled at initiating web projects from inception, implementing innovative solutions, and creating engaging frontend applications through polished code.",
  resumeLink:
    "https://drive.google.com/file/d/1BV_L8mFKBswFlXf-SnoBtx-jMVJy77iS/view?usp=sharing",
};

export const openSource = {
  githubUserName: "JAY9039",
};

export const contact = {};

export const socialLinks = {
  url: "https://sharmajay.netlify.app",
  linkedin: "https://www.linkedin.com/in/j-shharma/",
  github: "https://github.com/JAY9039",
  instagram: "https://www.instagram.com/j_shharma/",
  facebook: "https://www.facebook.com/jshharma",
  twitter: "https://twitter.com/j_shharma",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "A CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE TECH IN MORE DETAIL | I ASPIRE TO GO FULL STACK",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        "Building responsive Single-Page-Apps (SPAs) in React.js",
        "Building responsive static websites using Next.js",
        "Integrated API calls using Redux-Toolkit",
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Vanilla JS", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "ReactJs",
    progressPercentage: "88",
  },
  {
    Stack: "NextJs",
    progressPercentage: "82",
  },
];

export const educationInfo = [
  {
    schoolName: "Vellore Institute of Technology, Bhopal",
    subHeader: "Master of Computer Application",
    duration: "Jul 2021 - Jul 2023",
    desc: "Member of Placement Coordination Team for MCA (batch 2021-2023)",
    grade: "CGPA 9.2",
    descBullets: [
      "Graduated with a 9.2 CGPA in Masters of Computer Application from VIT.",
      "It was a transformative platform where I thrived both personally and professionally.",
      "Secured my first internship in the second semester.",
    ],
  },
  {
    schoolName: "Amity University Madhya Pradesh",
    subHeader: "Bachelor of Computer Application",
    duration: "Jul 2018 - Jul 2021",
    desc: "Part of Amity-Coding-Club. Hosted coding events and participated in them as well.",
    grade: "CGPA 8.1",
    descBullets: [
      "Graduated with a 8.1 CGPA in Bachelor of Computer Application from Amity university.",
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer - ReactJs",
    company: "Solytics Partners",
    companylogo: "/img/icons/common/sp.jpeg",
    date: "Aug 2023 – Ongoing",
    desc: "Contributed to a high-performance SAAS product for swift user experiences, facilitating FINCEN registration with identity verification. Led a major overhaul, integrating React-Tables, Material-UI, and Formik for improved UI/UX.",
  },
  {
    role: "Jr. Software Developer",
    company: "AppHie Technologies",
    companylogo: "/img/icons/common/hq.jpeg",
    date: "Apr 2023 – Jul 2022",
    desc: "Working on a CRM and a Real-Estate Application with business logic and optimal functionality.",
  },
  {
    role: "Software Developer Intern - ReactJs",
    company: "SeedWill Consulting",
    companylogo: "/img/icons/common/sw.jpg",
    date: "Apr 2022 – Mar 2023",
    desc: "Worked on a CRM and a Real-Estate Application with business logic and optimal functionality.In this migration project our team was responsible for efficiently optimized and decreased server load by 22% and application load time by 40%",
  },
  {
    role: "DevOps Engineer Intern",
    company: "TCS iON",
    companylogo: "/img/icons/common/tcs.jpg",
    date: "May 2020 – Jul 2020",
    desc: "Skills: Shell Scripting ·Linux ·Terminal ·Containerization ·Amazon EC2 ·Putty ·Docker",
  },
  {
    role: "Python Developer Intern",
    company: "Verzeo Edutech",
    companylogo: "/img/icons/common/v.png",
    date: "May 2020 – Jul 2020",
    desc: "In this project-based internship, the team of Three members dealt with a dataset and implemented Data Processing/Analysis using libraries like matplotlib and pandas. Skills: Python ·Seaborn ·Matplotlib ·NumPy ·EDA ·Data Analysis",
  },
];

export const projects = [
  {
    name: "Dev Finder",
    desc: "A small react app that helps us find and see the stats of you favorite GitHub user.",
    github: "https://github.com/JAY9039/Sweet-Dev-Finder",
  },
  {
    name: "Finanssi",
    desc: "Finanssi is a tool to track changes for your favorite Crypto Coins and Stocks, News about the recent market changes, Information regarding how investments work in stocks and coin market.",
    github: "https://github.com/JAY9039/Finanssi",
  },
  {
    name: "Wordle Game",
    desc: "Just a small word Guessing game using ReactJs",
    github: "https://github.com/JAY9039/Sweet-Wordle",
  },
  {
    name: "Finanssi Coins",
    desc: "This app shows you the price of some leading cryptocurrencies and Plots a graph that shows their 7 day change in its pricing.",
    github: "https://github.com/JAY9039/FinanssiCoins",
  },
  {
    name: "Accu-Weather",
    desc: "This react-native app gets you the real time weather condition of the city of your choice.",
    github: "https://github.com/JAY9039/AccuWeather",
  },
  {
    name: "Sweet-Netflix",
    desc: "A simple Netflix UI clone.",
    github: "https://github.com/JAY9039/Sweet-Netflix",
  },
];

export const feedbacks = [
  {
    name: "Ram Sharan Mittal - CTO @SeedWill Consulting Pvt.Ltd",
    feedback:
      "He`s a quick Learner and made his impact within our team in a very short time.",
  },
  {
    name: "Anuj Shrivastava - SDE @SeedWill Consulting Pvt.Ltd",
    feedback:
      "Been working with jay for a while, he has demonstrated quick learning and realization skills. I’m lucky to have him on my team",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "JAY SHARMA",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Jay Sharma",
  image: "https://avatars.githubusercontent.com/u/53913697?v=4",
  url: "https://sharmajay.netlify.app",
  keywords: [
    "Jay",
    "Jay Sharma",
    "@JAY9039",
    "@J_shharma",
    "Portfolio",
    "Jay Portfolio ",
    "Jay Shamra Portfolio",
    "Jay VIT Portfolio",
    "Portfolio jay sharma",
    "Portfolio jay sharma gwalior",
    "jay sharma gwalior Portfolio",
    "Portfolio jay gwalior",
    "gwalior Portfolio jay",
  ],
};
