import { useState, useEffect } from 'react';
import { Circle, Wifi, AlertCircle } from 'lucide-react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-20 right-0 h-14 bg-white/95 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 z-40 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-[#10b981] text-[#10b981] animate-pulse" />
          <span className="text-xs text-gray-600 font-medium">Sistema Operativo</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-3.5 h-3.5 text-[#10b981]" />
          <span className="text-xs text-gray-600">Conexión Segura</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-xs text-amber-700 font-medium">2 SAT activos</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-xs text-gray-500">
          {time.toLocaleDateString('es-ES', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })}
        </span>
        <span className="text-sm text-gray-900 font-semibold tabular-nums">
          {time.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
