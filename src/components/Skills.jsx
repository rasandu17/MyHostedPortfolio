import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiTool, FiAward, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiTerminal className="text-3xl text-primary" />,
      skills: ["JavaScript", "Python", "Java", "SQL", "HTML/CSS"]
    },
    {
      title: "Frontend",
      icon: <FiCode className="text-3xl text-primary" />,
      skills: ["React", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend & Databases",
      icon: <FiDatabase className="text-3xl text-primary" />,
      skills: ["SpringBoot", "RESTful APIs", "MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      title: "Other Skills",
      icon: <FiTool className="text-3xl text-primary" />,
      skills: ["Object-Oriented Programming","Problem Solving", "Data Structures", "Algorithms", "UI/UX Basics", "Git/GitHub",]
    }
  ];

  const certifications = [
    "Distinction in IIT Foundation Level",
    "React.js Essential Training",
    "SpringBoot 2.0 Essential Training",
    "Cypher 2.0 Top 10 Finalist",
    "Coders v11.0 Participant",
    "CodeRally 5.0 Participant",
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="responsive-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Throughout my academic and project experience, I've developed skills in various technologies. Here are the key areas I'm proficient in:
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="card p-4 sm:p-6"
            >
              <div className="mb-3 sm:mb-4">{category.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{category.title}</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Achievements section */}
        <motion.div 
          className="mt-10 sm:mt-16 bg-gray-900 rounded-xl p-5 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center text-white flex items-center justify-center">
            <FiAward className="mr-2 text-primary" /> Certifications & Achievements
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {certifications.map((cert, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#0ea5e9", color: "white" }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 rounded-full shadow-md text-gray-300 border border-gray-700 cursor-default text-xs sm:text-sm"
              >
                {cert}
              </motion.span>
            ))}
          </div>
          
          <p className="text-center text-gray-400 mt-6 sm:mt-8 max-w-3xl mx-auto text-sm sm:text-base">
            I'm committed to continuous learning and professional development. These certifications represent my 
            dedication to mastering new skills and staying current with industry standards and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
