# PM-System UI Backlog

## Propósito

Este documento convierte la estrategia ya cerrada en un backlog técnico ejecutable para `PM SYSTEM`.

Base documental:

- [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md)
- [PM_SYSTEM_UI_AUDIT.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_AUDIT.md)
- [PM_SYSTEM_UI_DECISIONS.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_DECISIONS.md)
- [PM_SYSTEM_UI_MIGRATION_PLAN.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_MIGRATION_PLAN.md)

Alcance de este backlog:

- solo `PM SYSTEM`,
- sin implementar todavía cambios en `Project Hub`,
- sin implementar todavía cambios en `PM Mail`,
- sin implementar todavía cambios en `Control PEM`.

---

## 1. Backlog por fases

### Fase 1 — Canonización V7

#### Objetivo

Dejar inequívoco que `V7` es la única base visual activa del Centro de Operaciones `PM-System`.

#### Tareas concretas

- revisar documentación de `Figma/` que todavía presenta `V1`-`V6` como opciones equivalentes,
- actualizar la narrativa de arranque para que `App.tsx` + `components/v7/` sean la referencia activa,
- marcar explícitamente que las variantes históricas no son baseline de implementación,
- alinear los documentos de referencia del repo con el canon ya definido en los documentos maestros,
- revisar si el naming de archivos y secciones induce a pensar que `V7` es solo otra variante.

#### Archivos/carpetas implicadas

- `Figma/README.md`
- `Figma/START-HERE.md`
- `Figma/VERSIONS.md`
- `Figma/DOCS-INDEX.md`
- `Figma/CHANGELOG.md`
- `Figma/src/app/App.tsx`
- `Figma/src/app/components/v7/`

#### Rama sugerida

- `docs/ui-canon-v7`

#### Validación esperada

- la documentación vigente identifica `V7` como canon activo,
- no queda ningún documento principal sugiriendo que `V1`-`V6` son alternativas vigentes para implementación nueva,
- el equipo puede localizar la base activa sin interpretar el historial.

---

### Fase 2 — Archivo de variantes históricas

#### Objetivo

Separar visualmente y documentalmente el material histórico para que deje de competir con el canon activo.

#### Tareas concretas

- inventariar variantes históricas y su uso residual,
- etiquetar `App-v1` a `App-v6` como histórico en documentación y estructura,
- etiquetar `components/v1`, `v3`, `v4`, `v5`, `v6` como histórico,
- etiquetar la carpeta raíz `Figma/src/app/components/` sin versión como legado heredado de V2,
- definir qué documentación queda como archivo y cuál sigue activa,
- registrar qué material histórico se conservará temporalmente y qué podrá eliminarse más adelante.

#### Archivos/carpetas implicadas

- `Figma/src/app/App-v1-cinematic-dark.tsx`
- `Figma/src/app/App-v2-industrial-warm-dark.tsx`
- `Figma/src/app/App-v3-industrial-light-original.tsx`
- `Figma/src/app/App-v4-industrial-light-refined.tsx`
- `Figma/src/app/App-v5-industrial-light-premium.tsx`
- `Figma/src/app/App-v6-industrial-premium.tsx`
- `Figma/src/app/components/`
- `Figma/src/app/components/v1/`
- `Figma/src/app/components/v3/`
- `Figma/src/app/components/v4/`
- `Figma/src/app/components/v5/`
- `Figma/src/app/components/v6/`
- documentación histórica en `Figma/`

#### Rama sugerida

- `cleanup/archive-legacy-visual-variants`

#### Validación esperada

- queda claro qué carpetas son históricas,
- las variantes legacy no compiten con `V7` en la lectura del repo,
- no se borra nada todavía,
- el histórico sigue accesible, pero fuera de la línea activa.

---

### Fase 3 — Tokens Premium Blue + AI Magenta

#### Objetivo

Convertir la identidad visual oficial en una base técnica reutilizable dentro de `PM SYSTEM`.

#### Tareas concretas

- definir inventario de tokens visuales activos,
- localizar dependencias de `teal`, `petrol`, `copper`, `dark` y utilidades heredadas,
- preparar especificación de tokens de color, superficie, borde, texto y estados,
- preparar especificación de variantes para:
  - botón,
  - badge,
  - card,
  - input,
  - tabs,
  - table,
  - sidebar,
- identificar qué parte del sistema actual usa colores hardcoded y qué parte usa variables,
- decidir estrategia de transición sin romper la UI activa.

#### Archivos implicados

- `Figma/src/styles/theme.css`
- `Figma/src/styles/globals.css`
- `Figma/src/styles/index.css`
- `Figma/src/styles/tailwind.css`
- `Figma/default_shadcn_theme.css`
- `Figma/src/app/components/ui/button.tsx`
- `Figma/src/app/components/ui/badge.tsx`
- `Figma/src/app/components/ui/card.tsx`
- `Figma/src/app/components/ui/input.tsx`
- `Figma/src/app/components/ui/tabs.tsx`
- `Figma/src/app/components/ui/table.tsx`
- `Figma/src/app/components/ui/sidebar.tsx`
- `Figma/src/app/components/v7/*`

#### Rama sugerida

- `refactor/design-tokens-premium-blue-ai-magenta`

#### Validación esperada

- existe un mapa claro de tokens oficiales,
- quedan detectadas las herencias visuales antiguas,
- se puede empezar a refactorizar sin improvisar colores por componente,
- el sistema deja de depender de clases hardcoded como única fuente de identidad.

---

### Fase 4 — Separación shared UI futura

#### Objetivo

Separar dentro de `PM SYSTEM` qué es shared UI candidata y qué es exclusivo del shell `PM-System`.

#### Tareas concretas

- clasificar componentes activos entre:
  - primitives compartibles,
  - patrones reutilizables,
  - widgets exclusivos del Centro de Operaciones,
- definir carpeta o convención futura para shared UI sin mover todavía código sensible,
- listar componentes V7 que pueden convertirse en patrones,
- listar componentes que deben quedarse en `PM-System`,
- definir límites de extracción para no romper el shell actual.

#### Qué componentes son candidatos

Candidatos fuertes:

- `Figma/src/app/components/ui/button.tsx`
- `Figma/src/app/components/ui/badge.tsx`
- `Figma/src/app/components/ui/card.tsx`
- `Figma/src/app/components/ui/input.tsx`
- `Figma/src/app/components/ui/tabs.tsx`
- `Figma/src/app/components/ui/table.tsx`
- `Figma/src/app/components/ui/sidebar.tsx`
- `Figma/src/app/components/v7/status-bar.tsx`
- `Figma/src/app/components/v7/live-metrics.tsx`
- `Figma/src/app/components/v7/recent-activity.tsx`
- `Figma/src/app/components/v7/command-bar.tsx`
- `Figma/src/app/components/v7/quick-actions.tsx`

#### Qué NO mover todavía

- `Figma/src/app/App.tsx`
- `Figma/src/app/components/v7/orbital-core.tsx`
- composición completa del home de `PM-System`
- documentación histórica
- variantes `V1`-`V6`

#### Rama sugerida

- `refactor/shared-ui-extraction`

#### Validación esperada

- queda definido qué se puede compartir,
- queda definido qué sigue siendo exclusivo de `PM-System`,
- no se rompe la composición del shell actual,
- se reduce el riesgo de convertir el home en plantilla universal.

---

### Fase 5 — Limpieza de referencias cruzadas

#### Objetivo

Asegurar que las referencias a `Project Hub`, `PM Mail` y `Control PEM` se entiendan como accesos o módulos del ecosistema, no como UIs internas ya implementadas.

#### Tareas concretas

- revisar copy, labels y documentación que presenten otros productos como si fueran pantallas internas completas,
- revisar `quick-actions`, `sidebar`, `orbital-core` y `recent-activity` para detectar referencias cruzadas ambiguas,
- revisar documentación V7 y README para evitar que `PM Mail` se lea como layout heredado y no solo como identidad cromática,
- documentar límites explícitos: `Project Hub`, `PM Mail` y `Control PEM` no se implementan todavía aquí,
- identificar nombres o estructuras que empujen a `Project Hub` hacia launcher en vez de app operativa futura.

#### Referencias que deben quedar como accesos, no como UIs internas

- `Project_Hub`
- `Control_PEM`
- `Automatizaciones`
- `IA Agents`
- `PM Mail` como identidad heredada de color, no como shell visual reutilizado

#### Archivos probables

- `Figma/src/app/components/v7/sidebar.tsx`
- `Figma/src/app/components/v7/quick-actions.tsx`
- `Figma/src/app/components/v7/orbital-core.tsx`
- `Figma/src/app/components/v7/recent-activity.tsx`
- `Figma/README.md`
- `Figma/START-HERE.md`
- `Figma/V7-PM-MAIL-IDENTITY.md`

#### Rama sugerida

- `cleanup/cross-product-reference-boundaries`

#### Validación esperada

- `PM SYSTEM` deja de insinuar que contiene la UI completa de otros productos,
- `Project Hub` no queda presentado como launcher interno,
- `PM Mail` no se interpreta como layout clonado,
- `Control PEM` no se lee como módulo visual complejo ya definido aquí.

---

## 2. Tabla de tareas

| ID | Nombre | Tipo | Prioridad | Rama sugerida | Archivos probables | Riesgo | Criterio de done |
|---|---|---|---|---|---|---|---|
| UIB-001 | Canonizar V7 en documentación principal | docs | Alta | `docs/ui-canon-v7` | `Figma/README.md`, `Figma/START-HERE.md`, `Figma/VERSIONS.md` | Bajo | `V7` queda identificado como única base activa en docs principales |
| UIB-002 | Marcar `App.tsx` y `components/v7` como referencia canónica | docs | Alta | `docs/ui-canon-v7` | `Figma/src/app/App.tsx`, `Figma/src/app/components/v7/` | Bajo | cualquier lector del repo identifica el shell activo sin ambigüedad |
| UIB-003 | Inventariar variantes históricas activas y legado residual | docs | Alta | `cleanup/archive-legacy-visual-variants` | `Figma/src/app/App-v*`, `Figma/src/app/components/v*`, `Figma/src/app/components/` | Bajo | existe lista cerrada de legacy visual y su estado |
| UIB-004 | Etiquetar V1-V6 como histórico | cleanup | Alta | `cleanup/archive-legacy-visual-variants` | `Figma/README.md`, `Figma/VERSIONS.md`, `Figma/DOCS-INDEX.md` | Bajo | V1-V6 dejan de competir con V7 en documentación |
| UIB-005 | Etiquetar `components/` root como legado V2 | cleanup | Alta | `cleanup/archive-legacy-visual-variants` | `Figma/src/app/components/`, docs asociadas | Medio | la carpeta root deja de parecer base activa |
| UIB-006 | Auditar tokens y hardcodes de color | tokens | Alta | `refactor/design-tokens-premium-blue-ai-magenta` | `Figma/src/styles/theme.css`, `Figma/src/app/components/ui/*`, `Figma/src/app/components/v7/*` | Medio | existe mapa de colores activos, heredados y hardcoded |
| UIB-007 | Definir inventario oficial de tokens Premium Blue + AI Magenta | tokens | Alta | `refactor/design-tokens-premium-blue-ai-magenta` | `Figma/src/styles/theme.css`, docs visuales | Medio | queda especificado el set oficial de tokens a implementar |
| UIB-008 | Preparar variantes oficiales de botón y badge | tokens | Media | `refactor/design-tokens-premium-blue-ai-magenta` | `Figma/src/app/components/ui/button.tsx`, `Figma/src/app/components/ui/badge.tsx` | Medio | existe especificación cerrada de variantes y semántica |
| UIB-009 | Preparar variantes oficiales de card, input, tabs y table | tokens | Media | `refactor/design-tokens-premium-blue-ai-magenta` | `Figma/src/app/components/ui/card.tsx`, `input.tsx`, `tabs.tsx`, `table.tsx` | Medio | queda definido el comportamiento visual base de primitives clave |
| UIB-010 | Identificar soporte dark heredado que no debe seguir como baseline | tokens | Media | `refactor/design-tokens-premium-blue-ai-magenta` | `Figma/src/styles/theme.css`, `default_shadcn_theme.css`, `ui/*` | Medio | queda listado qué dark support es técnico y qué dark visual queda obsoleto |
| UIB-011 | Clasificar componentes entre shared candidate y PM-System exclusive | refactor | Alta | `refactor/shared-ui-extraction` | `Figma/src/app/components/ui/*`, `Figma/src/app/components/v7/*` | Medio | existe taxonomía cerrada de compartible vs exclusivo |
| UIB-012 | Definir límites de extracción para shared UI futura | refactor | Alta | `refactor/shared-ui-extraction` | `Figma/src/app/App.tsx`, `Figma/src/app/components/v7/*` | Medio | se sabe qué no mover todavía y por qué |
| UIB-013 | Aislar `orbital-core` como widget exclusivo de PM-System | refactor | Alta | `refactor/shared-ui-extraction` | `Figma/src/app/components/v7/orbital-core.tsx`, docs de arquitectura UI | Medio | `orbital-core` deja de considerarse candidato a shared layout |
| UIB-014 | Separar `quick-actions` entre launcher y task-action pattern | refactor | Media | `refactor/shared-ui-extraction` | `Figma/src/app/components/v7/quick-actions.tsx` | Medio | queda documentada la separación conceptual del patrón |
| UIB-015 | Revisar `sidebar` V7 como patrón exclusivo del centro de operaciones | refactor | Media | `refactor/shared-ui-extraction` | `Figma/src/app/components/v7/sidebar.tsx`, `ui/sidebar.tsx` | Medio | queda claro que no es sidebar universal de producto |
| UIB-016 | Revisar referencias a Project Hub como acceso y no como UI interna | cleanup | Alta | `cleanup/cross-product-reference-boundaries` | `Figma/src/app/components/v7/orbital-core.tsx`, `sidebar.tsx`, `quick-actions.tsx` | Bajo | `Project Hub` se presenta como módulo/acceso, no como UI resuelta |
| UIB-017 | Revisar referencias a PM Mail para evitar lectura de shell heredado | cleanup | Media | `cleanup/cross-product-reference-boundaries` | `Figma/README.md`, `Figma/V7-PM-MAIL-IDENTITY.md` | Bajo | `PM Mail` queda acotado como identidad cromática compartida |
| UIB-018 | Revisar referencias a Control PEM como acceso operativo, no shell completo | cleanup | Media | `cleanup/cross-product-reference-boundaries` | `Figma/src/app/components/v7/*`, docs V7 | Bajo | `Control PEM` no queda sobredefinido dentro de PM SYSTEM |
| UIB-019 | Consolidar documentación activa vs histórica | docs | Media | `docs/ui-canon-v7` | `Figma/README.md`, `DOCS-INDEX.md`, `START-HERE.md`, maestros en raíz | Bajo | la documentación activa remite siempre al canon y a backlog vigente |
| UIB-020 | Verificación final de backlog y migración documental | validation | Alta | `docs/ui-canon-v7` o rama final de integración | todos los documentos maestros y docs `Figma/` | Bajo | no quedan contradicciones entre design system, audit, decisions, migration plan y backlog |

---

## 3. Orden recomendado de ejecución

1. Ejecutar `UIB-001`, `UIB-002` y `UIB-019` para fijar el canon documental.
2. Ejecutar `UIB-003`, `UIB-004` y `UIB-005` para aislar el legado visual.
3. Ejecutar `UIB-006`, `UIB-007`, `UIB-008`, `UIB-009` y `UIB-010` para cerrar la capa de tokens.
4. Ejecutar `UIB-011`, `UIB-012`, `UIB-013`, `UIB-014` y `UIB-015` para separar shared UI futura de shell exclusivo.
5. Ejecutar `UIB-016`, `UIB-017` y `UIB-018` para limpiar referencias cruzadas y bloquear lecturas erróneas de producto.
6. Cerrar con `UIB-020` como validación documental y estructural final antes de cualquier implementación.

---

## Cierre

La ejecución correcta de este backlog no debe intentar “refactorizar todo” a la vez. Debe cerrar primero el marco de verdad del repositorio y solo después preparar tokens, shared UI y límites de producto.

Regla operativa:

- primero canon,
- después archivo,
- después tokens,
- después separación shared UI,
- y solo al final limpieza cruzada y validación global.

Si se rompe ese orden, se mezclará otra vez legado, sistema activo y producto futuro.
