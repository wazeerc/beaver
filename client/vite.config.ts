import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import lingoCompiler from "lingo.dev/compiler";
import path from 'path';
import { defineConfig } from 'vite';

export default lingoCompiler.vite({
  sourceRoot: "src",
  targetLocales: ["es", "fr", "de"],
  models: "lingo.dev", // Option 1: Lingo.dev Engine
  // models: {
  //   "*:*": "groq:mistral-saba-24b", // Option 2: GROQ
  //   "*:*": "google:gemini-2.0-flash", // Option 2: Google AI
  //   "*:*": "openrouter:mistralai/mistral-small-24b-instruct-2501", // Option 2: OpenRouter
  //   "*:*": "ollama:mistral-small3.1", // Option 2: Ollama
  //   "*:*": "mistral:mistral-small-latest", // Mistral
  // },
})(defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@client": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server/src"),
      "@shared": path.resolve(__dirname, "../shared/src"),
      "@": path.resolve(__dirname, "./src")
    }
  }
}));
