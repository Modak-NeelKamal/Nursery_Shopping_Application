import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Nursery_Shopping_Application",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});