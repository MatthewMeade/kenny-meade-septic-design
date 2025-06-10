import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    minify: 'terser'
  },
  plugins: [
    preact(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  base: '/kenny-meade-septic-design/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    },
  },
}));
