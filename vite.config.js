import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If you want to use @ as an alias for src directory (optional)
      '@': path.resolve(__dirname, './src'),
    }
  },
  // Ensure all dependencies are correctly served
  optimizeDeps: {
    include: ['framer-motion', 'react-icons', 'react-scroll']
  }
})
