import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Ceilão.Grid",
      image: "/sdgp.png",
      technologies: ["Kotlin", "AR core", "Firebase"],
      description: "Smart Gardening Assistant with AR for optimizing small-space gardening, visualizing plant arrangements.",
      github: "https://github.com/Akilalochana/Software-Development-Group-Project-",
    },
    {
      id: 2,
      title: "Ceilao.Grid marketing website",
      image: "/ceilaoweb.png",
      technologies: ["React", "Javascript", "EmailJs"],
      description: "Marketing website for CeilaoGrid built with React and Vite, designed to showcase the project's features.",
      github: "https://github.com/rasandu17/ceilaogrid-web",
    },
    {
      id: 3,
      title: "Real-estate Agent Web-Application",
      image: "/ASD.png",
      technologies: ["Reactjs"],
      description: "Application for users to search for properties using various criteria and manage favorites.",
      github: "https://github.com/rasandu17/Realestate-Web",
    },
    {
      id: 4,
      title: "Ticket Management System",
      image: "/ticket.png",
      technologies: ["React", "SpringBoot", "Java", "MongoDB"],
      description: "Real-Time Ticketing System with Java-based CLI, React dashboard, and Spring Boot backend.",
      github: "https://github.com/yourusername/project4",
    },
    {
      id: 5,
      title: "Eco Treasures",
      image: "/eco.png",
      technologies: ["HTML", "CSS", "Javascript"],
      description: "Website raising awareness about 'Life on Land' and environmental conservation.",
      github: "https://github.com/yourusername/project5",
    },
    {
      id: 6,
      title: "Student Activity Management System",
      image: "/SD2.png",
      technologies: ["Java"],
      description: "A Student Management System that stores student details and module marks, generates reports.",
      github: "https://github.com/yourusername/project6",
    }
  ];

  return (
    <section id="projects" className="figma-section">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="relative inline-block mb-6">
            <div className="relative inline-block px-6 py-4 border border-figmaBlack">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold relative inline-block">
                <span className="text-figmaBlack">My</span>
                <span className="text-figmaOrange ml-2">Projects</span>
              </h2>
              {/* Corner handles */}
              <span className="absolute -top-2 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
              <span className="absolute -top-2 -right-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
              <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
              <span className="absolute -bottom-2 -right-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2">
              <div className="figma-cursor md:scale-125"></div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-figmaBlack text-lg mb-2">What I've Built?:</p>
            <p className="text-figmaBlack text-xl font-medium">A Collection of My Work</p>
          </div>
        </motion.div>

        {/* Unique Flowchart-Style Layout */}
        <div className="relative">
          {/* Main vertical connector line (hidden on mobile) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-figmaOrange"></div>
          
          {/* Projects in a unique flow layout */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-0 md:pl-0' : 'md:pl-0 md:pr-0'}`}
              >
                {/* Project container with frame */}
                <div className="relative">
                  {/* Horizontal connecting line from main line to project (hidden on mobile) */}
                  <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-figmaOrange"></div>
                  
                  {/* Frame box */}
                  <div className="figma-box-white p-6 md:p-8 rounded-xl relative border border-figmaBlack md:ml-20">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Image Section */}
                      <div className="md:col-span-1">
                        <div className="relative group h-48 md:h-full min-h-[200px] rounded-lg overflow-hidden border border-figmaBlack">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-figmaOrange/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white text-figmaBlack p-4 rounded-full hover:bg-figmaGrey transition-colors transform hover:scale-110"
                            >
                              <FiGithub size={24} />
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:col-span-2 flex flex-col">
                        {/* Title with frame */}
                        <div className="relative inline-block mb-4 w-fit">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-figmaBlack relative inline-block px-4 py-2 border border-figmaBlack">
                            {project.title}
                            {/* Corner handles */}
                            <span className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                            <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                            <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                            <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-figmaBlack mb-4 leading-relaxed flex-1 text-sm md:text-base">
                          {project.description}
                        </p>
                        
                        {/* Technologies as tag boxes */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className={`${techIndex % 3 === 0 ? 'figma-tag-orange' : techIndex % 3 === 1 ? 'figma-tag-black' : 'figma-tag-outline'} text-xs md:text-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* GitHub link */}
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-figmaOrange hover:text-figmaBlack font-medium text-sm md:text-base w-fit group"
                        >
                          <FiGithub className="mr-2" />
                          <span>View Source Code</span>
                          <div className="ml-2 figma-cursor transform group-hover:translate-x-1 transition-transform"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* GitHub CTA Section - Thin Horizontal Rectangle */}
        <motion.div 
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative">
            <div className="figma-box-orange p-4 rounded-xl border border-white/20">
              <div className="flex items-center gap-4 justify-between">
                {/* Left side - Text */}
                <p className="text-white text-sm md:text-base font-medium">Explore More Projects</p>
                
                {/* Right side - Button */}
                <a 
                  href="https://github.com/rasandu17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-figmaOrange hover:bg-figmaGrey px-4 py-2 rounded-lg font-medium inline-flex items-center transition-colors text-sm md:text-base"
                >
                  <FiGithub className="mr-2" /> View All on GitHub
                </a>
              </div>
            </div>
            <div className="absolute -right-8 md:-right-10 top-1/2 -translate-y-1/2">
              <div className="figma-cursor md:scale-125"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
