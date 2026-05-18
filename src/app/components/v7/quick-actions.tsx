import { motion } from 'motion/react';
import { FolderOpen, Building2, FileCheck, Workflow, FileText, Shield } from 'lucide-react';
import {
  getNavigationModule,
  navigationModuleIds,
} from '../../navigation';

const actions = [
  {
    moduleId: navigationModuleIds.projectHub,
    label: 'Revisar proyecto',
    icon: FolderOpen,
    color: 'var(--pm-action-primary)',
    count: '12',
  },
  {
    moduleId: navigationModuleIds.controlPem,
    label: 'Estado de obra',
    icon: Building2,
    color: 'var(--pm-warning)',
    count: '3',
  },
  {
    label: 'Generar plan de acción',
    icon: FileCheck,
    color: 'var(--pm-text-secondary)',
  },
  {
    moduleId: navigationModuleIds.automation,
    icon: Workflow,
    color: 'var(--pm-ai-text)',
    count: '8',
  },
  {
    moduleId: navigationModuleIds.docs,
    label: 'Informe diario',
    icon: FileText,
    color: 'var(--pm-warning)',
  },
  {
    moduleId: navigationModuleIds.controlPem,
    label: 'Validación PEM',
    icon: Shield,
    color: 'var(--pm-action-primary)',
    count: '77',
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {actions.map((action, index) => (
        (() => {
          const module = action.moduleId
            ? getNavigationModule(action.moduleId)
            : undefined;
          const actionLabel = action.label ?? module?.label ?? 'Acción';

          return (
        <motion.button
          key={`${actionLabel}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.05 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="group relative p-5 rounded-xl bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] hover:border-[var(--pm-border-strong)] hover:shadow-lg transition-all duration-300 text-left shadow-md"
          title={module?.description ?? actionLabel}
          data-module-id={action.moduleId}
        >
          <div className="relative flex items-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shadow-md"
              style={{ backgroundColor: action.color }}
            >
              <action.icon className="w-5 h-5 text-[var(--pm-text-inverse)]" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-[var(--pm-text-primary)] font-semibold">{actionLabel}</span>
              {action.count && (
                <div className="text-xs text-[var(--pm-text-secondary)] mt-0.5">{action.count} activos</div>
              )}
            </div>
          </div>
        </motion.button>
          );
        })()
      ))}
    </div>
  );
}
