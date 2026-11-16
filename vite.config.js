import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Deployed on Vercel at the domain root, so base stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // three.js lives in its own lazy chunk (ModelCanvas), loaded only when a 3D model is shown.
    chunkSizeWarningLimit: 900,
  },
});
