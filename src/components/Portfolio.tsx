/**
 * Portfolio.tsx
 * Galería responsive con animaciones on-scroll y hover zoom para proyectos destacados.
 */
import { useCallback, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { imageReveal, staggerChildren, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "generadores",
    title: "Generadores duales para hospitales sin cortes",
    category: "Respaldo energético",
    image: "/gallery/portfolio-generadores.svg"
  },
  {
    id: "subestacion",
    title: "Subestación modular con monitoreo térmico",
    category: "Plantas eléctricas",
    image: "/gallery/portfolio-subestacion.svg"
  },
  {
    id: "taller",
    title: "Taller eléctrico con protocolos lean",
    category: "Mantenimiento especializado",
    image: "/gallery/portfolio-taller.svg"
  },
  {
    id: "automatizacion",
    title: "Tableros inteligentes para líneas críticas",
    category: "Automatización industrial",
    image: "/gallery/portfolio-tableros.svg"
  },
  {
    id: "microgrid",
    title: "Microgrid híbrida para data center",
    category: "Infraestructura crítica",
    image: "/gallery/portfolio-microgrid.svg"
  },
  {
    id: "domotica",
    title: "Domótica energética para residencias premium",
    category: "Edificios inteligentes",
    image: "/gallery/portfolio-domotica.svg"
  }
];

export function Portfolio(): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<string | null>(null);

  const activate = useCallback((id: string) => {
    setActive(id);
  }, []);

  const toggleActive = useCallback((id: string) => {
    setActive((prev) => (prev === id ? null : id));
  }, []);

  const deactivate = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <motion.section
      id="portafolio"
      ref={ref}
      className="container mx-auto space-y-12 py-24 scroll-mt-32"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerChildren}
      aria-labelledby="portfolio-heading"
    >
      <motion.div variants={fadeUp} className="text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Portafolio</p>
        <h2 id="portfolio-heading" className="mt-2 text-3xl font-semibold sm:text-4xl">
          Proyectos que combinan resiliencia eléctrica y diseño consciente
        </h2>
        <p className="mt-4 text-balance text-muted-foreground sm:text-lg">
          Casos de uso que muestran la capacidad de ElectraNova para anticipar fallas y optimizar
          consumos sin sacrificar estética ni control.
        </p>
      </motion.div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {projects.map((project, index) => {
          const isActive = active === project.id;
          return (
          <motion.figure
            key={project.id}
            className="group relative mb-6 overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            variants={imageReveal}
            transition={{ delay: index * 0.08 }}
            tabIndex={0}
            role="button"
            aria-pressed={isActive}
            onHoverStart={() => activate(project.id)}
            onHoverEnd={deactivate}
            onFocus={() => activate(project.id)}
            onBlur={deactivate}
            onTap={() => toggleActive(project.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleActive(project.id);
              }
            }}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} - ${project.category}`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
            />
            <motion.figcaption
              className={cn(
                "pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 text-left",
                "opacity-0 md:opacity-0"
              )}
              initial={false}
              animate={
                isActive
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-sky-200">{project.category}</span>
              <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            </motion.figcaption>
          </motion.figure>
        );
        })}
      </div>
    </motion.section>
  );
}
