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
      <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a5a6a] to-[#b87333] shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <input
            type="text"
            placeholder="¿Qué quieres revisar o lanzar?"
            className="flex-1 bg-transparent text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium"
          />

          <div className="flex items-center gap-2">
            <kbd className="px-3 py-1.5 text-xs text-gray-600 bg-gray-50 rounded-lg border border-gray-200 font-medium shadow-sm">⌘K</kbd>
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
