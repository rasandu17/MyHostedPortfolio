import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiMapPin, FiAward, FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Westminster",
      duration: "2021 - Present",
      description: "Currently in my second year with a focus on software engineering and web technologies. Participating in programming competitions and hackathons.",
      status: "Ongoing",
      icon: <FiBook />,
      highlights: ["Software Engineering", "Web Technologies", "Programming Competitions"]
    },
    {
      degree: "High School",
      school: "Royal College",
      duration: "2014 - 2023",
      description: "8As and 1C for GCE ordinary level, Head of IT for both the Non-Addict Movement Society and the Photographic Society",
      status: "Completed",
      icon: <FiAward />,
      highlights: ["8As & 1C", "Head of IT", "Leadership Roles"]
    }
  ];

  return (
    <section id="experience" className="figma-section">
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
                <span className="text-figmaBlack">Education</span>
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
            <p className="text-figmaBlack text-lg mb-2">Academic Journey:</p>
            <p className="text-figmaBlack text-xl font-medium">My Educational Background</p>
          </div>
        </motion.div>

        {/* Creative Diagonal Layout */}
        <div className="relative">
          {/* Main Vertical Connector Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-figmaOrange transform -translate-x-1/2 z-0"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 
                  ? 'lg:pr-1/2 lg:pr-[52%]' 
                  : 'lg:pl-1/2 lg:pl-[52%]'
              }`}
            >
              {/* Main Card */}
              <div className="relative">
                {/* Main Education Card */}
                <div className={`figma-box-white p-6 md:p-8 rounded-xl relative border-2 border-figmaBlack ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  {/* Status Badge - Creative Position */}
                  <div className={`absolute -top-4 ${
                    index % 2 === 0 ? '-right-4' : '-left-4'
                  }`}>
                    <div className={`relative inline-block px-4 py-2 rounded-lg rotate-[-5deg] ${
                      edu.status === 'Ongoing' 
                        ? 'bg-figmaOrange text-white' 
                        : 'bg-figmaBlack text-white'
                    }`}>
                      <span className="text-xs font-bold">{edu.status}</span>
                      {/* Corner handles */}
                      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-white"></span>
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-white"></span>
                      <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-white"></span>
                      <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-white"></span>
                    </div>
                  </div>

                  {/* Degree Title - Large and Bold */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold relative inline-block px-5 py-3 border-2 border-figmaBlack ${
                        index % 2 === 0 ? 'text-figmaOrange' : 'text-figmaBlack'
                      }`}>
                        {edu.degree}
                        {/* Corner handles */}
                        <span className="absolute -top-2 -left-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                        <span className="absolute -top-2 -right-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                        <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                        <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-figmaBlack border border-figmaBlack"></span>
                      </h3>
                    </div>
                  </div>

                  {/* School Name in Highlight Box */}
                  <div className="mb-6">
                    <div className={`figma-box-orange p-4 rounded-lg relative border border-white/20 ${
                      index % 2 === 1 ? 'bg-figmaBlack' : ''
                    }`}
                    style={index % 2 === 1 ? { backgroundColor: 'rgba(0, 0, 0, 0.8)' } : {}}
                    >
                      <div className="flex items-center gap-3">
                        <FiMapPin className="text-white text-xl" />
                        <div>
                          <div className="relative inline-block mb-1">
                            <span className="text-xs font-medium text-white/80 relative inline-block px-2 py-0.5 border border-white/30">
                              Institution
                              {/* Corner handles */}
                              <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-white"></span>
                              <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-white"></span>
                              <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-white"></span>
                              <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-white"></span>
                            </span>
                          </div>
                          <p className="text-white font-bold text-lg md:text-xl">{edu.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duration and Highlights Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Duration */}
                    <div className="relative">
                      <div className="relative inline-block mb-2">
                        <span className="text-xs font-medium text-figmaDarkGrey relative inline-block px-2 py-1 border border-figmaBlack">
                          Duration
                          {/* Corner handles */}
                          <span className="absolute -top-1 -left-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -top-1 -right-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-figmaBlack"></span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-figmaOrange text-lg" />
                        <span className="figma-tag-outline text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <div className="relative inline-block mb-2">
                        <span className="text-xs font-medium text-figmaDarkGrey relative inline-block px-2 py-1 border border-figmaBlack">
                          Key Highlights
                          {/* Corner handles */}
                          <span className="absolute -top-1 -left-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -top-1 -right-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-figmaBlack"></span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <span 
                            key={i}
                            className={`text-xs ${
                              i % 2 === 0 ? 'figma-tag-orange' : 'figma-tag-black'
                            }`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6 pt-6 border-t-2 border-figmaGrey">
                    <div className="relative inline-block mb-3">
                      <span className="text-sm font-medium text-figmaDarkGrey relative inline-block px-3 py-1 border border-figmaBlack">
                        About This Period
                        {/* Corner handles */}
                        <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                      </span>
                    </div>
                    <p className="text-figmaBlack leading-relaxed text-sm md:text-base">
                      {edu.description}
                    </p>
                  </div>

                  {/* Decorative Arrow */}
                  {index < education.length - 1 && (
                    <div className={`hidden lg:block absolute ${
                      index % 2 === 0 ? 'right-0 top-1/2 -translate-y-1/2 translate-x-full' : 'left-0 top-1/2 -translate-y-1/2 -translate-x-full'
                    }`}>
                      <motion.div
                        animate={{ 
                          x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                          y: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`text-4xl ${
                          index % 2 === 0 ? 'text-figmaOrange' : 'text-figmaBlack'
                        }`}
                      >
                        {index % 2 === 0 ? <FiArrowDownRight /> : <FiArrowUpRight />}
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
