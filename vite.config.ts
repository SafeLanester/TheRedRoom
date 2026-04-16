import { defineConfig } from 'vite';
import path from "node:path";

export default defineConfig({
  base: '/TheRedRoom/',
  css: {
    postcss: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
