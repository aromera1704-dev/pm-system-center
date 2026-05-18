# PM-System UI Legacy Inventory

## Propósito

Este documento ejecuta `UIB-003` del backlog visual.

No redefine diseño. No mueve carpetas. No toca componentes.

Su función es dejar una lectura cerrada del legacy visual actual de `PM SYSTEM` y evitar que variantes históricas compitan con `V7`.

Referencias base:

- [PM_SYSTEM_UI_BACKLOG.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_BACKLOG.md)
- [PM_SYSTEM_UI_DECISIONS.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_DECISIONS.md)
- [PM_SYSTEM_UI_MIGRATION_PLAN.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_MIGRATION_PLAN.md)

---

## 1. Lectura canónica actual

- `Figma/src/app/App.tsx` es el shell visual activo.
- `Figma/src/app/components/v7/` es la familia activa del Centro de Operaciones `PM-System`.
- `App-v1` a `App-v6`, `components/v1`, `v3`, `v4`, `v5`, `v6` y la carpeta root heredada `Figma/src/app/components/` no son baseline activo.
- La carpeta root sin versión explícita equivale de facto al legado heredado de `V2`.

Conclusión operativa:

- `V7` = `canon activo`
- `V1` a `V6` = `histórico`
- `components/` root sin versión = `legado residual`

---

## 2. Inventario de shells visuales

### `Figma/src/app/App.tsx`

- Estado: `canon activo`
- Riesgo de confusión: `bajo`
- Reutilización: `sí`, como shell activo del Centro de Operaciones
- Nota: es la única entrada que debe leerse como base vigente.

### `Figma/src/app/App-v1-cinematic-dark.tsx`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`
- Motivo: conserva una visualidad cinematic/dark que contradice el sistema oficial actual.

### `Figma/src/app/App-v2-industrial-warm-dark.tsx`

- Estado: `histórico`
- Riesgo de confusión: `alto`
- Reutilización: `no`
- Motivo: su identidad visual sigue viva parcialmente en componentes root heredados, por eso induce a pensar que sigue siendo línea activa.

### `Figma/src/app/App-v3-industrial-light-original.tsx`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`
- Motivo: ya no es baseline, aunque forma parte de la evolución hacia una UI clara.

### `Figma/src/app/App-v4-industrial-light-refined.tsx`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`
- Motivo: tiene documentación asociada abundante y por eso puede confundirse con una referencia todavía vigente.

### `Figma/src/app/App-v5-industrial-light-premium.tsx`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`
- Motivo: aporta transición estilística, pero no debe usarse como patrón nuevo.

### `Figma/src/app/App-v6-industrial-premium.tsx`

- Estado: `histórico`
- Riesgo de confusión: `alto`
- Reutilización: `no`, salvo lectura comparativa previa a `V7`
- Motivo: es la iteración inmediatamente anterior al canon y puede interpretarse erróneamente como alternativa vigente.

---

## 3. Inventario de familias de componentes versionadas

### `Figma/src/app/components/v1/`

Contenido detectado:

- `activity-cards.tsx`
- `background-effects.tsx`
- `command-bar.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

Clasificación:

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`
- Motivo: refleja una fase visual ya descartada y con sesgo expresivo superior al permitido por el sistema actual.

### `Figma/src/app/components/v3/`

Contenido detectado:

- `activity-cards.tsx`
- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

Clasificación:

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`
- Motivo: es evolución intermedia, útil solo para trazabilidad de decisiones.

### `Figma/src/app/components/v4/`

Contenido detectado:

- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `recent-activity.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

Clasificación:

- Estado: `histórico`
- Riesgo de confusión: `alto`
- Reutilización: `no`
- Motivo: tiene suficiente madurez y documentación como para parecer reusable, pero quedó superado por `V7`.

### `Figma/src/app/components/v5/`

Contenido detectado:

- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `recent-activity.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

Clasificación:

- Estado: `histórico`
- Riesgo de confusión: `alto`
- Reutilización: `no`
- Motivo: está cerca del lenguaje premium actual, pero no responde al canon final `Premium Blue + AI Magenta`.

### `Figma/src/app/components/v6/`

Contenido detectado:

- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `recent-activity.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

Clasificación:

- Estado: `histórico`
- Riesgo de confusión: `alto`
- Reutilización: `no`, salvo comparación puntual con `V7`
- Motivo: es la predecesora directa del canon y por eso su proximidad formal aumenta el riesgo de uso incorrecto.

### `Figma/src/app/components/v7/`

Contenido detectado:

- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `recent-activity.tsx`
- `sidebar.tsx`
- `status-bar.tsx`
- `README.md`

Clasificación:

- Estado: `canon activo`
- Riesgo de confusión: `bajo`
- Reutilización: `sí`, con límites
- Motivo: es la única familia activa del shell `PM-System`.

Límite importante:

- `v7/` no equivale automáticamente a `shared UI`.
- `orbital-core`, home composition y patrones launcher siguen siendo específicos de `PM-System`.

---

## 4. Componentes root heredados sin versión

Ruta:

- `Figma/src/app/components/`

Contenido heredado detectado:

- `activity-cards.tsx`
- `background-effects.tsx`
- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

Clasificación:

- Estado: `legado residual`
- Riesgo de confusión: `alto`
- Reutilización: `no` como referencia activa
- Motivo: al no llevar versión explícita, parecen componentes vigentes, pero corresponden a la línea heredada de `V2`.

Lectura correcta:

- no son canon,
- no deben tomarse como base para refactor nuevo,
- deben mantenerse accesibles solo como material heredado hasta una fase posterior de archivo o eliminación segura.

Estado futuro esperado:

- `candidato a archivo futuro`

---

## 5. Primitives genéricas actuales

Ruta:

- `Figma/src/app/components/ui/`

Contenido base detectado:

- primitives de `button`, `badge`, `card`, `table`, `tabs`, `input`, `select`, `dialog`, `sheet`, `sidebar`
- primitives Radix/shadcn complementarias
- utilidades `use-mobile.ts` y `utils.ts`

Clasificación:

- Estado: `legado activo reutilizable`
- Riesgo de confusión: `medio`
- Reutilización: `sí`, pero solo como infraestructura
- Motivo: son base técnica útil, pero todavía no equivalen a shared UI oficial ni a sistema visual cerrado.

Límite:

- no deben clasificarse como histórico,
- tampoco deben venderse como design system ya consolidado.

---

## 6. Documentación histórica asociada

### Documentación activa

#### `Figma/README.md`

- Estado: `activa`
- Riesgo de confusión: `bajo`
- Reutilización: `sí`

#### `Figma/START-HERE.md`

- Estado: `activa`
- Riesgo de confusión: `bajo`
- Reutilización: `sí`

#### `Figma/VERSIONS.md`

- Estado: `activa`, con foco histórico controlado
- Riesgo de confusión: `medio`
- Reutilización: `sí`, como mapa evolutivo

#### `Figma/DOCS-INDEX.md`

- Estado: `activa`
- Riesgo de confusión: `bajo`
- Reutilización: `sí`

#### `Figma/CHANGELOG.md`

- Estado: `activa`, como historial
- Riesgo de confusión: `medio`
- Reutilización: `sí`

#### `Figma/DESIGN-GUIDE.md`

- Estado: `legado residual`
- Riesgo de confusión: `medio`
- Reutilización: `limitada`
- Motivo: puede seguir conteniendo reglas útiles, pero no debe competir con los documentos maestros del repo.

### Documentación histórica

#### `Figma/V4-SUMMARY.md`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`

#### `Figma/V4-REFINEMENTS.md`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`

#### `Figma/V5-PREMIUM-REFINEMENT.md`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`

#### `Figma/V5-QUICK-GUIDE.md`

- Estado: `histórico`
- Riesgo de confusión: `medio`
- Reutilización: `no`

#### `Figma/V6-CONTROLLED-REFINEMENT.md`

- Estado: `histórico`
- Riesgo de confusión: `alto`
- Reutilización: `no`

#### `Figma/V7-PM-MAIL-IDENTITY.md`

- Estado: `legado residual`
- Riesgo de confusión: `alto`
- Reutilización: `no` dentro del scope actual de `PM SYSTEM`
- Motivo: mezcla exploración de identidad de `PM Mail` dentro del material de `PM SYSTEM` y puede contaminar límites entre productos.

#### `Figma/ATTRIBUTIONS.md`

- Estado: `soporte documental`
- Riesgo de confusión: `bajo`
- Reutilización: `sí`

---

## 7. Cierre operativo

Queda fijado lo siguiente:

- `App.tsx` + `components/v7/` = única línea visual activa.
- `App-v1` a `App-v6` = histórico conservado.
- `components/v1`, `v3`, `v4`, `v5`, `v6` = histórico conservado.
- `components/` root sin versión = legado residual heredado de `V2`.
- `components/ui/` = infraestructura reusable, no shared UI cerrada.
- documentación `V4`, `V5`, `V6` y exploraciones cruzadas = histórico o legado residual, no referencia activa.

Este inventario no autoriza todavía:

- mover carpetas,
- borrar variantes,
- rehacer componentes,
- reimportar familias históricas,
- usar legado sin clasificar como referencia nueva.
