/**
 * AnimatedLogo.tsx
 * Logo animado con trazo dinámico y brillo para reforzar la identidad premium.
 */
import { motion } from "framer-motion";

export function AnimatedLogo(): JSX.Element {
  // Animación de trazo y pulso para dar sensación tecnológica.
  return (
    <motion.div
      className="relative flex items-center gap-3"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-500/30 via-indigo-500/30 to-fuchsia-500/30 blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden
      />
      <motion.svg
        width={52}
        height={52}
        viewBox="0 0 64 64"
        className="drop-shadow-xl"
        initial={{ rotate: -12, scale: 0.85 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 12 }}
        aria-hidden
      >
        <motion.circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeDasharray="12 12"
          animate={{ strokeDashoffset: [0, 120] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M40 10L20 36h11l-7 18 20-24h-9z"
          fill="url(#gradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.svg>
      <div className="space-y-1">
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">ElectraNova</span>
        <p className="text-xl font-semibold tracking-tight">Energía que anticipa el futuro</p>
      </div>
    </motion.div>
  );
}
