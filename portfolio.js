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
  // url: "https://1hanzla100.github.io/",
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
    // {
    //   title: "Cloud Infra-Architecture",
    //   lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji("⚡ Experience of working on multiple cloud platforms"),
    //     emoji(
    //       "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
    //     ),
    //     emoji(
    //       "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "logos:aws",
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "logos:microsoft-azure",
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "logos:heroku-icon",
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "logos:postgresql",
    //     },
    //     {
    //       skillName: "Github",
    //       fontAwesomeClassname: "akar-icons:github-fill",
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "logos:docker-icon",
    //     },
    //     {
    //       skillName: "Github Actions",
    //       fontAwesomeClassname: "logos:github-actions",
    //     },
    //     {
    //       skillName: "Cloudinary",
    //       fontAwesomeClassname: "logos:cloudinary",
    //     },
    //     {
    //       skillName: "Nginx",
    //       fontAwesomeClassname: "logos:nginx",
    //     },
    //     {
    //       skillName: "Sentry",
    //       fontAwesomeClassname: "logos:sentry-icon",
    //     },
    //   ],
    // },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
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
    desc: "In this project-based internship, the team of Three members dealt with a dataset and implemented Data Processing/Analysis using libraries like matplotlib and pandas. Skills: Python ·Seaborn ·Matplotlib ·NumPy ·EDA ·Data Analysis"
  }
];

export const projects = [
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "https://github.com/1hanzla100/Django-React-Marketplace",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "https://github.com/1hanzla100/django-react-forum",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

export const feedbacks = [
  {
    name: "John Smith",   
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "JAY SHARMA",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Hanzla Tauqeer",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
//   url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Jay",
    "Jay Sharma",
    "@JAY9039",
    "@J_shharma",
    "Portfolio",
    "Jay Portfolio ",
    "Jay Shamra Portfolio",
    "Jay VIT Portfolio",
  ],
};
