/**
 * button.tsx
 * Botón reutilizable inspirado en shadcn/ui con variantes estilizadas.
 */
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-primary-foreground shadow-lg hover:shadow-xl hover:brightness-110",
        secondary:
          "border border-white/20 bg-transparent text-foreground hover:bg-white/10 dark:hover:bg-white/5",
        ghost: "bg-transparent hover:bg-muted/40 text-sm font-medium",
        outline:
          "border border-primary/40 text-primary hover:border-primary hover:bg-primary/10"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Permite usar como Slot para envolver enlaces manteniendo estilos.
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
