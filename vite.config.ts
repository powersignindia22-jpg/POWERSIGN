import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const prerender = require("vite-plugin-prerender");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === "1";

  return {
    server: {
      host: "::",
      port: 8090,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(), 
      mode === "production" && !isVercel && prerender({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/services", "/contact", "/gallery", "/privacy", "/terms"],
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
