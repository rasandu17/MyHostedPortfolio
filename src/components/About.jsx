import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCommand, setShowCommand] = useState(false);
  const fullCommand = 'npx ravindu';
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Auto-start typing animation after a delay - impressive for recruitors
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasStarted) {
        setHasStarted(true);
        setShowCommand(true);
        setIsTyping(true);
        setDisplayedText('');
        
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex < fullCommand.length) {
            setDisplayedText(fullCommand.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 120);
      }
    }, 2000); // Start after 2 seconds

    return () => clearTimeout(timer);
  }, [hasStarted, fullCommand]);

  useEffect(() => {
    if (showCommand) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    }
  }, [showCommand]);

  const personalInfo = [
    {
      icon: <FiUser />,
      label: 'Name',
      value: 'Ravindu Sandumith',
      color: 'orange'
    },
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'rasandu17@gmail.com',
      color: 'black'
    },
    {
      icon: <FiBriefcase />,
      label: 'University',
      value: 'University of Westminster',
      color: 'orange'
    },
    {
      icon: <FiMapPin />,
      label: 'Available',
      value: 'For Internships',
      color: 'black'
    }
  ];

  const interests = [
    'Web Development',
    'Software Engineering',
    'Object-Oriented Programming',
    'Backend Development',
    'Database Systems',
    'UI/UX Design'
  ];

  return (
    <section id="about" className="figma-section">
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
                <span className="text-figmaBlack">About</span>
                <span className="text-figmaOrange ml-2">Me</span>
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
            <p className="text-figmaBlack text-lg mb-2">Who Am I?:</p>
            <p className="text-figmaBlack text-xl font-medium">Understanding My Journey</p>
          </div>

          {/* Typing Animation Command */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showCommand ? 1 : 0.3, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 text-figmaBlack font-mono text-base md:text-lg lg:text-xl">
              <span className="text-figmaOrange">$</span>
              {showCommand ? (
                <>
                  <code className="text-figmaBlack font-medium">
                    {displayedText}
                    {showCursor && !isTyping && <span className="text-figmaOrange">|</span>}
                  </code>
                  {!isTyping && displayedText === fullCommand && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="text-figmaOrange text-lg ml-2"
                    >
                    
                    </motion.span>
                  )}
                </>
              ) : (
                <code className="text-figmaDarkGrey font-medium opacity-50">
                  npx ravindu
                </code>
              )}
            </div>
            {!showCommand && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-figmaDarkGrey text-xs mt-1 italic text-center"
              >
                Loading...
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Creative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main description box */}
            <div className="figma-box-white p-6 md:p-8 rounded-xl relative border border-figmaBlack">
              {/* Title with frame */}
              <div className="relative inline-block mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-figmaBlack relative inline-block px-4 py-2 border border-figmaBlack">
                  Computer Science Undergraduate
                  {/* Corner handles */}
                  <span className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                </h3>
              </div>
              
              <p className="text-figmaBlack mb-4 leading-relaxed text-sm md:text-base">
                A Computer Science undergraduate specializing in developing high-performance web applications and backend systems. Proficient in Python, Java, React.js, and database technologies (SQL & MongoDB), with a strong focus on optimizing backend performance and ensuring seamless user experiences.
              </p>
              
              <p className="text-figmaBlack leading-relaxed text-sm md:text-base">
                Beyond coursework, I have actively worked on personal coding projects and collaborative ventures, translating theoretical knowledge into practical applications. These experiences have strengthened my ability to design efficient systems, troubleshoot complex issues, and stay adaptable in a rapidly evolving tech landscape.
              </p>
            </div>

            {/* Interests Section */}
            <div className="figma-box-white p-6 rounded-xl relative border border-figmaBlack">
              <div className="relative inline-block mb-4">
                <h4 className="text-lg md:text-xl font-bold text-figmaBlack relative inline-block px-3 py-1 border border-figmaBlack">
                  Interests
                  {/* Corner handles */}
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                  <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                  <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className={`${index % 3 === 0 ? 'figma-tag-orange' : index % 3 === 1 ? 'figma-tag-black' : 'figma-tag-outline'} text-xs md:text-sm`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Personal Information Cards */}
            {personalInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="figma-box-white p-6 rounded-xl relative border border-figmaBlack">
                  <div className="flex items-center gap-4">
                    {/* Icon in colored box */}
                    <div className={`inline-flex p-4 rounded-lg flex-shrink-0 ${
                      info.color === 'orange' 
                        ? 'bg-figmaOrange text-white' 
                        : 'bg-figmaBlack text-white'
                    }`}>
                      {info.icon}
                    </div>
                    
                    {/* Label with frame */}
                    <div className="flex-1">
                      <div className="relative inline-block mb-2">
                        <span className="text-sm font-medium text-figmaDarkGrey relative inline-block px-2 py-1 border border-figmaBlack">
                          {info.label}
                          {/* Corner handles */}
                          <span className="absolute -top-1 -left-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -top-1 -right-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-figmaBlack"></span>
                          <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-figmaBlack"></span>
                        </span>
                      </div>
                      <p className="text-figmaBlack font-medium text-sm md:text-base">{info.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="figma-box-orange p-6 rounded-xl relative border border-white/20"
            >
              <div className="relative inline-block mb-4">
                <h4 className="text-lg md:text-xl font-bold text-white relative inline-block px-3 py-1 border border-white/30">
                  Get My Resume
                  {/* Corner handles */}
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white"></span>
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white"></span>
                  <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white"></span>
                  <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white"></span>
                </h4>
              </div>
              
              <p className="text-white mb-4 text-sm md:text-base">
                Download my resume to learn more about my experience and qualifications.
              </p>
              
              <motion.a 
                href="/Ravindu Sandumith CV.pdf" 
                download
                className="bg-white text-figmaOrange hover:bg-figmaGrey px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
