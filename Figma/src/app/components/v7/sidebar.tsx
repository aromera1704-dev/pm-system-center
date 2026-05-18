import { Layers, GitBranch, Cpu, Workflow, FileText, Activity, Settings } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Layers, label: 'Proyectos', active: true },
    { icon: Cpu, label: 'Control PEM' },
    { icon: Workflow, label: 'Automatización' },
    { icon: GitBranch, label: 'Repositorios' },
    { icon: FileText, label: 'Documentos' },
    { icon: Activity, label: 'Métricas' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-[var(--pm-surface-primary)] border-r border-[var(--pm-border-default)] flex flex-col items-center py-8 z-50 shadow-sm">
      {/* Logo */}
      <div className="mb-12 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pm-primary-blue)] to-[var(--pm-ai-magenta)] shadow-lg">
        <span className="text-xl font-bold text-[var(--pm-text-inverse)]">PM</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
              item.active
                ? 'bg-[var(--pm-soft-blue-bg)] text-[var(--pm-link)] shadow-sm'
                : 'text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] hover:bg-[var(--pm-surface-secondary)]'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              {item.label}
            </div>
          </button>
        ))}
      </nav>

      {/* Settings */}
      <button className="flex items-center justify-center w-12 h-12 rounded-xl text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] transition-all duration-300 hover:bg-[var(--pm-surface-secondary)]">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
}
