# PM-System UI Migration Plan

## Propósito

Este documento convierte el sistema visual, la auditoría y las decisiones ya cerradas en un plan de migración ejecutable por carpetas, variantes y componentes.

Base documental:

- [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md)
- [PM_SYSTEM_UI_AUDIT.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_AUDIT.md)
- [PM_SYSTEM_UI_DECISIONS.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_DECISIONS.md)

Este plan no implementa cambios. Define orden, alcance y criterio.

---

## 1. Estado actual de carpetas

### 1.1 Shells visuales principales

En `Figma/src/app/` existen:

- `App.tsx` → versión activa actual basada en `V7`
- `App-v1-cinematic-dark.tsx`
- `App-v2-industrial-warm-dark.tsx`
- `App-v3-industrial-light-original.tsx`
- `App-v4-industrial-light-refined.tsx`
- `App-v5-industrial-light-premium.tsx`
- `App-v6-industrial-premium.tsx`

Lectura correcta:

- `App.tsx` es el shell activo.
- `App-v1` a `App-v6` son variantes históricas o de transición.

### 1.2 Carpetas de componentes visuales

En `Figma/src/app/components/` existen:

- raíz sin versión explícita → equivale de facto a la línea heredada V2
- `v1/`
- `v3/`
- `v4/`
- `v5/`
- `v6/`
- `v7/`
- `ui/`
- `figma/`

### 1.3 Contenido por familias

#### Componentes de shell y dashboard

Detectados en varias ramas:

- `sidebar.tsx`
- `status-bar.tsx`
- `command-bar.tsx`
- `live-metrics.tsx`
- `quick-actions.tsx`
- `orbital-core.tsx`
- `recent-activity.tsx`
- `activity-cards.tsx`
- `background-effects.tsx`

#### Componentes base reutilizables

En `Figma/src/app/components/ui/`:

- `button.tsx`
- `card.tsx`
- `badge.tsx`
- `table.tsx`
- `tabs.tsx`
- `input.tsx`
- `select.tsx`
- `dialog.tsx`
- `sheet.tsx`
- `sidebar.tsx`
- y otras primitives Radix/shadcn

#### Material documental histórico y de iteración

En `Figma/` existen:

- `VERSIONS.md`
- `README.md`
- `START-HERE.md`
- `DESIGN-GUIDE.md`
- `V4-SUMMARY.md`
- `V4-REFINEMENTS.md`
- `V5-PREMIUM-REFINEMENT.md`
- `V5-QUICK-GUIDE.md`
- `V6-CONTROLLED-REFINEMENT.md`
- `V7-PM-MAIL-IDENTITY.md`
- `CHANGELOG.md`
- `DOCS-INDEX.md`

### 1.4 Material histórico detectado

Se considera histórico:

- variantes `V1`, `V2`, `V3`, `V4`, `V5`, `V6` como referencia no activa,
- componentes root heredados sin versión,
- dark tokens y utilidades asociadas a petróleo/cobre,
- documentación de exploración previa a la decisión canónica.

---

## 2. Clasificación por acción

### 2.1 KEEP

Conservar como base activa o casi activa.

#### `Figma/src/app/App.tsx`

Acción: `KEEP`

Motivo:

- es la base canónica actual del Centro de Operaciones PM-System.

#### `Figma/src/app/components/v7/`

Acción: `KEEP`

Motivo:

- contiene la única familia visual activa alineada con `Premium Blue + AI Magenta`.

#### `Figma/src/app/components/v7/status-bar.tsx`

Acción: `KEEP`

Motivo:

- patrón operativo válido y estable.

#### `Figma/src/app/components/v7/live-metrics.tsx`

Acción: `KEEP`

Motivo:

- KPI compacto reutilizable y visualmente sano.

#### `Figma/src/app/components/v7/recent-activity.tsx`

Acción: `KEEP`

Motivo:

- bloque operacional útil y reusable.

### 2.2 REFACTOR

Conservar el concepto, pero normalizarlo o separarlo.

#### `Figma/src/app/components/v7/command-bar.tsx`

Acción: `REFACTOR`

Motivo:

- debe pasar de pieza puntual a patrón de sistema con variantes.

#### `Figma/src/app/components/v7/quick-actions.tsx`

Acción: `REFACTOR`

Motivo:

- mezcla acción real y lógica launcher.

#### `Figma/src/app/components/v7/sidebar.tsx`

Acción: `REFACTOR`

Motivo:

- válida para `PM-System`, insuficiente como patrón transversal.

#### `Figma/src/app/components/v7/orbital-core.tsx`

Acción: `REFACTOR`

Motivo:

- debe encapsularse como widget exclusivo de `PM-System`.

#### `Figma/src/app/components/ui/`

Acción: `REFACTOR`

Motivo:

- base técnica útil,
- identidad visual todavía no canonizada en tokens y variantes.

#### `Figma/src/styles/theme.css`

Acción: `REFACTOR`

Motivo:

- sigue arrastrando soporte y semántica de paletas heredadas.

#### `Figma/src/styles/globals.css`

Acción: `REFACTOR`

Motivo:

- está vacía o sin papel real; debe definirse su función o descartarse después.

### 2.3 ARCHIVE

Mantener como histórico, fuera de referencia activa.

#### `Figma/src/app/App-v1-cinematic-dark.tsx`

Acción: `ARCHIVE`

#### `Figma/src/app/App-v2-industrial-warm-dark.tsx`

Acción: `ARCHIVE`

#### `Figma/src/app/App-v3-industrial-light-original.tsx`

Acción: `ARCHIVE`

#### `Figma/src/app/App-v4-industrial-light-refined.tsx`

Acción: `ARCHIVE`

#### `Figma/src/app/App-v5-industrial-light-premium.tsx`

Acción: `ARCHIVE`

#### `Figma/src/app/App-v6-industrial-premium.tsx`

Acción: `ARCHIVE`

#### `Figma/src/app/components/v1/`

Acción: `ARCHIVE`

#### `Figma/src/app/components/v3/`

Acción: `ARCHIVE`

#### `Figma/src/app/components/v4/`

Acción: `ARCHIVE`

#### `Figma/src/app/components/v5/`

Acción: `ARCHIVE`

#### `Figma/src/app/components/v6/`

Acción: `ARCHIVE`

#### documentación iterativa V4-V6

Acción: `ARCHIVE`

Motivo:

- útil para histórico,
- no debe seguir guiando decisiones activas.

### 2.4 DELETE LATER

No borrar ahora. Marcar para limpieza diferida cuando la migración esté estable.

#### `Figma/src/app/components/` raíz sin versión

Acción: `DELETE LATER`

Motivo:

- herencia V2,
- fuente de ambigüedad,
- duplicación innecesaria frente a `v7/`.

#### utilidades visuales dark/petrol/copper no reutilizadas

Acción: `DELETE LATER`

Motivo:

- cuando `theme.css` y shared UI estén estabilizados, deben retirarse.

#### documentación de arranque que contradiga el canon actual

Acción: `DELETE LATER`

Motivo:

- después de consolidar documentación final, habrá que eliminar guías que induzcan a activar V1-V6 como si fueran opciones vigentes.

---

## 3. Orden de migración recomendado

### Fase 1. Canonizar V7 como base PM-System

Objetivo:

- dejar inequívoco que `App.tsx` + `components/v7/` son la referencia activa del Centro de Operaciones.

Acciones previstas:

- documentar canon,
- señalar en docs y estructura qué es activo,
- evitar que otras variantes sigan presentadas como alternativas vigentes.

No tocar todavía:

- shared UI,
- tokens profundos,
- shells de otros productos.

### Fase 2. Marcar variantes históricas

Objetivo:

- separar claramente activo vs histórico.

Acciones previstas:

- etiquetar `V1`-`V6` como archivo,
- marcar `components/v1`, `v3`, `v4`, `v5`, `v6` como histórico,
- sacar de circulación mental la carpeta root heredada.

No borrar todavía:

- apps históricas,
- documentos iterativos,
- componentes legacy.

### Fase 3. Separar componentes reutilizables

Objetivo:

- diferenciar piezas de `PM-System` de piezas compartibles.

Acciones previstas:

- decidir qué patrones se extraen a shared UI,
- aislar piezas exclusivas del home de `PM-System`,
- preparar una taxonomía nueva:
  - shell PM-System,
  - shared primitives,
  - widgets exclusivos.

No tocar todavía:

- `Project Hub`,
- `PM Mail`,
- `Control PEM`.

### Fase 4. Preparar tokens Premium Blue + AI Magenta

Objetivo:

- convertir la identidad visual en sistema técnico real.

Acciones previstas:

- preparar tokens oficiales,
- alinear `button`, `badge`, `card`, `input`, `tabs`, `table`,
- retirar dependencia de teal/petrol/copper como base activa.

No hacer todavía:

- limpieza destructiva,
- eliminación de dark support si aún hay dependencia técnica no auditada.

### Fase 5. Limpiar referencias que hagan parecer Project Hub un launcher

Objetivo:

- impedir contaminación entre `PM-System` y `Project Hub`.

Acciones previstas:

- revisar nombres, módulos y descripciones que presenten `Project Hub` como simple acceso del launcher,
- separar visualmente home ecosistema de app operativa de proyectos,
- bloquear reutilización de `orbital-core`, `quick-actions launcher` y `sidebar` compacta en `Project Hub`.

No hacer todavía:

- implementación de `Project Hub`,
- rediseño funcional de sus vistas.

### Fase 6. Definir qué queda pendiente para Project Hub, PM Mail y Control PEM

Objetivo:

- dejar backlog claro por producto.

Acciones previstas:

- listar componentes que heredarán shared UI,
- listar componentes exclusivos por producto,
- listar huecos aún no diseñados:
  - tablas densas para `Project Hub`,
  - cliente operativo para `PM Mail`,
  - vistas rápidas de campo para `Control PEM`.

---

## 4. Riesgos

### 4.1 Qué puede romperse

- referencias documentales que sigan apuntando a V1-V6 como si fueran opciones activas,
- imports si se empieza a mover código sin canonizar antes,
- consistencia visual si se mezcla `v7/` con componentes root heredados,
- primitives `ui/*` si se retocan sin una estrategia clara de tokens.

### 4.2 Qué no debe tocarse todavía

- no borrar variantes históricas,
- no mover carpetas sin decidir taxonomía final,
- no introducir aún shell nuevo para `Project Hub`,
- no reescribir `PM Mail` o `Control PEM` sin sistema base estabilizado,
- no tocar de forma oportunista componentes `ui/*` uno por uno sin plan de tokenización.

### 4.3 Qué requiere rama separada

Debe ir en rama separada:

- canonización documental,
- refactor de estructura de carpetas,
- tokenización visual,
- extracción de shared UI,
- limpieza de componentes legacy,
- definición futura de shell por producto.

### 4.4 Riesgo de enfoque incorrecto

El mayor riesgo no es técnico. Es conceptual:

- usar el home actual de `PM-System` como plantilla universal del ecosistema.

Si eso ocurre, la migración será cosmética y el problema estructural seguirá intacto.

---

## 5. Ramas recomendadas

### Rama 1

Nombre recomendado:

- `docs/ui-canon-v7`

Uso:

- canonizar documentación,
- marcar activo vs histórico,
- cerrar nomenclatura.

### Rama 2

Nombre recomendado:

- `refactor/ui-structure-separation`

Uso:

- separar shell activo, histórico y shared base.

### Rama 3

Nombre recomendado:

- `refactor/design-tokens-premium-blue-ai-magenta`

Uso:

- preparar tokens oficiales,
- alinear primitives de sistema.

### Rama 4

Nombre recomendado:

- `refactor/shared-ui-extraction`

Uso:

- extraer componentes reutilizables reales.

### Rama 5

Nombre recomendado:

- `cleanup/archive-legacy-visual-variants`

Uso:

- dejar marcado el legado,
- preparar `DELETE LATER`,
- limpiar referencias obsoletas cuando ya no haya dependencia.

### Rama 6

Nombre recomendado:

- `spec/project-hub-ui-boundaries`

Uso:

- definir límites de `Project Hub` antes de implementar su shell real.

### Rama 7

Nombre recomendado:

- `spec/pm-mail-ui-shell`

Uso:

- definir shell de `PM Mail` sin contaminarlo con launcher ni apariencia Gmail-clon.

### Rama 8

Nombre recomendado:

- `spec/control-pem-light-ui`

Uso:

- definir shell ligero y rápido de `Control PEM`.

---

## 6. Criterios de validación

La migración se considerará bien hecha si se cumplen todas estas condiciones.

### 6.1 Canon visual

- `V7` queda identificado sin ambigüedad como única base visual activa de `PM-System`.
- `V1`-`V6` quedan explícitamente marcadas como históricas.

### 6.2 Estructura

- deja de existir confusión entre componentes activos y componentes legacy,
- la carpeta root heredada deja de ser referencia implícita,
- shared UI queda separada de widgets exclusivos de `PM-System`.

### 6.3 Color

- azul gobierna estructura y navegación,
- magenta queda restringido a IA y automatización,
- no reaparecen teal, petrol o copper como base activa.

### 6.4 Límites entre productos

- `Project Hub` deja de parecer un launcher,
- `PM Mail` no hereda composición de dashboard,
- `Control PEM` no absorbe complejidad visual innecesaria.

### 6.5 Gobernanza documental

- la documentación vigente apunta al sistema oficial,
- las guías viejas no compiten con el canon,
- el histórico queda conservado, pero fuera de decisión activa.

### 6.6 Seguridad de migración

- no se borran archivos antes de tiempo,
- no se rompen imports por movimientos prematuros,
- cada fase puede revisarse y validarse de forma aislada.

---

## Cierre

La migración correcta no consiste en “embellecer” el repositorio. Consiste en ordenar qué es canon, qué es legado, qué es shared UI y qué pertenece solo a `PM-System`.

Secuencia correcta:

1. fijar canon,
2. aislar histórico,
3. separar shared UI,
4. tokenizar identidad,
5. bloquear contaminación hacia `Project Hub`,
6. preparar shells reales por producto.

Si se intenta empezar por `Project Hub` o por limpieza destructiva antes de canonizar `V7`, se hará trabajo duplicado y se mantendrá la ambigüedad actual.
