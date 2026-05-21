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
import { MyTasksWorkspace } from './components/v7/my-tasks-workspace';
import { CalendarWorkspace } from './components/v7/calendar-workspace';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import {
  CONTROL_PEM_URL,
  PROJECT_HUB_URL,
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
    statusLabel: 'Disponible',
    statusVariant: 'system',
    summary: 'Acceso externo operativo al workspace especializado de proyectos con entrada directa al listado principal.',
    actions: [
      { label: 'Abrir contexto de proyecto', variant: 'system' },
      { label: 'Ver hitos activos', variant: 'secondary' },
      { label: 'Abrir listado de proyectos', variant: 'ghost' },
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
    statusLabel: 'Disponible',
    statusVariant: 'system',
    summary: 'Acceso operativo al módulo de campo para SAT, validaciones PEM, diarios de ejecución e incidencias.',
    actions: [
      { label: 'Revisar validaciones', variant: 'secondary' },
      { label: 'Abrir estado de obra', variant: 'secondary' },
      { label: 'Registrar incidencia', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.myTasks]: {
    statusLabel: 'Operativo local',
    statusVariant: 'system',
    summary: 'Vista funcional inicial para seguimiento personal, priorización y control de acciones con datos mock locales.',
    actions: [
      { label: 'Ver cola priorizada', variant: 'system' },
      { label: 'Revisar bloqueos', variant: 'secondary' },
      { label: 'Crear criterio de cierre', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.calendar]: {
    statusLabel: 'Operativo local',
    statusVariant: 'system',
    summary: 'Vista funcional inicial para agenda operativa y hitos con navegación temporal y datos mock locales.',
    actions: [
      { label: 'Ver agenda operativa', variant: 'system' },
      { label: 'Revisar hitos', variant: 'secondary' },
      { label: 'Contrastar cargas', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.tools]: {
    statusLabel: 'Disponible',
    statusVariant: 'system',
    summary: 'Sección interna que agrupa accesos secundarios a Docs, GitHub, n8n, IA / Agents, Automatizaciones y KPIs.',
    actions: [
      { label: 'Abrir Docs', variant: 'system' },
      { label: 'Ir a GitHub', variant: 'secondary' },
      { label: 'Revisar n8n', variant: 'ghost' },
    ],
  },
  [navigationModuleIds.system]: {
    statusLabel: 'Configuración local',
    statusVariant: 'outline',
    summary: 'Acceso interno para criterios del shell, estado visual y próximos puntos de ajuste del centro operativo.',
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
  const isTasksModule = activeSection === navigationModuleIds.myTasks;
  const isCalendarModule = activeSection === navigationModuleIds.calendar;
  const isFunctionalWorkspace = isTasksModule || isCalendarModule;
  const isExternalModuleActive =
    activeModule?.type === 'external' && activeModule?.status === 'available';
  const externalModuleCtaLabel =
    activeSection === navigationModuleIds.projectHub
      ? 'Abrir Project Hub'
      : activeSection === navigationModuleIds.controlPem
      ? 'Abrir Control PEM'
      : `Abrir ${activeModule?.label ?? 'módulo externo'}`;
  const externalModuleHref =
    activeSection === navigationModuleIds.projectHub
      ? PROJECT_HUB_URL
      : activeSection === navigationModuleIds.controlPem
      ? activeModule?.href ?? CONTROL_PEM_URL
      : activeModule?.href;
  const toolLinks =
    activeSection === navigationModuleIds.tools
      ? [
          {
            title: 'Docs',
            description: 'Documentación operativa y trazabilidad técnica del ecosistema PM System.',
          },
          {
            title: 'GitHub',
            description: 'Código, incidencias, PRs y seguimiento técnico del stack conectado.',
          },
          {
            title: 'n8n',
            description: 'Workflows operativos y automatizaciones orquestadas fuera del shell.',
          },
          {
            title: 'IA / Agents',
            description: 'Asistentes, agentes y flujos de apoyo para ejecución operativa.',
          },
          {
            title: 'Automatizaciones',
            description: 'Acciones recurrentes, triggers y soporte de procesos automatizados.',
          },
          {
            title: 'KPIs',
            description: 'Lectura ejecutiva de métricas y salud agregada del sistema.',
          },
        ]
      : [];
  const contextTitle = 'Contexto del módulo';
  const contextDescription =
    'Vista mínima para validar que el shell ya responde como centro operativo modular y no como dashboard estático.';
  const integrationDescription =
    activeModule?.type === 'external'
      ? activeModule?.status === 'available'
        ? 'El shell ya entrega acceso operativo al módulo real en nueva pestaña.'
        : 'El shell ya reconoce el módulo, pero la app real sigue desacoplada.'
      : 'El módulo puede evolucionar dentro del shell sin dependencia externa inmediata.';
  const shellActionDescription =
    'Esta sección sirve como placeholder funcional para navegación interna, no como implementación final del módulo.';

  return (
    <div className="min-h-screen bg-[var(--pm-bg-primary)] relative overflow-hidden">
      {/* Subtle ambient gradients - Premium Blue + AI Magenta */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.035, 0.06, 0.035],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[-80px] left-[18%] w-[560px] h-[560px] rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, color-mix(in srgb, var(--pm-primary-blue) 18%, white) 0%, color-mix(in srgb, var(--pm-primary-blue) 8%, transparent) 42%, transparent 72%)',
          }}
        />
        <motion.div
          animate={{
            opacity: [0.025, 0.05, 0.025],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-[-90px] right-[16%] w-[520px] h-[520px] rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, color-mix(in srgb, var(--pm-ai-magenta) 16%, white) 0%, color-mix(in srgb, var(--pm-ai-magenta) 7%, transparent) 40%, transparent 72%)',
          }}
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
      <div className={`ml-20 min-h-screen ${isFunctionalWorkspace ? 'pt-14' : 'flex pt-14'}`}>
        {isFunctionalWorkspace ? (
          <div className="px-16 py-12">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {isTasksModule ? <MyTasksWorkspace /> : <CalendarWorkspace />}
            </motion.div>
          </div>
        ) : (
          <>
        {/* Left section: Hero + Command + Quick Actions */}
        <div className="flex-1 px-16 py-12 flex flex-col">
          {isHome ? (
            <>
              {/* Hero Section - V3 proportions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 overflow-hidden rounded-[32px] border border-[color-mix(in_srgb,var(--pm-border-default)_78%,white)] bg-[color-mix(in_srgb,var(--pm-surface-primary)_90%,white)] px-10 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background:
                      'linear-gradient(135deg, color-mix(in srgb, var(--pm-primary-blue) 9%, white) 0%, transparent 34%, transparent 66%, color-mix(in srgb, var(--pm-ai-magenta) 8%, white) 100%)',
                  }}
                />
                <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: 'color-mix(in srgb, var(--pm-primary-blue) 10%, white)' }}
                />
                <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full blur-3xl"
                  style={{ background: 'color-mix(in srgb, var(--pm-ai-magenta) 10%, white)' }}
                />
                <div className="relative z-10">
                  <div className="mb-2 text-[1.75rem] font-semibold tracking-[-0.04em] text-[var(--pm-text-primary)]">
                    PM Center
                  </div>
                  <h1 className="text-[3.55rem] font-bold text-[var(--pm-text-primary)] tracking-[-0.05em] leading-none mb-3">
                    Centro de Operaciones
                  </h1>
                  <p className="max-w-2xl text-[15px] leading-7 text-[var(--pm-text-secondary)] mb-8">
                    Vista central para coordinar tareas, hitos, riesgos y accesos operativos del ecosistema PM.
                  </p>
                </div>
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
                      ? activeModule?.status === 'available'
                        ? 'Módulo externo disponible'
                        : 'Módulo externo aún no acoplado'
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
                    {activeModule?.type === 'external'
                      ? activeModule?.status === 'available'
                        ? 'Módulo externo disponible'
                        : 'Módulo desacoplado'
                      : 'Módulo interno'}
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
                  {isExternalModuleActive && externalModuleHref && (
                    <Button asChild variant="system">
                      <a
                        href={externalModuleHref}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {externalModuleCtaLabel}
                      </a>
                    </Button>
                  )}
                  {activeModuleView?.actions.map((action) => (
                    <Button key={action.label} variant={action.variant}>
                      {action.label}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {activeSection === navigationModuleIds.tools ? (
                    toolLinks.map((tool) => (
                      <div
                        key={tool.title}
                        className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-5"
                      >
                        <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                          {tool.title}
                        </div>
                        <p className="text-[var(--pm-text-primary)] leading-7">
                          {tool.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
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
                  className="mb-6 h-[34px]"
                >
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
                    {contextTitle}
                  </div>
                  <p className="text-sm text-[var(--pm-text-secondary)] leading-7">
                    {contextDescription}
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
                      {integrationDescription}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--pm-border-default)] bg-[var(--pm-surface-secondary)] p-5">
                    <div className="text-xs uppercase tracking-wider text-[var(--pm-text-tertiary)] mb-2 font-semibold">
                      Acción de shell
                    </div>
                    <p className="text-[var(--pm-text-primary)] leading-7">
                      {shellActionDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}
