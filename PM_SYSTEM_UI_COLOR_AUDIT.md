# PM-System UI Color Audit

## Propósito

Este documento ejecuta `UIB-006`.

Audita el estado real de:

- `Figma/src/styles/theme.css`
- `Figma/default_shadcn_theme.css`
- `Figma/src/app/components/ui/*`
- `Figma/src/app/components/v7/*`

No aplica sustituciones. No modifica componentes.

Su función es preparar la tokenización real de `Premium Blue + AI Magenta` sin improvisar.

Referencias base:

- [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md)
- [PM_SYSTEM_UI_BACKLOG.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_BACKLOG.md)

---

## 1. Diagnóstico ejecutivo

El sistema ya tiene una base oficial de tokens en `theme.css`, pero convive con tres capas que todavía contaminan la lectura del color:

- soporte dark heredado de `V2`,
- `default_shadcn_theme.css` como baseline genérico no alineado,
- hardcodes directos en `components/v7/` y excepciones puntuales en `components/ui/`.

Conclusión:

- la fundación correcta ya existe,
- `ui/*` depende en gran parte de tokens semánticos,
- `v7/*` sigue dependiendo de color directo en varias piezas clave,
- el mayor riesgo no es “falta de colores”, sino mezcla de sistema oficial con legado y hardcode local.

---

## 2. Tokens oficiales existentes

Fuente principal:

- `Figma/src/styles/theme.css`

### 2.1 Core system

- `--pm-primary-blue: #2563eb`
- `--pm-hover-blue: #1d4ed8`
- `--pm-soft-blue-bg: #eff6ff`

### 2.2 AI layer

- `--pm-ai-magenta: #fc10a3`
- `--pm-hover-pink: #e6008d`
- `--pm-soft-ai-bg: #fce7f3`

### 2.3 Neutrales operativos

- `--pm-bg-primary: #f9fafb`
- `--pm-surface-primary: #ffffff`
- `--pm-surface-secondary: #f3f4f6`
- `--pm-border-default: #e5e7eb`
- `--pm-border-strong: #d1d5db`
- `--pm-text-primary: #111827`
- `--pm-text-secondary: #6b7280`
- `--pm-text-tertiary: #9ca3af`

### 2.4 Estados

- `--pm-success: #10b981`
- `--pm-warning: #d97706`
- `--pm-error: #ef4444`
- `--pm-info: #2563eb`
- `--pm-warm-accent: #d4a574`
- `--pm-focus-ring: #2563eb`

### 2.5 Gradientes oficiales

- `--pm-gradient-system`
- `--pm-gradient-ai`
- `--pm-gradient-ai-soft`
- `--pm-gradient-hero`

### 2.6 Mapeo semántico ya conectado

`theme.css` ya conecta la capa oficial con variables de uso general:

- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`
- `--border`
- `--ring`
- `--chart-1` a `--chart-5`
- `--sidebar-*`

Lectura correcta:

- la fundación oficial ya existe,
- el problema principal ya no está en `theme.css`,
- el problema está en qué partes de la UI todavía no consumen esa fundación de forma consistente.

---

## 3. Tokens legacy todavía presentes

### 3.1 Legacy en `theme.css`

Dentro de `.dark` siguen presentes tokens y valores heredados:

- `--background: #0f1419`
- `--card: #0d1419`
- `--primary: #e5e7eb`
- `--graphite: #0d1419`
- `--petrol: #1a3e4a`
- `--copper: #b87333`
- `--amber: #d4a574`
- `--smoke: #6b7280`
- `--warm-white: #e5e7eb`
- `--glow-petrol`
- `--glow-copper`
- `--glow-amber`

Además, la rama `.dark` usa muchos `oklch(...)` genéricos para:

- `--secondary`
- `--accent`
- `--border`
- `--input`
- `--ring`
- `--chart-*`
- `--sidebar-*`

Estado:

- soporte técnico legacy
- no baseline visual activo

Riesgo:

- medio

Motivo:

- aunque la nota en `theme.css` ya dice que dark es compatibilidad histórica, sigue siendo una fuente de color viva y puede contaminar futuros refactors si se toma como referencia.

### 3.2 Legacy en `default_shadcn_theme.css`

`Figma/default_shadcn_theme.css` conserva el baseline genérico de shadcn:

- `--primary: #030213`
- `--accent: #e9ebef`
- `--muted: #ececf0`
- `--muted-foreground: #717182`
- `--border: rgba(0, 0, 0, 0.1)`
- charts y sidebar en `oklch(...)`
- rama `.dark` completa en `oklch(...)`

Estado:

- legado técnico externo

Riesgo:

- alto

Motivo:

- no está alineado con `Premium Blue + AI Magenta`,
- puede inducir a reutilizar tokens genéricos como si fueran fuente de verdad,
- duplica semántica ya resuelta en `theme.css`.

Conclusión operativa:

- `theme.css` debe seguir siendo la fuente principal,
- `default_shadcn_theme.css` no debe guiar decisiones visuales futuras.

---

## 4. Colores hardcoded en componentes `v7`

### 4.1 Hardcodes correctos o alineados

Estos valores coinciden con el sistema oficial:

- `#2563EB` → azul estructural correcto
- `#FC10A3` → magenta IA correcto
- `#10b981` → success correcto
- `#ef4444` → error correcto
- `#6b7280` → text secondary correcto
- `#d1d5db` → border strong correcto

Problema:

- aunque el color sea correcto, sigue estando hardcoded en vez de tokenizado.

### 4.2 Hardcodes heredados o problemáticos

- `#D4A574` → warm accent / amber heredado

Riesgo:

- alto

Motivo:

- hoy aparece en `v7` como color operativo frecuente,
- el design system lo tolera como acento, no como uno de los dos colores estructurales del sistema,
- su abuso vuelve a meter lectura `amber/copper` heredada.

### 4.3 Hardcodes por archivo

#### `Figma/src/app/components/v7/sidebar.tsx`

Detectado:

- `#2563EB`
- `bg-white`
- `border-gray-200`
- `text-gray-500`
- `bg-gray-50`
- `bg-gray-900`

Lectura:

- correcto en azul activo,
- dependiente todavía de grises Tailwind directos,
- no consume `--sidebar-*` ni tokens PM de forma explícita.

#### `Figma/src/app/components/v7/command-bar.tsx`

Detectado:

- gradiente `#2563EB` → `#FC10A3`
- `bg-white`
- `border-gray-200`
- `hover:border-gray-300`
- `text-gray-900`
- `placeholder:text-gray-400`
- `bg-gray-50`
- `text-gray-600`

Lectura:

- el gradiente está bien alineado,
- la superficie y bordes siguen hardcoded vía Tailwind neutrales.

#### `Figma/src/app/components/v7/live-metrics.tsx`

Detectado:

- `#10b981`
- `#ef4444`
- `bg-white`
- `border-gray-200`
- `text-gray-500`
- `text-gray-900`
- `text-gray-400`

Lectura:

- colores semánticos razonables,
- no tokenizados,
- neutros todavía fijados por utilidades directas.

#### `Figma/src/app/components/v7/quick-actions.tsx`

Detectado:

- `#2563EB`
- `#D4A574`
- `#6b7280`
- `#FC10A3`
- `bg-white`
- `border-gray-200`
- `hover:border-gray-300`
- `text-gray-900`
- `text-gray-500`

Lectura:

- mezcla correcta de azul y magenta con un tercer color heredado (`#D4A574`) demasiado presente,
- varios icon containers dependen de color directo por dataset local.

#### `Figma/src/app/components/v7/orbital-core.tsx`

Detectado:

- `#2563EB`
- `#D4A574`
- `#FC10A3`
- `#6b7280`
- `#d1d5db`
- `#10b981`
- `bg-white`
- `border-gray-100`
- `text-gray-500`
- `bg-gray-900`
- `border-gray-700`

Lectura:

- es el componente con mayor densidad de hardcodes cromáticos,
- usa bien azul y magenta,
- pero mantiene warm accent y grises directos en nodos, estados, labels y líneas.

#### `Figma/src/app/components/v7/recent-activity.tsx`

Detectado:

- `#D4A574`
- `#10b981`
- `#2563EB`
- `bg-red-50`
- `text-red-700`
- `bg-white`
- `border-gray-200`
- `hover:bg-gray-50`
- `text-gray-900`
- `text-gray-500`
- `text-gray-400`
- `bg-gray-100`

Lectura:

- el mayor problema aquí no es el rojo,
- el problema real es que el nivel medio usa `#D4A574` como patrón operativo recurrente,
- y toda la composición neutra sigue fijada por clases directas.

#### `Figma/src/app/components/v7/status-bar.tsx`

Detectado:

- `#10b981`
- `#D4A574`
- `bg-white/95`
- `border-gray-200`
- `text-gray-600`
- `text-gray-500`
- `text-gray-900`

Lectura:

- success y acento están bien definidos semánticamente,
- pero la barra sigue construida con colores literales en vez de tokens.

---

## 5. Colores hardcoded en primitives `ui/*`

## 5.1 Estado general

La mayoría de `ui/*` no está rota por color directo. Su problema es otro:

- dependen de tokens semánticos genéricos,
- arrastran variantes `dark:*`,
- y heredan semántica de `shadcn`, no del sistema visual ya normalizado del ecosistema.

Eso es mejor que tener hex por todas partes, pero no equivale todavía a tokenización PM cerrada.

### 5.2 Primitives que ya consumen semántica y no color literal

Patrón correcto actual:

- `button.tsx`
- `badge.tsx`
- `card.tsx`
- `input.tsx`
- `tabs.tsx`
- `table.tsx`
- gran parte de `sidebar.tsx`

Consumen clases como:

- `bg-primary`
- `text-primary-foreground`
- `bg-secondary`
- `text-muted-foreground`
- `bg-card`
- `border-input`
- `border-ring`
- `bg-sidebar`

Lectura:

- son candidatas buenas para tokenización futura,
- porque la dependencia principal es semántica, no literal.

### 5.3 Excepciones con hardcode literal

#### `Figma/src/app/components/ui/chart.tsx`

Detectado:

- `stroke='#ccc'`
- `stroke='#fff'`

Lectura:

- son los hardcodes literales más claros dentro de `ui/*`,
- se usan para mapear internals de Recharts,
- no siguen el sistema PM de color.

#### `Figma/src/app/components/ui/sidebar.tsx`

Detectado:

- `hsl(var(--sidebar-border))`
- `hsl(var(--sidebar-accent))`

Lectura:

- no es hardcode hex,
- pero sigue atado a la semántica sidebar heredada de shadcn,
- no expresa todavía una variante `PM-System` cerrada.

### 5.4 Dependencia dark heredada en `ui/*`

Aparece en primitives clave:

- `button.tsx`
- `badge.tsx`
- `input.tsx`
- `tabs.tsx`

Patrones detectados:

- `dark:bg-input/30`
- `dark:border-input`
- `dark:hover:bg-input/50`
- `dark:data-[state=active]:bg-input/30`
- `dark:data-[state=active]:border-input`
- `dark:text-muted-foreground`

Lectura:

- no son colores incorrectos por sí mismos,
- pero siguen anclando las primitives a un soporte dark heredado que no debe seguir dictando el baseline.

---

## 6. Colores que ya coinciden con Premium Blue + AI Magenta

Correctos y alineados con el design system:

- `#2563EB`
- `#1D4ED8`
- `#EFF6FF`
- `#FC10A3`
- `#E6008D`
- `#FCE7F3`
- `#F9FAFB`
- `#FFFFFF`
- `#F3F4F6`
- `#E5E7EB`
- `#D1D5DB`
- `#111827`
- `#6B7280`
- `#9CA3AF`
- `#10B981`
- `#D97706`
- `#EF4444`

Estado:

- correcto como paleta
- incompleto como implementación

Motivo:

- la coincidencia cromática no resuelve el problema si el componente sigue usando el color de forma directa en vez de consumir token.

---

## 7. Colores heredados problemáticos

### 7.1 Petrol / Teal / Copper / Amber

Detectados:

- `--petrol: #1a3e4a`
- `--copper: #b87333`
- `--amber: #d4a574`
- `--graphite: #0d1419`

Problema:

- pertenecen a la identidad `V2` y derivadas,
- no son la base visual aprobada,
- pueden seguir infiltrándose por asociación histórica aunque ya no sean el sistema oficial.

### 7.2 Warm accent actual

`--pm-warm-accent: #d4a574` existe ya dentro del set nuevo.

Lectura correcta:

- puede existir como acento puntual,
- no debe volver a convertirse en tercer color estructural dominante,
- no debe competir con azul y magenta.

### 7.3 Dark legacy

Detectado en:

- `.dark` de `theme.css`
- `.dark` de `default_shadcn_theme.css`
- variantes `dark:*` en primitives

Problema:

- la UI clara ya es la dirección oficial,
- mantener dark support técnico es aceptable,
- mantener dark como referencia visual implícita no lo es.

---

## 8. Recomendación de sustitución futura

No aplicar todavía. Solo criterio para `UIB-007` y siguientes.

### 8.1 Sustitución de hardcodes correctos pero literales

Sustituir:

- `#2563EB` → `--pm-primary-blue`
- `#FC10A3` → `--pm-ai-magenta`
- `#10b981` → `--pm-success`
- `#ef4444` → `--pm-error`
- `#6b7280` → `--pm-text-secondary`
- `#d1d5db` → `--pm-border-strong`
- `bg-white` → `--pm-surface-primary`
- `border-gray-200` → `--pm-border-default`
- `text-gray-900` → `--pm-text-primary`
- `text-gray-500` o `text-gray-600` → `--pm-text-secondary`
- `text-gray-400` → `--pm-text-tertiary`
- `bg-gray-50` o `bg-gray-100` → `--pm-surface-secondary` o token específico derivado

### 8.2 Sustitución de hardcodes heredados problemáticos

Tratar con cautela:

- `#D4A574`
- `--petrol`
- `--copper`
- `--amber`
- `--graphite`
- `--glow-petrol`
- `--glow-copper`
- `--glow-amber`

Regla:

- no eliminar sin criterio funcional,
- pero sacar estos colores de cualquier rol estructural o de navegación,
- dejarlos solo donde exista una justificación semántica muy concreta.

### 8.3 Prioridad de futura sustitución

Prioridad alta:

- `v7/sidebar.tsx`
- `v7/command-bar.tsx`
- `v7/quick-actions.tsx`
- `v7/orbital-core.tsx`
- `v7/recent-activity.tsx`
- `v7/status-bar.tsx`

Prioridad media:

- `ui/chart.tsx`
- variantes `dark:*` de `button.tsx`, `badge.tsx`, `input.tsx`, `tabs.tsx`

Prioridad baja:

- primitives que ya consumen semántica y solo necesitan ajuste de variante futura

---

## 9. Cierre operativo

Mapa real actual:

- fuente oficial correcta: `Figma/src/styles/theme.css`
- baseline técnico heredado no alineado: `Figma/default_shadcn_theme.css`
- primitives `ui/*`: bastante semánticas, todavía no completamente PM-native
- `v7/*`: visualmente cercana al sistema oficial, pero aún muy dependiente de hardcodes

Conclusión para la siguiente fase:

- `UIB-007` no debe inventar tokens nuevos por intuición,
- debe partir de los tokens PM ya existentes,
- y atacar primero la sustitución de hardcodes de `v7`, no reescribir a ciegas las primitives que ya dependen de semántica.
