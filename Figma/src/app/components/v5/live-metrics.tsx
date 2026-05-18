import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const metrics = [
  { label: 'Proyectos Activos', value: '12', trend: 'up', change: '+2', gradient: 'from-[#1a3e4a] to-[#2a5a6a]' },
  { label: 'Sistemas Operativos', value: '77', trend: 'stable', change: '0', gradient: 'from-[#059669] to-[#10b981]' },
  { label: 'Automatizaciones', value: '8', trend: 'up', change: '+1', gradient: 'from-[#b87333] to-[#d4a574]' },
  { label: 'SAT en Curso', value: '2', trend: 'down', change: '-1', gradient: 'from-[#d4a574] to-[#e5b88a]' },
];

export function LiveMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-4 gap-4"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="relative group"
        >
          {/* Gradient glow background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-5 rounded-xl blur-xl group-hover:opacity-10 transition-opacity duration-300`} />

          {/* Card */}
          <div className="relative flex flex-col px-5 py-4 rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">{metric.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 tabular-nums">{metric.value}</span>
              <div className={`flex items-center gap-1 text-xs font-semibold ${
                metric.trend === 'up' ? 'text-[#10b981]' :
                metric.trend === 'down' ? 'text-[#ef4444]' :
                'text-gray-400'
              }`}>
                {metric.trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
                {metric.trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
                {metric.trend === 'stable' && <Minus className="w-3.5 h-3.5" />}
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
