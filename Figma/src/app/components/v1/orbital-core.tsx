import { motion } from 'motion/react';
import { Layers, Shield, Workflow, GitBranch, FileText, Bot, BarChart3, Zap } from 'lucide-react';

const modules = [
  { name: 'Project_Hub', icon: Layers, angle: 0, color: '#1a3e4a' },
  { name: 'Control_PEM', icon: Shield, angle: 45, color: '#b87333' },
  { name: 'Automatizaciones', icon: Workflow, angle: 90, color: '#d4a574' },
  { name: 'n8n', icon: Zap, angle: 135, color: '#1a3e4a' },
  { name: 'Docs', icon: FileText, angle: 180, color: '#b87333' },
  { name: 'GitHub', icon: GitBranch, angle: 225, color: '#d4a574' },
  { name: 'IA Agents', icon: Bot, angle: 270, color: '#1a3e4a' },
  { name: 'KPIs', icon: BarChart3, angle: 315, color: '#b87333' },
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
        {/* Pulsing glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a3e4a] to-[#b87333] blur-3xl"
        />

        {/* Core circle */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1a3e4a] via-[#b87333] to-[#d4a574] shadow-2xl shadow-[#1a3e4a]/50 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#0a0a0f] border border-white/20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a3e4a] to-[#b87333] opacity-50 blur-sm"
            />
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
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                x1={radius}
                y1={radius}
                x2={radius - x}
                y2={radius - y}
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a3e4a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#b87333" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Module node */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: module.color }}
              />

              {/* Node */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#0f0f14] to-[#1a1a24] border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <module.icon className="w-6 h-6 text-[#d4a574]" />
              </div>

              {/* Label */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0f0f14]/90 backdrop-blur-md rounded-md text-xs text-[#6b7280] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {module.name}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Ambient particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#d4a574]"
          style={{
            left: `${50 + Math.cos((i * 30 * Math.PI) / 180) * (radius + 40)}%`,
            top: `${50 + Math.sin((i * 30 * Math.PI) / 180) * (radius + 40)}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
