import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3000,
    // jeigu norim kad ant tel veiktu turi but tas pats WIFI ir veiks paskiau network suvedus
    // host: true,
  },
});
