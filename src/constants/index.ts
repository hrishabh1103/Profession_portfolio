import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  smarttraffic,
  score,
  visiontrack,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Ai/ML Developer",
    icon: web,
  },
  {
    title: "Software Engineering Intern",
    icon: mobile,
  },
  {
    title: "Backend Engineer (Node.js)/Python",
    icon: backend,
  },
  {
    title: " Graphic Designer & Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: html,
  },
  {
    name: "Python",
    icon: css,
  },
  {
    name: "MySQL",
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
    name: "PyTorch",
    icon: redux,
  },
  {
    name: "Postman",
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
    name: "Django",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Canva",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Ai Developer Trainee",
    companyName: "We360.ai",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2025 - April 2025",
   points: [
  "Developed AI-driven productivity analytics with real-time alerts, sentiment analysis, and behavioral tracking.",
  "Enhanced performance flagging, improving productivity assessment accuracy by 30%.",
  "Streamlined workforce management through AI automation and goal optimization algorithms.",
  "Led AI model development for employee productivity monitoring and analytics.",
],
  },
  {
    title: "Data Science Intern",
    companyName: "Next24 Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed ML models for e-commerce recommendations and house price prediction.",
      "Optimized data pipelines, improving model accuracy and efficiency.",
      "Gained hands-on experience in predictive analytics and data-driven decision-making.",
      "Worked on E-commerce Product Recommendation System and House Price Prediction.",
      "Developed predictive models and deployed machine learning algorithms.",
    ],
  },
  {
    title: "Graphic Designer",
    companyName: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
    "Designed creative event banners and promotional materials for various college functions, enhancing visual appeal and engagement.",
    "Delivered custom posters and graphics for ISKCON Bhopal, aligning with brand identity and cultural aesthetics.",
    "Created unique wedding and invitation card designs tailored to client preferences, blending traditional and modern styles.",
    "Managed multiple freelance design projects simultaneously, ensuring timely delivery and high-quality results.",
    ],
  },
    {
    title: "Voice Over Junior Artist",
    companyName: "RedFM",
    icon: meta, // you can replace this with a relevant icon if available
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Worked as a voice over junior artist during an internship at RedFM.",
      "Provided voice recordings for radio segments, advertisements, and promotional content.",
      "Collaborated with senior voice artists and producers to deliver high-quality audio outputs.",
      "Gained experience in audio modulation, script interpretation, and broadcast standards.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Hrishabh consistently delivers high-quality code and is always ready to help teammates. His dedication and technical skills make him an invaluable asset.",
    name: "Raunak Sharma",
    designation: "CFO",
    company: "SavingsKaro.in",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Hrishabh was an absolute pleasure. His ability to break down complex problems and implement smart, scalable solutions sets him apart.",
    name: "Rahul Mehta",
    designation: "Manager",
    company: "We360.ai",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The AI-powered modules Hrishabh built for our platform significantly enhanced our analytics. His understanding of both tech and user experience is outstanding!",
    name: "Vikram Soni",
    designation: "Team",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Genius AI Assistant",
    description:
      "An advanced voice-enabled AI assistant that supports natural language interaction, wake-word detection, multilingual support, and IoT device integration. It provides reminders, smart automation, and real-time information like IPL scores, making daily tasks easier and more interactive.",
    tags: [
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/hrishabh1103/Minor_Project02_Genius_Ai_Assistant",
  },
  {
    name: "Blockchain-Based Voting System",
    description:
      "A secure blockchain-powered voting system ensuring transparency, immutability, and tamper-proof election records. It enables real-time vote counting, decentralized data storage, and verifiable audit trails for trusted digital voting.",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/hrishabh1103/Blockchain_Based_Voting_Machine",
  },
    {
    name: "Shakti – Women Safety App",
    description:
      "A women safety mobile application that provides real-time location tracking, emergency alerts, and quick SOS features to ensure user safety. Integrated with live GPS tracking and SMS systems for instant help in critical situations.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // replace with an appropriate image asset if available
    sourceCodeLink: "https://github.com/hrishabh1103/Women_Safety_app",
  },
  {
    name: "IPL Score Predictor",
    description:
      "A machine learning project that predicts IPL match scores and outcomes based on historical data, player statistics, and live inputs. Provides insights for teams and fans with data-driven predictions.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: score,
    sourceCodeLink: "https://minor-project02-genius-ai-assistant-lake.vercel.app/",
  },
  {
    name: "Smart Adaptive Traffic Management ",
    description:
      "An AI-powered traffic management system that uses computer vision and real-time data to optimize traffic light timings, reduce congestion, and improve road safety.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: smarttraffic,
    sourceCodeLink: "https://github.com/hrishabh1103/Smart_Trafic_management_sys",
  },
  {
    name: "VisionTrack.ai",
    description:
      "A computer vision based tracking system that detects and tracks multiple objects in real-time using advanced deep learning models, providing analytics and insights for surveillance and automation.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: visiontrack,
    sourceCodeLink: "https://github.com/hrishabh1103/VisionTrackai",
  },
];

export { services, technologies, experiences, testimonials, projects };
