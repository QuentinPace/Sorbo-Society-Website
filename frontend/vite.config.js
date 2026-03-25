import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
  };

  // Only apply proxy in development
  if (mode === "development") {
    config.server = {
      proxy: {
        "/api": {
          target: "http://localhost:5000",
        },
      },
    };
  }

  return config;
});
