export function BackgroundEffects() {
  return (
    <>
      {/* Film grain texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Scanline effect */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 15, 0.4) 100%)',
        }}
      />
    </>
  );
}
