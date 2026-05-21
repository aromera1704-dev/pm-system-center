import { motion } from 'motion/react';
import { CheckSquare, CalendarDays, Mail, Layers, Shield, Wrench } from 'lucide-react';
import {
  getNavigationModule,
  type NavigationModuleId,
  navigationModuleIds,
} from '../../navigation';

const modules = [
  { moduleId: navigationModuleIds.myTasks, icon: CheckSquare, angle: 235, color: 'var(--pm-primary-blue)', bg: 'color-mix(in srgb, var(--pm-primary-blue) 88%, white)', glow: 'rgba(32, 92, 255, 0.18)', status: 'active', labelPosition: 'top-full mt-3 left-1/2 -translate-x-1/2 text-center' },
  { moduleId: navigationModuleIds.pmMail, icon: Mail, angle: 305, color: 'color-mix(in srgb, var(--pm-text-secondary) 82%, white)', bg: 'color-mix(in srgb, #5c6470 82%, white)', glow: 'rgba(92, 100, 112, 0.14)', status: 'idle', labelPosition: 'left-full ml-3 top-1/2 -translate-y-1/2 text-left' },
  { moduleId: navigationModuleIds.projectHub, icon: Layers, angle: 180, color: '#1aa7d7', bg: 'color-mix(in srgb, #1aa7d7 84%, white)', glow: 'rgba(26, 167, 215, 0.18)', status: 'active', labelPosition: 'right-full mr-3 top-1/2 -translate-y-1/2 text-right' },
  { moduleId: navigationModuleIds.controlPem, icon: Shield, angle: 0, color: '#1f4fbf', bg: 'color-mix(in srgb, #1f4fbf 86%, white)', glow: 'rgba(31, 79, 191, 0.18)', status: 'active', labelPosition: 'left-full ml-3 top-1/2 -translate-y-1/2 text-left' },
  { moduleId: navigationModuleIds.calendar, icon: CalendarDays, angle: 125, color: '#63b3ff', bg: 'color-mix(in srgb, #63b3ff 82%, white)', glow: 'rgba(99, 179, 255, 0.18)', status: 'active', labelPosition: 'top-full mt-3 left-1/2 -translate-x-1/2 text-center' },
  { moduleId: navigationModuleIds.tools, icon: Wrench, angle: 55, color: 'var(--pm-ai-magenta)', bg: 'color-mix(in srgb, var(--pm-ai-magenta) 84%, white)', glow: 'rgba(214, 91, 170, 0.18)', status: 'active', labelPosition: 'top-full mt-3 left-1/2 -translate-x-1/2 text-center' },
];

type OrbitalCoreProps = {
  onModuleSelect?: (moduleId: NavigationModuleId) => void;
};

export function OrbitalCore({ onModuleSelect }: OrbitalCoreProps) {
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
            scale: [1, 1.05, 1],
            opacity: [0.04, 0.075, 0.04],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background:
              'radial-gradient(circle, color-mix(in srgb, var(--pm-primary-blue) 14%, white) 0%, color-mix(in srgb, var(--pm-ai-magenta) 8%, white) 44%, transparent 72%)',
          }}
        />

        {/* Core circle */}
        <div
          className="relative w-28 h-28 rounded-full shadow-[0_20px_48px_rgba(59,130,246,0.14)] flex items-center justify-center"
          style={{
            background:
              'linear-gradient(145deg, color-mix(in srgb, var(--pm-primary-blue) 12%, white) 0%, color-mix(in srgb, var(--pm-ai-magenta) 10%, white) 100%)',
          }}
        >
          <div className="absolute inset-[2px] rounded-full border border-white/40" />
          <div className="relative w-24 h-24 rounded-full bg-[var(--pm-surface-primary)] border border-[var(--pm-border-default)] flex items-center justify-center shadow-lg">
            <div className="absolute inset-[6px] rounded-full border border-[var(--pm-border-ai)]" />
            <div className="text-center">
              <div className="text-[20px] leading-none font-bold text-[var(--pm-text-primary)]">PM</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--pm-text-secondary)]">Center</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbital Modules */}
      {modules.map((module, index) => {
        const navigationModule = module.moduleId
          ? getNavigationModule(module.moduleId)
          : undefined;
        const moduleLabel = navigationModule?.label ?? 'Módulo';
        const x = Math.cos((module.angle * Math.PI) / 180) * radius;
        const y = Math.sin((module.angle * Math.PI) / 180) * radius;
        const labelPosition = module.labelPosition ??
          (module.angle >= 315 || module.angle < 45
            ? 'left-full ml-3 top-1/2 -translate-y-1/2 text-left'
            : module.angle >= 45 && module.angle < 135
            ? 'bottom-full mb-2.5 left-1/2 -translate-x-1/2 text-center'
            : module.angle >= 135 && module.angle < 225
            ? 'right-full mr-3 top-1/2 -translate-y-1/2 text-right'
            : 'top-full mt-2.5 left-1/2 -translate-x-1/2 text-center');

        return (
          <motion.div
            key={module.moduleId ?? moduleLabel}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            className="absolute"
            title={navigationModule?.description ?? moduleLabel}
            data-module-id={module.moduleId}
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
                animate={{ pathLength: 1, opacity: 0.22 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                x1={radius}
                y1={radius}
                x2={radius - x}
                y2={radius - y}
                stroke={module.status === 'active' ? module.color : 'var(--pm-border-strong)'}
                strokeWidth="2"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Module node */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              className={`relative group ${module.moduleId ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => {
                if (module.moduleId && onModuleSelect) {
                  onModuleSelect(module.moduleId);
                }
              }}
            >
              {/* Node */}
              <div
                className="relative w-16 h-16 rounded-xl flex items-center justify-center hover:shadow-[0_18px_36px_rgba(15,23,42,0.16)] transition-all duration-300 border overflow-hidden"
                style={{
                  background: module.bg,
                  boxShadow: `0 14px 30px ${module.glow}`,
                  borderColor: module.status === 'active' ? 'rgba(255, 255, 255, 0.55)' : 'var(--pm-border-default)',
                }}
              >
                <div className="absolute inset-0 opacity-50 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_58%)]" />
                <div className="absolute -left-1 top-1 h-5 w-5 rounded-full bg-white/18 blur-md" />
                <module.icon
                  className="relative z-10 w-6 h-6"
                  style={{ color: 'var(--pm-text-inverse)' }}
                />
                {module.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--pm-success)] border-2 border-[var(--pm-surface-primary)] animate-pulse shadow-sm" />
                )}
              </div>

              {/* Label */}
              <div
                className={`absolute ${labelPosition} text-xs whitespace-nowrap transition-opacity duration-300 opacity-85 group-hover:opacity-100 pointer-events-none`}
                style={{
                  color: module.status === 'active' ? 'var(--pm-text-secondary)' : 'var(--pm-text-tertiary)',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                }}
              >
                <span className="font-medium">{moduleLabel}</span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
