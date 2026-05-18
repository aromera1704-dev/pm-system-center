import { motion } from 'motion/react';
import { FolderOpen, Building2, FileCheck, Workflow, FileText, Shield } from 'lucide-react';

const actions = [
  { label: 'Revisar proyecto', icon: FolderOpen, color: '#1a5a6a', count: '12' },
  { label: 'Estado de obra', icon: Building2, color: '#b87333', count: '3' },
  { label: 'Generar plan de acción', icon: FileCheck, color: '#6b7280' },
  { label: 'Automatización', icon: Workflow, color: '#1a5a6a', count: '8' },
  { label: 'Informe diario', icon: FileText, color: '#b87333' },
  { label: 'Validación PEM', icon: Shield, color: '#1a5a6a', count: '77' },
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
          className="group relative p-5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 text-left shadow-md"
        >
          <div className="relative flex items-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shadow-md"
              style={{ backgroundColor: action.color }}
            >
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
