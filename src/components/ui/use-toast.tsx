/**
 * use-toast.ts
 * Hook ligero para disparar toasts de forma consistente.
 */
import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";

type ToastData = {
  id: number;
  title: string;
  description?: string;
};

type ToastContextValue = {
  toasts: ToastData[];
  toast: (input: Omit<ToastData, "id">) => void;
  dismiss: (id: number) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProviderContext({ children }: { children: ReactNode }): JSX.Element {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const timeoutsRef = useRef<Record<number, number>>({});

  const toast = useCallback((input: Omit<ToastData, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, ...input }]);
    // Programa cierre automático para microinteracción sin backend.
    const timeout = window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
      delete timeoutsRef.current[id];
    }, 5000);
    timeoutsRef.current[id] = timeout;
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
    const timeout = timeoutsRef.current[id];
    if (timeout) {
      window.clearTimeout(timeout);
      delete timeoutsRef.current[id];
    }
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        toast,
        dismiss
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast debe usarse dentro de ToastProviderContext");
  }
  return ctx;
}
