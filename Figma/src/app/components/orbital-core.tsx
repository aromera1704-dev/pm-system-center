import { motion } from 'motion/react';
import { Layers, Shield, Workflow, GitBranch, FileText, Bot, BarChart3, Zap } from 'lucide-react';

const modules = [
  { name: 'Project_Hub', icon: Layers, angle: 0, color: '#1a3e4a', status: 'active' },
  { name: 'Control_PEM', icon: Shield, angle: 45, color: '#b87333', status: 'active' },
  { name: 'Automatizaciones', icon: Workflow, angle: 90, color: '#d4a574', status: 'active' },
  { name: 'n8n', icon: Zap, angle: 135, color: '#1a3e4a', status: 'active' },
  { name: 'Docs', icon: FileText, angle: 180, color: '#b87333', status: 'idle' },
  { name: 'GitHub', icon: GitBranch, angle: 225, color: '#d4a574', status: 'active' },
  { name: 'IA Agents', icon: Bot, angle: 270, color: '#1a3e4a', status: 'active' },
  { name: 'KPIs', icon: BarChart3, angle: 315, color: '#b87333', status: 'active' },
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
        {/* Reduced pulsing glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a3e4a] to-[#b87333] blur-2xl"
        />

        {/* Core circle */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1a3e4a] via-[#b87333] to-[#d4a574] shadow-2xl shadow-[#1a3e4a]/30 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#0d1419] border border-[#1a3e4a]/40 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-[#9ca3af] uppercase tracking-wider">PM</div>
              <div className="text-lg font-bold text-[#d4a574]">Core</div>
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
            {/* Connection line - more visible */}
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
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                x1={radius}
                y1={radius}
                x2={radius - x}
                y2={radius - y}
                stroke={module.status === 'active' ? '#1a3e4a' : '#6b7280'}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Module node */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              {/* Reduced glow */}
              <div
                className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: module.color }}
              />

              {/* Node - more visible */}
              <div className="relative w-16 h-16 rounded-xl bg-[#0d1419]/90 backdrop-blur-sm border border-[#1a3e4a]/40 hover:border-[#1a3e4a]/80 flex items-center justify-center shadow-xl transition-all duration-300">
                <module.icon className="w-6 h-6 text-[#d4a574]" />
                {module.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-[#0d1419] animate-pulse" />
                )}
              </div>

              {/* Label - improved visibility */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#0d1419]/95 backdrop-blur-md rounded-md text-xs text-[#e5e7eb] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#1a3e4a]/40 shadow-xl">
                {module.name}
                {module.status === 'active' && (
                  <span className="ml-1.5 text-[#4ade80]">●</span>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Reduced ambient particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#d4a574]"
          style={{
            left: `${50 + Math.cos((i * 45 * Math.PI) / 180) * (radius + 40)}%`,
            top: `${50 + Math.sin((i * 45 * Math.PI) / 180) * (radius + 40)}%`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
