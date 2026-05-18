import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[var(--pm-focus-ring)] focus-visible:ring-[color:var(--pm-focus-ring)]/20 focus-visible:ring-[3px] aria-invalid:ring-[var(--pm-error)]/20 aria-invalid:border-[var(--pm-error)] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--pm-action-primary)] text-[var(--pm-text-inverse)] [a&]:hover:bg-[var(--pm-action-primary-hover)]",
        system:
          "border-transparent bg-[var(--pm-action-primary)] text-[var(--pm-text-inverse)] [a&]:hover:bg-[var(--pm-action-primary-hover)]",
        secondary:
          "border-transparent bg-[var(--pm-surface-secondary)] text-[var(--pm-text-primary)] [a&]:hover:bg-[var(--pm-surface-primary)]",
        destructive:
          "border-transparent bg-[var(--pm-error)] text-[var(--pm-text-inverse)] [a&]:hover:opacity-90 focus-visible:ring-[var(--pm-error)]/20",
        outline:
          "border-[var(--pm-border-default)] text-[var(--pm-text-primary)] bg-[var(--pm-surface-primary)] [a&]:hover:bg-[var(--pm-surface-secondary)]",
        ghost:
          "border-transparent bg-transparent text-[var(--pm-text-secondary)] [a&]:hover:bg-[var(--pm-surface-secondary)] [a&]:hover:text-[var(--pm-text-primary)]",
        ai:
          "border-[var(--pm-border-ai)] bg-[var(--pm-ai-surface)] text-[var(--pm-ai-text)] [a&]:hover:bg-[var(--pm-ai-surface-hover)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
