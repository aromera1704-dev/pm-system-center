import { motion } from 'motion/react';
import { Sidebar } from './components/v5/sidebar';
import { StatusBar } from './components/v5/status-bar';
import { CommandBar } from './components/v5/command-bar';
import { OrbitalCore } from './components/v5/orbital-core';
import { QuickActions } from './components/v5/quick-actions';
import { LiveMetrics } from './components/v5/live-metrics';
import { RecentActivity } from './components/v5/recent-activity';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-[#f0f4f8] to-[#f5f5f7] relative overflow-hidden">
      {/* Enhanced ambient gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1a3e4a] rounded-full blur-[200px]"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-[#b87333] rounded-full blur-[200px]"
        />
        <motion.div
          animate={{
            opacity: [0.015, 0.03, 0.015],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#059669]/30 to-[#1a3e4a]/30 rounded-full blur-[150px]"
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Status Bar */}
      <StatusBar />

      {/* Version indicator */}
      <div className="fixed bottom-4 right-4 px-3 py-2 rounded-xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-md border border-gray-200 text-xs text-gray-600 z-50 shadow-lg font-semibold">
        V5 — Industrial Light Premium
      </div>

      {/* Main content */}
      <div className="ml-20 min-h-screen flex pt-14">
        {/* Left section: Hero + Command + Quick Actions */}
        <div className="flex-1 px-12 py-8 flex flex-col">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Centro de Operaciones
            </h1>
            <p className="text-base text-gray-600 max-w-2xl leading-relaxed mb-6 font-medium">
              Gestión unificada de proyectos, sistemas y automatización industrial.
            </p>
            <LiveMetrics />
          </motion.div>

          {/* Command Bar */}
          <div className="mb-6">
            <CommandBar />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs uppercase tracking-wider text-gray-600 mb-4 font-bold"
            >
              Acciones Rápidas
            </motion.h2>
            <QuickActions />
          </div>

          {/* Recent Activity Section */}
          <div className="mt-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs uppercase tracking-wider text-gray-600 mb-4 font-bold"
            >
              Actividad y Estado
            </motion.h2>
            <RecentActivity />
          </div>
        </div>

        {/* Right section: Orbital Core - Premium container */}
        <div className="w-[520px] relative py-8 pr-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="sticky top-20 h-[600px]"
          >
            {/* Enhanced container with multiple layers */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Background gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white" />

              {/* Border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3e4a]/10 via-transparent to-[#b87333]/10 rounded-2xl" />

              {/* Main surface */}
              <div className="relative h-full bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-[#1a3e4a]/5 to-[#b87333]/5 border border-gray-200/50 shadow-sm mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-lg shadow-[#10b981]/50" />
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Módulos del Sistema</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-semibold">Estado en tiempo real</p>
                </motion.div>

                {/* Orbital Core */}
                <div className="flex-1 flex items-center justify-center">
                  <OrbitalCore />
                </div>

                {/* Stats footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-6 flex items-center justify-center gap-6 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-sm" />
                    <span className="text-gray-600 font-semibold">7 activos</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 shadow-sm" />
                    <span className="text-gray-600 font-semibold">1 idle</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
