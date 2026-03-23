import project1 from "../assets/projects/FOOD Delivery Thumbnail.png";
import project2 from "../assets/projects/TODO-THUMBNAIL.png";
import project3 from "../../public/Zaid.jpeg";
import project4 from "../assets/projects/project-4.jpg";
import interviewImg from "../assets/projects/interviewIq.png"; // ✅ ADD THIS

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Skills",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Skilled in HTML, CSS, JavaScript, and React.js, with hands-on experience in building responsive and user-friendly web applications. Passionate about writing clean code, solving problems, and continuously learning new technologies to enhance my web development expertise..`,
    technologies: ["HTML", "CSS", "Javascript", "React js"],
  },
  {
    year: "2025 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `B.Tech Computer Science graduate and aspiring Web Developer with strong skills in frontend and backend development. Proficient in HTML, CSS, JavaScript, React.js, and Node.js, with experience building responsive and user-friendly websites. Passionate about creating efficient, scalable web solutions and continuously learning new technologies to enhance my development skills. Looking for opportunities to contribute to innovative web projects and grow as a full-stack developer.`,
    technologies: ["B Tech"],
  },
  {
    year: "2019  -  2022",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Started my academic journey with a Diploma in Civil Engineering, but my passion for technology and coding led me to pursue B.Tech in Computer Science. Skilled in web development with experience in HTML, CSS, JavaScript, React.js, and Node.js. Passionate about building responsive websites and continuously improving my skills as a full-stack developer.`,
    technologies: ["Diploma in Civil"],
  },
  {
    year: "2019",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Passed SSC Board Exams (10th class) in 2019, where I developed a strong interest in technology and computers. This passion guided me to pursue a career in computer science and web development, building skills in HTML, CSS, JavaScript, React.js, and Node.js.`,
    technologies: ["SSC Board 10th"],
  },
];
export const PROJECTS = [
  {
    title: "Interview IQ (AI Mock Interview Platform)",
    image: interviewImg,
    description:
      "Built an AI-powered mock interview platform that analyzes resumes and generates personalized interview questions. Integrated AI-based evaluation to provide real-time feedback, scoring, and performance tracking with interview history.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    link: "https://ai-mern-interviewagent-frontend.onrender.com",
    demo: "https://youtube.com/shorts/Qnvv6Yc5H7s?si=uRmSO12f1fFDMA7s",
  },

  {
    title: "Food Delivery System",
    image: project1,
    description:
      "Built a full-stack food delivery app with cart management, quantity updates, and responsive UI. Designed scalable APIs using Node.js and MongoDB.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://zaid1243.github.io/Foodlo/",
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Designed and developed a personal portfolio to showcase projects, skills, and contact details with responsive UI.",
    technologies: ["React", "TailwindCSS", "HTML", "CSS"],
    link: "https://zaid1243.github.io/Portfolio/",
  },

  {
    title: "React TODO CRUD App",
    image: project2,
    description:
      "Developed a full CRUD Todo application with add, edit, delete, and update functionality using reusable components.",
    technologies: ["React", "JavaScript"],
    link: "https://zaid1243.github.io/TODO-CRUD-APP/",
  },

  {
    title: "Techie News",
    image: project4,
    description:
      "Created a fast news search app with debounced API calls and responsive design using modern React practices.",
    technologies: ["React", "Tailwind CSS", "News API"],
    link: "https://zaid1243.github.io/news-lo/",
  },
];

export const CONTACT = {
  address: "Hatte Nagar , Latur 413512 Maharastra",
  phoneNo: "+91 9370 5111 48",
  email: "skzaid8821@gmail.com",
  linkedin: "https://www.linkedin.com/in/zaid-shaikh-b09483255/",
  portfolio: "https://zaid1243.github.io/Portfolio/",
};
