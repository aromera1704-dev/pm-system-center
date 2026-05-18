# PM-System UI Audit

## Alcance

Esta auditoría compara el material visual existente en `Figma/` con el sistema oficial definido en [PM_SYSTEM_DESIGN_SYSTEM.md](C:/Romera/workspace/apps/PM%20SYSTEM/PM_SYSTEM_DESIGN_SYSTEM.md).

No evalúa intención. Evalúa material real presente en repositorio:

- ramas visuales `v1` a `v7`,
- layout activo,
- componentes versionados,
- primitives `ui/*`,
- documentación de iteraciones,
- y la maqueta ejecutada localmente en navegador.

## Diagnóstico ejecutivo

El material actual tiene una base visual útil para `PM-System`, pero no constituye todavía un sistema de producto modular maduro.

Problema central:

- existe un shell fuerte para `PM-System`,
- existen muchas variantes visuales paralelas,
- pero no existen UIs separadas y consistentes para `Project Hub`, `PM Mail` o `Control PEM`.

Resultado:

- el repositorio parece un ecosistema,
- pero en realidad hoy es sobre todo una maqueta del centro de operaciones con referencias a otros productos.

Eso no invalida el trabajo existente. Sí obliga a ordenarlo antes de reutilizarlo.

---

## 1. Inventario visual actual

### 1.1 Estructura encontrada

En `Figma/src/app/` hay:

- `App.tsx`: versión activa actual.
- `App-v1-cinematic-dark.tsx`
- `App-v2-industrial-warm-dark.tsx`
- `App-v3-industrial-light-original.tsx`
- `App-v4-industrial-light-refined.tsx`
- `App-v5-industrial-light-premium.tsx`
- `App-v6-industrial-premium.tsx`

En `Figma/src/app/components/` hay tres capas distintas:

- componentes sin versionar, que equivalen de facto a la rama V2,
- componentes versionados `v1`, `v3`, `v4`, `v5`, `v6`, `v7`,
- primitives genéricas `ui/*` de base tipo shadcn/radix.

### 1.2 Layouts y ramas visuales

#### V1 — Cinematic Dark

Ubicación:

- `Figma/src/app/App-v1-cinematic-dark.tsx`
- `Figma/src/app/components/v1/*`

Uso real:

- prototipo conceptual,
- no apto como base de sistema actual.

Características:

- fondo negro puro,
- glow ambiental fuerte,
- lenguaje de demo,
- hero muy protagonista,
- estética futurista/escénica.

#### V2 — Industrial Warm Dark

Ubicación:

- `Figma/src/app/App-v2-industrial-warm-dark.tsx`
- `Figma/src/app/components/*` sin carpeta de versión

Uso real:

- segunda rama fuerte,
- funciona como baseline dark heredada.

Características:

- dark mode cálido,
- glassmorphism,
- cobre y petróleo como identidad,
- más operativa que V1,
- todavía fuera del sistema oficial actual.

#### V3 — Industrial Light Original

Ubicación:

- `Figma/src/app/App-v3-industrial-light-original.tsx`
- `Figma/src/app/components/v3/*`

Uso real:

- base estructural más sana del proyecto,
- origen del layout amplio actual.

Características:

- fondo claro,
- jerarquía fuerte,
- gran hero,
- shell premium más limpio,
- buena proporción entre bloque editorial y panel orbital.

#### V4 — Industrial Light Refined

Ubicación:

- `Figma/src/app/App-v4-industrial-light-refined.tsx`
- `Figma/src/app/components/v4/*`

Uso real:

- transición hacia dashboard más operativo.

Características:

- densidad mayor,
- aparece `recent-activity`,
- orbital contenido,
- más dashboard y menos landing.

#### V5 — Industrial Light Premium

Ubicación:

- `Figma/src/app/App-v5-industrial-light-premium.tsx`
- `Figma/src/app/components/v5/*`

Uso real:

- exploración premium de alta expresividad.

Características:

- más sombras,
- más gradientes,
- más efecto de showcase,
- útil como laboratorio visual,
- no como baseline operativo.

#### V6 — Industrial Premium

Ubicación:

- `Figma/src/app/App-v6-industrial-premium.tsx`
- `Figma/src/app/components/v6/*`

Uso real:

- consolidación estructural previa a V7.

Características:

- layout ya maduro,
- `recent-activity` consolidado,
- color principal aún teal/copper,
- muy reutilizable en estructura, no en identidad final.

#### V7 — Premium Blue + AI Magenta

Ubicación:

- `Figma/src/app/App.tsx`
- `Figma/src/app/components/v7/*`

Uso real:

- única versión activa,
- referencia directa más cercana al sistema oficial.

Características:

- fondo claro,
- azul como sistema,
- magenta para IA/automatización,
- quick actions, orbital core y status bar alineados en gran parte con la nueva dirección.

### 1.3 Componentes existentes

#### Shell de producto

Existen estos componentes versionados en casi todas las ramas maduras:

- `sidebar.tsx`
- `status-bar.tsx`
- `command-bar.tsx`
- `live-metrics.tsx` desde V3
- `quick-actions.tsx`
- `orbital-core.tsx`
- `recent-activity.tsx` desde V4

En V1 y V3 existe también:

- `activity-cards.tsx`
- `background-effects.tsx` en V1

#### Primitives reutilizables de UI

En `Figma/src/app/components/ui/` existe una base genérica amplia:

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
- más primitives Radix/shadcn.

Conclusión:

- hay una base técnica de componentes suficiente,
- pero no está tematizada ni gobernada todavía por el sistema `Premium Blue + AI Magenta`.

### 1.4 Qué productos los usan realmente

Aquí está una de las desviaciones más importantes del material actual.

Uso real implementado:

- `PM-System`: sí, como centro de operaciones.

Uso real no implementado como producto autónomo:

- `Project Hub`: no tiene layout propio en este repositorio; aparece como módulo o label.
- `PM Mail`: no tiene interfaz propia en este repositorio; solo aporta identidad cromática a V7.
- `Control PEM`: no tiene shell propio en este repositorio; aparece como módulo, acción o etiqueta.

Por tanto, hoy no existe un inventario UI por producto. Existe un inventario UI de una sola aplicación que representa al ecosistema.

---

## 2. Componentes reutilizables

### 2.1 Reutilizable casi directo

Estos elementos sí pueden evolucionar a sistema compartido:

- `status-bar` como patrón de barra operativa superior.
- `quick-actions` como patrón de acción rápida modular.
- `live-metrics` como patrón de KPI compacto.
- `recent-activity` como bloque de resumen operacional.
- `command-bar` como acceso asistido o launcher contextual.
- primitives `button`, `card`, `badge`, `input`, `tabs`, `table`.

### 2.2 Reutilizable con refactor obligatorio

#### Sidebar

La sidebar actual funciona para `PM-System`, pero no como componente compartido directo.

Motivos:

- está pensada como navegación icónica mínima del centro de operaciones,
- mezcla navegación de módulos con semántica de ecosistema,
- no expresa niveles de jerarquía de producto,
- no resuelve bien escenarios de producto denso como `Project Hub`.

Debe pasar a dos patrones distintos:

- sidebar ecosistema / centro de operaciones,
- sidebar producto / módulo.

#### Orbital Core

Es uno de los mejores activos visuales existentes, pero no es un componente compartible como UI transversal.

Sí puede vivir como:

- pieza exclusiva del home de `PM-System`,
- widget hero del centro de operaciones,
- mapa de módulos del ecosistema.

No debe trasladarse a `Project Hub` ni a `Control PEM`.

#### Quick Actions

Reutilizable si se separa:

- estructura visual,
- semántica de acciones,
- y reglas de color.

Ahora mismo mezcla acciones de producto, accesos de launcher y simulación de módulos ecosistema.

### 2.3 Base futura de shared UI

La futura `shared UI` debería absorber:

- tokens de color,
- variantes de botón,
- badges semánticos,
- cards base,
- tablas/listas,
- inputs y selects,
- tabs,
- header/status patterns,
- tiles compactos de KPI,
- tiles de acción rápida.

No debería absorber:

- orbital core,
- composición exacta del dashboard home,
- launcher ecosistema,
- copy y semántica de cada producto.

---

## 3. Problemas detectados

### 3.1 Problema estructural principal: proliferación de ramas

Hay demasiadas ramas visuales coexistiendo sin una capa clara de canonización.

Problemas derivados:

- no está claro qué componente es oficial,
- hay duplicación por versión,
- se multiplica el coste de mantenimiento,
- la auditoría de consistencia se vuelve artificialmente compleja.

### 3.2 Mezcla de dark y light incompatible con el sistema oficial

El sistema oficial define fondo claro preferente, pero el repositorio conserva:

- V1 dark extrema,
- V2 dark operativa,
- variables `.dark` activas en `theme.css`,
- primitives con reglas `dark:*`.

Esto no es un problema por mera existencia histórica. El problema es que sigue conviviendo visualmente con el sistema actual sin una política clara.

Riesgo:

- reintroducir dark styling heredado en componentes nuevos,
- contaminar la librería shared con decisiones ya descartadas.

### 3.3 Identidad de color heredada todavía visible

Aunque V7 ya usa azul y magenta, el material sigue arrastrando:

- petróleo,
- teal,
- cobre,
- glows de versiones previas,
- tokens dark heredados.

Eso significa que el sistema oficial existe en documento, pero no en una capa de tokens consolidada.

Problema real:

- la identidad actual depende más de clases hardcoded por componente que de un design token system sólido.

### 3.4 Uso no suficientemente gobernado del magenta

V7 mejora mucho este punto, pero no está completamente resuelto.

Problemas:

- el magenta aparece en nodos orbitales, CTA visuales y command icon con bastante presencia,
- el orbital core sigue siendo una zona muy expresiva,
- en una pantalla general el magenta sigue teniendo más peso visual del que conviene para una capa “solo IA”.

Conclusión:

- no hay uso incorrecto grave en V7,
- pero sí un riesgo de sobreexpansión del magenta si se replica sin criterio.

### 3.5 Sidebar incorrecta para modularidad real

La sidebar actual es correcta para el home de `PM-System`, pero incorrecta como patrón universal.

Por qué:

- es una sidebar de iconos sin taxonomía profunda,
- no sirve para gestión compleja estilo `Project Hub`,
- empuja al producto hacia lógica de launcher,
- no separa navegación ecosistema de navegación funcional interna.

### 3.6 Dashboard demasiado centrado en launcher

La composición actual mezcla:

- dashboard,
- mapa de módulos,
- launcher,
- acceso rápido,
- monitor operacional.

En `PM-System` eso puede ser válido.

Fuera de `PM-System`, no.

Riesgo:

- que `Project Hub` herede accidentalmente un patrón de home launcher que no le corresponde.

### 3.7 Paneles IA todavía implícitos, no diseñados como sistema

No existe todavía una familia de “AI panels” formalizada.

Lo que existe es:

- uso de magenta,
- command bar con iconografía asistida,
- módulos IA en orbital y quick actions.

Falta:

- panel IA estructurado,
- badge IA estándar,
- variante card IA oficial,
- reglas visuales explícitas de bloques asistidos.

### 3.8 Tablas inexistentes en producto real

Aunque existe `ui/table.tsx`, no hay una tabla operativa implementada en el layout auditado.

Esto es un hueco importante porque:

- `Project Hub` depende de tabla y lista,
- `Control PEM` también necesita listas rápidas,
- el sistema oficial pide reglas claras para vistas densas.

Hoy el repo tiene primitives, pero no tiene lenguaje visual validado para data-heavy views.

### 3.9 Cards con doble naturaleza

Hay dos familias de cards:

- card operativa razonable en V6/V7,
- card premium expresiva en V5 y ramas previas.

Riesgo:

- importar cards “bonitas” pero excesivas a productos que requieren ritmo de trabajo.

### 3.10 Header / status superior poco escalable

La barra superior actual funciona para un home ejecutivo.

No está demostrado todavía que funcione para:

- páginas profundas,
- vistas tabulares,
- pantallas con filtros,
- módulos con breadcrumbs y acciones múltiples.

No está mal. Está incompleta como sistema.

### 3.11 Sistema de componentes genéricos sin tematización oficial

Los primitives `ui/*` son útiles, pero siguen reflejando una base genérica tipo shadcn:

- variantes por defecto neutrales,
- soporte dark heredado,
- tokens no alineados del todo con `Premium Blue + AI Magenta`.

Eso rompe una idea falsa frecuente:

- tener muchos componentes no significa tener un design system.

Ahora mismo hay infraestructura, no sistema cerrado.

---

## 4. Qué conservar

### 4.1 La estructura global V6/V7

Es lo más sólido del material existente.

Conviene conservar:

- sidebar lateral compacta para `PM-System`,
- barra superior operativa,
- hero editorial con mensaje claro,
- bloque de KPIs compactos,
- command bar,
- quick actions,
- área derecha para visualización de ecosistema.

### 4.2 El cambio de V3 a V6/V7

La evolución hacia:

- más orden,
- más limpieza,
- más utilidad,
- y menos estética demo

es correcta.

### 4.3 `recent-activity`

Es probablemente el bloque más reusable del dashboard actual.

Valor:

- traduce bien actividad operativa,
- tiene buena densidad,
- introduce tres patrones útiles:
  - lista resumida de proyectos,
  - hitos,
  - incidencias.

### 4.4 La lógica de color V7

Debe conservarse:

- azul como sistema,
- magenta como IA,
- acento cálido muy contenido para operativo,
- neutros claros y limpios.

### 4.5 El orbital core como activo de marca producto

No como shared component universal.

Sí como:

- home visual de `PM-System`,
- diagrama vivo del ecosistema,
- pieza premium diferenciadora.

### 4.6 La densidad moderada de V7

V7 mantiene una relación bastante sana entre:

- aire,
- lectura,
- expresividad,
- y operatividad.

No conviene volver a V1/V2 ni tampoco a una reducción excesiva tipo wireframe.

---

## 5. Qué eliminar o rehacer

### 5.1 Eliminar V1 y V2 como referencias activas de producto

No hace falta borrar el histórico, pero sí sacarlo del marco de decisión actual.

Motivo:

- empujan hacia dark mode conceptual o heredado,
- contradicen la dirección clara de fondo claro preferente,
- mantienen semánticas visuales ya superadas.

### 5.2 Rehacer la gobernanza de versiones

La coexistencia actual de:

- componentes root,
- componentes versionados,
- app shells múltiples,

debe dejar de usarse como estructura operativa normal.

Hace falta definir:

- qué es archivo histórico,
- qué es referencia,
- qué es canonical current.

### 5.3 Eliminar la lógica launcher de cualquier futuro `Project Hub`

Esto es crítico.

El material actual sí contiene launcher ecosistema implícito:

- orbital core,
- quick actions,
- sidebar por módulos,
- lectura global de sistema.

Eso solo debe vivir en `PM-System`.

No debe migrar a `Project Hub`.

### 5.4 Rehacer paneles demasiado expresivos si se reutilizan fuera de home

Hay elementos que funcionan en dashboard home pero no en pantallas de trabajo:

- orbital core,
- hero muy dominante,
- tiles de acción de alto protagonismo,
- glow ambiental,
- gradientes decorativos.

Si se usan en contexto de gestión detallada, degradan usabilidad.

### 5.5 Rehacer tematización de primitives `ui/*`

No por estética. Por coherencia sistémica.

Hace falta rehacer:

- variantes de botón,
- tokens de badge,
- colores de focus,
- tablas,
- inputs,
- tabs,
- sidebar variants.

Ahora mismo la base existe, pero no refleja la identidad oficial con suficiente rigor.

### 5.6 Eliminar estilos incompatibles con Premium Blue + AI Magenta

Deben considerarse fuera de sistema:

- petróleo como color principal,
- cobre como pseudo-IA,
- glows oscuros persistentes,
- fondos grafito como baseline,
- glassmorphism dominante,
- cards premium con demasiado efecto.

---

## 6. Propuesta de consolidación

### 6.1 Qué debería vivir en PM-System

Debe vivir en `PM-System`:

- dashboard de centro de operaciones,
- orbital core,
- launcher ecosistema,
- vista global de módulos,
- KPIs transversales,
- command bar global,
- accesos cruzados entre productos,
- resúmenes ejecutivos y operativos del ecosistema.

`PM-System` sí puede ser el lugar donde la UI sea más representacional y más “ecosistema-first”.

### 6.2 Qué debería quedarse en Project Hub

Debe quedarse en `Project Hub`:

- planificación,
- EDT,
- Gantt,
- documentación de proyecto,
- control operativo,
- listas y tablas densas,
- flujos de seguimiento,
- dashboards específicos de proyecto.

`Project Hub` no debe heredar:

- orbital core,
- launcher global,
- sidebar de ecosistema,
- hero de home editorial,
- bloques de acción que parezcan menú principal del ecosistema.

### 6.3 Qué debería pasar a shared UI futura

Debe pasar a `shared UI`:

- color tokens oficiales,
- tokens de superficie y borde,
- sistema tipográfico,
- botón primario/secundario/ghost/IA/destructivo,
- badges semánticos,
- cards base,
- inputs,
- selects,
- tabs,
- table/list rows,
- top bars,
- métricas compactas,
- action tiles básicas.

Debe quedar fuera de `shared UI`:

- composiciones de home,
- orbital core,
- copy y naming de módulos,
- layouts narrativos específicos del centro de operaciones.

### 6.4 Orden correcto de consolidación

1. Canonizar V7 como referencia de identidad, pero no como sistema completo.
2. Extraer de V7 solo patrones base realmente compartibles.
3. Diseñar por separado los shells de `PM-System`, `Project Hub`, `PM Mail` y `Control PEM`.

Si se hace al revés, se repetirá el error actual: un solo dashboard disfrazado de ecosistema.

---

## Conclusión

El material actual no está mal. Está mezclado.

Lo mejor que ya existe:

- la estructura V6/V7,
- la transición hacia fondo claro,
- la lógica azul sistema / magenta IA,
- `recent-activity`,
- el carácter premium industrial del home de `PM-System`.

Lo que falla:

- proliferación de variantes,
- falta de separación real por producto,
- primitives aún genéricas,
- residuos visuales dark/teal/copper,
- confusión entre dashboard, launcher y sistema compartido.

La lectura correcta no es “hay que rehacerlo todo”.

La lectura correcta es:

- hay una buena base para `PM-System`,
- pero todavía no existe una arquitectura UI modular del ecosistema,
- y cualquier implementación futura debe dejar de tratar el home actual como plantilla universal.
