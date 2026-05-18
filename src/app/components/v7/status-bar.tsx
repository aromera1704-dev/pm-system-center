import { useState, useEffect } from 'react';
import { Circle, Wifi, AlertCircle } from 'lucide-react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-20 right-0 h-14 bg-[var(--pm-surface-overlay)] backdrop-blur-md border-b border-[var(--pm-border-default)] flex items-center justify-between px-8 z-40 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-[var(--pm-success)] text-[var(--pm-success)] animate-pulse" />
          <span className="text-xs text-[var(--pm-text-secondary)] font-medium">Sistema Operativo</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-3.5 h-3.5 text-[var(--pm-success)]" />
          <span className="text-xs text-[var(--pm-text-secondary)]">Conexión Segura</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--pm-status-warning-bg)] border border-[var(--pm-warning)]/20">
          <AlertCircle className="w-3.5 h-3.5 text-[var(--pm-warning)]" />
          <span className="text-xs text-[var(--pm-warning)] font-medium">2 SAT activos</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-xs text-[var(--pm-text-secondary)]">
          {time.toLocaleDateString('es-ES', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })}
        </span>
        <span className="text-sm text-[var(--pm-text-primary)] font-semibold tabular-nums">
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
