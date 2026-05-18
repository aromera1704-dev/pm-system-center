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
      className="flex items-center gap-6"
    >
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0d1419]/60 backdrop-blur-sm border border-[#1a3e4a]/30"
        >
          <div className="flex flex-col">
            <span className="text-xs text-[#9ca3af] uppercase tracking-wide">{metric.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-[#e5e7eb] tabular-nums">{metric.value}</span>
              <div className={`flex items-center gap-1 text-xs ${
                metric.trend === 'up' ? 'text-[#4ade80]' :
                metric.trend === 'down' ? 'text-[#f87171]' :
                'text-[#9ca3af]'
              }`}>
                {metric.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                {metric.trend === 'down' && <TrendingDown className="w-3 h-3" />}
                {metric.trend === 'stable' && <Minus className="w-3 h-3" />}
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
