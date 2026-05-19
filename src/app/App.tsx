// Canon visual activo de PM SYSTEM.
// Este shell y los componentes importados desde ./components/v7/ son
// la referencia vigente del Centro de Operaciones.
import { useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './components/v7/sidebar';
import { StatusBar } from './components/v7/status-bar';
import { CommandBar } from './components/v7/command-bar';
import { OrbitalCore } from './components/v7/orbital-core';
import { QuickActions } from './components/v7/quick-actions';
import { LiveMetrics } from './components/v7/live-metrics';
import { RecentActivity } from './components/v7/recent-activity';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import {
  getNavigationModule,
  navigationModuleIds,
  type NavigationModuleId,
} from './navigation';

type AppSection = 'home' | NavigationModuleId;

const moduleViewConfig: Record<
  NavigationModuleId,
  {
    statusLabel: string;
    statusVariant: 'system' | 'secondary' | 'ai' | 'outline';
    summary: string;
    actions: Array<{
      label: string;
      variant: 'system' | 'secondary' | 'ghost' | 'ai';
    }>;
  }
> = {
  [navigationModuleIds.projectHub]: {
    statusLabel: 'Acceso externo preparado',
    statusVariant: 'outline',
    summary: 'Punto de entrada al seguimiento de proyectos, planificación y control documental industrial.',
    actions: [
      { label: 'Abrir contexto de proyecto', variant: 'system' },
      { label: 'Ver hitos activos', variant: 'secondary' },
      { label: 'Preparar enlace externo', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.pmMail]: {
    statusLabel: 'Integración pendiente',
    statusVariant: 'outline',
    summary: 'Vista prevista para comunicaciones operativas, seguimiento de hilos y priorización de bandeja.',
    actions: [
      { label: 'Abrir bandeja operativa', variant: 'system' },
      { label: 'Revisar pendientes', variant: 'secondary' },
      { label: 'Preparar conexión externa', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.controlPem]: {
    statusLabel: 'Operación conectable',
    statusVariant: 'system',
    summary: 'Superficie prevista para SAT, validaciones de campo, diarios y control operativo PEM.',
    actions: [
      { label: 'Revisar validaciones', variant: 'system' },
      { label: 'Abrir estado de obra', variant: 'secondary' },
      { label: 'Registrar incidencia', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.docs]: {
    statusLabel: 'Disponible',
    statusVariant: 'system',
    summary: 'Acceso documental técnico, versiones maestras y trazabilidad del ecosistema PM-System.',
    actions: [
      { label: 'Abrir documentación maestra', variant: 'system' },
      { label: 'Ver auditorías UI', variant: 'secondary' },
      { label: 'Buscar documento', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.automation]: {
    statusLabel: 'Asistencia activa',
    statusVariant: 'ai',
    summary: 'Área operativa para workflows, agentes, automatización asistida y coordinación de procesos.',
    actions: [
      { label: 'Ver automatizaciones', variant: 'ai' },
      { label: 'Revisar agentes', variant: 'secondary' },
      { label: 'Lanzar acción asistida', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.kpis]: {
    statusLabel: 'Disponible',
    statusVariant: 'system',
    summary: 'Panel contextual para métricas agregadas, salud del sistema y lectura ejecutiva del estado actual.',
    actions: [
      { label: 'Ver resumen ejecutivo', variant: 'system' },
      { label: 'Abrir métricas críticas', variant: 'secondary' },
      { label: 'Comparar tendencia', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.system]: {
    statusLabel: 'Shell operativo',
    statusVariant: 'outline',
    summary: 'Configuración del shell, estado de base visual y control estructural del Centro de Operaciones.',
    actions: [
      { label: 'Revisar shell activo', variant: 'system' },
      { label: 'Ver estado visual', variant: 'secondary' },
      { label: 'Abrir ajustes base', variant: 'ghost' },
    ],
  },
};

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const activeModule =
    activeSection === 'home' ? undefined : getNavigationModule(activeSection);
  const activeModuleView =
    activeSection === 'home' ? undefined : moduleViewConfig[activeSection];
  const isHome = activeSection === 'home';

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
      <Sidebar
        activeModuleId={isHome ? undefined : activeSection}
        onModuleSelect={setActiveSection}
        onHomeSelect={() => setActiveSection('home')}
      />

      {/* Status Bar */}
      <StatusBar />

      {/* Main content */}
      <div className="ml-20 min-h-screen flex pt-14">
        {/* Left section: Hero + Command + Quick Actions */}
        <div className="flex-1 px-16 py-12 flex flex-col">
          {isHome ? (
            <>
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
                <QuickActions onModuleSelect={setActiveSection} />
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
            </>
          ) : (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={activeModuleView?.statusVariant}>
                    {activeModuleView?.statusLabel}
                  </Badge>
                  <span className="text-sm text-[var(--pm-text-secondary)]">
                    {activeModule?.type === 'external'
                      ? 'Módulo externo aún no acoplado'
                      : 'Módulo interno del shell'}
                  </span>
                </div>
                <h1 className="text-6xl font-bold text-[var(--pm-text-primary)] mb-4 tracking-tight">
                  {activeModule?.label}
                </h1>
                <p className="max-w-3xl text-lg text-[var(--pm-text-secondary)] leading-8">
                  {activeModule?.description} {activeModuleView?.summary}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-primary)] p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                    Estado
                  </div>
                  <div className="text-xl font-semibold text-[var(--pm-text-primary)]">
                    {activeModuleView?.statusLabel}
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-primary)] p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                    Tipo
                  </div>
                  <div className="text-xl font-semibold text-[var(--pm-text-primary)]">
                    {activeModule?.type === 'external' ? 'Módulo desacoplado' : 'Módulo interno'}
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-primary)] p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                    Ruta provisional
                  </div>
                  <div className="text-xl font-semibold text-[var(--pm-text-primary)]">
                    {activeModule?.href}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-primary)] p-8 shadow-md">
                <div className="flex items-start justify-between gap-8 mb-8">
                  <div>
                    <h2 className="text-sm uppercase tracking-wider text-[var(--pm-text-secondary)] mb-3 font-semibold">
                      Acciones contextuales
                    </h2>
                    <p className="max-w-2xl text-[var(--pm-text-secondary)] leading-7">
                      Placeholder operativo mínimo para validar navegación modular sin introducir
                      routing ni integración externa real.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveSection('home')}
                  >
                    Volver al dashboard
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {activeModuleView?.actions.map((action) => (
                    <Button key={action.label} variant={action.variant}>
                      {action.label}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-5">
                    <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                      Siguiente paso
                    </div>
                    <p className="text-[var(--pm-text-primary)] leading-7">
                      Conectar este módulo a su app real cuando exista un contrato de navegación y estado compartido.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-5">
                    <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                      Límite actual
                    </div>
                    <p className="text-[var(--pm-text-primary)] leading-7">
                      Esta vista no hace fetch ni resuelve backend. Solo valida comportamiento modular del shell.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right section: Orbital Core - V3 proportions */}
        <div className="w-[600px] relative py-12 pr-16">
          <div className="sticky top-20 h-[600px]">
            {isHome ? (
              <>
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
                <OrbitalCore onModuleSelect={setActiveSection} />
              </>
            ) : (
              <motion.div
                key={`${activeSection}-context`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="h-full rounded-[32px] border border-[var(--pm-border-default)] bg-[var(--pm-surface-primary)] p-8 shadow-md flex flex-col"
              >
                <div className="mb-6">
                  <div className="text-sm font-semibold text-[var(--pm-text-primary)] uppercase tracking-wide mb-1">
                    Contexto del módulo
                  </div>
                  <p className="text-sm text-[var(--pm-text-secondary)] leading-7">
                    Vista mínima para validar que el shell ya responde como centro operativo modular y no como dashboard estático.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-6 mb-4">
                  <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                    Módulo activo
                  </div>
                  <div className="text-2xl font-semibold text-[var(--pm-text-primary)] mb-2">
                    {activeModule?.label}
                  </div>
                  <p className="text-[var(--pm-text-secondary)] leading-7">
                    {activeModule?.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-auto">
                  <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-5">
                    <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                      Estado de integración
                    </div>
                    <p className="text-[var(--pm-text-primary)] leading-7">
                      {activeModule?.type === 'external'
                        ? 'El shell ya reconoce el módulo, pero la app real sigue desacoplada.'
                        : 'El módulo puede evolucionar dentro del shell sin dependencia externa inmediata.'}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-5">
                    <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                      Acción de shell
                    </div>
                    <p className="text-[var(--pm-text-primary)] leading-7">
                      Esta sección sirve como placeholder funcional para navegación interna, no como implementación final del módulo.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
