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
      <div className="relative overflow-hidden bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[var(--pm-border-strong)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'linear-gradient(90deg, color-mix(in srgb, var(--pm-primary-blue) 4%, white) 0%, transparent 40%, transparent 60%, color-mix(in srgb, var(--pm-ai-magenta) 4%, white) 100%)',
          }}
        />
        <div className="flex items-center gap-4">
          <div
            className="relative flex items-center justify-center w-11 h-11 rounded-xl border border-[color-mix(in_srgb,var(--pm-border-default)_70%,white)] shadow-[0_14px_32px_rgba(214,91,170,0.16)] overflow-hidden"
            style={{
              background: 'color-mix(in srgb, var(--pm-ai-magenta) 84%, white)',
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_60%)]" />
            <div className="absolute -left-1 top-1 h-5 w-5 rounded-full bg-white/25 blur-md" />
            <Sparkles className="relative z-10 w-5 h-5 text-[var(--pm-text-inverse)]" />
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
