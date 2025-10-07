/**
 * testimonials.ts
 * Testimonios mock con data ficticia para la sección de reputación de la marca.
 */
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "aurora",
    name: "Aurora Méndez",
    role: "Directora de Operaciones",
    company: "FaroLabs",
    quote: "ElectraNova transformó nuestra planta con monitoreo en tiempo real y cero interrupciones.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=15"
  },
  {
    id: "marco",
    name: "Marco Díaz",
    role: "Facility Manager",
    company: "Habitat Premium",
    quote: "Su equipo de soporte 24/7 respondió en minutos y evitó pérdidas críticas en nuestra torre.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=32"
  },
  {
    id: "leila",
    name: "Leila Carballo",
    role: "Arquitecta líder",
    company: "Estudio Lumen",
    quote: "La domótica propuesta elevó la experiencia de nuestros clientes y optimizó el consumo energético.",
    rating: 4,
    avatar: "https://i.pravatar.cc/120?img=47"
  }
];
