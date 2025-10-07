/**
 * utils.ts
 * Helpers generales reutilizables (p. ej. función cn para combinar clases).
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina clases evitando duplicados, alineado a la convención shadcn/ui.
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
