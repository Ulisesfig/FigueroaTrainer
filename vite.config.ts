import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'url';

// __dirname no existe en ESM, lo recreamos
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
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
