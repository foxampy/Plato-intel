import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
  root: 'resources/js',
  base: '/build/',
  build: {
    outDir: '../../public/build',
    manifest: true,
    rollupOptions: {
      input: {
        app: 'resources/js/app.tsx',
      },
    },
  },
  server: {
    hot: true,
    hmr: {
      host: 'localhost',
    },
  },
});
