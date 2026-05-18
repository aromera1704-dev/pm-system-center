import { motion } from 'motion/react';
import { Circle } from 'lucide-react';

const activities = [
  {
    project: 'Proyecto Mahou',
    status: 'SAT en curso',
    color: '#1a3e4a',
    statusColor: '#d4a574',
  },
  {
    project: 'Línea Kisters',
    status: 'validación pendiente',
    color: '#b87333',
    statusColor: '#d4a574',
  },
  {
    project: 'Automatización n8n',
    status: 'activa',
    color: '#d4a574',
    statusColor: '#4ade80',
  },
  {
    project: 'Control PEM',
    status: '77 sistemas operativos',
    color: '#1a3e4a',
    statusColor: '#4ade80',
  },
];

export function ActivityCards() {
  return (
    <div className="space-y-4">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-sm uppercase tracking-wider text-[#6b7280] mb-4"
      >
        Actividad Operativa
      </motion.h3>

      <div className="grid grid-cols-4 gap-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.project}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-4 rounded-xl bg-gradient-to-br from-[#0f0f14]/80 to-[#1a1a24]/60 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity"
              style={{ backgroundColor: activity.color }}
            />

            <div className="relative space-y-2">
              <div className="flex items-center gap-2">
                <Circle
                  className="w-2 h-2 fill-current"
                  style={{ color: activity.statusColor }}
                />
                <span className="text-xs text-[#6b7280]">{activity.status}</span>
              </div>
              <p className="text-sm text-[#f8f8f2]">{activity.project}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
