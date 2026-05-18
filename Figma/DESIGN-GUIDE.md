# PM-System — Guía de Diseño

> Estado documental: `HISTÓRICO`
>
> Esta guía documenta reglas y comparativas de `V1`-`V3`.
>
> No debe leerse como guía activa de implementación.
>
> Canon actual: `V7` en `src/app/App.tsx` + `src/app/components/v7/`.

## Filosofía de Diseño

El Centro de Operaciones PM-System es una herramienta profesional para gestión de proyectos industriales. El diseño debe transmitir:

- **Control** — El usuario gobierna sistemas complejos
- **Claridad** — Información crítica a primera vista
- **Seguridad** — Operaciones confiables y monitoreadas
- **Productividad** — Acceso rápido a acciones clave
- **Ingeniería** — Precisión técnica y operativa

---

## Principios de Diseño

### 1. Jerarquía Visual Clara
- Título hero grande (7xl, bold)
- Subtítulo descriptivo (xl)
- Secciones bien espaciadas
- Tarjetas agrupadas lógicamente

### 2. Minimalismo Operativo
- Mucho espacio negativo
- Sin decoración innecesaria
- Cada elemento tiene función
- Evitar sobrecarga de información

### 3. Sistema Vivo
- Indicadores de estado en tiempo real
- Métricas con tendencias
- Timestamps de actualización
- Estados activo/idle visibles

### 4. Profundidad Sutil
- Sombras suaves (no agresivas)
- Glassmorphism contenido
- Glow minimal y contextual
- Transiciones fluidas

### 5. Accesibilidad
- Contraste WCAG AA mínimo
- Tamaños de fuente legibles
- Touch targets adecuados
- Feedback visual claro

---

## Paletas de Color

### V3 — Industrial Light ☀️

**Fondo y Superficies:**
```
Fondo principal:   gradient(from-gray-50 via-blue-50/30 to-gray-50)
Tarjetas:          #ffffff (white)
Sidebar:           #ffffff (white)
Status bar:        #ffffff/95 (white + blur)
```

**Texto:**
```
Primario:          #1a1a1a (gray-900) — títulos, labels
Secundario:        #6b7280 (gray-600) — descripciones
Terciario:         #9ca3af (gray-400) — timestamps, hints
```

**Acentos:**
```
Petróleo:          #1a3e4a — principal, sidebar activo, logos
Cobre:             #b87333 — gradientes, highlights
Verde técnico:     #059669 — automatizaciones, success
Ámbar:             #d4a574 — warnings, SAT
Verde activo:      #10b981 — estados online, indicadores
```

**UI Elements:**
```
Bordes:            #e5e7eb (gray-200)
Hover borders:     #d1d5db (gray-300)
Sombras:           rgba(0,0,0,0.04) a rgba(0,0,0,0.12)
```

**Uso de Color:**
- Gradientes solo en logos y botones principales
- Estados verdes para activo/online
- Ámbar para warnings/pendientes
- Gris para idle/inactivo

---

### V2 — Industrial Warm Dark 🌙

**Fondo y Superficies:**
```
Fondo principal:   #0f1419 (grafito-petróleo)
Tarjetas:          #0d1419/80 (grafito + blur)
Sidebar:           #0d1419
Status bar:        #0d1419/95 + blur
```

**Texto:**
```
Primario:          #e5e7eb (warm white)
Secundario:        #9ca3af (gray-400)
Terciario:         #6b7280 (gray-600)
```

**Acentos:**
```
Petróleo:          #1a3e4a
Cobre:             #b87333
Ámbar:             #d4a574
Verde activo:      #4ade80
```

**UI Elements:**
```
Bordes:            #1a3e4a/30 a #1a3e4a/60
Glow:              rgba(26,62,74,0.2) — reducido vs V1
```

---

### V1 — Cinematic Dark 🎬

**Fondo y Superficies:**
```
Fondo principal:   #0a0a0f (negro puro)
Tarjetas:          rgba(15,15,20,0.6) + blur
```

**Efectos:**
```
Glow intenso:      100% opacity
Film grain:        visible
Vignette:          marcado
```

---

## Componentes

### Sidebar (20px width)
- Logo gradient superior
- Iconos 5x5 (lucide-react)
- Active state visible
- Tooltips on hover
- Settings al final

### Status Bar (14px height en V3, 12px en V2)
- Estado del sistema (verde activo)
- Conexión segura
- Badge de SAT activos (ámbar)
- Fecha y hora en tiempo real

### Live Metrics
- 4 KPIs principales
- Valores grandes (2xl, bold)
- Tendencias con iconos
- Cambios numéricos (+2, -1, 0)

### Command Bar
- Icon gradient (petróleo → cobre)
- Input grande (text-lg)
- Placeholder claro
- Shortcut ⌘K visible
- Icon de Search

### Quick Actions (grid 3 cols)
- 6 acciones principales
- Icon + label + contador
- Hover scale 1.02, y: -2
- Sombras en hover

### Orbital Core
- Núcleo central (PM Core)
- 8 módulos conectados
- Líneas dash conectoras
- Estados activo/idle con badges
- Tooltips informativos
- Hover scale 1.1

### Activity Cards (grid 4 cols)
- Proyecto + estado
- Círculo de estado (pulsante si activo)
- Timestamp con icono reloj
- Colores por tipo de proyecto

---

## Tipografía

**Fuente:** Inter
- Variable font con optimizaciones
- Feature settings: ss01, ss02, cv05, cv08
- Antialiasing optimizado

**Escala:**
```
Hero title:        text-7xl (72px) font-bold
Subtitle:          text-xl (20px)
Section headers:   text-sm uppercase tracking-wider
Card titles:       text-sm font-semibold
Body text:         text-xs a text-sm
Metrics values:    text-2xl font-bold tabular-nums
Timestamps:        text-xs
```

**Pesos:**
```
Títulos:           font-bold (700)
Labels:            font-semibold (600)
Valores métricos:  font-bold (700)
Texto normal:      font-medium (500)
Secundario:        font-normal (400)
```

---

## Espaciado

**Layout:**
```
Sidebar:           w-20 (80px)
Status bar:        h-14 (56px en V3), h-12 (48px en V2)
Main padding:      px-16 py-12
Gap sections:      mb-8, mb-12, mb-16
```

**Cards:**
```
Padding:           p-4 a p-6
Gap interno:       gap-3, gap-4
Border radius:     rounded-xl (12px)
```

**Grid gaps:**
```
Metrics:           gap-4
Quick actions:     gap-4
Activity cards:    gap-4
```

---

## Animaciones

**Duración:**
```
Rápida:            150-200ms
Normal:            300ms
Lenta:             500-800ms
Ambiental:         10-12s (loop infinito)
```

**Easing:**
```
UI interactions:   ease-in-out
Spring:            para escalas
Linear:            para rotaciones continuas
```

**Efectos:**
```
Hover scale:       1.02 a 1.1
Hover translate:   y: -2px
Fade in:           opacity 0 → 1
Stagger delay:     0.05s entre items
Pulse:             estados activos (2s loop)
```

---

## Sombras

### V3 Light
```css
shadow-sm:    0 1px 2px rgba(0,0,0,0.04)
shadow:       0 1px 3px rgba(0,0,0,0.08)
shadow-md:    0 4px 6px rgba(0,0,0,0.08)
shadow-lg:    0 10px 15px rgba(0,0,0,0.1)
shadow-xl:    0 20px 25px rgba(0,0,0,0.12)
```

### V2 Dark
```css
Minimal shadows, más reliance en borders y glow
```

---

## Estados

### Activo
```
Color:     #10b981 (V3), #4ade80 (V2)
Badge:     círculo pulsante
Icono:     animate-pulse
```

### Idle
```
Color:     #9ca3af (V3), #6b7280 (V2)
Badge:     círculo estático
Opacidad:  reducida
```

### Hover
```
Scale:     1.02 (cards), 1.1 (icons)
Shadow:    aumenta un nivel
Border:    color más intenso
```

### Focus
```
Outline:   ring color del tema
Shadow:    shadow-lg
```

---

## Responsive (Desktop First)

El sistema está diseñado para desktop ultrawide. Ajustes para pantallas menores:

```
< 1920px:  Reducir orbital radius
< 1600px:  Quick actions 2 cols
< 1280px:  Activity cards 2 cols, ocultar orbital
```

---

## Iconografía

**Librería:** Lucide React

**Tamaños:**
```
Sidebar:           w-5 h-5
Quick actions:     w-5 h-5
Orbital modules:   w-6 h-6
Status bar:        w-3.5 h-3.5
Timestamps:        w-3 h-3
```

**Stroke:**
```
Default:           strokeWidth={2} (implícito)
Fino:             strokeWidth={1.5}
```

---

## Mejores Prácticas

### ✅ Hacer
- Usar espaciado consistente (múltiplos de 4)
- Agrupar información relacionada
- Mostrar estados en tiempo real
- Usar sombras sutiles en V3
- Mantener alto contraste en texto
- Animar con propósito
- Indicadores visuales claros

### ❌ Evitar
- Colores chillones o saturados
- Exceso de animaciones
- Gradientes agresivos
- Sombras duras
- Texto con bajo contraste
- Decoración sin función
- Sobrecarga de información

---

## Referencias de Diseño

### V3 Light
- **Linear** — Jerarquía, contraste, minimalismo
- **Notion** — Tarjetas blancas, organización
- **Outlook moderno** — Claridad, profesionalismo
- **Apple Design** — Espaciado, tipografía
- **Stripe Dashboard** — SaaS premium, métricas

### V2 Dark
- **Raycast** — Command bar, dark refinado
- **Arc Browser** — Dark mode cálido
- **Linear Dark** — Contraste optimizado

### V1 Cinematic
- **Apple Vision Pro UI** — Glow, profundidad
- **Dashboards cinematográficos** — Efectos visuales

---

## Caso de Uso

**Escenario típico:**

Usuario: Project Manager en centro de operaciones industrial

**Flujo:**
1. Revisa métricas live (proyectos, sistemas, SAT)
2. Lanza búsqueda con ⌘K
3. Accede a acción rápida (ej: "Estado de obra")
4. Monitorea orbital core (estados de módulos)
5. Verifica actividad operativa reciente

**Tiempo de uso:** 4-8 horas continuas

**Ambiente:** Oficina con luz natural (V3) o nocturno (V2)

---

## Evolución del Diseño

**V1 → V2:**
- Reducción de efectos (-25% glow)
- Mejora de contraste
- Indicadores operativos vivos

**V2 → V3:**
- Cambio a light mode
- Sombras y profundidad clara
- Contraste optimizado para trabajo prolongado
- Paleta cálida pero profesional

---

**Última actualización:** Mayo 2026
**Versión activa:** V3 — Industrial Light
