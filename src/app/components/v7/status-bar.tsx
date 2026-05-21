import { useState, useEffect } from 'react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-20 right-0 h-14 bg-[var(--pm-surface-overlay)] backdrop-blur-md border-b border-[var(--pm-border-default)] flex items-center justify-between px-8 z-40 shadow-sm">
      <div />

      <div className="flex items-center gap-4">
        <span className="text-sm text-[var(--pm-text-primary)] font-semibold">
          {time.toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <span className="text-sm text-[var(--pm-text-primary)] font-semibold tabular-nums">
          {time.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
