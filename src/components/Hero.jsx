import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiCode, FiZap, FiTrendingUp, FiTarget } from 'react-icons/fi';

const Hero = () => {
  const creativeTags = [
    {
      icon: <FiCode />,
      text: "Full Stack Developer",
      color: "orange"
    },
    {
      icon: <FiZap />,
      text: "Fast & Efficient",
      color: "black"
    },
    {
      icon: <FiTrendingUp />,
      text: "Always Learning",
      color: "orange"
    },
    {
      icon: <FiTarget />,
      text: "Problem Solver",
      color: "black"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-24 lg:pt-32 figma-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start justify-center text-left">
          <motion.div 
            className="w-full max-w-4xl md:max-w-6xl lg:max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Figma-style large title with frame and selection handles */}
            <div className="relative mb-8 md:mb-12 lg:mb-16 xl:mb-20 ml-8 md:ml-16 lg:ml-24 xl:ml-32">
              {/* Ravindu - top left */}
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-figmaOrange relative inline-block px-6 py-4 md:px-7 md:py-5 lg:px-8 lg:py-6 border border-figmaBlack">
                  Ravindu
                  {/* Selection handles - corners only */}
                  <span className="absolute -top-2 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -top-2 -right-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-2 -right-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                </h1>
              </div>
              
              {/* Sandumith - below and slightly to the right on desktop */}
              <div className="relative inline-block mt-4 md:mt-6 md:ml-12 lg:ml-16 xl:ml-20">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-figmaBlack relative inline-block px-6 py-4 md:px-7 md:py-5 lg:px-8 lg:py-6 border border-figmaBlack">
                  Sandumith
                  {/* Selection handles - corners only */}
                  <span className="absolute -top-2 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -top-2 -right-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-2 -right-2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-figmaBlack border border-figmaBlack"></span>
                </h1>
                {/* Orange cursor pointing to Sandumith from the right */}
                <div className="absolute -right-8 md:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 transform rotate-180">
                  <div className="figma-cursor md:scale-125 lg:scale-150"></div>
                </div>
                {/* Image below and to the right of Sandumith - aligned with bottom-right corner handle */}
                <motion.div 
                  className="absolute top-full mt-1 md:mt-2 lg:mt-3 -right-60 md:-right-60 lg:-right-60"
                  animate={{ 
                    y: [0, -4, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/Group 1.png" 
                    alt="Computer Science Undergraduate" 
                    className="w-40 h-auto md:w-48 lg:w-56 xl:w-64"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Creative Tag boxes with icons */}
            <div className="flex flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-8 md:mb-10 mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              {creativeTags.map((tag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 text-sm md:text-base lg:text-lg px-4 py-2 md:px-6 md:py-3 rounded-lg ${
                    tag.color === 'orange' 
                      ? 'figma-tag-orange' 
                      : 'figma-tag-black'
                  }`}
                >
                  <span className="text-lg md:text-xl">{tag.icon}</span>
                  <span>{tag.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Orange cursor indicator */}
            <div className="flex justify-start md:justify-center items-center gap-2 md:gap-3">
              <div className="figma-cursor md:scale-125"></div>
              <span className="text-figmaOrange font-medium text-base md:text-lg lg:text-xl">Scroll to explore</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
