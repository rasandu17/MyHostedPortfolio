const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Add debugging for API key
console.log('API key available:', !!API_KEY);
console.log('API key length:', API_KEY?.length || 0);

/**
 * Creates a system prompt with portfolio data to guide the AI's responses
 * @param {Object} portfolioData - Your portfolio data
 * @returns {string} The system prompt
 */
const createSystemPrompt = (portfolioData) => {
  return `
You are an AI assistant that acts as if you are ${portfolioData.personalInfo.name}. You should speak in first person as if you are ${portfolioData.personalInfo.name} himself.

Here's information about you (${portfolioData.personalInfo.name}):
- You are a ${portfolioData.personalInfo.role} 
- Education: 
  * ${portfolioData.education[0].degree} from ${portfolioData.education[0].school} (${portfolioData.education[0].duration}) - ${portfolioData.education[0].description}
  * High School: ${portfolioData.education[1].school} (${portfolioData.education[1].duration}) - ${portfolioData.education[1].description}
- Academic achievements: You got 8As and 1C in your GCE O/L examinations, with A grades in Mathematics, Science, English, ICT, and other subjects.
- Your skills include: ${portfolioData.skills.join(', ')}
- Work experience: ${portfolioData.experience.map(exp => `${exp.title} at ${exp.company} (${exp.duration})`).join('; ')}
- Projects you've built: ${portfolioData.projects.map(proj => `${proj.title}: ${proj.description}`).join('; ')}
- Your contact info: ${portfolioData.contactInfo.email}
- Your interests include: ${portfolioData.personalInfo.interests.join(', ')}

IMPORTANT: When asked about your educational background or academic achievements, always mention that you received 8As and 1C in your GCE O/L examinations. Be specific about this information.

STRICT GUIDELINES (YOU MUST FOLLOW THESE):
1. ONLY answer questions directly related to you, your portfolio, your skills, education, projects, or experiences.
2. If asked about ANY technical concepts, programming languages, frameworks, or anything educational that is not directly related to YOUR specific experience or projects, respond with: "I'd prefer to discuss my portfolio and experiences. Feel free to ask me about my projects, skills, or background."
3. If asked about ANY topic outside your portfolio (politics, news, other people, general tech advice, coding help, etc.), respond with: "I'd prefer to focus our conversation on my portfolio and experiences. Is there something specific about my background or work you'd like to know?"
4. ALWAYS speak in first person, as if you are ${portfolioData.personalInfo.name} himself (use "I", "me", "my" not "he", "him", "his").
5. Keep responses brief, focused, and directly related to information contained in your portfolio data.
6. If someone asks for your CV or resume, mention that they can download it directly from the portfolio website.

For any questions about your projects, only discuss the exact projects listed in your portfolio data. Do not invent or discuss projects that aren't listed above.
`;
};

/**
 * Fetches a response from Gemini AI based on a user prompt
 * @param {string} userPrompt - The user's message
 * @param {Object} portfolioData - Your portfolio data for context
 * @returns {Promise<string>} The AI's response
 */
export const fetchGeminiResponse = async (userPrompt, portfolioData) => {
  const systemPrompt = createSystemPrompt(portfolioData);
  
  try {
    // Check if API key is available
    if (!API_KEY) {
      console.error('Gemini API key is missing. Please check your environment variables.');
      return "I'm experiencing technical difficulties with my AI capabilities. Please try asking about my portfolio directly.";
    }
    
    console.log('Attempting to call Gemini API...');
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: systemPrompt + "\n\nUser query: " + userPrompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API request failed with status ${response.status}:`, errorText);
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini API response received successfully');
    
    if (!data.candidates || data.candidates.length === 0) {
      console.error('No candidates in response:', data);
      throw new Error('No response from AI model');
    }
    
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    
    // Provide more specific error message based on the error
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return "I'm having network connectivity issues. Please try again in a moment.";
    } else if (error.message.includes('API key')) {
      return "I'm experiencing authentication issues with my AI capabilities. Please try asking about my portfolio directly.";
    } else {
      return "I'm sorry, I couldn't process your request. Please try again with a question about my portfolio or experiences.";
    }
  }
};
