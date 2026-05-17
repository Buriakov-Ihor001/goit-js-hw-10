import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    open: '/src/index.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        timer: './src/1-timer.html',
        snackbar: './src/2-snackbar.html',
      },
    },
  },
});