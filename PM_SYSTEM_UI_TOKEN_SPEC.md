# PM-System UI Token Spec

## Propósito

Este documento ejecuta `UIB-007`.

Define el inventario oficial usable de tokens `Premium Blue + AI Magenta` para `PM SYSTEM` y prepara la transición desde hardcodes hacia semántica oficial.

No rehace componentes. No cambia layouts. No tokeniza `V7` todavía.

Referencias base:

- [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md)
- [PM_SYSTEM_UI_COLOR_AUDIT.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_COLOR_AUDIT.md)
- [theme.css](C:/Romera/workspace/apps/PM%20SYSTEM/Figma/src/styles/theme.css)

---

## 1. Fuente de verdad

La fuente oficial de color para `PM SYSTEM` pasa a ser:

- `Figma/src/styles/theme.css`

Quedan fuera de la fuente de verdad:

- `Figma/default_shadcn_theme.css` como baseline visual
- cualquier hex directo en `components/v7/*`
- cualquier lectura de `dark` como baseline activo

Lectura correcta:

- `theme.css` contiene el set oficial,
- `default_shadcn_theme.css` queda como legado técnico,
- los componentes deben converger hacia tokens semánticos y no al revés.

---

## 2. Inventario oficial de tokens

### 2.1 Core

Uso: estructura, navegación, foco, acción principal, links.

- `--pm-primary-blue`
- `--pm-hover-blue`
- `--pm-action-primary`
- `--pm-action-primary-hover`
- `--pm-link`
- `--pm-link-hover`
- `--pm-focus-ring`

Valor actual:

- azul estructural oficial `#2563EB`
- hover oficial `#1D4ED8`

### 2.2 Surface

Uso: fondos, tarjetas, overlays, tooltip surfaces, capas suaves.

- `--pm-bg-primary`
- `--pm-surface-primary`
- `--pm-surface-secondary`
- `--pm-surface-overlay`
- `--pm-surface-tooltip`
- `--pm-surface-tooltip-foreground`

Lectura:

- `surface-primary` = tarjeta/base blanca
- `surface-secondary` = neutro suave para hovers y contenedores ligeros
- `surface-overlay` = capa translúcida clara, útil para barras superiores
- `surface-tooltip` = fondo oscuro controlado para tooltips y overlays pequeños

### 2.3 Text

Uso: tipografía base y contrastes.

- `--pm-text-primary`
- `--pm-text-secondary`
- `--pm-text-tertiary`
- `--pm-text-inverse`

Lectura:

- `text-primary` = lectura principal
- `text-secondary` = metadata y supporting text
- `text-tertiary` = placeholders y señales visuales débiles
- `text-inverse` = texto sobre fondos oscuros o saturados

### 2.4 Border

Uso: separación, foco, capas AI.

- `--pm-border-default`
- `--pm-border-strong`
- `--pm-border-ai`

Lectura:

- `border-default` = separación estándar
- `border-strong` = líneas destacadas o estados de conexión idle
- `border-ai` = paneles o badges con semántica asistida

### 2.5 AI

Uso: IA, automatización, asistencia, recomendaciones.

- `--pm-ai-magenta`
- `--pm-hover-pink`
- `--pm-soft-ai-bg`
- `--pm-ai-text`
- `--pm-ai-surface`
- `--pm-ai-surface-hover`

Regla:

- no usar estos tokens como navegación base,
- no usarlos como color dominante de tablas o layouts operativos largos.

### 2.6 Status

Uso: estados operativos y feedback.

- `--pm-success`
- `--pm-warning`
- `--pm-error`
- `--pm-info`
- `--pm-status-success-bg`
- `--pm-status-warning-bg`
- `--pm-status-error-bg`
- `--pm-status-info-bg`
- `--pm-warm-accent`

Límite importante:

- `--pm-warm-accent` existe, pero no debe volver a ser tercer color estructural.
- debe quedar restringido a señales operativas puntuales o acentos controlados.

### 2.7 Gradientes oficiales

Uso permitido: logos, CTAs premium puntuales, iconografía IA, hero controlado.

- `--pm-gradient-system`
- `--pm-gradient-ai`
- `--pm-gradient-ai-soft`
- `--pm-gradient-hero`

Regla:

- los gradientes son recurso de énfasis, no base de lectura.

---

## 3. Equivalencias semánticas oficiales

La capa de primitives y componentes debe converger a estas equivalencias:

### 3.1 Semántica general

- `--background` → `--pm-bg-primary`
- `--foreground` → `--pm-text-primary`
- `--card` → `--pm-surface-primary`
- `--card-foreground` → `--pm-text-primary`
- `--popover` → `--pm-surface-primary`
- `--popover-foreground` → `--pm-text-primary`
- `--primary` → `--pm-action-primary`
- `--primary-foreground` → `--pm-text-inverse`
- `--secondary` → `--pm-surface-secondary`
- `--secondary-foreground` → `--pm-text-primary`
- `--muted` → `--pm-surface-secondary`
- `--muted-foreground` → `--pm-text-secondary`
- `--accent` → `--pm-soft-blue-bg`
- `--accent-foreground` → `--pm-hover-blue`
- `--destructive` → `--pm-error`
- `--destructive-foreground` → `--pm-text-inverse`
- `--border` → `--pm-border-default`
- `--ring` → `--pm-focus-ring`

### 3.2 Sidebar

- `--sidebar` → `--pm-surface-primary`
- `--sidebar-foreground` → `--pm-text-primary`
- `--sidebar-primary` → `--pm-primary-blue`
- `--sidebar-primary-foreground` → `--pm-text-inverse`
- `--sidebar-accent` → `--pm-soft-blue-bg`
- `--sidebar-accent-foreground` → `--pm-hover-blue`
- `--sidebar-border` → `--pm-border-default`
- `--sidebar-ring` → `--pm-focus-ring`

### 3.3 Charts y métricas

- `--chart-1` → `--pm-primary-blue`
- `--chart-2` → `--pm-ai-magenta`
- `--chart-3` → `--pm-success`
- `--chart-4` → `--pm-warm-accent`
- `--chart-5` → `--pm-text-tertiary`

### 3.4 Semántica AI futura

Cuando aparezcan variantes específicas:

- panel AI base → `--pm-ai-surface`
- texto AI o icon AI → `--pm-ai-text`
- borde AI → `--pm-border-ai`
- hover AI → `--pm-ai-surface-hover`

---

## 4. Hardcodes que deben desaparecer primero

No todos tienen la misma prioridad. Primero deben desaparecer los que bloquean la lectura del sistema oficial.

### Prioridad 1

- `#D4A574`
- `bg-white`
- `border-gray-200`
- `text-gray-900`
- `text-gray-500`
- `text-gray-400`
- `bg-gray-50`
- `bg-gray-100`

Motivo:

- son los que más repiten superficie, borde y texto fuera de token.

### Prioridad 2

- `#2563EB`
- `#FC10A3`
- `#10b981`
- `#ef4444`
- `#6b7280`
- `#d1d5db`

Motivo:

- varios ya son cromáticamente correctos,
- pero siguen siendo hardcodes y no semántica reusable.

### Prioridad 3

- `bg-gray-900`
- `border-gray-700`
- `bg-white/95`
- `bg-red-50`
- `text-red-700`

Motivo:

- aparecen en overlays, tooltips o estados puntuales,
- deben migrarse después de superficie, borde y texto base.

---

## 5. Clases Tailwind que deben evitarse

Estas clases no están “prohibidas” técnicamente, pero ya no deben ser el patrón preferente en UI nueva o refactor real:

- `bg-white`
- `bg-white/95`
- `border-gray-100`
- `border-gray-200`
- `border-gray-300`
- `border-gray-700`
- `text-gray-900`
- `text-gray-600`
- `text-gray-500`
- `text-gray-400`
- `bg-gray-50`
- `bg-gray-100`
- `bg-gray-900`
- `text-[#2563EB]`
- `text-[#FC10A3]`
- `bg-[#2563EB]`
- `bg-[#FC10A3]`
- `from-[#2563EB]`
- `to-[#FC10A3]`

Lectura:

- aunque muchas coincidan hoy con la paleta correcta, perpetúan implementación literal y no sistema.

---

## 6. Componentes `V7` que deben tokenizarse primero

### Prioridad alta

#### `Figma/src/app/components/v7/orbital-core.tsx`

Motivo:

- mayor densidad de hardcodes,
- mezcla azul, magenta, warm accent, success y neutrales directos,
- concentra nodos, líneas, tooltip y core gradient.

#### `Figma/src/app/components/v7/recent-activity.tsx`

Motivo:

- mezcla intensiva de neutrales Tailwind y `#D4A574`,
- es buen candidato para validar superficies, estados y badges.

#### `Figma/src/app/components/v7/quick-actions.tsx`

Motivo:

- usa dataset con color literal por acción,
- será clave para pasar de color “por tarjeta” a semántica por intención.

### Prioridad media

#### `Figma/src/app/components/v7/status-bar.tsx`

Motivo:

- usa overlay claro, success y acento cálido,
- sirve para validar tokens de capa superior y señales operativas.

#### `Figma/src/app/components/v7/command-bar.tsx`

Motivo:

- usa gradiente correcto, pero todavía con superficie y texto directos.

#### `Figma/src/app/components/v7/sidebar.tsx`

Motivo:

- el patrón es repetido,
- pero gran parte del problema es neutral/token, no semántica compleja.

### Prioridad baja

#### `Figma/src/app/components/v7/live-metrics.tsx`

Motivo:

- es el más simple de migrar,
- ya usa colores cercanos al sistema y pocos matices.

---

## 7. Ajustes técnicos aplicados en `theme.css`

Se consolidó la fundación oficial añadiendo alias semánticos sin alterar composición visual:

- acciones: `--pm-action-primary`, `--pm-action-primary-hover`
- links: `--pm-link`, `--pm-link-hover`
- contraste: `--pm-text-inverse`
- overlays y tooltip: `--pm-surface-overlay`, `--pm-surface-tooltip`, `--pm-surface-tooltip-foreground`
- IA: `--pm-border-ai`, `--pm-ai-text`, `--pm-ai-surface`, `--pm-ai-surface-hover`
- fondos de estado: `--pm-status-success-bg`, `--pm-status-warning-bg`, `--pm-status-error-bg`, `--pm-status-info-bg`

También quedaron exportados en `@theme inline` como `--color-pm-*` para uso futuro en Tailwind.

Esto no rehace la UI. Solo elimina ambigüedad semántica antes del refactor real.

---

## 8. Regla operativa para la siguiente fase

`UIB-008` y posteriores deben seguir este orden:

1. migrar primero `V7` desde hardcodes hacia tokens PM,
2. solo después ajustar variantes de primitives,
3. no reintroducir `copper`, `petrol`, `amber` o `dark` como baseline,
4. no usar `warm accent` como tercer color estructural,
5. no tokenizar por archivo con nombres ambiguos; tokenizar por intención semántica.

Conclusión:

- la semántica oficial ya está definida,
- `theme.css` ya puede actuar como base técnica real,
- la siguiente fase puede empezar a tokenizar `V7` sin rediseño masivo ni decisiones cromáticas improvisadas.
