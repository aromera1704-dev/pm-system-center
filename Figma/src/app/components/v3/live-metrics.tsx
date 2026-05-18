import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const metrics = [
  { label: 'Proyectos Activos', value: '12', trend: 'up', change: '+2' },
  { label: 'Sistemas Operativos', value: '77', trend: 'stable', change: '0' },
  { label: 'Automatizaciones', value: '8', trend: 'up', change: '+1' },
  { label: 'SAT en Curso', value: '2', trend: 'down', change: '-1' },
];

export function LiveMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-4"
    >
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{metric.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 tabular-nums">{metric.value}</span>
              <div className={`flex items-center gap-1 text-xs font-medium ${
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
        </div>
      ))}
    </motion.div>
  );
}
