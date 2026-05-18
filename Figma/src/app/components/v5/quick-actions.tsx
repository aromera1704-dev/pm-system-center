import { motion } from 'motion/react';
import { FolderOpen, Building2, FileCheck, Workflow, FileText, Shield } from 'lucide-react';

const actions = [
  { label: 'Revisar proyecto', icon: FolderOpen, gradient: 'from-[#1a3e4a] to-[#2a5a6a]', count: '12', color: '#1a3e4a', glow: 'shadow-[#1a3e4a]/20' },
  { label: 'Estado de obra', icon: Building2, gradient: 'from-[#b87333] to-[#d4a574]', count: '3', color: '#b87333', glow: 'shadow-[#b87333]/20' },
  { label: 'Generar plan de acción', icon: FileCheck, gradient: 'from-[#d4a574] to-[#e5b88a]', color: '#d4a574', glow: 'shadow-[#d4a574]/20' },
  { label: 'Automatización', icon: Workflow, gradient: 'from-[#059669] to-[#10b981]', count: '8', color: '#059669', glow: 'shadow-[#059669]/20' },
  { label: 'Informe diario', icon: FileText, gradient: 'from-[#b87333] to-[#d4a574]', color: '#b87333', glow: 'shadow-[#b87333]/20' },
  { label: 'Validación PEM', icon: Shield, gradient: 'from-[#1a3e4a] to-[#059669]', count: '77', color: '#1a3e4a', glow: 'shadow-[#1a3e4a]/20' },
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
          whileHover={{ scale: 1.03, y: -4 }}
          className="group relative p-5 rounded-xl bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-left shadow-lg hover:shadow-xl"
        >
          {/* Colored glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 rounded-xl blur-xl transition-opacity duration-300`} />

          <div className="relative flex items-center gap-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} shadow-lg ${action.glow}`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-gray-900 font-bold block mb-1">{action.label}</span>
              {action.count && (
                <div className="text-xs text-gray-500 font-medium">{action.count} activos</div>
              )}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
