/**
 * Portfolio.tsx
 * Galería responsive con animaciones on-scroll y hover zoom para proyectos destacados.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imageReveal, staggerChildren, fadeUp } from "@/lib/animations";

const projects = [
  {
    id: "circuitos",
    title: "Campus corporativo sin interrupciones",
    category: "Continuidad operativa",
    image: "/gallery/placeholder-1.jpg"
  },
  {
    id: "industria",
    title: "Automatización de planta alimentaria",
    category: "Industria 4.0",
    image: "https://picsum.photos/seed/electra1/640/720"
  },
  {
    id: "domotica",
    title: "Residencias con domótica integral",
    category: "Smart Living",
    image: "https://picsum.photos/seed/electra2/640/720"
  },
  {
    id: "energia",
    title: "Auditoría energética multisitio",
    category: "Eficiencia y sostenibilidad",
    image: "/gallery/placeholder-2.jpg"
  },
  {
    id: "tableros",
    title: "Tableros inteligentes con IA",
    category: "Ingeniería avanzada",
    image: "https://picsum.photos/seed/electra3/640/720"
  },
  {
    id: "microgrid",
    title: "Microgrid híbrida para data center",
    category: "Infraestructura crítica",
    image: "/gallery/placeholder-3.jpg"
  }
];

export function Portfolio(): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="portafolio"
      ref={ref}
      className="container mx-auto space-y-12 py-24"
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
        {projects.map((project, index) => (
          <motion.figure
            key={project.id}
            className="group relative mb-6 overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            variants={imageReveal}
            transition={{ delay: index * 0.08 }}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} - ${project.category}`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
            />
            <motion.figcaption
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-sky-200">{project.category}</span>
              <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            </motion.figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
