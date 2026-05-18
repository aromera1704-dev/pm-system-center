import { Layers, Mail, Shield, Workflow, FileText, BarChart3, Settings } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Layers, label: 'Project Hub', active: true },
    { icon: Mail, label: 'PM Mail' },
    { icon: Shield, label: 'Control PEM' },
    { icon: FileText, label: 'Docs' },
    { icon: Workflow, label: 'Automatización' },
    { icon: BarChart3, label: 'KPIs' },
  ];

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
      <button
        className="group relative flex items-center justify-center w-12 h-12 rounded-xl text-[var(--pm-text-secondary)] hover:text-[var(--pm-link)] transition-all duration-300 hover:bg-[var(--pm-surface-secondary)]"
        title="Sistema"
      >
        <Settings className="w-5 h-5" />
        <div className="absolute left-full ml-3 px-3 py-1.5 bg-[var(--pm-surface-tooltip)] backdrop-blur-md rounded-lg text-sm text-[var(--pm-surface-tooltip-foreground)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Sistema
        </div>
      </button>
    </div>
  );
}
