import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // required for Render
    port: process.env.PORT || 5173,
    allowedHosts: ['portfolio-frontend-ig3p.onrender.com'], // use Render's PORT
  },
});
