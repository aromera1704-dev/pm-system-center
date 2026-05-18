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
      <div className="relative bg-white border border-gray-200/80 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a3e4a] to-[#b87333] shadow-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <input
            type="text"
            placeholder="¿Qué quieres revisar o lanzar?"
            className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium"
          />

          <div className="flex items-center gap-2">
            <kbd className="px-2.5 py-1 text-xs text-gray-600 bg-gray-50 rounded-md border border-gray-200 font-medium shadow-sm">⌘K</kbd>
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
