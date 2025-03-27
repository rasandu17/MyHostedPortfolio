import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  // Remove dark mode state and effects
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed -z-10 top-0 left-0 right-0 bottom-0 opacity-30">
        <motion.div 
          className="absolute top-[10%] left-[15%] w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          animate={{ 
            x: [0, 30, -20, 0], 
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-[40%] right-[20%] w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          animate={{ 
            x: [0, -30, 20, 0], 
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[30%] w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          animate={{ 
            x: [0, 20, -30, 0], 
            y: [0, -20, 50, 0],
            scale: [1, 1.1, 0.9, 1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Add the chatbot component */}
      <Chatbot />
    </div>
  );
}

export default App;
