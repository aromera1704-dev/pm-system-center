import { motion } from 'motion/react';
import { Layers, Shield, Workflow, GitBranch, FileText, Bot, BarChart3, Zap } from 'lucide-react';

const modules = [
  { name: 'Project_Hub', icon: Layers, angle: 0, color: '#2563EB', status: 'active' },
  { name: 'Control_PEM', icon: Shield, angle: 45, color: '#D4A574', status: 'active' },
  { name: 'Automatizaciones', icon: Workflow, angle: 90, color: '#FC10A3', status: 'active' },
  { name: 'n8n', icon: Zap, angle: 135, color: '#FC10A3', status: 'active' },
  { name: 'Docs', icon: FileText, angle: 180, color: '#6b7280', status: 'idle' },
  { name: 'GitHub', icon: GitBranch, angle: 225, color: '#2563EB', status: 'active' },
  { name: 'IA Agents', icon: Bot, angle: 270, color: '#FC10A3', status: 'active' },
  { name: 'KPIs', icon: BarChart3, angle: 315, color: '#2563EB', status: 'active' },
];

export function OrbitalCore() {
  const radius = 180;

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
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#FC10A3] blur-2xl"
        />

        {/* Core circle */}
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#2563EB] via-[#FC10A3] to-[#2563EB] shadow-xl flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">PM</div>
              <div className="text-xl font-bold bg-gradient-to-br from-[#2563EB] to-[#FC10A3] bg-clip-text text-transparent">Core</div>
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
                animate={{ pathLength: 1, opacity: 0.15 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                x1={radius}
                y1={radius}
                x2={radius - x}
                y2={radius - y}
                stroke={module.status === 'active' ? module.color : '#d1d5db'}
                strokeWidth="2"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Module node */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              {/* Node */}
              <div
                className="relative w-16 h-16 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white"
                style={{ backgroundColor: module.color }}
              >
                <module.icon className="w-6 h-6 text-white" />
                {module.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10b981] border-2 border-white animate-pulse shadow-sm" />
                )}
              </div>

              {/* Label */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700 shadow-xl">
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
