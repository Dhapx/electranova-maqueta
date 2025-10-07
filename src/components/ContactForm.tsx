/**
 * ContactForm.tsx
 * Formulario validado client-side con react-hook-form + zod y feedback mediante toast.
 */
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { fadeUp, staggerChildren } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(3, "Ingresa al menos 3 caracteres."),
  email: z.string().email("Introduce un correo válido."),
  phone: z.string().min(6, "Indica un teléfono de contacto de ejemplo."),
  message: z.string().min(10, "Detalla brevemente tu requerimiento.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm(): JSX.Element {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = useCallback(
    (values: ContactFormValues) => {
      // Simula envío exitoso, limpia el formulario y dispara aviso visual.
      toast({
        title: "Solicitud enviada",
        description:
          "Nuestro equipo revisará tu requerimiento y se comunicará con un plan a medida (simulación)."
      });
      reset();
      console.info("Datos enviados (mock):", values);
    },
    [toast, reset]
  );

  return (
    <motion.section
      id="contacto"
      className="container mx-auto grid gap-10 py-24 lg:grid-cols-2 scroll-mt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={staggerChildren}
      aria-labelledby="contact-heading"
    >
      <motion.div variants={fadeUp} className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Contacto</p>
        <h2 id="contact-heading" className="text-3xl font-semibold sm:text-4xl">
          Coordina una consultoría energética a medida
        </h2>
        <p className="text-balance text-muted-foreground sm:text-lg">
          Cuéntanos sobre tu infraestructura y definiremos un roadmap eléctrico sin comprometer
          la continuidad. Respuesta en menos de 24h hábiles (simulado).
        </p>
        <motion.div
          className="grid gap-3 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 110, damping: 20 }}
        >
          <span>✦ Auditorías energéticas integrales</span>
          <span>✦ Soporte técnico prioritario 24/7</span>
          <span>✦ Programas de mantenimiento preventivo</span>
        </motion.div>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-surface space-y-6 rounded-3xl border border-white/10 p-8 shadow-2xl"
        variants={fadeUp}
        noValidate
      >
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              placeholder="Ej. Laura Innovación"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name ? (
              <motion.p className="text-xs text-rose-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.name.message}
              </motion.p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico de contacto</Label>
            <Input
              id="email"
              type="email"
              placeholder="ejemplo@empresa-demo.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email ? (
              <motion.p className="text-xs text-rose-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.email.message}
              </motion.p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono de referencia</Label>
            <Input
              id="phone"
              placeholder="Ej. +00 000 0000 (referencial)"
              {...register("phone")}
              aria-invalid={!!errors.phone}
            />
            {errors.phone ? (
              <motion.p className="text-xs text-rose-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.phone.message}
              </motion.p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Describe el reto eléctrico o proyecto que deseas impulsar."
              {...register("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message ? (
              <motion.p className="text-xs text-rose-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.message.message}
              </motion.p>
            ) : null}
          </div>
        </div>

        <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar solicitud simulada"}
        </Button>
      </motion.form>
    </motion.section>
  );
}
