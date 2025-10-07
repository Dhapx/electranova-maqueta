/**
 * input.tsx
 * Campo de texto estilizado con estados accesibles.
 */
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-full border border-border bg-background/60 px-5 text-sm text-foreground shadow-inner transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:cursor-not-allowed",
        "placeholder:text-muted-foreground/80 backdrop-blur",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
