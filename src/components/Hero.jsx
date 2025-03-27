import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-base sm:text-lg text-gray-400 mb-2">Hello, I'm</h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">Ravindu Sandumith</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-gray-200">
              Computer Science Undergraduate
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about web development and software engineering. Currently pursuing my Computer Science degree with a focus on creating user-friendly applications and exploring new technologies.
            </p>
            
            {/* Fixed button alignment with consistent sizing and flex container */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <motion.a 
                href="/Ravindu Sandumith CV.pdf" 
                download
                className="btn btn-primary inline-flex items-center justify-center min-w-[160px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-secondary inline-flex items-center justify-center min-w-[160px]"
              >
                Contact Me
              </Link>
            </div>
            
            {/* Social media icons removed */}
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div></div>
              <img 
                src="/pera.jpg" 
                alt="Profile" 
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500} offset={-70} className="flex flex-col items-center">
            <span className="text-xs sm:text-sm text-gray-500 mb-2">Scroll Down</span>
            <FiArrowDown className="text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
