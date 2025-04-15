import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/shtern-psychotherapist_frontend/",
  server: {
    port: 3001,
  },
});
