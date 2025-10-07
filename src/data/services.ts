/**
 * services.ts
 * Mock de servicios destacados con metadata e íconos (lucide) para la UI.
 */
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "motores",
    title: "Mantenimiento de motores",
    description: "Planes preventivos y correctivos para motores industriales y residenciales.",
    icon: "Cog",
    tags: ["Motores trifásicos", "Balanceo", "Diagnóstico vibracional"]
  },
  {
    id: "repuestos",
    title: "Repuestos certificados",
    description: "Suministro premium de repuestos y tableros con garantía extendida.",
    icon: "PackageCheck",
    tags: ["Tableros inteligentes", "UPS", "Canalizaciones"]
  },
  {
    id: "domotica",
    title: "Domótica inteligente",
    description: "Automatización para hogares y oficinas con control remoto y analítica energética.",
    icon: "Sparkle",
    tags: ["IoT", "Control remoto", "Escenas personalizadas"]
  },
  {
    id: "asesoria",
    title: "Asesoría 24/7",
    description: "Soporte urgente con monitoreo remoto y protocolos de respuesta inmediata.",
    icon: "Headset",
    tags: ["Monitoreo remoto", "Protocolos críticos", "Cobertura nacional"]
  },
  {
    id: "automatizacion",
    title: "Automatización integral",
    description: "Integración de PLC, SCADA y sensores para plantas y edificios inteligentes.",
    icon: "CircuitBoard",
    tags: ["PLC", "SCADA", "Sensores inteligentes"]
  },
  {
    id: "diagnostico",
    title: "Diagnóstico avanzado",
    description: "Termografías, calidad de energía y auditorías para reducir riesgos.",
    icon: "Activity",
    tags: ["Termografías", "Auditorías", "Calidad energética"]
  }
];
