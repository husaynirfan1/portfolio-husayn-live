import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Treat these as external dependencies to be resolved via import maps in index.html
      // This fixes the "Rollup failed to resolve import" errors during Vercel build
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'lucide-react',
        'three'
      ]
    }
  }
});
