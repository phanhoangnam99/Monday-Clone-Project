import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [
    react()
  
  ],
  server: { port: 3000 },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
  
});
