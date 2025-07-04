import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "path";

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(), // Aggiunge Vue DevTools integrati
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
