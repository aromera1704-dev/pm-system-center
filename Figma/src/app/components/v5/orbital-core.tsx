import { motion } from 'motion/react';
import { Layers, Shield, Workflow, GitBranch, FileText, Bot, BarChart3, Zap } from 'lucide-react';

const modules = [
  { name: 'Project_Hub', icon: Layers, angle: 0, color: '#1a3e4a', status: 'active', gradient: 'from-[#1a3e4a] to-[#2a5a6a]' },
  { name: 'Control_PEM', icon: Shield, angle: 45, color: '#b87333', status: 'active', gradient: 'from-[#b87333] to-[#d4a574]' },
  { name: 'Automatizaciones', icon: Workflow, angle: 90, color: '#059669', status: 'active', gradient: 'from-[#059669] to-[#10b981]' },
  { name: 'n8n', icon: Zap, angle: 135, color: '#1a3e4a', status: 'active', gradient: 'from-[#1a3e4a] to-[#2a5a6a]' },
  { name: 'Docs', icon: FileText, angle: 180, color: '#6b7280', status: 'idle', gradient: 'from-gray-400 to-gray-500' },
  { name: 'GitHub', icon: GitBranch, angle: 225, color: '#059669', status: 'active', gradient: 'from-[#059669] to-[#10b981]' },
  { name: 'IA Agents', icon: Bot, angle: 270, color: '#b87333', status: 'active', gradient: 'from-[#b87333] to-[#d4a574]' },
  { name: 'KPIs', icon: BarChart3, angle: 315, color: '#1a3e4a', status: 'active', gradient: 'from-[#1a3e4a] to-[#2a5a6a]' },
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
        {/* Enhanced pulsing glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a3e4a] to-[#b87333] blur-3xl"
        />

        {/* Core circle with richer gradient */}
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#1a3e4a] via-[#b87333] to-[#059669] shadow-2xl shadow-[#1a3e4a]/30 p-1">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-inner">
            <div className="text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">PM</div>
              <div className="text-xl font-black bg-gradient-to-br from-[#1a3e4a] to-[#b87333] bg-clip-text text-transparent">Core</div>
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
            {/* Connection line with gradient */}
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: radius * 2,
                height: radius * 2,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={module.status === 'active' ? module.color : '#d1d5db'} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={module.status === 'active' ? module.color : '#d1d5db'} stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                x1={radius}
                y1={radius}
                x2={radius - x}
                y2={radius - y}
                stroke={`url(#gradient-${index})`}
                strokeWidth="2"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Module node with enhanced styling */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="relative group cursor-pointer"
            >
              {/* Colored glow on hover */}
              <div
                className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundColor: module.color }}
              />

              {/* Node with gradient */}
              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-xl transition-all duration-300 border-2 border-white`}>
                <module.icon className="w-6 h-6 text-white drop-shadow-md" />
                {module.status === 'active' && (
                  <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#10b981] border-3 border-white animate-pulse shadow-lg shadow-[#10b981]/50" />
                )}
              </div>

              {/* Enhanced label */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700 shadow-2xl">
                <div className="font-bold">{module.name}</div>
                {module.status === 'active' && (
                  <div className="text-[10px] text-[#10b981] font-semibold mt-0.5">● ACTIVO</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Ambient particles with enhanced glow */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1a3e4a] to-[#b87333] shadow-lg shadow-[#1a3e4a]/50"
          style={{
            left: `${50 + Math.cos((i * 30 * Math.PI) / 180) * (radius + 50)}%`,
            top: `${50 + Math.sin((i * 30 * Math.PI) / 180) * (radius + 50)}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.25,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
