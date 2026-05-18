// Canon visual activo de PM SYSTEM.
// Este shell y los componentes importados desde ./components/v7/ son
// la referencia vigente del Centro de Operaciones.
import { motion } from 'motion/react';
import { Sidebar } from './components/v7/sidebar';
import { StatusBar } from './components/v7/status-bar';
import { CommandBar } from './components/v7/command-bar';
import { OrbitalCore } from './components/v7/orbital-core';
import { QuickActions } from './components/v7/quick-actions';
import { LiveMetrics } from './components/v7/live-metrics';
import { RecentActivity } from './components/v7/recent-activity';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--pm-bg-primary)] relative overflow-hidden">
      {/* Subtle ambient gradients - Premium Blue + AI Magenta */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--pm-primary-blue)] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[var(--pm-ai-magenta)] rounded-full blur-[150px]"
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Status Bar */}
      <StatusBar />

      {/* Main content */}
      <div className="ml-20 min-h-screen flex pt-14">
        {/* Left section: Hero + Command + Quick Actions */}
        <div className="flex-1 px-16 py-12 flex flex-col">
          {/* Hero Section - V3 proportions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-7xl font-bold text-[var(--pm-text-primary)] mb-4 tracking-tight">
              Centro de Operaciones
            </h1>
            <LiveMetrics />
          </motion.div>

          {/* Command Bar */}
          <div className="mb-12">
            <CommandBar />
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm uppercase tracking-wider text-[var(--pm-text-secondary)] mb-6 font-semibold"
            >
              Acciones Rápidas
            </motion.h2>
            <QuickActions />
          </div>

          {/* Recent Activity - New section */}
          <div className="mt-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm uppercase tracking-wider text-[var(--pm-text-secondary)] mb-4 font-semibold"
            >
              Actividad y Estado
            </motion.h2>
            <RecentActivity />
          </div>
        </div>

        {/* Right section: Orbital Core - V3 proportions */}
        <div className="w-[600px] relative py-12 pr-16">
          <div className="sticky top-20 h-[600px]">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-6"
            >
              <h3 className="text-sm font-semibold text-[var(--pm-text-primary)] uppercase tracking-wide mb-1">Módulos del Sistema</h3>
              <p className="text-xs text-[var(--pm-text-secondary)]">Estado en tiempo real</p>
            </motion.div>

            {/* Orbital Core */}
            <OrbitalCore />
          </div>
        </div>
      </div>
    </div>
  );
}
