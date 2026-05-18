# PM-System Shared UI Candidates

## Propósito

Este documento fija la separación futura entre:

- UI propia de `PM-System`,
- primitives genéricas,
- candidatos a `shared UI` del ecosistema,
- y componentes que no deben compartirse.

No mueve archivos. No borra carpetas. No modifica la UI actual.

Base de decisión:

- [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md)
- [PM_SYSTEM_UI_AUDIT.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_AUDIT.md)
- [PM_SYSTEM_UI_DECISIONS.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_DECISIONS.md)
- [PM_SYSTEM_UI_MIGRATION_PLAN.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_MIGRATION_PLAN.md)
- [PM_SYSTEM_UI_BACKLOG.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_BACKLOG.md)

## Nota de alcance

Este documento solo clasifica material dentro de `PM SYSTEM`.

No define todavía:

- shell de `Project Hub`,
- shell de `PM Mail`,
- shell de `Control PEM`.

---

## 1. Taxonomía de clasificación

### 1.1 PM-System específico

Componentes que pertenecen al Centro de Operaciones y no deben salir a `shared UI` como patrón general.

### 1.2 Primitives genéricas

Base técnica reusable de bajo nivel. Suelen ser wrappers Radix/shadcn o primitives de infraestructura.

### 1.3 Candidatos a shared UI

Componentes o patrones que, con refactor controlado, podrían convertirse en sistema compartido del ecosistema.

### 1.4 No compartir

Componentes que por semántica, composición o propósito no deben trasladarse a una librería compartida.

---

## 2. Componentes PM-System específicos

Estos elementos deben seguir viviendo bajo lógica de `PM-System` y no deben convertirse en piezas compartidas sin perder su sentido original.

### 2.1 Shell activo del Centro de Operaciones

- `Figma/src/app/App.tsx`

Motivo:

- compone la home del Centro de Operaciones,
- mezcla dashboard, launcher y mapa ecosistema,
- no es una primitive ni un layout de producto general.

### 2.2 Orbital Core

- `Figma/src/app/components/v7/orbital-core.tsx`

Motivo:

- es una pieza exclusiva del home de `PM-System`,
- representa el ecosistema,
- sería un error trasladarlo a `Project Hub`, `PM Mail` o `Control PEM`.

### 2.3 Composición dashboard-home

Patrones que deben seguir asociados al shell de `PM-System`:

- hero editorial,
- bloque izquierdo `metrics + command + quick actions`,
- bloque derecho de módulos del sistema,
- lectura “ecosistema-first”.

Motivo:

- esa composición no es neutral,
- no debe convertirse en layout base de otros productos.

---

## 3. Primitives genéricas

Estos archivos son infraestructura de UI y son candidatos naturales a formar la base técnica de una futura `shared UI`, pero todavía no deben moverse físicamente.

### 3.1 Primitives de control y formulario

- `Figma/src/app/components/ui/button.tsx`
- `Figma/src/app/components/ui/input.tsx`
- `Figma/src/app/components/ui/textarea.tsx`
- `Figma/src/app/components/ui/select.tsx`
- `Figma/src/app/components/ui/checkbox.tsx`
- `Figma/src/app/components/ui/radio-group.tsx`
- `Figma/src/app/components/ui/switch.tsx`
- `Figma/src/app/components/ui/slider.tsx`
- `Figma/src/app/components/ui/input-otp.tsx`
- `Figma/src/app/components/ui/form.tsx`
- `Figma/src/app/components/ui/label.tsx`

### 3.2 Primitives de estructura y navegación

- `Figma/src/app/components/ui/card.tsx`
- `Figma/src/app/components/ui/tabs.tsx`
- `Figma/src/app/components/ui/table.tsx`
- `Figma/src/app/components/ui/sidebar.tsx`
- `Figma/src/app/components/ui/breadcrumb.tsx`
- `Figma/src/app/components/ui/navigation-menu.tsx`
- `Figma/src/app/components/ui/pagination.tsx`
- `Figma/src/app/components/ui/separator.tsx`
- `Figma/src/app/components/ui/scroll-area.tsx`
- `Figma/src/app/components/ui/resizable.tsx`

### 3.3 Primitives de overlays y feedback

- `Figma/src/app/components/ui/dialog.tsx`
- `Figma/src/app/components/ui/drawer.tsx`
- `Figma/src/app/components/ui/sheet.tsx`
- `Figma/src/app/components/ui/popover.tsx`
- `Figma/src/app/components/ui/tooltip.tsx`
- `Figma/src/app/components/ui/hover-card.tsx`
- `Figma/src/app/components/ui/dropdown-menu.tsx`
- `Figma/src/app/components/ui/context-menu.tsx`
- `Figma/src/app/components/ui/menubar.tsx`
- `Figma/src/app/components/ui/alert-dialog.tsx`
- `Figma/src/app/components/ui/alert.tsx`
- `Figma/src/app/components/ui/sonner.tsx`

### 3.4 Primitives auxiliares

- `Figma/src/app/components/ui/badge.tsx`
- `Figma/src/app/components/ui/avatar.tsx`
- `Figma/src/app/components/ui/progress.tsx`
- `Figma/src/app/components/ui/calendar.tsx`
- `Figma/src/app/components/ui/skeleton.tsx`
- `Figma/src/app/components/ui/toggle.tsx`
- `Figma/src/app/components/ui/toggle-group.tsx`
- `Figma/src/app/components/ui/accordion.tsx`
- `Figma/src/app/components/ui/collapsible.tsx`
- `Figma/src/app/components/ui/carousel.tsx`
- `Figma/src/app/components/ui/chart.tsx`
- `Figma/src/app/components/ui/aspect-ratio.tsx`
- `Figma/src/app/components/ui/use-mobile.ts`
- `Figma/src/app/components/ui/utils.ts`

Lectura correcta:

- son la base técnica reusable,
- pero todavía no equivalen a una `shared UI` validada,
- antes de compartirlas deben alinearse con tokens y semántica oficial.

---

## 4. Candidatos a shared UI

Estos elementos tienen valor real como patrones del ecosistema, pero requieren refactor o encapsulación antes de volverse compartidos.

### 4.1 Candidatos fuertes

#### Status Bar

- `Figma/src/app/components/v7/status-bar.tsx`

Potencial:

- patrón de barra operativa superior,
- reusable en productos del ecosistema con variantes.

Condición:

- debe separarse estructura de contenido específico.

#### Live Metrics

- `Figma/src/app/components/v7/live-metrics.tsx`

Potencial:

- patrón de KPI compacto,
- reusable para dashboards operativos.

Condición:

- desacoplar copy, datos demo y colorización hardcoded.

#### Recent Activity

- `Figma/src/app/components/v7/recent-activity.tsx`

Potencial:

- patrón de resumen de actividad,
- reusable como bloque dashboard.

Condición:

- separar la estructura visual de los datasets actuales.

#### Command Bar

- `Figma/src/app/components/v7/command-bar.tsx`

Potencial:

- patrón shared de comando global o contextual,
- buen encaje para acciones asistidas.

Condición:

- definir variantes:
  - global,
  - contextual,
  - IA asistida.

#### Quick Actions

- `Figma/src/app/components/v7/quick-actions.tsx`

Potencial:

- el tile visual es reusable,
- útil como action grid compartido.

Condición:

- separar versión launcher de versión task-action.

### 4.2 Candidatos medios

#### ui/sidebar

- `Figma/src/app/components/ui/sidebar.tsx`

Potencial:

- infraestructura reusable de sidebar responsive.

Condición:

- no debe confundirse con la sidebar visual específica de `PM-System`.

#### ui/table

- `Figma/src/app/components/ui/table.tsx`

Potencial:

- base clara para `Project Hub` y otras apps.

Condición:

- necesita semántica visual oficial antes de promocionarse a shared.

#### ui/card

- `Figma/src/app/components/ui/card.tsx`

Potencial:

- primitive clara para cards compartidas.

Condición:

- necesita variantes oficiales:
  - operativa,
  - estado,
  - IA.

#### ui/badge

- `Figma/src/app/components/ui/badge.tsx`

Potencial:

- shared semantic badge.

Condición:

- debe incorporar semántica oficial de estados y IA.

#### ui/button

- `Figma/src/app/components/ui/button.tsx`

Potencial:

- base compartida natural.

Condición:

- debe alinearse con jerarquía oficial:
  - primario,
  - secundario,
  - ghost,
  - IA,
  - destructivo.

---

## 5. Componentes que NO deben compartirse

### 5.1 No compartir por semántica

- `Figma/src/app/components/v7/orbital-core.tsx`
- composición completa del `App.tsx`
- hero editorial del Centro de Operaciones
- launcher ecosistema del home

### 5.2 No compartir por historicidad

- `Figma/src/app/components/` root heredado de V2
- `Figma/src/app/components/v1/*`
- `Figma/src/app/components/v3/*`
- `Figma/src/app/components/v4/*`
- `Figma/src/app/components/v5/*`
- `Figma/src/app/components/v6/*`

### 5.3 No compartir todavía por inmadurez de sistema

- cualquier componente V7 que siga fuertemente atado a copy demo,
- cualquier primitive `ui/*` que dependa todavía de semánticas neutrales o legacy no alineadas,
- cualquier componente que mezcle acceso ecosistema con operativa de producto.

---

## 6. Riesgos de extracción prematura

### 6.1 Riesgo de mover demasiado pronto

Si se mueve a `shared UI` antes de separar semántica y composición:

- se arrastra lógica específica de `PM-System`,
- se convierte el home en plantilla universal por accidente,
- se propaga deuda visual legacy.

### 6.2 Riesgo de compartir la sidebar equivocada

La `sidebar` visual de `PM-System` no es la sidebar universal del ecosistema.

Si se comparte sin separar:

- `Project Hub` heredará un launcher,
- la navegación densa quedará mal resuelta,
- se perderán límites entre producto y ecosistema.

### 6.3 Riesgo de compartir componentes demo

`quick-actions`, `recent-activity` y `live-metrics` son buenos patrones, pero hoy contienen:

- contenido demo,
- decisiones de layout específicas,
- semántica del centro de operaciones.

Moverlos sin refactor crea falsa estandarización.

### 6.4 Riesgo de shared UI demasiado amplia

No todo lo reusable debe ir a shared.

Shared debe contener:

- primitives,
- patrones de interfaz,
- tokens,
- semántica consistente.

No debe contener:

- narrativa de producto,
- composición de home,
- widgets ecosistema-first.

---

## 7. Criterios para decidir cuándo mover algo a shared

Un componente solo debe moverse a `shared UI` cuando cumpla todos estos criterios:

### 7.1 Neutralidad

- puede usarse sin depender del contexto narrativo de `PM-System`.

### 7.2 Semántica clara

- su propósito es estable y no ambiguo.

### 7.3 Tokens oficiales

- ya usa o puede usar sin fricción la fundación `Premium Blue + AI Magenta`.

### 7.4 Bajo acoplamiento

- no depende de datasets demo, módulos de ecosistema ni copy del home.

### 7.5 Reutilización real

- al menos dos productos podrían usarlo sin deformarlo.

### 7.6 Coste razonable

- moverlo no obliga a reescribir shell, layout o arquitectura visual.

---

## 8. Decisión operativa actual

Estado actual recomendado:

- mantener `App.tsx` y `components/v7/` como shell propio de `PM-System`,
- mantener `ui/*` como base técnica local,
- documentar como candidatos shared:
  - `status-bar`,
  - `live-metrics`,
  - `recent-activity`,
  - `command-bar`,
  - `quick-actions`,
  - `ui/button`,
  - `ui/badge`,
  - `ui/card`,
  - `ui/input`,
  - `ui/tabs`,
  - `ui/table`,
  - `ui/sidebar`,
- excluir por ahora:
  - `orbital-core`,
  - hero layout,
  - launcher del home,
  - variantes históricas.

No se debe mover nada todavía.
