import { motion } from 'framer-motion';
import { FiCalendar, FiAward, FiCode } from 'react-icons/fi';

const Experience = () => {
  const education = [
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
      description: "8As and 1C for GCE ordinary level , Head of IT for both the Non-Addict Movement Society and the Photographic Society"
    }
  ];



  const achievements = [
    "Distinction in IIT Foundation Level",
    "Cypher 2.0 Top 10 Finalist",
    "Coders v11.0 Participant",
    "CodeRally 5.0 Participant",
    
  ];

  return (
    <section id="experience" className="responsive-padding alt-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            My academic journey and educational background in computer science and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FiCalendar className="mr-2 text-primary" /> Education Timeline
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-gray-700 space-y-6 sm:space-y-10">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-4 border-gray-900 bg-primary"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center text-gray-400 mb-4">
                      <FiCalendar className="mr-2" /> {edu.duration}
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            </div>

          <div>
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center text-white mt-8 lg:mt-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FiAward className="mr-2 text-primary" /> Achievements & Recognition
            </motion.h3>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-300 flex items-start bg-gray-700 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div 
              className="mt-8 sm:mt-12 bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-base sm:text-lg font-bold mb-4 text-white flex items-center">
                <FiCode className="mr-2 text-primary" /> Focus Areas
              </h4>
              <p className="text-gray-300 mb-4">
                My academic path has focused on developing strong fundamentals in:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Software Engineering", "Frontend Development", "Backend Development", "Database Systems"].map((area, i) => (
                  <div 
                    key={i}
                    className="bg-gray-700 p-3 rounded-lg text-center text-primary font-medium"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
