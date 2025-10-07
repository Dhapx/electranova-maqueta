import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración base de Vite para React 18 con soporte a alias y modo TS.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
