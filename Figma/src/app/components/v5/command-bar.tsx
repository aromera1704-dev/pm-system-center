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
      {/* Enhanced glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3e4a]/10 via-[#b87333]/10 to-[#1a3e4a]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a3e4a] to-[#b87333] shadow-lg shadow-[#1a3e4a]/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <input
            type="text"
            placeholder="¿Qué quieres revisar o lanzar?"
            className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none font-semibold"
          />

          <div className="flex items-center gap-2">
            <kbd className="px-3 py-1.5 text-xs text-gray-700 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg border border-gray-200 font-semibold shadow-md">⌘K</kbd>
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
