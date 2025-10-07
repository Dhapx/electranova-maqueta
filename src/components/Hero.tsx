/**
 * Hero.tsx
 * Sección principal con logo animado, background dinámico y CTAs diferenciados.
 */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { AnimatedLogo } from "./AnimatedLogo";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";

export function Hero(): JSX.Element {
  // Valores de movimiento para crear parallax ligero al seguir el cursor.
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 12 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 12 });

  const translateX = useTransform(springX, (v) => (v - 0.5) * 40);
  const translateY = useTransform(springY, (v) => (v - 0.5) * 40);

  useEffect(() => {
    // Sincroniza movimiento con posición del cursor para dar sensación inmersiva.
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden scroll-mt-32 pt-28 pb-32 sm:pt-32 sm:pb-36 lg:pt-40 lg:pb-44"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center blur-3xl">
        <motion.div
          className="h-56 w-[40rem] rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 opacity-40"
          style={{ translateX, translateY }}
        />
      </div>

      <div className="container relative mx-auto flex flex-col items-center gap-12 text-center">
        <AnimatedLogo />
        <motion.div
          className="max-w-3xl space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } }
            }}
          >
            Ingeniería eléctrica inteligente para empresas exigentes y hogares visionarios.
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground sm:text-xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.4 } }
            }}
          >
            ElectraNova diseña, monitorea y mantiene infraestructuras eléctricas críticas con
            tecnología predictiva, enfocada en continuidad operativa y eficiencia energética.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 160, damping: 16 }}
        >
          <Button asChild className="group gap-2 text-base sm:text-lg">
            <a href="#contacto">
              Agenda un diagnóstico
              <motion.span
                aria-hidden
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                whileTap={{ x: 2 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </a>
          </Button>
          <Button
            variant="secondary"
            className="group gap-2 text-base sm:text-lg"
            asChild
          >
            <a href="#portafolio">
              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/30 to-fuchsia-400/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Play className="h-4 w-4" aria-hidden />
              </motion.span>
              Conoce nuestros proyectos
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/40 to-transparent"
      />
    </section>
  );
}
