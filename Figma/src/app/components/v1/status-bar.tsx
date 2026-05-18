import { useState, useEffect } from 'react';
import { Circle, Wifi } from 'lucide-react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-20 right-0 h-12 bg-gradient-to-b from-[#0a0a0f]/80 to-transparent backdrop-blur-sm border-b border-white/5 flex items-center justify-between px-8 z-40">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-[#4ade80] text-[#4ade80] animate-pulse" />
          <span className="text-xs text-[#6b7280]">Sistema Operativo</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-3 h-3 text-[#6b7280]" />
          <span className="text-xs text-[#6b7280]">Conexión Segura</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-xs text-[#6b7280]">
          {time.toLocaleDateString('es-ES', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })}
        </span>
        <span className="text-xs text-[#f8f8f2] font-medium tabular-nums">
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
