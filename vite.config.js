// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',  // You can now use '@' as an alias to point to 'src'
    },
  },
});
