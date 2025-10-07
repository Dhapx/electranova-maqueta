/**
 * textarea.tsx
 * Área de texto estilizada para mensajes largos.
 */
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[160px] w-full rounded-3xl border border-border bg-background/60 px-5 py-4 text-sm text-foreground shadow-inner transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:cursor-not-allowed",
        "placeholder:text-muted-foreground/80 backdrop-blur",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
