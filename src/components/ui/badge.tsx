/**
 * badge.tsx
 * Chip estilizado para tags informativos.
 */
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground backdrop-blur",
        "dark:border-white/10 dark:bg-white/5",
        className
      )}
      {...props}
    />
  );
}
