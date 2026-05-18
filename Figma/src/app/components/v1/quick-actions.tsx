import { motion } from 'motion/react';
import { FolderOpen, Building2, FileCheck, Workflow, FileText, Shield } from 'lucide-react';

const actions = [
  { label: 'Revisar proyecto', icon: FolderOpen, gradient: 'from-[#1a3e4a] to-[#1a3e4a]/50' },
  { label: 'Estado de obra', icon: Building2, gradient: 'from-[#b87333] to-[#b87333]/50' },
  { label: 'Generar plan de acción', icon: FileCheck, gradient: 'from-[#d4a574] to-[#d4a574]/50' },
  { label: 'Automatización', icon: Workflow, gradient: 'from-[#1a3e4a] to-[#b87333]' },
  { label: 'Informe diario', icon: FileText, gradient: 'from-[#b87333] to-[#d4a574]' },
  { label: 'Validación PEM', icon: Shield, gradient: 'from-[#1a3e4a] to-[#d4a574]' },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.05 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="group relative p-6 rounded-xl bg-gradient-to-br from-[#0f0f14]/60 to-[#1a1a24]/40 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300 text-left"
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />

          <div className="relative flex items-center gap-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${action.gradient} shadow-lg`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-[#f8f8f2]">{action.label}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
