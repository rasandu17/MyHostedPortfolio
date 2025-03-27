# Personal Portfolio

A responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Responsive design that works on all screen sizes
- Dark theme UI
- Smooth animations with Framer Motion
- Contact form
- Project showcase
- Skills and experience sections

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your Gemini API key:

4. Start the development server:

```bash
npm run dev
```

5. The site will be available at http://localhost:5173

## Environment Variables

For the chatbot to work, you need to set up an environment variable in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add a new variable:
   - Name: `VITE_GEMINI_API_KEY`
   - Value: Your Google Gemini API key

This will ensure the chatbot works correctly in the deployed environment.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Set up the environment variable as described above
4. Deploy

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization

- Replace the placeholder content in component files with your own information
- Add your own project images to the public folder
- Customize colors by editing the `tailwind.config.js` file
