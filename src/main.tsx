/**
 * main.tsx
 * Punto de entrada de React montando App con ThemeProvider y ToastProvider.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ToastProvider } from "./components/ui/toast";
import { ToastProviderContext } from "./components/ui/use-toast";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento root");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastProviderContext>
        <ToastProvider swipeDirection="right">
          <App />
        </ToastProvider>
      </ToastProviderContext>
    </ThemeProvider>
  </React.StrictMode>
);
