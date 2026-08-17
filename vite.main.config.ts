import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["node-pipewire", "utf-8-validate", "register-scheme"],
    },
  },
});
