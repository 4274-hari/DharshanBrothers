import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['compete-dining-gotten-tubes.trycloudflare.com'],
  },
});
