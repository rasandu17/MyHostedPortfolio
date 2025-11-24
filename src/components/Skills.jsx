import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'React', 'JavaScript', 'Python', 'Java', 'HTML', 'CSS',
    'Tailwind CSS', 'Node.js', 'MongoDB', 'SQL', 'Git', 'Firebase',
    'Laravel', 'PHP', 'C#', '.NET', 'Kotlin', 'Figma', 'SpringBoot'
  ];

  return (
    <section id="skills" className="figma-section">
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
                <span className="text-figmaOrange ml-2">Skills</span>
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
            <p className="text-figmaBlack text-lg mb-2">What I Can Do?:</p>
            <p className="text-figmaBlack text-xl font-medium">Technologies I Work With</p>
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Skills Container */}
          <div className="figma-box-white p-6 md:p-8 rounded-xl relative border border-figmaBlack">
            {/* Title with frame */}
            <div className="relative inline-block mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-figmaBlack relative inline-block px-4 py-2 border border-figmaBlack">
                Technologies & Tools
                {/* Corner handles */}
                <span className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-medium ${
                    index % 3 === 0 
                      ? 'figma-tag-orange' 
                      : index % 3 === 1 
                      ? 'figma-tag-black' 
                      : 'figma-tag-outline'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
