import React from 'react';
import { FiCode, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';

const ChatMessage = ({ message }) => {
  const { text, sender, timestamp, type } = message;
  const isBot = sender === 'bot';
  
  // Format code blocks if they exist in the text
  const formatText = (text) => {
    // Simple regex to detect code blocks (```code```)
    const codeBlockPattern = /```([\s\S]*?)```/g;
    
    if (!text.match(codeBlockPattern)) {
      return <p>{text}</p>;
    }
    
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = codeBlockPattern.exec(text)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push(<p key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</p>);
      }
      
      // Add code block
      parts.push(
        <div key={`code-${match.index}`} className="bg-gray-900 p-3 rounded my-2 text-gray-300 font-mono text-sm overflow-x-auto">
          <div className="flex items-center justify-between mb-1">
            <FiCode className="text-primary" />
            <button 
              onClick={() => navigator.clipboard.writeText(match[1])}
              className="text-xs text-gray-400 hover:text-white"
            >
              Copy
            </button>
          </div>
          <pre>{match[1]}</pre>
        </div>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after last code block
    if (lastIndex < text.length) {
      parts.push(<p key={`text-${lastIndex}`}>{text.substring(lastIndex)}</p>);
    }
    
    return parts;
  };

  const isPortfolioRelatedResponse = (text) => {
    // Check if the response contains common deflection phrases
    const deflectionPhrases = [
      "I'd prefer to focus our conversation",
      "I'd prefer to discuss my portfolio",
      "Let's keep our discussion related to my work",
      "can't assist with that"
    ];
    
    return deflectionPhrases.some(phrase => text.includes(phrase));
  };
  
  // Special handling for CV download messages
  if (type === 'cv-download' && isBot) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex mb-4 justify-start"
      >
        <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-700 text-white rounded-tl-none">
          <div className="flex items-center mb-1">
            <span className="font-medium text-sm text-gray-300 flex items-center">
              {portfolioData.personalInfo.name}
            </span>
          </div>
          
          <div className="text-sm whitespace-pre-wrap">
            <p>{text}</p>
            <motion.a 
              href="/Ravindu Sandumith CV.pdf" 
              download
              className="mt-3 inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download CV
            </motion.a>
          </div>
          
          <div className="text-right mt-1">
            <span className="text-xs opacity-50">
              {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div 
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isBot 
            ? 'bg-gray-700 text-white rounded-tl-none'  // All bot responses use same background
            : 'bg-primary text-white rounded-tr-none'  // User messages
        }`}
      >
        <div className="flex items-center mb-1">
          {isBot ? (
            <span className="font-medium text-sm text-gray-300 flex items-center">
              {portfolioData.personalInfo.name}
            </span>
          ) : (
            <span className="font-medium text-sm text-gray-200 flex items-center">
              You
            </span>
          )}
        </div>
        
        <div className="text-sm whitespace-pre-wrap">
          {formatText(text)}
        </div>
        
        <div className="text-right mt-1">
          <span className="text-xs opacity-50">
            {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
