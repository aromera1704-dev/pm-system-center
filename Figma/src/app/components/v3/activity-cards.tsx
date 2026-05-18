import { motion } from 'motion/react';
import { Circle, Clock } from 'lucide-react';

const activities = [
  {
    project: 'Proyecto Mahou',
    status: 'SAT en curso',
    color: '#1a3e4a',
    statusColor: '#d4a574',
    time: 'Actualizado hace 5 min',
    active: true,
  },
  {
    project: 'Línea Kisters',
    status: 'validación pendiente',
    color: '#b87333',
    statusColor: '#d4a574',
    time: 'Actualizado hace 1h',
    active: false,
  },
  {
    project: 'Automatización n8n',
    status: 'activa',
    color: '#059669',
    statusColor: '#10b981',
    time: 'En ejecución',
    active: true,
  },
  {
    project: 'Control PEM',
    status: '77 sistemas operativos',
    color: '#1a3e4a',
    statusColor: '#10b981',
    time: 'Monitoreo activo',
    active: true,
  },
];

export function ActivityCards() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-between mb-4"
      >
        <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
          Actividad Operativa
        </h3>
        <span className="text-xs text-gray-400 font-medium">4 proyectos activos</span>
      </motion.div>

      <div className="grid grid-cols-4 gap-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.project}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="group relative p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Circle
                    className={`w-2 h-2 fill-current ${activity.active ? 'animate-pulse' : ''}`}
                    style={{ color: activity.statusColor }}
                  />
                  <span className="text-xs text-gray-500 font-medium">{activity.status}</span>
                </div>
              </div>
              <p className="text-sm text-gray-900 font-semibold">{activity.project}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
