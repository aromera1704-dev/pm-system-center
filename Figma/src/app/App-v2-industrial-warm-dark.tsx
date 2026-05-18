import { motion } from 'motion/react';
import { Sidebar } from './components/sidebar';
import { StatusBar } from './components/status-bar';
import { CommandBar } from './components/command-bar';
import { OrbitalCore } from './components/orbital-core';
import { QuickActions } from './components/quick-actions';
import { ActivityCards } from './components/activity-cards';
import { BackgroundEffects } from './components/background-effects';
import { LiveMetrics } from './components/live-metrics';

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0f1419] relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      {/* Refined ambient background gradients - reduced intensity */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.06, 0.09, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1a3e4a] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#b87333] rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#1a3e4a]/3 via-transparent to-[#b87333]/3 rounded-full blur-2xl" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Status Bar */}
      <StatusBar />

      {/* Version indicator */}
      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#0d1419]/90 backdrop-blur-md border border-[#1a3e4a]/40 text-xs text-[#6b7280] z-50">
        V2 — Industrial Warm Dark
      </div>

      {/* Main content */}
      <div className="ml-20 min-h-screen flex pt-12">
        {/* Left section: Hero + Command + Quick Actions */}
        <div className="flex-1 px-16 py-12 flex flex-col">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-7xl font-medium text-[#e5e7eb] mb-4 tracking-tight">
              Centro de Operaciones
            </h1>
            <p className="text-xl text-[#9ca3af] max-w-2xl leading-relaxed mb-8">
              Un único lugar para gobernar proyectos, sistemas y automatización.
            </p>
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
              className="text-sm uppercase tracking-wider text-[#9ca3af] mb-6"
            >
              Acciones Rápidas
            </motion.h2>
            <QuickActions />
          </div>

          {/* Activity Cards */}
          <div className="mt-auto">
            <ActivityCards />
          </div>
        </div>

        {/* Right section: Orbital Core */}
        <div className="w-[600px] relative py-12 pr-16">
          <div className="sticky top-12 h-[600px]">
            <OrbitalCore />
          </div>
        </div>
      </div>
    </div>
  );
}