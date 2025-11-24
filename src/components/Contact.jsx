import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiUser } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'rasandu17@gmail.com',
      link: 'mailto:rasandu17@gmail.com',
      color: 'orange'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+94 77 608 2132',
      link: 'tel:+94776082132',
      color: 'black'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Kalubowila, Dehiwala, Sri Lanka',
      link: '',
      color: 'orange'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/rasandu17', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ravindu-sandumith-240152325', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="figma-section">
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
                <span className="text-figmaBlack">Get In</span>
                <span className="text-figmaOrange ml-2">Touch</span>
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
            <p className="text-figmaBlack text-lg mb-2">Ready to Connect?:</p>
            <p className="text-figmaBlack text-xl font-medium">Let's Start a Conversation</p>
          </div>
        </motion.div>

        {/* Creative Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <a 
                  href={item.link}
                  className={`figma-box-white p-6 rounded-xl relative border border-figmaBlack block hover:border-figmaOrange transition-colors ${item.link ? 'cursor-pointer' : ''}`}
                  target={item.title === 'Location' ? "_blank" : ""}
                  rel={item.title === 'Location' ? "noopener noreferrer" : ""}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* Icon in colored box */}
                    <div className={`inline-flex p-4 rounded-lg flex-shrink-0 ${
                      item.color === 'orange' 
                        ? 'bg-figmaOrange text-white' 
                        : 'bg-figmaBlack text-white'
                    }`}>
                      {item.icon}
                    </div>
                    
                    {/* Title with frame */}
                    <div className="relative inline-block">
                      <h3 className="text-lg md:text-xl font-bold text-figmaBlack relative inline-block px-3 py-1 border border-figmaBlack">
                        {item.title}
                        {/* Corner handles */}
                        <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-figmaBlack text-sm md:text-base">{item.content}</p>
                </a>
              </motion.div>
            ))}

            {/* Social Links Section - Thin Horizontal Rectangle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="figma-box-white p-4 rounded-xl relative border border-figmaBlack hover:border-figmaOrange transition-colors">
                <div className="flex items-center gap-4 justify-between">
                  {/* Left side - Icon and Title */}
                  <div className="flex items-center gap-4">
                    {/* Icon in colored box */}
                    <div className="inline-flex p-3 rounded-lg flex-shrink-0 bg-figmaOrange text-white">
                      <FiUser />
                    </div>
                    
                    {/* Title with frame */}
                    <div className="relative inline-block">
                      <h3 className="text-base md:text-lg font-bold text-figmaBlack relative inline-block px-3 py-1 border border-figmaBlack">
                        Follow Me
                        {/* Corner handles */}
                        <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-figmaBlack"></span>
                      </h3>
                    </div>
                  </div>
                  
                  {/* Right side - Social Links */}
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 rounded-lg border-2 transition-colors ${
                          link.label === 'GitHub'
                            ? 'bg-figmaBlack text-white border-figmaBlack hover:bg-figmaOrange hover:border-figmaOrange'
                            : 'bg-figmaOrange text-white border-figmaOrange hover:bg-figmaBlack hover:border-figmaBlack'
                        }`}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="figma-box-white p-6 md:p-8 rounded-xl relative border border-figmaBlack">
              {/* Form title with frame */}
              <div className="relative inline-block mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-figmaBlack relative inline-block px-4 py-2 border border-figmaBlack">
                  Send Message
                  {/* Corner handles */}
                  <span className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                  <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-figmaBlack border border-figmaBlack"></span>
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email in a row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-figmaBlack">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-figmaBlack focus:outline-none focus:ring-2 focus:ring-figmaOrange bg-white text-figmaBlack"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-figmaBlack">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-figmaBlack focus:outline-none focus:ring-2 focus:ring-figmaOrange bg-white text-figmaBlack"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-figmaBlack">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-figmaBlack focus:outline-none focus:ring-2 focus:ring-figmaOrange bg-white text-figmaBlack"
                    placeholder="What's this about?"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-figmaBlack">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-figmaBlack focus:outline-none focus:ring-2 focus:ring-figmaOrange bg-white text-figmaBlack resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="relative inline-block">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="figma-btn-orange px-8 py-4 text-base md:text-lg relative"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="inline mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              {/* Status Message */}
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg text-sm border ${
                    submitStatus.success 
                      ? 'bg-green-50 text-green-800 border-green-300' 
                      : 'bg-red-50 text-red-800 border-red-300'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
