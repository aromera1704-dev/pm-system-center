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
        className="bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200 rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Proyectos Recientes</h3>
          <button className="text-xs text-[#1a3e4a] hover:underline font-semibold">Ver todos</button>
        </div>
        <div className="space-y-3">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg bg-white/50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Circle
                    className={`w-2.5 h-2.5 fill-current flex-shrink-0 drop-shadow-sm ${project.active ? 'animate-pulse' : ''}`}
                    style={{ color: project.statusColor }}
                  />
                  <span className="text-sm font-bold text-gray-900">{project.project}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600 mb-2 font-medium">
                <span>{project.status}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.time}</span>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full transition-all duration-300 shadow-sm"
                  style={{
                    width: `${project.progress}%`,
                    background: `linear-gradient(90deg, ${project.statusColor}, ${project.statusColor}dd)`,
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
        className="bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200 rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Próximos Hitos</h3>
          <button className="text-xs text-[#1a3e4a] hover:underline font-semibold">Calendario</button>
        </div>
        <div className="space-y-3">
          {upcomingMilestones.map((item, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg bg-white/50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-sm font-bold text-gray-900">{item.milestone}</span>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-bold shadow-sm ${
                    item.priority === 'high'
                      ? 'bg-gradient-to-br from-red-50 to-red-100 text-red-800 border border-red-200'
                      : item.priority === 'medium'
                      ? 'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-800 border border-blue-200'
                  }`}
                >
                  {item.priority === 'high' ? 'Alta' : item.priority === 'medium' ? 'Media' : 'Baja'}
                </span>
              </div>
              <div className="text-xs text-gray-600 font-medium">{item.date}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Active Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200 rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Incidencias Activas</h3>
          <button className="text-xs text-[#1a3e4a] hover:underline font-semibold">Gestionar</button>
        </div>
        <div className="space-y-3">
          {activeIssues.map((item, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg bg-white/50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-2 mb-2">
                <Circle
                  className={`w-2.5 h-2.5 fill-current flex-shrink-0 mt-1 drop-shadow-sm ${
                    item.severity === 'warning' ? 'text-amber-500 animate-pulse' : 'text-blue-500'
                  }`}
                />
                <span className="text-sm font-bold text-gray-900 flex-1">{item.issue}</span>
              </div>
              <div className="text-xs text-gray-600 ml-4 font-medium">{item.module}</div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-center text-xs text-gray-600 font-medium">
              <span className="font-bold text-[#10b981]">77 sistemas</span> operativos sin incidencias
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
