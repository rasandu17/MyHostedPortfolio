import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/rasandu17', label: 'GitHub', color: 'black' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ravindu-sandumith-240152325', label: 'LinkedIn', color: 'orange' },
    { icon: <FiMail />, url: 'mailto:rasandu17@gmail.com', label: 'Email', color: 'black' }
  ];


  return (
    <footer className="relative border-t border-figmaBlack pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Creative Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Section - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Brand name with frame */}
            <div className="relative inline-block">
              <div className="relative inline-block px-4 py-2 border border-figmaBlack">
                <Link 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-2xl md:text-3xl font-bold cursor-pointer"
                >
                  <span className="text-figmaBlack">Ravindu</span>
                  <span className="text-figmaOrange ml-1">.me</span>
                </Link>
                {/* Corner handles */}
                <span className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-figmaBlack"></span>
                <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-figmaBlack"></span>
                <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-figmaBlack"></span>
                <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-figmaBlack"></span>
              </div>
            </div>
            
            <p className="text-figmaBlack text-sm md:text-base leading-relaxed max-w-sm">
              Computer Science Undergraduate passionate about creating innovative web applications and exploring new technologies.
            </p>
          </motion.div>

          {/* Right Section - Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title with frame */}
            <div className="relative inline-block">
              <h3 className="text-lg md:text-xl font-bold text-figmaBlack relative inline-block px-3 py-1 border border-figmaBlack">
                Connect
                {/* Corner handles */}
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
              </h3>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="mailto:rasandu17@gmail.com" 
                className="block text-figmaBlack hover:text-figmaOrange transition-colors text-sm md:text-base group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-figmaOrange rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  rasandu17@gmail.com
                </span>
              </a>
              <a 
                href="tel:+94776082132" 
                className="block text-figmaBlack hover:text-figmaOrange transition-colors text-sm md:text-base group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-figmaOrange rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  +94 77 608 2132
                </span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    link.color === 'orange'
                      ? 'bg-figmaOrange text-white border-figmaOrange hover:bg-figmaBlack hover:border-figmaBlack'
                      : 'bg-figmaBlack text-white border-figmaBlack hover:bg-figmaOrange hover:border-figmaOrange'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Creative Design */}
        <div className="border-t border-figmaGrey pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright with frame */}
            <div className="relative inline-block">
              <div className="relative inline-block px-3 py-1 border border-figmaBlack">
                <p className="text-figmaBlack text-xs md:text-sm">
                  © {currentYear} Ravindu Sandumith
                </p>
                {/* Corner handles */}
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
              </div>
            </div>
            
            {/* Made with love */}
            <div className="flex items-center gap-2">
              <span className="text-figmaDarkGrey text-xs md:text-sm">Made with</span>
              <div className="relative inline-block">
                <div className="relative inline-block px-2 py-1 border border-figmaOrange">
                  <span className="text-figmaOrange text-xs md:text-sm flex items-center gap-1">
                    <FiHeart className="inline" />
                    <FiCode className="inline" />
                  </span>
                  {/* Corner handles */}
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaOrange"></span>
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaOrange"></span>
                  <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaOrange"></span>
                  <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaOrange"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
