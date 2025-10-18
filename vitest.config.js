import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Simulates a browser for React component tests
    globals: true, // Lets you use `describe`, `it`, `expect` globally
    setupFiles: "test/setup.js", // Runs before your tests (for jest-dom)
    coverage: {
      provider: "v8", // Enables @vitest/coverage-v8
      reportsDirectory: "./coverage",
    },
  },
});
