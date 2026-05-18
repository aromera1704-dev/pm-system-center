import { useState, useEffect } from 'react';
import { Circle, Wifi, AlertCircle } from 'lucide-react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-20 right-0 h-14 bg-gradient-to-b from-white via-white to-white/95 backdrop-blur-xl border-b border-gray-200 flex items-center justify-between px-8 z-40 shadow-md">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-[#10b981] text-[#10b981] animate-pulse drop-shadow-sm" />
          <span className="text-xs text-gray-700 font-semibold">Sistema Operativo</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-3.5 h-3.5 text-[#10b981] drop-shadow-sm" />
          <span className="text-xs text-gray-600 font-medium">Conexión Segura</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 shadow-md">
          <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
          <span className="text-xs text-amber-800 font-semibold">2 SAT activos</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-xs text-gray-500 font-medium">
          {time.toLocaleDateString('es-ES', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })}
        </span>
        <span className="text-sm text-gray-900 font-bold tabular-nums">
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
