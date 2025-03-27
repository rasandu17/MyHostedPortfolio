import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="responsive-padding alt-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
          {/* Photo section removed */}
          
          <motion.div 
            className="w-full mt-6 md:mt-0"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              A Computer Science <span className="text-primary">Undergraduate</span>
            </h3>
            
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              A Computer Science undergraduate specializing in developing high-performance web applications and backend systems. Proficient in Python, Java, React.js, and database technologies (SQL & MongoDB), with a strong focus on optimizing backend performance and ensuring seamless user experiences. Recognized for attention to detail, critical thinking, and effective communication skills. Passionate about applying technical expertise, creativity, and problem-solving abilities in a dynamic internship role.
            </p>
            
            <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base">
              Beyond coursework, I have actively worked on personal coding projects and collaborative ventures, translating theoretical knowledge into practical applications. These experiences have strengthened my ability to design efficient systems, troubleshoot complex issues, and stay adaptable in a rapidly evolving tech landscape. Continuously learning new technologies, I seek opportunities to further enhance my skills through internships and hands-on projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6 text-sm sm:text-base">
              <div>
                <h4 className="font-bold text-gray-200">Name:</h4>
                <p className="text-gray-400">Ravindu Sandumith</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-200">Email:</h4>
                <p className="text-gray-400">rasandu17@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-200">University:</h4>
                <p className="text-gray-400">University of Westminster</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-200">Available:</h4>
                <p className="text-gray-400">For Internships</p>
              </div>
            </div>
            
            <motion.a 
              href="/Ravindu Sandumith CV.pdf" 
              download
              className="btn btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
