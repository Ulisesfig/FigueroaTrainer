import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';

// __dirname no existe en ESM, lo recreamos
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Ajustá esta base a tu repo si desplegás en GitHub Pages
  // Ej: https://ulisesfig.github.io/FigueroaTrainer/ => base: '/FigueroaTrainer/'
  base: '/',
  plugins: [
    react(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        try {
          const dist = path.resolve(__dirname, 'dist');
          const indexPath = path.join(dist, 'index.html');
          const fallbackPath = path.join(dist, '404.html');
          if (fs.existsSync(indexPath)) {
            fs.copyFileSync(indexPath, fallbackPath);
          }
        } catch {}
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Config Vitest (los tipos pueden requerir importación de 'vitest/config')
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts']
  }
});
