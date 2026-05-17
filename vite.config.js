import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: './',
  server: {
    open: '/index.html',
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});