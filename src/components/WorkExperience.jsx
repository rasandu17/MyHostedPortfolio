import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCode } from 'react-icons/fi';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Prime Minister's Office Sri Lanka",
      duration: "Present",
      status: "Current",
      location: "Sri Lanka",
      stack: ["C#", ".NET", "React", "Laravel", "PHP"],
      description: "Working as a Software Developer Intern, developing and maintaining web applications using modern technologies. Contributing to government digital initiatives and building efficient software solutions.",
    }
  ];

  return (
    <section id="work-experience" className="figma-section">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="relative inline-block mb-6">
            <div className="relative inline-block px-6 py-4 border border-figmaBlack">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold relative inline-block">
                <span className="text-figmaBlack">Experience</span>
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
            <p className="text-figmaBlack text-lg mb-2">Professional Journey:</p>
            <p className="text-figmaBlack text-xl font-medium">My Work Experience</p>
          </div>
        </motion.div>

        {/* Simple Single Card Layout */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Single Main Card */}
              <div className="figma-box-white p-8 md:p-10 rounded-xl relative border-2 border-figmaBlack">
                {/* Job Title */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <h3 className="text-3xl md:text-4xl font-bold text-figmaOrange relative inline-block px-5 py-3 border-2 border-figmaBlack">
                      {exp.title}
                      {/* Corner handles */}
                      <span className="absolute -top-2 -left-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                      <span className="absolute -top-2 -right-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                      <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                      <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                    </h3>
                  </div>
                </div>

                {/* Company & Details Row */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="text-figmaOrange text-xl" />
                    <span className="text-figmaBlack font-bold text-lg md:text-xl">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-figmaBlack text-lg" />
                    <span className="text-figmaDarkGrey">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-figmaOrange text-lg" />
                    <span className="figma-tag-outline text-sm">{exp.duration}</span>
                  </div>
                  <div className="ml-auto">
                    <span className="figma-tag-orange text-sm font-medium">{exp.status}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-figmaBlack leading-relaxed text-base md:text-lg mb-6">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-3 flex-wrap">
                  <FiCode className="text-figmaOrange text-xl" />
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span 
                        key={i}
                        className={`text-sm md:text-base px-3 py-1.5 ${
                          i % 2 === 0 ? 'figma-tag-orange' : 'figma-tag-black'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
