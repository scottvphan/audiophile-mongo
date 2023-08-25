/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import dotenv from 'dotenv'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
  ],
  define: {
    'process.env': {},
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.js',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
