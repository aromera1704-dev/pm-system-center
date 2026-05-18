import { motion } from 'motion/react';
import { Circle, Clock, ArrowRight } from 'lucide-react';

const recentProjects = [
  {
    project: 'Proyecto Mahou',
    status: 'SAT en curso',
    statusColor: '#d4a574',
    time: 'hace 5 min',
    active: true,
    progress: 75,
  },
  {
    project: 'Línea Kisters',
    status: 'validación pendiente',
    statusColor: '#d4a574',
    time: 'hace 1h',
    active: false,
    progress: 45,
  },
  {
    project: 'Automatización n8n',
    status: 'activa',
    statusColor: '#10b981',
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
    <div className="grid grid-cols-3 gap-4">
      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Proyectos Recientes</h3>
          <button className="text-xs text-[#1a3e4a] hover:underline font-medium">Ver todos</button>
        </div>
        <div className="space-y-3">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Circle
                    className={`w-2 h-2 fill-current flex-shrink-0 ${project.active ? 'animate-pulse' : ''}`}
                    style={{ color: project.statusColor }}
                  />
                  <span className="text-sm font-semibold text-gray-900">{project.project}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>{project.status}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.time}</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
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
        className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Próximos Hitos</h3>
          <button className="text-xs text-[#1a3e4a] hover:underline font-medium">Calendario</button>
        </div>
        <div className="space-y-3">
          {upcomingMilestones.map((item, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{item.milestone}</span>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    item.priority === 'high'
                      ? 'bg-red-50 text-red-700'
                      : item.priority === 'medium'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {item.priority === 'high' ? 'Alta' : item.priority === 'medium' ? 'Media' : 'Baja'}
                </span>
              </div>
              <div className="text-xs text-gray-500">{item.date}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Active Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Incidencias Activas</h3>
          <button className="text-xs text-[#1a3e4a] hover:underline font-medium">Gestionar</button>
        </div>
        <div className="space-y-3">
          {activeIssues.map((item, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-2 mb-2">
                <Circle
                  className={`w-2 h-2 fill-current flex-shrink-0 mt-1 ${
                    item.severity === 'warning' ? 'text-amber-500 animate-pulse' : 'text-blue-500'
                  }`}
                />
                <span className="text-sm font-semibold text-gray-900 flex-1">{item.issue}</span>
              </div>
              <div className="text-xs text-gray-500 ml-4">{item.module}</div>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-center text-xs text-gray-500">
              <span className="font-medium text-[#10b981]">77 sistemas</span> operativos sin incidencias
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
