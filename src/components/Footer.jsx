import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/rasandu17', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'www.linkedin.com/in/ravindu-sandumith-240152325', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:rasandu17@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 pt-12 sm:pt-16 pb-6 sm:pb-8 relative">
      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white shadow-lg cursor-pointer"
          >
            <FiArrowUp />
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
          <div>
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="text-xl sm:text-2xl font-bold text-primary cursor-pointer inline-block mb-3 sm:mb-4"
            >
              Ravindu<span className="text-secondary">.me</span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Computer Science Undergraduate passionate about creating innovative web applications and exploring new technologies.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase() === 'education' ? 'experience' : item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
             
              <li className="flex items-start text-gray-400">
                <span className="mr-2">✉️</span>
                <a 
                  href="mailto:rasandu17@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  rasandu17@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <span className="mr-2">📱</span>
                <a 
                  href="tel:+94776082132" 
                  className="hover:text-primary transition-colors"
                >
                  +94 77 608 2132
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Ravindu Sandumith. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
