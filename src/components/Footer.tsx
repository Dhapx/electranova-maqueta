/**
 * Footer.tsx
 * Pie de página con enlaces ficticios y nota de maqueta.
 */
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-white/10 bg-background/80 backdrop-blur">
      <div className="container mx-auto grid gap-8 py-12 md:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4">
          <motion.h3
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          >
            ElectraNova · Inteligencia eléctrica que impulsa visiones audaces
          </motion.h3>
          <p className="text-sm text-muted-foreground">
            Proyecto demostrativo sin backend. Los datos, contactos y enlaces son placeholders.
          </p>
          <div className="flex items-center gap-4">
            <FooterLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" aria-hidden />}>
              LinkedIn
            </FooterLink>
            <FooterLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" aria-hidden />}>
              Instagram
            </FooterLink>
            <FooterLink href="https://youtube.com" icon={<Youtube className="h-5 w-5" aria-hidden />}>
              Insights
            </FooterLink>
          </div>
        </div>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <p>Estrategia energética · +00 000 0000 (referencial)</p>
          <p>Correo demostrativo: vision@electranova.demo</p>
          <p>© {new Date().getFullYear()} ElectraNova · Maqueta visual sin compromisos reales.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  href: string;
  icon: ReactNode;
  children: ReactNode;
};

function FooterLink({ href, icon, children }: FooterLinkProps): JSX.Element {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-semibold transition hover:border-primary/60 hover:text-primary"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
    >
      {icon}
      {children}
    </motion.a>
  );
}
