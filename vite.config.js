import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@/assets': '/src/assets',
      '@/layouts': '/src/layouts',
    },
  },
});