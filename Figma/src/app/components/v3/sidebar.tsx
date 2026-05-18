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
    <div className="fixed left-0 top-0 h-screen w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 z-50 shadow-sm">
      {/* Logo */}
      <div className="mb-12 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3e4a] to-[#b87333] shadow-lg">
        <span className="text-xl font-bold text-white">PM</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
              item.active
                ? 'bg-[#1a3e4a]/10 text-[#1a3e4a] shadow-sm'
                : 'text-gray-500 hover:text-[#1a3e4a] hover:bg-gray-50'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 backdrop-blur-md rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
              {item.label}
            </div>
          </button>
        ))}
      </nav>

      {/* Settings */}
      <button className="flex items-center justify-center w-12 h-12 rounded-xl text-gray-500 hover:text-[#1a3e4a] transition-all duration-300 hover:bg-gray-50">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
}
