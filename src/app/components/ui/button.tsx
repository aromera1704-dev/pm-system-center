import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--pm-focus-ring)] focus-visible:ring-[color:var(--pm-focus-ring)]/20 focus-visible:ring-[3px] aria-invalid:ring-[var(--pm-error)]/20 aria-invalid:border-[var(--pm-error)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--pm-action-primary)] text-[var(--pm-text-inverse)] hover:bg-[var(--pm-action-primary-hover)]",
        system:
          "bg-[var(--pm-action-primary)] text-[var(--pm-text-inverse)] hover:bg-[var(--pm-action-primary-hover)]",
        destructive:
          "bg-[var(--pm-error)] text-[var(--pm-text-inverse)] hover:opacity-90 focus-visible:ring-[var(--pm-error)]/20",
        outline:
          "border border-[var(--pm-border-default)] bg-[var(--pm-surface-primary)] text-[var(--pm-text-primary)] hover:bg-[var(--pm-surface-secondary)]",
        secondary:
          "bg-[var(--pm-surface-secondary)] text-[var(--pm-text-primary)] hover:border-[var(--pm-border-strong)] hover:bg-[var(--pm-surface-primary)] border border-transparent",
        ghost:
          "text-[var(--pm-text-secondary)] hover:bg-[var(--pm-surface-secondary)] hover:text-[var(--pm-text-primary)]",
        ai:
          "bg-[var(--pm-ai-surface)] text-[var(--pm-ai-text)] border border-[var(--pm-border-ai)] hover:bg-[var(--pm-ai-surface-hover)]",
        link: "text-[var(--pm-link)] underline-offset-4 hover:text-[var(--pm-link-hover)] hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
