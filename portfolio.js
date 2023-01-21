import emoji from "react-easy-emoji";

export const greetings = {
  name: "Jay Sharma",
  title: "Hi all, I'm Jay",
  description:
    "I'm passionate Frontend developer having an experience of web applications with JavaScript, React.js, Next.js, MaterialUI, AntDesign, Redux-Toolkit, Thunk and Saga, Webpack and many more modules.",
  resumeLink:
    "https://drive.google.com/file/d/1gqBYnw_rf4vnlrMSPH6reGdHWJMZTKB6/view?usp=share_link",
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
        emoji("⚡ Building responsive Single-Page-Apps (SPAs) in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Integrated API calls using Redux-Toolkit"),
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
    progressPercentage: "80",
  },
  {
    Stack: "NextJs",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Vellore Institute of Technology, Bhopal",
    subHeader: "Master of Computer Application",
    duration: "Jul 2021 - Jul 2023",
    desc: "Member of placement coordination team for MCA (batch 2021-2023)",
    // grade: "Grade A",
    descBullets: [
      "Current doing my internship in a Gurugram, IN based real state company as a Software Developer Intern: ReactJs.",
    ],
  },
  {
    schoolName: "Amity University Madhya Pradesh",
    subHeader: "Bachelor of Computer Application",
    duration: "Jul 2018 - Jul 2021",
    desc: "Part of Amity-Coding-Club. Hosted several Hackethons and coding events and participated in them as well.",
    // grade: "Grade A",
    // descBullets: [
    //   "",
    // ],
  },
];

export const experience = [
  {
    role: "Software Developer Intern - ReactJs",
    company: "SeedWill Consulting",
    companylogo: "/img/icons/common/sw.jpg",
    date: "Apr 2022 – Jun 2022",
    desc: "Working on a CRM and a Real-Estate Application with business logic and optimal functionality.In this migration project our team was responsible for efficiently optimized and decreased server load by 22% and application load time by 40%",
    // desc: "I worked as frontend web developer to design web app that include CRM and a Real State Website. ",
  },
  {
    role: "Remote Intern",
    company: "TCS iON",
    companylogo: "/img/icons/common/tcs.jpg",
    date: "May 2020 – Jul 2020",
    desc: "Skills: Shell Scripting ·Linux ·Terminal ·Containerization ·Amazon EC2 ·Putty ·Docker",
  },
  {
    role: "Remote Intern",
    company: "Verzeo Edutech",
    companylogo: "/img/icons/common/v.png",
    date: "May 2020 – Jul 2020",
    desc: "In this project-based internship, the team of Three members dealt with a dataset and implemented Data Processing/Analysis using libraries like matplotlib and pandas. Skills: Python ·Seaborn ·Matplotlib ·NumPy ·EDA ·Data Analysis",
  },
];

export const projects = [
  {
    name: "Dev Finder",
    desc: "A small react app that helps us find and see the stats of you favourite GitHub user.",
    github: "https://github.com/JAY9039/Sweet-Dev-Finder",
  },
  {
    name: "Finanssi",
    desc: "Finanssi is a tool to track changes for your faviourite Crypto Coins and Stocks, News about the recent market changes, Information regarding how investments work in stocks and coin market.",
    github: "https://github.com/JAY9039/Finanssi",
  },
  {
    name: "Wordle",
    desc: "Just a small word Guessing game using ReactJs",
    github: "https://github.com/JAY9039/Sweet-Wordle",
  },
  {
    name: "Finanssi Coins",
    desc: "This app shows you the price of some leading cryptocurrencies and Plots a graph that shows their 7 day change in its pricing.",
    github: "https://github.com/JAY9039/FinanssiCoins",
  },
  {
    name: "AccuWeather",
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
    name: "Anuj Shrivastava - SDE @SeedWill Consulting Pvt. Ltd",
    feedback:
      "Been working with jay for a while, he has demonstrated quick learning and realisation skills.",
  },
  {
    name: "Ram Sharan Mittal - CTO @SeedWill Consulting Pvt. Ltd",
    feedback:
      "He`s a quick Learner and made his impact within our team in a very short time.",
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
