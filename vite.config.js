import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/client/build', // Salva il build nella cartella backend
    emptyOutDir: true, // Svuota la cartella prima di ogni build
  },
});
