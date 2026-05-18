import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[var(--pm-text-primary)] placeholder:text-[var(--pm-text-tertiary)] selection:bg-[var(--pm-action-primary)] selection:text-[var(--pm-text-inverse)] border-[var(--pm-border-default)] text-[var(--pm-text-primary)] flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-[var(--pm-surface-primary)] transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[var(--pm-focus-ring)] focus-visible:ring-[color:var(--pm-focus-ring)]/20 focus-visible:ring-[3px]",
        "aria-invalid:ring-[var(--pm-error)]/20 aria-invalid:border-[var(--pm-error)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
