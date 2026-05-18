# PM-System UI Decisions

## Propósito

Este documento convierte [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md) y [PM_SYSTEM_UI_AUDIT.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_UI_AUDIT.md) en decisiones operativas cerradas.

No describe posibilidades. Define criterio vinculante para diseño, refactor y reutilización futura.

---

## 1. Versión visual canónica

### 1.1 Decisión

`V7` se declara base visual canónica del Centro de Operaciones `PM-System`.

Referencia principal:

- `Figma/src/app/App.tsx`
- `Figma/src/app/components/v7/*`

Esta decisión aplica solo al `Centro de Operaciones PM-System`.

No implica que `V7` sea plantilla universal del ecosistema.

### 1.2 Qué se conserva de V7

Se conserva como base válida:

- fondo claro y neutro,
- estructura general del layout,
- hero editorial del centro de operaciones,
- `status-bar`,
- `live-metrics`,
- `command-bar`,
- `quick-actions`,
- `recent-activity`,
- lógica cromática `Blue = sistema` y `Magenta = IA`,
- lenguaje premium industrial limpio,
- `orbital-core` como pieza exclusiva del home de `PM-System`.

### 1.3 Qué NO se traslada a Project Hub

No debe trasladarse a `Project Hub`:

- `orbital-core`,
- hero editorial dominante,
- sidebar tipo launcher ecosistema,
- quick actions con lógica de home global,
- composición dashboard-home del centro de operaciones,
- mezcla de módulos ecosistema dentro de la navegación base,
- patrones donde la UI prioriza representación del ecosistema sobre trabajo operativo.

### 1.4 Alcance exacto de V7

`V7` es:

- canon visual del home de `PM-System`,
- referencia cromática del ecosistema,
- referencia de tono premium industrial,
- punto de partida para extracción de shared UI.

`V7` no es:

- diseño completo de `Project Hub`,
- diseño completo de `PM Mail`,
- diseño completo de `Control PEM`,
- design system cerrado por sí solo.

---

## 2. Matriz keep / refactor / archive

### 2.1 KEEP

Conservar tal cual o casi tal cual.

#### Layout shell V7 de PM-System

Estado: `KEEP`

Motivo:

- ya resuelve bien el centro de operaciones,
- mantiene claridad,
- tiene jerarquía fuerte,
- está alineado con el sistema oficial.

#### `status-bar` V7

Estado: `KEEP`

Motivo:

- patrón operativo claro,
- densidad correcta,
- semántica coherente con el centro de operaciones.

#### `live-metrics` V7

Estado: `KEEP`

Motivo:

- compacto,
- reutilizable,
- visualmente sobrio,
- no depende de efectos heredados.

#### `recent-activity` V7

Estado: `KEEP`

Motivo:

- buen resumen operacional,
- reusable como bloque dashboard,
- consistente con el sistema claro actual.

#### lógica de color `Blue + AI Magenta`

Estado: `KEEP`

Motivo:

- ya define identidad oficial del ecosistema,
- corrige el problema de cobre como pseudo-IA.

### 2.2 REFACTOR

Conservar concepto, pero adaptar o normalizar.

#### `command-bar` V7

Estado: `REFACTOR`

Motivo:

- el patrón es válido,
- pero debe convertirse en componente de sistema con variantes claras:
  - global command,
  - contextual command,
  - AI-assisted command.

#### `quick-actions` V7

Estado: `REFACTOR`

Motivo:

- como patrón visual funciona,
- pero hoy mezcla acción operativa con lógica de launcher.

Decisión:

- conservar tile visual,
- separar versión `launcher` de versión `task action`.

#### `sidebar` V7

Estado: `REFACTOR`

Motivo:

- válida para `PM-System`,
- insuficiente como patrón transversal.

Decisión:

- mantener como sidebar del centro de operaciones,
- no usar como sidebar universal,
- crear más adelante patrones separados para:
  - sidebar ecosistema,
  - sidebar producto,
  - navegación densa de trabajo.

#### `orbital-core` V7

Estado: `REFACTOR`

Motivo:

- la pieza es valiosa,
- pero debe quedar explícitamente encapsulada como widget exclusivo de `PM-System`.

Decisión:

- conservar concepto,
- restringir su uso,
- reducir su valor como “referencia genérica”.

#### primitives `ui/button`, `ui/card`, `ui/badge`, `ui/input`, `ui/tabs`, `ui/table`

Estado: `REFACTOR`

Motivo:

- son base técnica útil,
- pero no están todavía tematizados ni gobernados por el sistema oficial.

Decisión:

- conservar infraestructura,
- rehacer variantes, tokens y estados según `Premium Blue + AI Magenta`.

#### `ui/sidebar`

Estado: `REFACTOR`

Motivo:

- la infraestructura responsive es útil,
- el lenguaje visual y semántico actual no están cerrados para el ecosistema.

### 2.3 ARCHIVE

No usar como referencia futura activa.

#### V1 — Cinematic Dark

Estado: `ARCHIVE`

Motivo:

- estética demo,
- fondo oscuro extremo,
- contradice la dirección oficial,
- empuja a una visualidad futurista que ya no aplica.

#### V2 — Industrial Warm Dark

Estado: `ARCHIVE`

Motivo:

- mejor que V1, pero sigue basado en dark, petróleo y cobre como identidad.

Puede conservarse como histórico. No como baseline.

#### V5 — Industrial Light Premium

Estado: `ARCHIVE`

Motivo:

- exceso de expresividad,
- gradientes y sombras demasiado dominantes,
- buena exploración, mala referencia operativa.

#### glows petrol/copper y utilidades dark heredadas

Estado: `ARCHIVE`

Motivo:

- no forman parte del sistema activo,
- reintroducen ruido visual y deuda de identidad.

#### componentes root sin versionar heredados de V2

Estado: `ARCHIVE`

Motivo:

- generan ambigüedad,
- duplican intención con ramas versionadas,
- conservan identidad visual antigua.

---

## 3. Decisiones por producto

### 3.1 PM-System

#### Qué conserva

`PM-System` conserva:

- layout V7 base,
- hero editorial,
- sidebar compacta de centro de operaciones,
- `status-bar`,
- `live-metrics`,
- `command-bar`,
- `quick-actions`,
- `recent-activity`,
- `orbital-core`,
- lectura ecosistema-first.

#### Qué patrones visuales puede usar

`PM-System` sí puede usar:

- launcher ecosistema,
- widgets representacionales,
- paneles ejecutivos,
- composición híbrida entre monitor, launcher y dashboard,
- elementos premium más marcados que el resto de productos.

### 3.2 Project Hub

#### Qué NO debe heredar de PM-System

`Project Hub` no debe heredar:

- `orbital-core`,
- home tipo launcher,
- sidebar ecosistema de iconos,
- hero editorial dominante,
- quick actions tipo menú global,
- módulos visuales que representen todo el ecosistema,
- paneles IA dominantes sobre la operativa.

#### Qué debe mantener como app operativa de proyectos

`Project Hub` debe mantenerse como:

- aplicación de trabajo,
- orientada a tabla, lista, EDT, Gantt y documentación,
- más estructural que expresiva,
- más densa y funcional que `PM-System`,
- centrada en control de proyecto, no en navegación ecosistema.

Puede heredar:

- tokens,
- botones,
- badges,
- cards base,
- inputs,
- tabs,
- tablas,
- estado visual blue/magenta según reglas oficiales.

### 3.3 PM Mail

#### Qué puede heredar del sistema visual

`PM Mail` puede heredar:

- paleta `Premium Blue + AI Magenta`,
- botones,
- badges,
- paneles IA,
- estados,
- tokens de superficie,
- tipografía,
- bordes,
- inputs,
- listas y tablas adaptadas.

#### Qué debe mantener como cliente operativo de comunicación

`PM Mail` debe mantenerse como:

- cliente operativo de comunicación,
- rápido,
- centrado en lectura, clasificación y acción,
- claramente distinto de Gmail visualmente.

No debe heredar:

- orbital core,
- launcher ecosistema,
- dashboard hero del centro de operaciones.

### 3.4 Control PEM

#### Qué debe heredar

`Control PEM` debe heredar solo:

- tokens cromáticos,
- estados,
- botones base,
- badges,
- inputs,
- tipografía,
- bordes,
- feedback visual consistente.

#### Qué no debe perder

`Control PEM` no debe perder:

- rapidez,
- legibilidad de campo,
- interacción directa,
- baja fricción,
- densidad útil.

No debe heredar:

- shells complejos,
- cards premium innecesarias,
- orbitales,
- launchers,
- exceso de motion,
- paneles IA invasivos.

---

## 4. Decisiones de color

### 4.1 Regla oficial

Se adopta como norma activa:

- Azul = estructura, navegación y acción principal.
- Magenta = IA, automatización y asistencia.

### 4.2 Azul

El azul se reserva para:

- navegación,
- foco,
- selección,
- CTA principal,
- enlaces,
- estructura de interfaz,
- énfasis operativo principal.

### 4.3 Magenta

El magenta se reserva para:

- IA,
- automatización,
- asistencia,
- recomendaciones,
- clasificación automática,
- generación o apoyo inteligente.

Queda prohibido usar magenta como color base de navegación o acción primaria general.

### 4.4 Prohibiciones activas

Queda prohibido reactivar como base visual vigente:

- dark como baseline general,
- teal como color principal,
- petrol como identidad activa,
- copper como sustituto de IA,
- fondos grafito como idioma visual por defecto del ecosistema.

### 4.5 Estado de herencias antiguas

Las paletas históricas:

- se conservan solo como archivo,
- no pueden inspirar nuevas implementaciones activas,
- no deben volver a introducirse por comodidad o compatibilidad visual.

---

## 5. Reglas de archivo

### 5.1 Qué queda histórico

Quedan como históricos:

- `Figma/src/app/App-v1-cinematic-dark.tsx`
- `Figma/src/app/App-v2-industrial-warm-dark.tsx`
- `Figma/src/app/App-v3-industrial-light-original.tsx`
- `Figma/src/app/App-v4-industrial-light-refined.tsx`
- `Figma/src/app/App-v5-industrial-light-premium.tsx`
- componentes `v1`
- componentes root sin versionar heredados de V2
- cualquier token o utilidad basada en dark/petrol/copper como identidad principal.

### 5.2 Qué sigue activo

Siguen activos como referencia principal:

- `Figma/src/app/App.tsx`
- `Figma/src/app/components/v7/*`
- `PM_SYSTEM_DESIGN_SYSTEM.md`
- `PM_SYSTEM_UI_AUDIT.md`

Siguen activos como base técnica a refactorizar:

- `Figma/src/app/components/ui/*`

### 5.3 Qué significa “histórico”

Histórico no significa borrar.

Significa:

- no usar como base de nuevas decisiones,
- no citar como referencia primaria,
- no reutilizar patrones visuales sin justificación explícita,
- no mezclarlo con el sistema activo.

### 5.4 Qué significa “activo”

Activo significa:

- puede usarse como referencia de implementación,
- puede extraerse a shared UI futura,
- puede guiar decisiones de producto nuevas,
- y prevalece sobre cualquier versión histórica en caso de conflicto.

---

## Cierre

Las decisiones quedan cerradas así:

- `V7` manda como base visual de `PM-System`.
- `Project Hub` no hereda el home launcher del centro de operaciones.
- `PM Mail` hereda identidad, no composición.
- `Control PEM` hereda tokens ligeros, no complejidad visual.
- `Blue + AI Magenta` es la única base cromática activa.
- `dark / teal / petrol / copper` quedan fuera de la línea visual vigente.

Si una decisión futura contradice este documento, debe justificarse explícitamente. Si no hay justificación fuerte, la decisión es incorrecta.
