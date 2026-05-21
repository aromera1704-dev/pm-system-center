import {
  House,
  CheckSquare,
  CalendarDays,
  Layers,
  Mail,
  Shield,
  Settings,
  Wrench,
} from 'lucide-react';
import {
  primaryNavigationModules,
  systemNavigationModule,
  type NavigationModuleId,
} from '../../navigation';

const iconMap = {
  'my-tasks': CheckSquare,
  calendar: CalendarDays,
  'project-hub': Layers,
  'pm-mail': Mail,
  'control-pem': Shield,
  tools: Wrench,
  system: Settings,
} as const;

type SidebarProps = {
  activeModuleId?: NavigationModuleId;
  onModuleSelect: (moduleId: NavigationModuleId) => void;
  onHomeSelect: () => void;
};

export function Sidebar({
  activeModuleId,
  onModuleSelect,
  onHomeSelect,
}: SidebarProps) {

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-[var(--pm-surface-primary)] border-r border-[var(--pm-border-default)] flex flex-col items-center py-8 z-50 shadow-sm">
      {/* Logo */}
      <button
        type="button"
        onClick={onHomeSelect}
        className="relative mb-12 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--pm-primary-blue)] shadow-lg transition-transform duration-200 hover:scale-[1.02]"
        title="Centro de Operaciones"
      >
        <div className="absolute inset-[1px] rounded-[11px] border border-white/10" />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[var(--pm-ai-magenta)]" />
        <span className="text-xl font-bold text-[var(--pm-text-inverse)]">PM</span>
      </button>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-4">
        <button
          type="button"
          onClick={onHomeSelect}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
            activeModuleId === undefined
              ? 'bg-[var(--pm-soft-blue-bg)] text-[var(--pm-link)] shadow-sm'
              : 'text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] hover:bg-[var(--pm-surface-secondary)]'
          }`}
          title="Home"
          aria-label="Home"
          aria-pressed={activeModuleId === undefined}
        >
          <House className="w-5 h-5" />
          <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Home
          </div>
        </button>

        {primaryNavigationModules.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap];
          const isActive = item.id === activeModuleId;

          return (
          <button
            type="button"
            key={item.id}
            onClick={() => onModuleSelect(item.id)}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-[var(--pm-soft-blue-bg)] text-[var(--pm-link)] shadow-sm'
                : 'text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] hover:bg-[var(--pm-surface-secondary)]'
            }`}
            title={item.label}
            aria-label={item.label}
            aria-pressed={isActive}
          >
            <Icon className="w-5 h-5" />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              {item.label}
            </div>
          </button>
        )})}
      </nav>

      <button
        type="button"
        onClick={() => onModuleSelect(systemNavigationModule.id)}
        className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
          systemNavigationModule.id === activeModuleId
            ? 'bg-[var(--pm-soft-blue-bg)] text-[var(--pm-link)] shadow-sm'
            : 'text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] hover:bg-[var(--pm-surface-secondary)]'
        }`}
        title={systemNavigationModule.label}
        aria-label={systemNavigationModule.label}
        aria-pressed={systemNavigationModule.id === activeModuleId}
      >
        <Settings className="w-5 h-5" />
        <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          {systemNavigationModule.label}
        </div>
      </button>
    </div>
  );
}
