import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Ceilão.Grid ",
      image: "/sdgp.png",
      technologies: ["Kotlin", "AR core", "Firebase"],
      description: "Smart Gardening Assistant with AR for optimizing small-space gardening, visualizing plant arrangements. Built with Kotlin & Java.",
      github: "https://github.com/Akilalochana/Software-Development-Group-Project-",
      
    },
    {
      id: 2,
      title: "Ceilao.Grid marketing website ",
      image: "/ceilaoweb.png",
      technologies: ["React","Javascript","EmailJs"],
      description: "Marketing website for CeilaoGrid built with React and Vite, designed to showcase the project's features and provide an engaging, responsive user experience.",
      github: "https://github.com/rasandu17/ceilaogrid-web",
      
    },
    {
      id: 3,
      title: "Real-estate Agent Web-Application",
      image: "/ASD.png",
      technologies: ["Reactjs"],
      description: "Application for users to search for properties using various criteria, view detailed property information, and manage a favorites list, built with React.js.",
      github: "https://github.com/rasandu17/Realestate-Web",
    },
    {
      id: 4,
      title: "Ticket Management System ",
      image: "/ticket.png",
      technologies: ["React", "SpringBoot", "Java","Object-Oriented Programming","MongoDB"],
      description: "Real-Time Ticketing System with Java-based CLI, React dashboard, and Spring Boot backend for efficient ticket management.",
      github: "https://github.com/yourusername/project4",
      
    },
    {
      id: 5,
      title: "Eco Treasures",
      image: "/eco.png",
      technologies: ["HTML", "CSS", "Javascript"],
      description: "Ecotreasures is an HTML & CSS website raising awareness about 'Life on Land' and environmental conservation.",
      github: "https://github.com/yourusername/project5",
      
    },
    {
      id: 6,
      title: "Student Activity Management System ",
      image: "/SD2.png",
      technologies: ["Java"],
      description: "A Student Management System developed in Java that stores student details and module marks, and generates summaries and reports.",
      github: "https://github.com/yourusername/project6",
      
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="responsive-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            A selection of my academic and personal projects that demonstrate my skills and interests in development.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full"
            >
              <div className="relative group h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base h-auto sm:h-24 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full bg-primary bg-opacity-10 text-primary"
                    >
                      <FiTag className="mr-1" /> {tech}
                    </span>
                  ))}
                </div>
                <div className="flex text-xs sm:text-sm">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-gray-300 hover:text-primary flex items-center"
                  >
                    <FiGithub className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/rasandu17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <FiGithub className="mr-2" /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
