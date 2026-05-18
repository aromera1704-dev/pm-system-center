import { motion } from 'motion/react';
import { Sidebar } from './components/v3/sidebar';
import { StatusBar } from './components/v3/status-bar';
import { CommandBar } from './components/v3/command-bar';
import { OrbitalCore } from './components/v3/orbital-core';
import { QuickActions } from './components/v3/quick-actions';
import { ActivityCards } from './components/v3/activity-cards';
import { LiveMetrics } from './components/v3/live-metrics';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Subtle ambient gradients */}
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
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1a3e4a] rounded-full blur-[150px]"
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
          className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#b87333] rounded-full blur-[150px]"
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Status Bar */}
      <StatusBar />

      {/* Version indicator */}
      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-gray-200 text-xs text-gray-500 z-50 shadow-sm font-medium">
        V3 — Industrial Light
      </div>

      {/* Main content */}
      <div className="ml-20 min-h-screen flex pt-14">
        {/* Left section: Hero + Command + Quick Actions */}
        <div className="flex-1 px-16 py-12 flex flex-col">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              Centro de Operaciones
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
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
              className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-semibold"
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
          <div className="sticky top-20 h-[600px]">
            <OrbitalCore />
          </div>
        </div>
      </div>
    </div>
  );
}
