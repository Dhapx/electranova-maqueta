/**
 * animations.ts
 * Presets de Framer Motion reutilizables para mantener consistencia visual.
 */
import { Transition, Variants } from "framer-motion";

// Animación base de fade-up para aparecer cuando se haga scroll.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 }
  }
};

// Stagger para hijos en listas o grids.
export const staggerChildren: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

// Hover suave tipo spring para tarjetas interactivas.
export const hoverCard: Variants = {
  rest: { y: 0, rotateX: 0, boxShadow: "0 20px 45px rgba(15,23,42,0.25)" },
  hover: {
    y: -8,
    rotateX: 2,
    boxShadow: "0 35px 65px rgba(14,165,233,0.18)",
    transition: { type: "spring", stiffness: 260, damping: 18 }
  }
};

// Micro interacción de botones con resalte.
export const buttonSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 24
};

// Variants para revelar imágenes con máscara vertical.
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};
