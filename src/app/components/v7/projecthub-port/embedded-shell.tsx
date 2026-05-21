import { motion } from "motion/react";
import type { PropsWithChildren, ReactNode } from "react";

type EmbeddedShellProps = PropsWithChildren<{
  title: string;
  actions?: ReactNode;
  headerContent?: ReactNode;
}>;

export function EmbeddedShell({ title, actions, children, headerContent }: EmbeddedShellProps) {
  return (
    <div className="project-workspace-stack">
      {headerContent ? (
        <header className="project-detail-hero-shell">{headerContent}</header>
      ) : (
        <header className="project-detail-hero-shell">
          <h1 className="hero-title">{title}</h1>
          <div className="hero-actions">{actions}</div>
        </header>
      )}
      <motion.main
        className="content"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </div>
  );
}
