import { motion } from 'motion/react';
import { Sidebar } from './components/v1/sidebar';
import { StatusBar } from './components/v1/status-bar';
import { CommandBar } from './components/v1/command-bar';
import { OrbitalCore } from './components/v1/orbital-core';
import { QuickActions } from './components/v1/quick-actions';
import { ActivityCards } from './components/v1/activity-cards';
import { BackgroundEffects } from './components/v1/background-effects';

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1a3e4a] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#b87333] rounded-full blur-[150px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#1a3e4a]/5 via-transparent to-[#b87333]/5 rounded-full blur-3xl" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Status Bar */}
      <StatusBar />

      {/* Version indicator */}
      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#0f0f14]/90 backdrop-blur-md border border-white/10 text-xs text-[#6b7280] z-50">
        V1 — Cinematic Dark
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
            className="mb-12"
          >
            <h1 className="text-7xl font-medium text-[#f8f8f2] mb-4 tracking-tight">
              Centro de Operaciones
            </h1>
            <p className="text-xl text-[#6b7280] max-w-2xl leading-relaxed">
              Un único lugar para gobernar proyectos, sistemas y automatización.
            </p>
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
              className="text-sm uppercase tracking-wider text-[#6b7280] mb-6"
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