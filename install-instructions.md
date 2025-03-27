# Installation Instructions

Before running the project, you need to install the dependencies:

```bash
# Using npm (recommended)
npm run setup

# Or step by step:
npm install
npm run fix-tailwind
```

This will install all dependencies listed in package.json, including:
- react and react-dom
- framer-motion
- react-icons
- react-scroll
- tailwindcss and its dependencies

## Troubleshooting Common Errors

### If you see "Failed to load PostCSS config: Cannot find module 'tailwindcss'"

Run:
```bash
npm run fix-tailwind
```

This will install tailwindcss and generate the necessary configuration files.

### If you see "Failed to resolve import 'framer-motion'"

Try:
```bash
npm install framer-motion
```

If issues persist, make sure you're using the correct version of Node.js (recommended: v16 or higher).
