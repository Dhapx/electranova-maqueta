/**
 * Services.tsx
 * Grid responsive con servicios destacados, animaciones hover y data mock reutilizable.
 */
import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { services } from "@/data/services";
import { hoverCard, fadeUp, staggerChildren } from "@/lib/animations";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Mapa de iconos para resolver dinámicamente según el nombre definido en data.
const iconMap: Record<string, React.ComponentType<Icons.LucideProps>> = {
  Cog: Icons.Cog,
  PackageCheck: Icons.PackageCheck,
  Sparkle: Icons.Sparkle,
  Headset: Icons.Headset,
  CircuitBoard: Icons.CircuitBoard,
  Activity: Icons.Activity
};

export function Services(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const servicesWithIcons = useMemo(
    () =>
      services.map((service) => ({
        ...service,
        Icon: iconMap[service.icon] ?? Icons.Zap
      })),
    []
  );

  return (
    <motion.section
      ref={sectionRef}
      id="servicios"
      className="container mx-auto mt-16 space-y-12 py-24 scroll-mt-32 sm:mt-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren}
      aria-labelledby="services-heading"
    >
      <motion.div variants={fadeUp} className="text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Servicios</p>
        <h2 id="services-heading" className="mt-2 text-3xl font-semibold sm:text-4xl">
          Arquitectura eléctrica confiable para cada etapa del proyecto
        </h2>
        <p className="mt-4 text-balance text-muted-foreground sm:text-lg">
          Soluciones modulares que se adaptan a necesidades residenciales, comerciales e industriales,
          combinando ingeniería, soporte y visión a futuro.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesWithIcons.map(({ id, title, description, tags, Icon }) => (
          <motion.article
            key={id}
            variants={hoverCard}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Card className="h-full overflow-hidden">
              <CardHeader className="relative space-y-6">
                <motion.span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-indigo-500/30 to-fuchsia-500/30 text-sky-200"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </motion.span>
                <div className="space-y-3">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
              </CardHeader>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
