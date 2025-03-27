const portfolioData = {
  personalInfo: {
    name: "Ravindu Sandumith",
    role: "Computer Science Undergraduate",
    location: "Kalubowila, Dehiwala, Sri Lanka",
    about: "A Computer Science undergraduate specializing in developing high-performance web applications and backend systems. Proficient in Python, Java, React.js, and database technologies (SQL & MongoDB), with a strong focus on optimizing backend performance and ensuring seamless user experiences.",
    interests: ["Web Development", "Software Engineering", "Object-Oriented Programming", "Backend Development", "Database Systems", "UI/UX Design"],
    personality: "I'm detail-oriented, curious, and always eager to learn new technologies. I enjoy collaborating with others and believe in writing clean, maintainable code."
  },
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Westminster",
      duration: "2021 - Present",
      description: "Currently in my second year with a focus on software engineering and web technologies. Participating in programming competitions and hackathons."
    },
    {
      degree: "High School",
      school: "Royal College",
      duration: "2014 - 2023",
      description: "Achieved 8As and 1C in my GCE O/L examinations. Subjects with A grades included Mathematics, Science, English, and others. I was also Head of IT for both the Non-Addict Movement Society and the Photographic Society."
    }
  ],
  
  experience: [],
  
  skills: [
    // Programming Languages
    "JavaScript", "Python", "Java", "SQL", "HTML/CSS",
    
    // Frontend
    "React", "Tailwind CSS", "Bootstrap", "Responsive Design",
    
    // Backend & Databases
    "SpringBoot", "RESTful APIs", "MongoDB", "MySQL", "PostgreSQL", "Firebase",
    
    // Other Skills
    "Object-Oriented Programming", "Problem Solving", "Data Structures", "Algorithms", "UI/UX Basics", "Git/GitHub"
  ],
  
  projects: [
    {
      title: "Project Ceilão.Grid",
      technologies: ["Kotlin", "AR core", "Firebase"],
      description: "Smart Gardening Assistant with AR for optimizing small-space gardening, visualizing plant arrangements. Built with Kotlin & Java.",
      github: "https://github.com/Akilalochana/Software-Development-Group-Project-"
    },
    {
      title: "Ceilao.Grid marketing website",
      technologies: ["React", "Javascript", "EmailJs"],
      description: "Marketing website for CeilaoGrid built with React and Vite, designed to showcase the project's features and provide an engaging, responsive user experience.",
      github: "https://github.com/rasandu17/ceilaogrid-web"
    },
    {
      title: "Real-estate Agent Web-Application",
      technologies: ["Reactjs"],
      description: "Application for users to search for properties using various criteria, view detailed property information, and manage a favorites list, built with React.js.",
      github: "https://github.com/rasandu17/Realestate-Web"
    },
    {
      title: "Ticket Management System",
      technologies: ["React", "SpringBoot", "Java", "Object-Oriented Programming", "MongoDB"],
      description: "Real-Time Ticketing System with Java-based CLI, React dashboard, and Spring Boot backend for efficient ticket management.",
      github: "https://github.com/yourusername/project4"
    },
    {
      title: "Eco Treasures",
      technologies: ["HTML", "CSS", "Javascript"],
      description: "Ecotreasures is an HTML & CSS website raising awareness about 'Life on Land' and environmental conservation.",
      github: "https://github.com/yourusername/project5"
    },
    {
      title: "Student Activity Management System",
      technologies: ["Java"],
      description: "A Student Management System developed in Java that stores student details and module marks, and generates summaries and reports.",
      github: "https://github.com/yourusername/project6"
    }
  ],
  
  certifications: [
    "Distinction in IIT Foundation Level",
    "React.js Essential Training",
    "SpringBoot 2.0 Essential Training",
    "Cypher 2.0 Top 10 Finalist",
    "Coders v11.0 Participant",
    "CodeRally 5.0 Participant"
  ],
  
  contactInfo: {
    email: "rasandu17@gmail.com",
    phone: "+94 77 608 2132",
    social: {
      github: "https://github.com/rasandu17",
      linkedin: "https://www.linkedin.com/in/ravindu-sandumith-240152325"
    }
  },
  
  // Add more personal details for the chatbot to use
  conversationStyle: {
    greeting: "Hi there! Thanks for stopping by my portfolio. How can I help you today?",
    tone: "friendly but professional",
    commonPhrases: ["I'm passionate about solving problems with code", "I'm always learning new technologies", "I enjoy building applications that make a difference"],
    interests: ["I love building web applications", "I'm interested in backend development", "I enjoy working with databases and designing efficient systems"]
  }
};

export default portfolioData;
