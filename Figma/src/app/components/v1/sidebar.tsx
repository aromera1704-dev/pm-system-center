import { Layers, GitBranch, Cpu, Workflow, FileText, Activity, Settings } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Layers, label: 'Proyectos' },
    { icon: Cpu, label: 'Control PEM' },
    { icon: Workflow, label: 'Automatización' },
    { icon: GitBranch, label: 'Repositorios' },
    { icon: FileText, label: 'Documentos' },
    { icon: Activity, label: 'Métricas' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f14] to-[#0a0a0f] border-r border-white/5 flex flex-col items-center py-8 z-50">
      {/* Logo */}
      <div className="mb-12 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3e4a] to-[#b87333] shadow-lg shadow-[#1a3e4a]/20">
        <span className="text-xl font-bold text-white">PM</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="group relative flex items-center justify-center w-12 h-12 rounded-xl text-[#6b7280] hover:text-[#f8f8f2] transition-all duration-300 hover:bg-white/5"
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#1a3e4a]/90 backdrop-blur-md rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1a3e4a]/0 via-[#1a3e4a]/20 to-[#1a3e4a]/0 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
          </button>
        ))}
      </nav>

      {/* Settings */}
      <button className="flex items-center justify-center w-12 h-12 rounded-xl text-[#6b7280] hover:text-[#f8f8f2] transition-all duration-300 hover:bg-white/5">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
}
