import { Search, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function CommandBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative group"
    >
      <div className="relative bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[var(--pm-border-strong)]">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--pm-primary-blue)] to-[var(--pm-ai-magenta)] shadow-md">
            <Sparkles className="w-5 h-5 text-[var(--pm-text-inverse)]" />
          </div>

          <input
            type="text"
            placeholder="¿Qué quieres revisar o lanzar?"
            className="flex-1 bg-transparent text-lg text-[var(--pm-text-primary)] placeholder:text-[var(--pm-text-tertiary)] focus:outline-none font-medium"
          />

          <div className="flex items-center gap-2">
            <kbd className="px-3 py-1.5 text-xs text-[var(--pm-text-secondary)] bg-[var(--pm-surface-secondary)] rounded-lg border border-[var(--pm-border-default)] font-medium shadow-sm">⌘K</kbd>
            <Search className="w-5 h-5 text-[var(--pm-text-tertiary)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
