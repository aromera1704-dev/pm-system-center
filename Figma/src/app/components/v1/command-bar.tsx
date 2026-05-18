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
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3e4a]/20 via-[#b87333]/10 to-[#1a3e4a]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-r from-[#0f0f14]/80 via-[#1a3e4a]/10 to-[#0f0f14]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3e4a] to-[#b87333] shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <input
            type="text"
            placeholder="¿Qué quieres revisar o lanzar?"
            className="flex-1 bg-transparent text-lg text-[#f8f8f2] placeholder:text-[#6b7280] focus:outline-none"
          />

          <div className="flex items-center gap-2">
            <kbd className="px-3 py-1.5 text-xs text-[#6b7280] bg-white/5 rounded-lg border border-white/10">⌘K</kbd>
            <Search className="w-5 h-5 text-[#6b7280]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
