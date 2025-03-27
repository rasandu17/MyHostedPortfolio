import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

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
export const fetchGeminiResponse = async (prompt, portfolioData) => {
  try {
    console.log('Fetching response with prompt:', prompt);
    console.log('API Key available:', !!import.meta.env.VITE_GEMINI_API_KEY);
    
    // Initialize the Gemini API with the API key
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Create a context with portfolio data for the AI to reference
    const portfolioContext = JSON.stringify({
      name: portfolioData.personalInfo.name,
      title: portfolioData.personalInfo.title,
      summary: portfolioData.personalInfo.summary,
      skills: portfolioData.skills,
      projects: portfolioData.projects.map(p => ({
        title: p.title,
        description: p.description,
        technologies: p.technologies
      })),
      experience: portfolioData.experience
    });
    
    // Generate content with the user's prompt and portfolio context
    const systemPrompt = `You are an AI assistant for ${portfolioData.personalInfo.name}. 
    Use the following portfolio information to answer questions about ${portfolioData.personalInfo.name}'s 
    background, skills, projects, and experience. Be concise but informative.
    Portfolio data: ${portfolioContext}`;
    
    // Create a chat session
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "I'll help answer questions about your portfolio." }] }
      ],
    });
    
    console.log('Sending message to Gemini API...');
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('Received response from Gemini API');
    return text;
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from AI model');
    }
    
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};
