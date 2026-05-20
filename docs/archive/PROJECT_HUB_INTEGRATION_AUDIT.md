# Informe de integración Project Hub en PM System Center

## 1. Resumen ejecutivo

El encaje correcto es claro, pero hoy no está cerrado del todo en la práctica.

- `PM System Center` ya está definido como centro de operaciones y shell modular del ecosistema, pero todavía funciona con placeholders y sin routing real ni contrato de sesión compartido. Referencias: `README.md`, `docs/ARCHITECTURE_CURRENT.md`, `docs/ROADMAP_SHORT_TERM.md`, `src/app/App.tsx`, `src/app/navigation.ts`.
- `Project Hub` ya ha sido realineado documentalmente hacia un módulo especializado de proyectos, pero sigue conservando en código una mini-shell propia con `Dashboard`, `Mis Tareas`, `Calendario` y `Configuración`. Referencias: `README.md`, `docs/estado_actual_project_hub.md`, `docs/PROJECT_HUB_REALIGNMENT_AUDIT.md`, `apps/web/src/App.tsx`, `apps/web/src/components/Shell.tsx`.
- La propuesta correcta no es meter `Project Hub` dentro de `PM System Center` como sub-shell interna. Eso repetiría el error de frontera. La integración sensata es tratar `Project Hub` como módulo principal de `Proyectos` accesible desde `PM System Center`, inicialmente como acceso externo controlado, no como shell absorbente.
- `Mis tareas`, `Calendario` y `PM Mail` tienen naturaleza transversal. Si existen como accesos globales, deben vivir en `PM System Center`, no en `Project Hub`.
- `Control PEM` es un módulo especializado lateral, no el eje principal de la home.
- La pantalla principal de `PM System Center` debe quedarse corta y honesta: pocos accesos principales, resto en segundo nivel. Si se llena de módulos, vuelve a ser un lanzador desordenado.

## 2. Lectura de documentación revisada

### PM System Center

Archivos revisados:

- `C:\Romera\workspace\apps\PM SYSTEM\README.md`
- `C:\Romera\workspace\apps\PM SYSTEM\docs\ARCHITECTURE_CURRENT.md`
- `C:\Romera\workspace\apps\PM SYSTEM\docs\ROADMAP_SHORT_TERM.md`
- `C:\Romera\workspace\apps\PM SYSTEM\src\app\App.tsx`
- `C:\Romera\workspace\apps\PM SYSTEM\src\app\navigation.ts`
- `C:\Romera\workspace\apps\PM SYSTEM\package.json`

### Project Hub

Archivos revisados:

- `C:\Romera\workspace\apps\Project_Hub\README.md`
- `C:\Romera\workspace\apps\Project_Hub\PRODUCT.md`
- `C:\Romera\workspace\apps\Project_Hub\DESIGN.md`
- `C:\Romera\workspace\apps\Project_Hub\docs\estado_actual_project_hub.md`
- `C:\Romera\workspace\apps\Project_Hub\docs\project-detail-structure.md`
- `C:\Romera\workspace\apps\Project_Hub\docs\DECISIONES_MVP.md`
- `C:\Romera\workspace\apps\Project_Hub\docs\SPEC_ACTUAL_PROJECT_HUB.md`
- `C:\Romera\workspace\apps\Project_Hub\docs\PROJECT_HUB_REALIGNMENT_AUDIT.md`
- `C:\Romera\workspace\apps\Project_Hub\apps\web\src\App.tsx`
- `C:\Romera\workspace\apps\Project_Hub\apps\web\src\components\Shell.tsx`
- `C:\Romera\workspace\apps\Project_Hub\apps\web\src\pages\ProjectsPage.tsx`
- `C:\Romera\workspace\apps\Project_Hub\apps\web\src\pages\ProjectDetailPage.tsx`
- `C:\Romera\workspace\apps\Project_Hub\apps\web\src\pages\TasksPage.tsx`
- `C:\Romera\workspace\apps\Project_Hub\apps\web\src\pages\CalendarPage.tsx`

### Huecos documentales detectados

- `C:\Romera\workspace\apps\PM SYSTEM\PM_SYSTEM_ARCHITECTURE.md` está vacío. Es un hueco documental explícito.
- `PM System Center` no tiene todavía un documento de frontera funcional con módulos externos. El roadmap lo sugiere, pero no lo fija.
- `Project Hub` sí tiene documentos de realineación, pero conviven con artefactos y código que siguen exponiendo una shell propia. La frontera está enunciada, no resuelta.
- `docs/PROJECT_HUB_REALIGNMENT_AUDIT.md` contiene ya parte del diagnóstico correcto, pero ha quedado parcialmente desfasado: afirma que no había referencias a `PM-System` en documentación revisada, mientras el `README.md` actual sí las contiene. Eso resta fiabilidad como documento fuente único.

## 3. Estado actual de PM System Center

Definición actual observada:

- Se presenta como `Centro de Operaciones del ecosistema`.
- Su función declarada es ser shell operativo común, navegación modular y punto de entrada a módulos internos y externos.
- La app real vive en `src/`.
- No usa routing real todavía; la navegación se resuelve con estado local en `src/app/App.tsx`.
- La fuente de verdad del catálogo modular está en `src/app/navigation.ts`.

Hechos concretos:

- `Project Hub` existe en `src/app/navigation.ts` como módulo `external` pero con `status: "planned"`.
- `PM Mail` existe también como `external` y `planned`.
- `Control PEM` es el único módulo externo realmente disponible.
- `Docs`, `Automatización`, `KPIs` y `Sistema` viven hoy como módulos internos o placeholders del shell.

Lectura técnica correcta:

- `PM System Center` hoy es un shell visual y conceptual válido.
- No es todavía una plataforma integrada de verdad.
- La arquitectura actual soporta bien un patrón inicial de lanzador modular con accesos externos.
- Forzar ahora integración profunda de otro producto dentro del shell sería prematuro, porque faltan routing real, contrato de sesión y contrato de navegación entre módulos.

## 4. Estado actual de Project Hub

Definición actual observada:

- Su documentación principal actual lo redefine como módulo especializado de gestión de proyectos industriales dentro de `PM-System`.
- Su núcleo real está en `Proyectos -> Detalle de proyecto`.
- El detalle de proyecto concentra `Dashboard`, `Datos proyecto`, `EDT`, `Gantt`, `Control` y `Documentación`.

Hechos concretos de código y documentación:

- Tiene frontend propio con `react-router-dom` y backend propio con Fastify + Prisma.
- Rutas reales activas: `/dashboard`, `/tasks`, `/calendar`, `/projects`, `/projects/:projectId`, `/settings`.
- `apps/web/src/components/Shell.tsx` sigue exponiendo navegación principal con `Inicio / Dashboard`, `Proyectos` y `Configuración`.
- `TasksPage.tsx` y `CalendarPage.tsx` son superficies reales, no mockups.
- `ProjectDetailPage.tsx` confirma que el workspace fuerte está en el detalle del proyecto y sus submódulos.

Lectura correcta tras la realineación:

- El núcleo defendible de `Project Hub` es el workspace de proyecto.
- La shell general que todavía existe en código es un residuo funcional transitorio, no una dirección correcta de producto.
- `Mis Tareas` y `Calendario` hoy existen y funcionan, pero no deberían utilizarse para justificar que `Project Hub` siga siendo el centro general operativo.

## 5. Frontera funcional entre ambos

Frontera correcta:

### Debe pertenecer a PM System Center

- shell principal del ecosistema
- home operativa general
- navegación transversal entre productos
- accesos globales no ligados a un único proyecto
- tareas personales/transversales
- calendario transversal
- correo o bandeja operativa transversal
- documentación general del ecosistema
- automatización y herramientas IA compartidas

### Debe pertenecer a Project Hub

- listado de proyectos
- alta y acceso a proyectos
- detalle de proyecto
- `Dashboard` del proyecto
- `Datos proyecto`
- `EDT`
- `Gantt`
- `Control`
- `Documentación` por proyecto
- futura capa industrial del proyecto: PEM, incidencias, reporting y trazabilidad específica

### Zonas grises

- `Mis Tareas`
  Debe salir del framing principal de `Project Hub`. Solo tendría sentido seguir dentro de `Project Hub` de forma transitoria si se limita a trabajo ligado a proyectos. Como acceso general, debe vivir en `PM System Center`.
- `Calendario`
  Mismo problema. Como agenda global o personal, pertenece a `PM System Center`. Como vista de fechas del proyecto, puede existir dentro del detalle o como derivada del módulo de proyectos, pero no como shell paralela.
- `Dashboard`
  Hay dos conceptos distintos y mezclar ambos rompe el producto:
  - dashboard general del ecosistema: `PM System Center`
  - dashboard del proyecto: `Project Hub`

## 6. Propuesta de integración de Project Hub

La integración recomendada es esta:

### Fase objetivo inmediata

- `PM System Center` debe exponer un acceso principal llamado `Proyectos`.
- Ese acceso debe apuntar a `Project Hub` como módulo real especializado.
- El patrón inicial correcto es el mismo de `Control PEM`: acceso externo controlado, no embebido como vista interna falsa.

### Forma recomendada del acceso

- Etiqueta visible: `Proyectos`
- Nombre técnico del módulo: `Project Hub`
- Descripción corta: gestión operativa de proyectos industriales
- Destino funcional esperado: listado de proyectos de `Project Hub`

### Lo que no debe hacerse

- No presentar `Project Hub` como shell alternativa dentro de `PM System Center`.
- No enlazar desde la home de `PM System Center` a `Dashboard`, `Mis Tareas` o `Calendario` de `Project Hub` como si fueran módulos generales del ecosistema.
- No intentar fusionar sidebars entre ambos productos en esta fase.
- No mover `Calendario`, `Mis Tareas` o `PM Mail` bajo la marca `Project Hub`.

### Encaje recomendado

```text
PM System Center
  -> Proyectos
    -> Project Hub
      -> Proyectos
        -> Detalle de proyecto
          -> Dashboard
          -> Datos proyecto
          -> EDT
          -> Gantt
          -> Control
          -> Documentación
```

## 7. Propuesta de ubicación de módulos y accesos

### Mis tareas

- Ubicación recomendada: `PM System Center`
- Motivo: es una necesidad transversal y personal. En `Project Hub` hoy depende de proyectos, pero su naturaleza no es de workspace de proyecto sino de trabajo individual.
- Estado actual: existe en `Project Hub` en `apps/web/src/pages/TasksPage.tsx`.
- Recomendación: mantenerlo donde está solo como herencia transitoria. No promocionarlo como parte del núcleo de `Project Hub`.

### Calendario

- Ubicación recomendada: `PM System Center`
- Motivo: agenda y planificación personal/transversal deben vivir en el centro de operaciones. El calendario de `Project Hub` ya mezcla hitos de proyecto con `ActionItem`, pero eso no lo convierte en módulo identitario de proyectos.
- Estado actual: existe en `Project Hub` en `apps/web/src/pages/CalendarPage.tsx`.
- Recomendación: no integrarlo en la home como parte del módulo `Project Hub`.

### PM Mail

- Ubicación recomendada: `PM System Center`
- Motivo: correo y bandeja operativa son transversales por definición. Meterlo en `Project Hub` sería un error de frontera.
- Estado actual: planificado en `PM System Center`, no integrado.
- Recomendación: acceso secundario o utilitario hasta que exista integración real.

### Control PEM

- Ubicación recomendada: `PM System Center` como módulo especializado
- Motivo: ya es un acceso externo real y tiene valor operativo propio.
- Estado actual: único módulo externo disponible en `PM System Center`.
- Recomendación: mantenerlo visible, pero no competir con `Proyectos` como foco principal.

### Documentación

- Ubicación recomendada:
  - documentación general/transversal: `PM System Center`
  - documentación por proyecto: `Project Hub`
- Motivo: hay dos naturalezas distintas y hoy están mezcladas solo nominalmente.
- Estado actual:
  - `PM System Center` tiene `Docs` como placeholder interno.
  - `Project Hub` tiene `Documentación` dentro del detalle de proyecto.
- Recomendación: no unificar ambas bajo un único acceso ambiguo.

### Herramientas IA

- Ubicación recomendada: `PM System Center`
- Motivo: automatización, agentes y soporte IA son claramente transversales.
- Estado actual: `Automatización` existe en `PM System Center` como placeholder interno.
- Recomendación: acceso secundario visible, no protagonista de la home salvo caso de uso probado.

### Otros accesos existentes o previstos

- `KPIs`
  Mejor en `PM System Center` solo si representa lectura agregada transversal real. Si sigue siendo placeholder, no debe ocupar espacio principal.
- `Sistema`
  Debe quedar utilitario, no principal.
- `Dashboard / Inicio` de `Project Hub`
  No debe tener acceso propio desde la home de `PM System Center`.
- `Configuración` de `Project Hub`
  No debe tratarse como acceso transversal. Es configuración interna del módulo.

## 8. Accesos necesarios, secundarios y descartables

### Necesarios en pantalla principal

- `Proyectos`
  Debe ser el acceso principal. Es el módulo de negocio más estructural y ya tiene backend/frontend reales.
- `Mis tareas`
  Tiene sentido si `PM System Center` quiere ser centro operativo diario.
- `Calendario`
  Tiene sentido si se entiende como agenda transversal.
- `Control PEM`
  Debe seguir visible porque ya existe acceso real y resuelve operativa especializada.

### Secundarios

- `PM Mail`
  Útil, pero mientras no exista integración real no merece protagonismo principal.
- `Documentación`
  Útil como acceso general, pero secundario si no hay sistema documental real integrado.
- `Herramientas IA` o `Automatización`
  Deben existir, pero no liderar la home. Si se ponen arriba sin casos reales, se convierten en ruido.
- `KPIs`
  Solo como segundo nivel hasta que represente datos agregados reales.

### Ocultos o utilitarios

- `Sistema`
  Debe quedar fuera del foco principal.
- `Configuraciones internas de módulo`
  No deben salir a la home general.

### Descartables como acceso principal

- `Dashboard` general de `Project Hub`
  Descartable como entrada principal desde `PM System Center`.
- `Mis Tareas` y `Calendario` dentro de la marca `Project Hub`
  Descartables como framing de integración. Si existen, no deben venderse como parte del módulo `Proyectos`.
- cualquier acceso duplicado que represente lo mismo con dos nombres
  Ejemplo: `Proyectos` y `Project Hub` como dos módulos distintos en el primer nivel. Eso solo añade fricción.

## 9. Riesgos de diseño/producto

- Riesgo de doble shell
  Si `PM System Center` y `Project Hub` conservan ambos una navegación general fuerte, el usuario no entenderá cuál es la capa principal.
- Riesgo de contaminar `Project Hub`
  Si se reintegra `Mis Tareas`, `Calendario`, `Mail` o documentación general bajo `Project Hub`, se rompe la realineación ya definida.
- Riesgo de home inflada
  Si la pantalla principal intenta mostrar todos los módulos a la vez, dejará de ser centro operativo y volverá a ser un catálogo difuso.
- Riesgo documental
  La documentación actual de `Project Hub` sigue siendo parcialmente contradictoria. Si se usa cualquier documento aislado como fuente de verdad, la integración saldrá desviada.
- Riesgo técnico de integración prematura
  `PM System Center` no tiene aún routing real ni sesión compartida. Intentar integración profunda ahora generaría acoplamiento frágil.
- Riesgo de taxonomía ambigua
  `Docs`, `Documentación`, `Informes`, `Plantillas` y similares están mal delimitados entre capa general y capa proyecto.

## 10. Recomendación final

La decisión correcta es esta:

- `PM System Center` debe consolidarse como centro de operaciones y punto único de acceso general.
- `Project Hub` debe integrarse dentro de `PM System Center` como el módulo principal de `Proyectos`.
- Esa integración debe hacerse como acceso controlado a la app especializada, no como reabsorción de su shell ni como mezcla de sidebars.
- `Mis tareas`, `Calendario` y `PM Mail` deben plantearse como accesos transversales del centro, no como extensiones de `Project Hub`.
- La home principal debe priorizar cuatro accesos reales: `Proyectos`, `Mis tareas`, `Calendario` y `Control PEM`.
- `PM Mail`, `Documentación`, `Herramientas IA`, `KPIs` y `Sistema` deben quedar en segundo nivel hasta que tengan implementación y utilidad reales.

## 11. Próximos pasos propuestos

1. Fijar en `PM SYSTEM` un contrato funcional mínimo de integración de módulos externos.
2. Decidir el catálogo definitivo de accesos de primer nivel de `PM System Center`, separando principal, secundario y utilitario.
3. Solo después definir cómo se expone `Project Hub` desde `PM System Center`: URL destino, naming visible y tratamiento de acceso/sesión.

## 12. Matriz de ownership funcional

| Capacidad | Sistema propietario | Sistema consumidor | Naturaleza | Debe vivir en |
|---|---|---|---|---|
| proyectos | `Project Hub` | `PM System Center`, `Project Hub` | especializado | `Project Hub` |
| EDT | `Project Hub` | `Project Hub` | especializado | `Project Hub` |
| Gantt | `Project Hub` | `Project Hub` | especializado | `Project Hub` |
| calendario | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| tareas personales | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| tareas de proyecto | `Project Hub` | `Project Hub`, `PM System Center` | especializado | `Project Hub` |
| documentación | ownership partido: `PM System Center` para documentación general y `Project Hub` para documentación de proyecto | `PM System Center`, `Project Hub` | mixta | general en `PM System Center`; documentación de proyecto en `Project Hub` |
| PM Mail | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| notificaciones | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| KPIs | ownership partido: `PM System Center` para KPIs globales y `Project Hub` para KPIs de proyecto | `PM System Center`, `Project Hub` | mixta | globales en `PM System Center`; KPIs de proyecto en `Project Hub` |
| automatizaciones | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| Control PEM | `Control PEM` como módulo especializado integrado por `PM System Center` | `PM System Center`, potencialmente `Project Hub` por enlace contextual | especializado | acceso desde `PM System Center` |
| IA/assistant | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| búsqueda global | `PM System Center` | `PM System Center`, `Project Hub` | transversal | `PM System Center` |
| configuración | ownership partido: `PM System Center` para configuración del ecosistema y `Project Hub` para preferencias internas del módulo | `PM System Center`, `Project Hub` | mixta | configuración general en `PM System Center`; configuración interna en `Project Hub` |
| usuarios/sesión | `PM System Center` como dueño futuro del acceso compartido; `Project Hub` mantiene sesión propia en la fase actual | `PM System Center`, `Project Hub`, resto de módulos | transversal | objetivo en `PM System Center` con propagación al resto |

### Lectura de la matriz

- `PM System Center` debe ser propietario de toda capacidad transversal, aunque `Project Hub` la consuma o hoy tenga implementaciones locales heredadas.
- `Project Hub` debe ser propietario del dominio de proyectos y de toda capacidad que dependa semánticamente del workspace de proyecto.
- Los casos `mixtos` no justifican duplicidad funcional. Justifican separación por alcance:
  - general/transversal en `PM System Center`
  - proyecto/especializado en `Project Hub`
- `Project Hub` puede consumir calendario, tareas personales, notificaciones, IA, búsqueda o sesión compartida, pero no debe redefinirlos como capacidades propias del módulo.

## 13. Modelo objetivo del ecosistema

### Qué es PM System Center

`PM System Center` debe ser el shell operativo y centro de operaciones del ecosistema.

Su responsabilidad objetivo es:

- ser el punto único de entrada
- concentrar navegación transversal
- exponer accesos a módulos especializados
- alojar capacidades transversales compartidas
- coordinar identidad, sesión, notificaciones, búsqueda y automatización
- ofrecer una vista operativa general sin invadir la lógica interna de cada módulo

No debe convertirse en una app monolítica que reimplemente todos los productos. Su valor está en orquestar y dar acceso, no en absorber por defecto cada dominio funcional.

### Qué es Project Hub

`Project Hub` debe ser una app/módulo especializado de gestión de proyectos industriales.

Su responsabilidad objetivo es:

- gestionar proyectos
- abrir el workspace de proyecto
- resolver `Dashboard` de proyecto, `Datos proyecto`, `EDT`, `Gantt`, `Control` y `Documentación` por proyecto
- evolucionar la capa operativa específica del proyecto: PEM, incidencias, trazabilidad, reporting y control industrial

`Project Hub` no es ni debe volver a ser el centro operativo general del ecosistema.

### Qué NO debe volver a hacer Project Hub

`Project Hub` no debe recuperar ni reconstruir como capacidades identitarias propias:

- tareas personales
- calendario global
- mail o bandeja operativa transversal
- búsqueda global
- dashboard general del ecosistema
- configuración global del sistema
- automatizaciones globales
- notificaciones transversales
- shell principal de navegación entre productos

Puede consumir algunas de esas capacidades. No debe ser su propietario ni su punto principal de definición.

### Qué módulos deben ser first-class citizens

First-class citizens del ecosistema:

- `PM System Center`
- `Project Hub`
- `Control PEM`
- `Mis tareas`
- `Calendario`

Condición:

- deben tener identidad clara
- deben responder a casos de uso reales
- deben evitar solape nominal o funcional

First-class citizens dentro del dominio de proyectos:

- `Proyectos`
- `Detalle de proyecto`
- `EDT`
- `Gantt`
- `Control`
- `Documentación` de proyecto

### Qué módulos deben quedar secundarios

Como módulos secundarios o utilitarios dentro del shell:

- `PM Mail` mientras no exista integración real madura
- `KPIs` globales mientras no tengan dato agregado fiable
- `Automatizaciones`
- `IA/assistant`
- `Documentación` general
- `Sistema`

Como superficies secundarias o heredadas dentro de `Project Hub`:

- `Dashboard` general de entrada
- `Mis Tareas` local
- `Calendario` local
- `Configuración` local no crítica

Estas superficies pueden seguir existiendo transitoriamente en la app, pero no deben marcar la arquitectura objetivo ni el framing del producto.

### Patrón de integración recomendado

Patrón recomendado por fases:

#### Fase 1: integración inicial

- modelo: acceso externo controlado desde `PM System Center`
- comportamiento: `PM System Center` actúa como shell y lanza `Project Hub` como app especializada
- objetivo: desacoplamiento alto, implementación rápida y frontera clara

Este patrón es el correcto ahora porque:

- `PM System Center` aún no tiene routing real maduro
- no existe todavía auth compartida consolidada
- `Project Hub` ya funciona como app separada
- evita mezclar sidebars, estados y contratos de navegación antes de tiempo

#### Fase 2: consolidación del ecosistema

- modelo: `shared auth` y navegación coordinada
- comportamiento esperado:
  - login compartido o sesión federada
  - retorno fluido al shell
  - deep links estables
  - naming coherente entre shell y módulo

Esto permite mejorar continuidad de experiencia sin destruir la separación funcional.

#### Opciones descartadas por ahora

- microfrontend
  Descartado en esta fase. Añade complejidad estructural antes de tener resuelta la frontera funcional y el contrato de sesión.
- iframe
  Descartado salvo contingencia. Complica navegación, auth, foco, comunicación entre apps y mantenimiento visual.
- absorción completa en una sola app
  Descartada. Rompe la separación entre shell transversal y módulo especializado.

### Patrón objetivo resumido

```text
PM System Center
  = shell / centro de operaciones
  = dueño de capacidades transversales
  = punto único de acceso

Project Hub
  = app especializada de proyectos
  = dueña del dominio de proyectos
  = consumidora de servicios transversales del shell
```

### Frontera arquitectónica definitiva

La frontera objetivo debe quedar fijada así:

- `PM System Center` posee la capa transversal del ecosistema.
- `Project Hub` posee la capa especializada de proyectos.
- las capacidades transversales no deben duplicarse dentro de `Project Hub`.
- las capacidades especializadas de proyecto no deben reubicarse en el shell salvo como acceso o resumen.
- la integración correcta empieza por acceso externo controlado y evoluciona a `shared auth` + navegación coordinada.

Ese es el modelo que evita duplicidades futuras y corta de raíz la tentación de volver a convertir `Project Hub` en una shell general.
