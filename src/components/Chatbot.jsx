import React, { useEffect } from 'react';
import GoogleGenerativeAI from 'path-to-google-generative-ai';

// ...existing code...

// Add this near the top of your component to check if the API key is available
useEffect(() => {
  console.log('API Key available:', !!import.meta.env.VITE_GEMINI_API_KEY);
  // Don't log the actual key for security reasons
}, []);

// Make sure you're using the environment variable correctly in your API configuration
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// ...existing code...