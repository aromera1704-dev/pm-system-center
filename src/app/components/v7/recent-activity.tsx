import { motion } from 'motion/react';
import { Circle, Clock, ArrowRight } from 'lucide-react';

const recentProjects = [
  {
    project: 'Proyecto Mahou',
    status: 'SAT en curso',
    statusColor: 'var(--pm-warning)',
    time: 'hace 5 min',
    active: true,
    progress: 75,
  },
  {
    project: 'Línea Kisters',
    status: 'validación pendiente',
    statusColor: 'var(--pm-warning)',
    time: 'hace 1h',
    active: false,
    progress: 45,
  },
  {
    project: 'Automatización n8n',
    status: 'activa',
    statusColor: 'var(--pm-success)',
    time: 'en ejecución',
    active: true,
    progress: 90,
  },
];

const upcomingMilestones = [
  { milestone: 'Entrega Mahou SAT', date: 'Mañana, 10:00', priority: 'high' },
  { milestone: 'Revisión Kisters PEM', date: 'Vie 18, 14:00', priority: 'medium' },
  { milestone: 'Deploy automatización', date: 'Lun 21, 09:00', priority: 'low' },
];

const activeIssues = [
  { issue: 'Sensor temperatura fuera de rango', severity: 'warning', module: 'Control PEM' },
  { issue: 'Validación pendiente documentos', severity: 'info', module: 'Docs' },
];

export function RecentActivity() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[var(--pm-text-primary)] uppercase tracking-wide">Proyectos Recientes</h3>
          <button className="text-xs text-[var(--pm-link)] hover:underline font-medium">Ver todos</button>
        </div>
        <div className="space-y-3">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-[var(--pm-surface-secondary)] transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Circle
                    className={`w-2.5 h-2.5 fill-current ${project.active ? 'animate-pulse' : ''}`}
                    style={{ color: project.statusColor }}
                  />
                  <span className="text-sm font-semibold text-[var(--pm-text-primary)]">{project.project}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--pm-text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--pm-text-secondary)] mb-2 font-medium">
                <span>{project.status}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.time}</span>
                </div>
              </div>
              <div className="w-full h-2 bg-[var(--pm-surface-secondary)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${project.progress}%`,
                    backgroundColor: project.statusColor,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[var(--pm-text-primary)] uppercase tracking-wide">Próximos Hitos</h3>
          <button className="text-xs text-[var(--pm-link)] hover:underline font-medium">Calendario</button>
        </div>
        <div className="space-y-3">
          {upcomingMilestones.map((item, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-[var(--pm-surface-secondary)] transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-sm font-semibold text-[var(--pm-text-primary)]">{item.milestone}</span>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    item.priority === 'high'
                      ? 'bg-[var(--pm-status-error-bg)] text-[var(--pm-error)]'
                      : item.priority === 'medium'
                      ? 'bg-[var(--pm-status-warning-bg)] text-[var(--pm-warning)]'
                      : 'bg-[var(--pm-surface-secondary)] text-[var(--pm-text-secondary)]'
                  }`}
                >
                  {item.priority === 'high' ? 'Alta' : item.priority === 'medium' ? 'Media' : 'Baja'}
                </span>
              </div>
              <div className="text-xs text-[var(--pm-text-secondary)] font-medium">{item.date}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Active Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[var(--pm-text-primary)] uppercase tracking-wide">Incidencias Activas</h3>
          <button className="text-xs text-[var(--pm-link)] hover:underline font-medium">Gestionar</button>
        </div>
        <div className="space-y-3">
          {activeIssues.map((item, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-[var(--pm-surface-secondary)] transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-2 mb-2">
                <Circle
                  className={`w-2.5 h-2.5 fill-current flex-shrink-0 mt-1 ${
                    item.severity === 'warning' ? 'text-[var(--pm-warning)] animate-pulse' : 'text-[var(--pm-text-tertiary)]'
                  }`}
                />
                <span className="text-sm font-semibold text-[var(--pm-text-primary)] flex-1">{item.issue}</span>
              </div>
              <div className="text-xs text-[var(--pm-text-secondary)] ml-4 font-medium">{item.module}</div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-[var(--pm-border-default)]">
            <div className="text-center text-xs text-[var(--pm-text-secondary)] font-medium">
              <span className="font-semibold text-[var(--pm-success)]">77 sistemas</span> operativos sin incidencias
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
