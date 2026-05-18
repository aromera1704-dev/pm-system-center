# PM-System — Centro de Operaciones

Un centro de operaciones industrial premium para gestionar proyectos, sistemas y automatización.

## 🎨 Estado Visual Actual

### 🎯 V7 — Premium Blue + AI Magenta (CANON ACTIVO)
**Base activa del Centro de Operaciones PM-System**

V7 es la referencia visual vigente para `PM-System`. Cualquier trabajo nuevo sobre el Centro de Operaciones debe tomar como base `App.tsx` y `src/app/components/v7/`.

**Características:**
- ✅ Layout y proporciones de V3/V6 (text-7xl, w-[600px] orbital)
- ✅ PM Core centrado y bien proporcionado (V3 style)
- ✅ Sombras moderadas (shadow-md, shadow-lg max)
- ✅ Paleta Premium: Blue (#2563EB) + AI Magenta (#FC10A3) + Warm Accent (#D4A574)
- ✅ Blue para sistema, Magenta para IA/automatización
- ✅ Recent Activity añadido (3 columnas operativas)
- ✅ Estilo de tarjetas consistente
- ✅ Background limpio (#F9FAFB)
- ✅ Identidad visual unificada con PM Mail a nivel cromático

**Ideal para:** Dashboard industrial profesional con identidad PM Mail, ecosistema unificado

---

## 📦 Estado de variantes

- `V7` es el único canon activo para implementación nueva en `PM-System`.
- `V1` a `V6` se conservan solo como histórico y referencia evolutiva.
- Las variantes históricas no deben usarse como baseline de nuevas decisiones visuales.
- Cambiar `App.tsx` a una variante antigua no forma parte del flujo normal de trabajo.

### ✨ V6 — Industrial Premium
**Base:** Version 3 + mejoras controladas

V6 usa V3 como fundamento visual y añade solo mejoras específicas.

**Características:**
- Layout V3 (text-7xl, w-[600px] orbital)
- 3 colores principales: Deep Teal, Warm Copper, Neutral Grey
- Recent Activity añadido
- Sombras moderadas

**Ideal para:** Dashboard industrial profesional, colores Teal/Copper

---

### ✨ V5 — Industrial Light Premium
Versión con más efectos visuales y gradientes.

**Características:**
- Gradientes ricos
- Sombras premium (shadow-2xl)
- Más efectos visuales

**Ideal para:** Presentaciones premium (puede ser excesiva para uso diario)

---

### ☀️ V3 — Industrial Light (Original)
Versión light inicial — más landing page.

**Características:**
- Título grande (7xl) hero style
- Fondo claro degradado (gray-50 → blue-50)
- Orbital Core flotante
- Menos denso, más espacioso

**Ideal para:** Primeras impresiones, demos de producto

---

### 🌙 V2 — Industrial Warm Dark
Versión dark operativa optimizada para uso nocturno.

**Características:**
- Fondo grafito-petróleo cálido
- Mayor legibilidad vs V1
- Tarjetas con glassmorphism refinado
- Indicadores operativos en tiempo real
- Glow reducido para uso prolongado

**Ideal para:** Trabajo nocturno, entornos oscuros, preferencia dark mode

---

### 🎬 V1 — Cinematic Dark
Versión conceptual con estética cinematográfica extrema.

**Características:**
- Fondo negro puro
- Efectos visuales intensos
- Glow ambiental marcado
- Diseño de presentación

**Ideal para:** Demos, presentaciones, marketing visual

---

## 🚀 Componentes Principales

### Layout
- **Sidebar** (20px): Navegación vertical con iconos elegantes
- **Status Bar**: Estado del sistema, conexión, SAT activos, hora
- **Hero Section**: Título editorial + Live Metrics
- **Command Bar**: Barra de comando tipo AI (⌘K)
- **Quick Actions**: 6 acciones rápidas con contadores
- **Orbital Core**: Núcleo visual con 8 módulos conectados
- **Activity Cards**: 4 proyectos con estados en tiempo real

### Orbital Core Modules
1. Project_Hub
2. Control_PEM  
3. Automatizaciones
4. n8n
5. Docs
6. GitHub
7. IA Agents
8. KPIs

---

## 🎨 Paleta de Colores

### V7 — Premium Blue + AI Magenta (Activa)
```css
/* PRIMARY SYSTEM */
--primary-blue: #2563EB       /* Sistema principal */
--hover-blue: #1D4ED8         /* Hover states */
--soft-blue-bg: #EFF6FF       /* Background highlights */

/* AI / SMART LAYER */
--ai-magenta: #FC10A3         /* IA, automatización */
--hover-pink: #E6008D         /* Hover AI elements */
--soft-ai-bg: #FCE7F3         /* AI background highlights */

/* NEUTRALS */
--background: #F9FAFB         /* Fondo principal */
--surface: #FFFFFF            /* Tarjetas, paneles */
--border: #E5E7EB             /* gray-200 */
--text-primary: #111827       /* gray-900 */
--text-secondary: #6B7280     /* gray-600 */

/* ACCENT */
--warm-accent: #D4A574        /* Acentos operativos */

/* SYSTEM */
--success: #10b981            /* Estados activos */
--error: #ef4444              /* Errores */
```

### V6 — Industrial Premium (Teal/Copper)
```css
--background: gradient(gray-50 → blue-50/30)
--card: #ffffff
--teal: #1a5a6a              /* Sistema principal */
--copper: #b87333            /* Acentos */
--grey: #6b7280              /* Secondary */
--green: #10b981             /* Active */
```

### V2 — Industrial Warm Dark
```css
--graphite: #0d1419         /* Fondo secundario */
--background: #0f1419       /* Fondo principal */
--petrol: #1a3e4a          /* Acentos, bordes */
--copper: #b87333          /* Gradientes */
--amber: #d4a574           /* Iconos, estados */
--text-primary: #e5e7eb    /* Warm white */
--text-secondary: #9ca3af  /* Gray */
--active: #4ade80          /* Green */
```

---

## 📦 Stack Tecnológico

- **React 18.3.1** con TypeScript
- **Tailwind CSS v4** para estilos
- **Motion (Framer Motion)** para animaciones
- **Lucide React** para iconografía
- **Inter** como tipografía base

---

## 🔧 Desarrollo

```bash
# Instalar dependencias
pnpm install

# Desarrollo (ya está corriendo)
# El servidor Vite está activo automáticamente

# La base activa es App.tsx + components/v7/
# Las variantes antiguas se conservan solo como histórico
```

---

## 📁 Estructura de Archivos

```
src/
├── app/
│   ├── App.tsx                          # V7 Premium Blue + AI Magenta (canon activo)
│   ├── App-v6-industrial-premium.tsx    # Histórico / referencia
│   ├── App-v5-industrial-light-premium.tsx
│   ├── App-v4-industrial-light-refined.tsx
│   ├── App-v3-industrial-light-original.tsx
│   ├── App-v2-industrial-warm-dark.tsx
│   ├── App-v1-cinematic-dark.tsx
│   └── components/
│       ├── v7/                          # Canon activo
│       │   ├── sidebar.tsx
│       │   ├── status-bar.tsx
│       │   ├── live-metrics.tsx
│       │   ├── command-bar.tsx
│       │   ├── quick-actions.tsx
│       │   ├── orbital-core.tsx
│       │   └── recent-activity.tsx
│       ├── v6/                          # Histórico
│       ├── v5/                          # Histórico
│       ├── v4/                          # Histórico
│       ├── v3/                          # Histórico
│       ├── v1/                          # Histórico
│       └── [raíz]/                      # Legado V2
└── styles/
    ├── fonts.css                        # Inter font
    ├── theme.css                        # Paleta base
    └── tailwind.css
```

---

## 🎯 Filosofía de Diseño

### Principios
1. **Minimalismo operativo** — Mucho espacio negativo, jerarquía clara
2. **Premium industrial** — Elegante pero operativo, no decorativo
3. **Sistema vivo** — Indicadores reales, estados dinámicos
4. **Legibilidad** — Contraste optimizado para uso prolongado
5. **Profundidad sutil** — Glassmorphism, glow contenido, sombras suaves

### Referencias
- Linear (jerarquía, contraste)
- Raycast (command bar, minimalismo)
- Arc Browser (dark mode cálido)
- Stripe (dashboard premium)
- Apple Spatial UI (profundidad, glow sutil)

---

## 📝 Comparativa de Versiones

Las siguientes versiones se mantienen para contexto histórico. No son alternativas activas para implementación nueva.

| Aspecto | V7 Premium Blue ⭐ | V6 Industrial | V3 Light | V2 Dark |
|---------|-------------------|--------------|----------|---------|
| Fondo | #F9FAFB (solid) | gradient gray-50/blue-50 | gradient gray-50/blue-50 | #0f1419 (grafito) |
| Paleta principal | Blue + Magenta | Teal + Copper | Teal + Copper | Teal + Copper |
| Color sistema | #2563EB (Blue) | #1a5a6a (Teal) | #1a5a6a (Teal) | #1a3e4a (Teal) |
| Color IA | #FC10A3 (Magenta) | #b87333 (Copper) | #b87333 (Copper) | #b87333 (Copper) |
| Tarjetas | bg-white + sombras | bg-white + sombras | bg-white + sombras | bg-[#0d1419]/80 |
| Texto primario | #111827 | #1a1a1a | #1a1a1a | #e5e7eb |
| Sombras | shadow-md/lg | shadow-md/lg | shadow-sm/lg | Minimal |
| Legibilidad | Muy alta | Muy alta | Muy alta | Alta |
| Uso ideal | Ecosistema PM unified | Dashboard industrial | Trabajo diario light | Dark mode lovers |
| Sensación | Modern enterprise AI | Professional industrial | SaaS profesional | Software nocturno |
| Ecosystem | PM Mail unified ✅ | Independent | Independent | Independent |

---

## 🎨 Microinteracciones

- **Hover en botones/tarjetas:** Scale 1.02, y: -2px, glow sutil
- **Command bar:** Glow on focus
- **Orbital modules:** Scale 1.1 on hover, status badges
- **Activity cards:** Timestamps actualizados, círculos pulsantes en activos
- **Live metrics:** Indicadores de tendencia con íconos
- **Degradados ambientales:** Breathing animation (10-12s loop)

---

## 📊 Datos Operativos (V2)

### Live Metrics
- Proyectos Activos: 12 (+2)
- Sistemas Operativos: 77 (estable)
- Automatizaciones: 8 (+1)
- SAT en Curso: 2 (-1)

### Recent Activity (V4)
**Proyectos Recientes:**
1. Proyecto Mahou — 75% progreso, SAT en curso
2. Línea Kisters — 45% progreso, validación pendiente
3. Automatización n8n — 90% progreso, activa

**Próximos Hitos:**
1. Entrega Mahou SAT — Mañana 10:00 (prioridad alta)
2. Revisión Kisters PEM — Vie 18, 14:00 (prioridad media)
3. Deploy automatización — Lun 21, 09:00 (prioridad baja)

**Incidencias Activas:**
1. Sensor temperatura fuera de rango — Control PEM (warning)
2. Validación pendiente documentos — Docs (info)
3. ✅ 77 sistemas operativos sin incidencias

---

## 🔄 Cambiar entre Versiones

### Activar V7 — Premium Blue + AI Magenta (actual)
Ya está activa por defecto.

### Activar V6 — Industrial Premium (Teal/Copper)
```bash
cp src/app/App-v6-industrial-premium.tsx src/app/App.tsx
```

### Activar V5 — Industrial Light Premium
```bash
cp src/app/App-v5-industrial-light-premium.tsx src/app/App.tsx
```

### Activar V3 — Industrial Light Original
```bash
cp src/app/App-v3-industrial-light-original.tsx src/app/App.tsx
```

### Activar V2 — Industrial Warm Dark
```bash
cp src/app/App-v2-industrial-warm-dark.tsx src/app/App.tsx
```

### Activar V1 — Cinematic Dark
```bash
cp src/app/App-v1-cinematic-dark.tsx src/app/App.tsx
```

Ver archivos `V7-PM-MAIL-IDENTITY.md`, `V6-CONTROLLED-REFINEMENT.md` y `VERSIONS.md` para comparativas detalladas.

---

## 📄 Licencia

Proyecto conceptual PM-System — Centro de Operaciones
