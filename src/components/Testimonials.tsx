/**
 * Testimonials.tsx
 * Carrusel animado con transición automática y layout animations para testimonios.
 */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Stars } from "lucide-react";

export function Testimonials(): JSX.Element {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Avanza automáticamente cada 6 segundos con reseteo limpio.
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[active];

  return (
    <section
      id="testimonios"
      className="scroll-mt-32 bg-gradient-to-b from-background via-background/70 to-background"
    >
      <div className="container mx-auto grid gap-12 py-24 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Testimonios</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Respaldados por aliados estratégicos que exigen continuidad energética total
          </h2>
          <p className="text-balance text-muted-foreground sm:text-lg">
            Historias de empresas y estudios que confían en ElectraNova para gestionar riesgos,
            implementar automatización y ofrecer experiencias impecables a sus clientes.
          </p>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeTestimonial.id}
              className="glass-surface relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500"
                layoutId="testimonial-highlight"
              />
              <div className="flex items-center gap-4">
                <motion.img
                  key={`${activeTestimonial.id}-avatar`}
                  src={activeTestimonial.avatar}
                  alt={`Avatar de ${activeTestimonial.name}`}
                  className="h-14 w-14 rounded-full border border-white/20 object-cover shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 18 }}
                />
                <div>
                  <p className="text-lg font-semibold leading-tight">{activeTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {activeTestimonial.role} · {activeTestimonial.company}
                  </p>
                </div>
              </div>
              <motion.p
                className="mt-6 text-lg text-foreground/90"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                “{activeTestimonial.quote}”
              </motion.p>
              <div className="mt-6 flex items-center gap-1 text-amber-400" aria-label="Calificación">
                <Stars className="h-5 w-5" aria-hidden />
                <span className="text-sm font-semibold">
                  {activeTestimonial.rating}.0 · experiencia verificada
                </span>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-muted-foreground">Selecciona un aliado</p>
          <div className="grid gap-3">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setActive(index)}
                className="glass-surface flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-left transition hover:border-primary/60"
                aria-pressed={active === index}
                aria-label={`Ver testimonio de ${testimonial.name} de ${testimonial.company}`}
                layout
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
              >
                <div>
                  <p className="text-sm font-semibold">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
                <motion.span
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500"
                  animate={{ scale: active === index ? 1.6 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
