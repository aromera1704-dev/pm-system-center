# PM-System Centro de Operaciones — Versiones

## Estado actual

`V7` es la única base visual activa del Centro de Operaciones `PM-System`.

Referencia activa:

- `src/app/App.tsx`
- `src/app/components/v7/`

Las variantes `V1` a `V6` se conservan únicamente como histórico y referencia evolutiva. No deben usarse como baseline para implementación nueva.

---

## V1 — Cinematic Dark
**Archivo:** `src/app/App-v1-cinematic-dark.tsx`
**Componentes:** `src/app/components/v1/`

### Características
- Fondo negro puro (#0a0a0f)
- Estética cinematográfica extrema
- Glow ambiental intenso
- Film grain y efectos visuales marcados
- Sensación de demo conceptual / landing futurista
- Referencias: Apple Vision Pro UI, dashboards cinematográficos

### Ideal para
- Presentaciones
- Demos conceptuales
- Primeras impresiones
- Marketing visual

---

## V2 — Industrial Warm Dark
**Archivo:** `src/app/App-v2-industrial-warm-dark.tsx`
**Componentes:** `src/app/components/`

### Características
- Fondo grafito-petróleo (#0f1419)
- Mayor legibilidad y contraste
- Glassmorphism refinado en tarjetas
- Bordes más definidos (#1a3e4a/30-60)
- Glow reducido (-25% vs V1)
- Indicadores operativos vivos:
  - Estados activos/idle en módulos orbitales
  - Contadores en quick actions
  - Timestamps en activity cards
  - Badge de "2 SAT activos" en status bar
- Efectos ambientales más sutiles
- Sensación de software operativo real

### Cambios principales vs V1
1. **Fondo:** #0a0a0f → #0f1419 (más cálido y operativo)
2. **Texto:** #f8f8f2 → #e5e7eb (mejor legibilidad)
3. **Texto secundario:** #6b7280 → #9ca3af (más contraste)
4. **Tarjetas:** bg-[#0d1419]/80 con borders más visibles
5. **Glow:** opacidad reducida 20-30%
6. **Orbital Core:** indicadores de estado activo/idle
7. **Activity Cards:** timestamps y estados en tiempo real
8. **Status Bar:** badge operativo de SAT activos

### Referencias
- Linear
- Raycast
- Arc Browser dark mode
- Stripe dashboard
- Notion AI

### Ideal para
- Uso operativo nocturno
- Trabajo en entornos oscuros
- Presentaciones en dark mode
- Usuarios que prefieren dark themes

---

## V4 — Industrial Light Refined (HISTÓRICO)
**Archivo:** `src/app/App-v4-industrial-light-refined.tsx`
**Componentes:** `src/app/components/v4/`

### Características
- Fondo marfil técnico (#f5f5f7 → #f0f4f8 degradado)
- Título más compacto (5xl en vez de 7xl)
- Sidebar y status bar con backdrop-blur-xl
- Orbital Core contenido en tarjeta translúcida
- Sección inferior funcional: Proyectos Recientes, Próximos Hitos, Incidencias Activas
- Más sombras sutiles en todas las tarjetas
- Mejor equilibrio visual izquierda/derecha
- Layout optimizado: todo visible sin scroll excesivo
- Barras de progreso en proyectos recientes
- Prioridades visuales en hitos
- Estados de severidad en incidencias

### Mejoras vs V3
1. **Título:** text-7xl → text-5xl (menos landing page)
2. **Fondo:** Marfil técnico más profesional
3. **Orbital Core:** Contenido en tarjeta con backdrop-blur
4. **Zona inferior:** Nueva sección con 3 columnas operativas
5. **Espaciado:** Más compacto y funcional (px-12 py-8)
6. **Sombras:** Incrementadas sutilmente en todas las tarjetas
7. **Profundidad:** Más capas visuales con glassmorphism

### Referencias
- Software SaaS operativo real
- Linear (compactness)
- Notion (sección de actividad)
- Outlook (funcionalidad diaria)
- Apple (glassmorphism sutil)

### Ideal para
- Uso operativo diario intensivo
- Project managers profesionales
- Centros de control 24/7
- Software industrial de gestión
- Trabajo prolongado con luz natural

---

## V3 — Industrial Light (Original)
**Archivo:** `src/app/App-v3-industrial-light-original.tsx`
**Componentes:** `src/app/components/v3/`

### Características
- Fondo claro degradado (gray-50 → blue-50/30)
- Tarjetas blancas con bordes y sombras suaves
- Excelente legibilidad para trabajo prolongado
- Contraste optimizado para confort visual
- Acentos: petróleo (#1a3e4a), cobre (#b87333), verde (#059669)
- Glassmorphism muy sutil
- Glow ambiental minimal (opacidad 2-5%)
- Tipografía bold para jerarquía clara

### Cambios principales vs V2
1. **Fondo:** #0f1419 → gradient gray-50/blue-50
2. **Tarjetas:** bg-[#0d1419] → bg-white con border-gray-200
3. **Texto primario:** #e5e7eb → #1a1a1a (gray-900)
4. **Texto secundario:** #9ca3af → #6b7280 (gray-600)
5. **Bordes:** Definidos y visibles (gray-200)
6. **Sombras:** Presentes en todas las tarjetas (shadow-sm/lg)
7. **Estados activos:** Verde brillante #10b981
8. **Contraste:** Optimizado para luz ambiente

### Referencias
- Linear
- Notion empresarial
- Outlook moderno
- Apple design language
- SaaS B2B premium
- Dashboards industriales limpios

### Ideal para
- Trabajo diurno prolongado
- Oficinas con luz natural
- Uso operativo diario
- Centros de control 24/7
- Software industrial premium
- Project management activo

---

## Base activa y variantes históricas

### Base activa actual

- `src/app/App.tsx`
- `src/app/components/v7/`

### Variantes históricas

Las variantes antiguas se mantienen solo para consulta visual e histórica. No forman parte del flujo normal de trabajo ni deben reactivarse como baseline.

---

## Paleta de Colores

### V2 Industrial Warm Dark
- **Fondo principal:** `#0f1419` (grafito-petróleo)
- **Fondo secundario:** `#0d1419` (grafito oscuro)
- **Petróleo:** `#1a3e4a` (acentos, bordes)
- **Cobre:** `#b87333` (gradientes, highlights)
- **Ámbar:** `#d4a574` (iconos, estados)
- **Texto primario:** `#e5e7eb` (warm white)
- **Texto secundario:** `#9ca3af` (gray)
- **Texto terciario:** `#6b7280` (smoke)
- **Estado activo:** `#4ade80` (green)

### V3 Industrial Light
- **Fondo principal:** `gradient gray-50 → blue-50/30` (degradado sutil)
- **Fondo tarjetas:** `#ffffff` (blanco puro)
- **Petróleo:** `#1a3e4a` (acentos principales)
- **Cobre:** `#b87333` (gradientes, highlights)
- **Verde técnico:** `#059669` (automatizaciones, activos)
- **Ámbar:** `#d4a574` (estados, warnings)
- **Texto primario:** `#1a1a1a` (gray-900)
- **Texto secundario:** `#6b7280` (gray-600)
- **Texto terciario:** `#9ca3af` (gray-400)
- **Bordes:** `#e5e7eb` (gray-200)
- **Estado activo:** `#10b981` (emerald-500)

### Glows
**V2 (reducidos):**
- Petróleo: `rgba(26, 62, 74, 0.2)`
- Cobre: `rgba(184, 115, 51, 0.15)`
- Ámbar: `rgba(212, 165, 116, 0.1)`

**V3 (minimal):**
- Petróleo: `rgba(26, 62, 74, 0.03-0.05)`
- Cobre: `rgba(184, 115, 51, 0.02-0.04)`
