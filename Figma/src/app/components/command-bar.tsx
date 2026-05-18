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
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3e4a]/10 via-[#b87333]/5 to-[#1a3e4a]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-[#0d1419]/60 backdrop-blur-xl border border-[#1a3e4a]/40 rounded-2xl p-6 shadow-2xl hover:border-[#1a3e4a]/60 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3e4a] to-[#b87333] shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <input
            type="text"
            placeholder="¿Qué quieres revisar o lanzar?"
            className="flex-1 bg-transparent text-lg text-[#e5e7eb] placeholder:text-[#6b7280] focus:outline-none"
          />

          <div className="flex items-center gap-2">
            <kbd className="px-3 py-1.5 text-xs text-[#9ca3af] bg-[#1a3e4a]/20 rounded-lg border border-[#1a3e4a]/40">⌘K</kbd>
            <Search className="w-5 h-5 text-[#6b7280]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
