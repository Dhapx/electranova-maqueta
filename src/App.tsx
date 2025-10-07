/**
 * App.tsx
 * Orquesta todas las secciones de la landing con proveedores de tema y toasts.
 */
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { ContactBar } from "./components/ContactBar";
import { ThemeToggle } from "./components/ThemeToggle";
import { Footer } from "./components/Footer";
import { useToast } from "./components/ui/use-toast";
import { ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from "./components/ui/toast";

function Navigation(): JSX.Element {
  return (
    <header className="sticky top-4 z-40 flex w-full justify-center px-4 pb-6">
      {/* Menú principal translúcido con accesos rápidos a cada sección */}
      <nav className="glass-surface flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 px-6 py-3 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#inicio" className="transition hover:text-primary">
            Inicio
          </a>
          <a href="#servicios" className="transition hover:text-primary hidden sm:inline-flex">
            Servicios
          </a>
          <a href="#portafolio" className="transition hover:text-primary hidden sm:inline-flex">
            Portafolio
          </a>
          <a href="#testimonios" className="transition hover:text-primary hidden md:inline-flex">
            Testimonios
          </a>
          <a href="#contacto" className="transition hover:text-primary hidden md:inline-flex">
            Contacto
          </a>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}

function ToastManager(): JSX.Element {
  const { toasts, dismiss } = useToast();

  return (
    <>
      <ToastViewport />
      <AnimatePresence initial={false}>
        {toasts.map(({ id, title, description }) => (
          <Toast
            key={id}
            // Radix emite onOpenChange al cerrar manualmente; eliminamos el toast del estado global.
            onOpenChange={(open) => {
              if (!open) dismiss(id);
            }}
            duration={5000}
          >
            <div className="flex flex-col gap-1">
              <ToastTitle>{title}</ToastTitle>
              {description ? <ToastDescription>{description}</ToastDescription> : null}
            </div>
            <ToastClose className="absolute right-4 top-4 text-xs uppercase tracking-wide text-muted-foreground">
              Cerrar
            </ToastClose>
          </Toast>
        ))}
      </AnimatePresence>
    </>
  );
}

export default function App(): JSX.Element {
  return (
    <Fragment>
      <div className="relative min-h-screen overflow-x-hidden">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(129,140,248,0.18),transparent_55%)]"
        />
        {/* Barra fija con CTA y cambio de tema para mantener acciones clave siempre visibles */}
        <Navigation />
        <ContactBar />
        <main className="relative z-10 space-y-24 lg:space-y-28">
          {/* Secciones principales bien diferenciadas para cumplir la jerarquía solicitada */}
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
      <ToastManager />
    </Fragment>
  );
}
