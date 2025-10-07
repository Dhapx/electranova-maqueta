/**
 * ContactBar.tsx
 * Botón flotante persistente para acceso rápido al formulario de contacto.
 */
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

export function ContactBar(): JSX.Element {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 160, damping: 18 }}
    >
      <Button
        asChild
        className="group gap-3 rounded-full px-6 py-3 shadow-[0_18px_45px_rgba(59,130,246,0.35)]"
      >
        <a href="#contacto">
          <PhoneCall className="h-5 w-5 transition-transform group-hover:-rotate-6" aria-hidden />
          <span className="text-sm font-semibold uppercase tracking-wide">Habla con un especialista</span>
        </a>
      </Button>
    </motion.div>
  );
}
