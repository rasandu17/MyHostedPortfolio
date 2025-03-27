import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMessageSquare, FiX } from 'react-icons/fi';
import ChatMessage from './ChatMessage';
import { fetchGeminiResponse } from '../../utils/geminiAI';
import portfolioData from '../../data/portfolioData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi there! I'm ${portfolioData.personalInfo.name}. Feel free to ask me about my portfolio, projects, skills, and experiences. I'm here to share information about my work and background.`,
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add a check for API key on component mount
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log('Chatbot - API Key available:', !!apiKey);
    console.log('Chatbot - API Key length:', apiKey?.length || 0);
    
    // Add warning to console if API key is missing
    if (!apiKey) {
      console.warn('VITE_GEMINI_API_KEY is missing. Chatbot will not function correctly.');
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message to chat
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Check if the query is CV/resume related
    const cvKeywords = ['cv', 'resume', 'curriculum', 'vitae', 'download cv', 'get resume', 'download resume'];
    const isAskingForCV = cvKeywords.some(keyword => 
      input.toLowerCase().includes(keyword)
    );
    
    try {
      if (isAskingForCV) {
        // Special handling for CV requests
        const botMessage = {
          id: messages.length + 2,
          text: "Sure, I'd be happy to share my CV with you. You can download it using the button below:",
          sender: 'bot',
          timestamp: new Date().toISOString(),
          type: 'cv-download'
        };
        
        setMessages(prev => [...prev, botMessage]);
      } else {
        // Check for non-portfolio related questions
        const nonPortfolioKeywords = [
          'explain how', 'how do I', 'how to', 'tutorial', 'guidance', 
          'help me', 'teach me', 'instructions', 'code for', 'algorithm',
          'what is', 'define', 'meaning of', 'weather', 'news',
          'politics', 'opinion on', 'best way to'
        ];
        
        const mightBeNonPortfolio = nonPortfolioKeywords.some(keyword => 
          input.toLowerCase().includes(keyword)
        );
        
        if (mightBeNonPortfolio && !input.toLowerCase().includes('your') && !input.toLowerCase().includes('you')) {
          // Likely asking about something not related to the portfolio
          const botMessage = {
            id: messages.length + 2,
            text: "I'd prefer to focus our conversation on my portfolio and experiences. Is there something specific about my background or work you'd like to know?",
            sender: 'bot',
            timestamp: new Date().toISOString()
          };
          
          setMessages(prev => [...prev, botMessage]);
        } else {
          // Check for API key before making request
          const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
          if (!apiKey) {
            console.error('Missing API key - cannot make request to Gemini');
            throw new Error('API key is missing');
          }
          
          // Normal AI response for portfolio questions
          const aiResponse = await fetchGeminiResponse(input, portfolioData);
          
          const botMessage = {
            id: messages.length + 2,
            text: aiResponse,
            sender: 'bot',
            timestamp: new Date().toISOString()
          };
          
          setMessages(prev => [...prev, botMessage]);
        }
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      
      // More specific error messages based on error type
      let errorText = "I'm sorry, I couldn't process your request. Please try again with a question about my portfolio or experiences.";
      
      if (error.message === 'API key is missing') {
        errorText = "I'm currently experiencing configuration issues. My AI capabilities are limited at the moment. Please try asking direct questions about my portfolio.";
      }
      
      const errorMessage = {
        id: messages.length + 2,
        text: errorText,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-lg shadow-xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-700"
          >
            <div className="bg-gray-900 p-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-white font-medium flex items-center">
                <FiMessageSquare className="mr-2 text-primary" />
                Want to know anything about me?
              </h3>
              <button 
                onClick={toggleChatbot}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiX />
              </button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-800 custom-scrollbar">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-center my-2">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700 bg-gray-900">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="flex-grow px-3 py-2 bg-gray-700 rounded-l-md focus:outline-none text-white placeholder-gray-400 border border-gray-600"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className={`bg-primary text-white px-3 py-2 rounded-r-md ${(!input.trim() || isLoading) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'}`}
                >
                  <FiSend />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Virtual conversation powered by AI
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={toggleChatbot}
        className="bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg flex-shrink-0 w-14 h-14 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiMessageSquare size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
