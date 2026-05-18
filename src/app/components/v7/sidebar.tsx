import {
  Layers,
  Mail,
  Shield,
  Workflow,
  FileText,
  BarChart3,
  Settings,
} from 'lucide-react';
import {
  primaryNavigationModules,
  systemNavigationModule,
} from '../../navigation';

const iconMap = {
  'project-hub': Layers,
  'pm-mail': Mail,
  'control-pem': Shield,
  docs: FileText,
  automation: Workflow,
  kpis: BarChart3,
  system: Settings,
} as const;

export function Sidebar() {
  const activeModuleId = 'project-hub';

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-[var(--pm-surface-primary)] border-r border-[var(--pm-border-default)] flex flex-col items-center py-8 z-50 shadow-sm">
      {/* Logo */}
      <div className="relative mb-12 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--pm-primary-blue)] shadow-lg">
        <div className="absolute inset-[1px] rounded-[11px] border border-white/10" />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[var(--pm-ai-magenta)]" />
        <span className="text-xl font-bold text-[var(--pm-text-inverse)]">PM</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-4">
        {primaryNavigationModules.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap];
          const isActive = item.id === activeModuleId;

          return (
          <a
            key={item.id}
            href={item.href}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-[var(--pm-soft-blue-bg)] text-[var(--pm-link)] shadow-sm'
                : 'text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] hover:bg-[var(--pm-surface-secondary)]'
            }`}
            title={item.label}
          >
            <Icon className="w-5 h-5" />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              {item.label}
            </div>
          </a>
        )})}
      </nav>

      {/* Settings */}
      <a
        href={systemNavigationModule.href}
        className="group relative flex items-center justify-center w-12 h-12 rounded-xl text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] transition-all duration-300 hover:bg-[var(--pm-surface-secondary)]"
        title={systemNavigationModule.label}
      >
        <Settings className="w-5 h-5" />
        <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          {systemNavigationModule.label}
        </div>
      </a>
    </div>
  );
}
