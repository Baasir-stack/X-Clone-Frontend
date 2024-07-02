import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://x-clone-backend-gamma.vercel.app",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
