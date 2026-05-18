import { motion } from 'motion/react';
import { FolderOpen, Building2, FileCheck, Workflow, FileText, Shield } from 'lucide-react';

const actions = [
  { label: 'Revisar proyecto', icon: FolderOpen, gradient: 'from-[#1a3e4a] to-[#1a3e4a]/70', count: '12', color: '#1a3e4a' },
  { label: 'Estado de obra', icon: Building2, gradient: 'from-[#b87333] to-[#b87333]/70', count: '3', color: '#b87333' },
  { label: 'Generar plan de acción', icon: FileCheck, gradient: 'from-[#d4a574] to-[#d4a574]/70', color: '#d4a574' },
  { label: 'Automatización', icon: Workflow, gradient: 'from-[#1a3e4a] to-[#b87333]', count: '8', color: '#1a3e4a' },
  { label: 'Informe diario', icon: FileText, gradient: 'from-[#b87333] to-[#d4a574]', color: '#b87333' },
  { label: 'Validación PEM', icon: Shield, gradient: 'from-[#1a3e4a] to-[#059669]', count: '77', color: '#059669' },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {actions.map((action, index) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.05 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="group relative p-4 rounded-lg bg-white border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="relative flex items-center gap-3">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${action.gradient} shadow-sm`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-gray-900 font-semibold">{action.label}</span>
              {action.count && (
                <div className="text-xs text-gray-500 mt-0.5">{action.count} activos</div>
              )}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
