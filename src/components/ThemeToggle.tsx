/**
 * ThemeToggle.tsx
 * Toggle de tema claro/oscuro con Switch animado y feedback textual.
 */
import { useContext } from "react";
import { ThemeContext } from "./theme-provider";
import { Switch } from "./ui/switch";
import { Sun, MoonStar } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div
      // Contenedor translucido (sin backend) que mantiene el control accesible visible
      className="flex items-center gap-3 rounded-full border border-white/10 bg-background/60 px-4 py-2 backdrop-blur-xl"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 12 }}
    >
      <Sun className="h-4 w-4 text-amber-400" aria-hidden />
      <Switch
        aria-label="Cambiar tema"
        checked={theme === "dark"}
        // Alterna el tema en el contexto global y persiste la preferencia
        onCheckedChange={toggleTheme}
      />
      <MoonStar className="h-4 w-4 text-indigo-300" aria-hidden />
    </motion.div>
  );
}
