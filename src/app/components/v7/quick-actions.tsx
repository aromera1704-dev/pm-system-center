import { motion } from 'motion/react';
import { FolderOpen, Building2, FileCheck, Workflow, FileText, Shield } from 'lucide-react';

// TODO: Reconciliar acciones ligadas a módulos con src/app/navigation.ts
// cuando se defina navegación contextual por destino.
const actions = [
  { label: 'Revisar proyecto', icon: FolderOpen, color: 'var(--pm-action-primary)', count: '12' },
  { label: 'Estado de obra', icon: Building2, color: 'var(--pm-warning)', count: '3' },
  { label: 'Generar plan de acción', icon: FileCheck, color: 'var(--pm-text-secondary)' },
  { label: 'Automatización', icon: Workflow, color: 'var(--pm-ai-text)', count: '8' },
  { label: 'Informe diario', icon: FileText, color: 'var(--pm-warning)' },
  { label: 'Validación PEM', icon: Shield, color: 'var(--pm-action-primary)', count: '77' },
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
          className="group relative p-5 rounded-xl bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] hover:border-[var(--pm-border-strong)] hover:shadow-lg transition-all duration-300 text-left shadow-md"
        >
          <div className="relative flex items-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shadow-md"
              style={{ backgroundColor: action.color }}
            >
              <action.icon className="w-5 h-5 text-[var(--pm-text-inverse)]" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-[var(--pm-text-primary)] font-semibold">{action.label}</span>
              {action.count && (
                <div className="text-xs text-[var(--pm-text-secondary)] mt-0.5">{action.count} activos</div>
              )}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
