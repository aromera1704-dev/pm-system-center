import { motion } from 'motion/react';
import { Layers, Shield, Workflow, GitBranch, FileText, Bot, BarChart3, Zap } from 'lucide-react';

const modules = [
  { name: 'Project_Hub', icon: Layers, angle: 0, color: '#1a3e4a', status: 'active' },
  { name: 'Control_PEM', icon: Shield, angle: 45, color: '#b87333', status: 'active' },
  { name: 'Automatizaciones', icon: Workflow, angle: 90, color: '#059669', status: 'active' },
  { name: 'n8n', icon: Zap, angle: 135, color: '#1a3e4a', status: 'active' },
  { name: 'Docs', icon: FileText, angle: 180, color: '#6b7280', status: 'idle' },
  { name: 'GitHub', icon: GitBranch, angle: 225, color: '#059669', status: 'active' },
  { name: 'IA Agents', icon: Bot, angle: 270, color: '#b87333', status: 'active' },
  { name: 'KPIs', icon: BarChart3, angle: 315, color: '#1a3e4a', status: 'active' },
];

export function OrbitalCore() {
  const radius = 165;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        className="relative z-10"
      >
        {/* Subtle glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a3e4a] to-[#b87333] blur-2xl"
        />

        {/* Core circle */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1a3e4a] via-[#b87333] to-[#059669] shadow-lg">
          <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 flex items-center justify-center shadow-inner">
            <div className="text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">PM</div>
              <div className="text-lg font-bold bg-gradient-to-br from-[#1a3e4a] to-[#b87333] bg-clip-text text-transparent">Core</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbital Modules */}
      {modules.map((module, index) => {
        const x = Math.cos((module.angle * Math.PI) / 180) * radius;
        const y = Math.sin((module.angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={module.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Connection line */}
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: radius * 2,
                height: radius * 2,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.12 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                x1={radius}
                y1={radius}
                x2={radius - x}
                y2={radius - y}
                stroke={module.status === 'active' ? '#1a3e4a' : '#d1d5db'}
                strokeWidth="1.5"
                strokeDasharray="5 3"
              />
            </svg>

            {/* Module node */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              {/* Node */}
              <div className="relative w-14 h-14 rounded-lg bg-white border border-gray-200/80 hover:border-gray-300 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
                <module.icon className="w-5 h-5" style={{ color: module.color }} />
                {module.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-white animate-pulse shadow-sm" />
                )}
              </div>

              {/* Label */}
              <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 backdrop-blur-md rounded-md text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700 shadow-xl">
                {module.name}
                {module.status === 'active' && (
                  <span className="ml-1.5 text-[#10b981]">●</span>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
