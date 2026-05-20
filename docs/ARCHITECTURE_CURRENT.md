# Arquitectura Actual

## Resumen

`PM System Center` es el shell y centro de operaciones del ecosistema.

`Project Hub` es una app/módulo especializado de proyectos industriales.

La arquitectura vigente no debe mezclar ambos roles:

- `PM System Center` posee la capa transversal
- `Project Hub` posee el dominio de proyectos
- la integración inicial correcta es acceso externo controlado
- la evolución futura correcta es `shared auth` y navegación coordinada

## Arquitectura vigente

### PM System Center

Estado vigente:

- la app activa vive en `src/`
- `src/app/App.tsx` actúa como shell principal
- la navegación actual se resuelve con estado local
- no existe `React Router` real todavía
- `src/app/navigation.ts` es la fuente de verdad del catálogo modular

Responsabilidad vigente:

- ser punto único de entrada del ecosistema
- exponer navegación transversal
- alojar accesos a módulos internos y externos
- mantener capacidades transversales fuera del dominio de proyecto

Estado de integración actual:

- `Control PEM` es el único módulo externo operativo
- `Project Hub` existe como módulo externo planificado
- `PM Mail` existe como módulo externo planificado
- `Docs`, `Automatización`, `KPIs` y `Sistema` siguen como módulos internos o placeholders

### Project Hub

Estado vigente:

- app separada con frontend y backend propios
- frontend con rutas reales:
  - `/dashboard`
  - `/projects`
  - `/projects/:projectId`
  - `/tasks`
  - `/calendar`
  - `/settings`
- auth propia mínima basada en cookie JWT `httpOnly`
- núcleo real del producto en `Proyectos -> Detalle de proyecto`

Responsabilidad vigente:

- gestionar proyectos
- abrir el workspace de proyecto
- resolver:
  - `Dashboard` de proyecto
  - `Datos proyecto`
  - `EDT`
  - `Gantt`
  - `Control`
  - `Documentación` por proyecto

Límite vigente:

- `Project Hub` no debe actuar como shell principal del ecosistema
- `Mis Tareas`, `Calendario` y `Dashboard` general siguen existiendo en código, pero no definen la arquitectura objetivo

## Ownership funcional

### Capacidades transversales

Propiedad de `PM System Center`:

- shell principal
- navegación transversal
- tareas personales
- calendario transversal
- `PM Mail`
- notificaciones
- búsqueda global
- automatizaciones
- `IA/assistant`
- configuración general del ecosistema
- sesión compartida futura

### Capacidades especializadas

Propiedad de `Project Hub`:

- proyectos
- detalle de proyecto
- `EDT`
- `Gantt`
- `Control`
- tareas de proyecto si permanecen dentro del dominio
- documentación por proyecto
- KPIs de proyecto

### Capacidades mixtas con frontera explícita

- documentación
  - general/transversal en `PM System Center`
  - documentación de proyecto en `Project Hub`
- KPIs
  - globales en `PM System Center`
  - KPIs de proyecto en `Project Hub`
- configuración
  - configuración general en `PM System Center`
  - preferencias internas del módulo en `Project Hub`

Regla de ownership:

- si una capacidad no depende del proyecto como unidad principal, no debe vivir en `Project Hub`
- si una capacidad sirve al ecosistema completo, su owner debe ser `PM System Center`

## Integración de Project Hub

### Modelo aprobado

Patrón vigente recomendado:

- `PM System Center` expone un acceso principal llamado `Proyectos`
- ese acceso apunta a `Project Hub` como app especializada
- la integración inicial es acceso externo controlado

Patrones descartados por ahora:

- microfrontend
- `iframe`
- absorción completa de `Project Hub` dentro del shell

### Comportamiento esperado

Flujo objetivo inicial:

1. el usuario entra en `PM System Center`
2. selecciona `Proyectos`
3. `PM System Center` abre `Project Hub` como app externa controlada
4. el destino inicial de `Project Hub` es `/projects`
5. desde ahí el usuario navega al detalle `/projects/:projectId`

Reglas:

- no aterrizar en `/dashboard`
- no aterrizar en `/tasks`
- no aterrizar en `/calendar`
- no fusionar sidebars entre shell y módulo

## Navegación objetivo

### Primer nivel del shell

Accesos principales recomendados en `PM System Center`:

- `Proyectos`
- `Mis tareas`
- `Calendario`
- `Control PEM`

Accesos secundarios o utilitarios:

- `PM Mail`
- `Documentación`
- `Automatización`
- `KPIs`
- `Sistema`

### Navegación interna objetivo de Project Hub

`Project Hub` debe mantener shell mínima interna solo para navegación de proyectos.

Dirección objetivo:

- `Proyectos`
- `Detalle de proyecto`
  - `Dashboard`
  - `Datos proyecto`
  - `EDT`
  - `Gantt`
  - `Control`
  - `Documentación`

Superficies que deben perder protagonismo progresivamente dentro de `Project Hub`:

- `Dashboard` general de entrada
- `Mis Tareas`
- `Calendario`
- `Configuración` generalista

## Estrategia futura de auth

### Estado actual

- `Project Hub` mantiene sesión propia
- `PM System Center` no comparte todavía identidad con el módulo

### Objetivo

La sesión del ecosistema debe pasar a estar gobernada por `PM System Center`.

`Project Hub` debe convertirse en consumidor de sesión compartida.

### Estrategia recomendada

- `shared auth`
- sesión central o federada
- trust explícito entre shell y módulo
- login coordinado
- logout coordinado
- resolución clara de expiración de sesión

### Flujo objetivo

1. usuario inicia sesión en `PM System Center`
2. el shell establece identidad del ecosistema
3. el usuario abre `Project Hub` desde `Proyectos`
4. `Project Hub` detecta sesión compartida válida
5. entra directamente en `/projects` sin relogin

## Qué debe salir progresivamente de Project Hub

Debe migrar conceptualmente fuera del módulo:

- tareas personales
- calendario transversal
- `PM Mail`
- búsqueda global
- notificaciones transversales
- dashboard general del ecosistema

Debe permanecer dentro del módulo:

- proyectos
- detalle de proyecto
- `Dashboard` de proyecto
- `EDT`
- `Gantt`
- `Control`
- documentación por proyecto

## Riesgos vigentes

- doble shell
  Si `PM System Center` y `Project Hub` conservan ambos navegación general fuerte, la frontera se rompe.
- doble sesión
  Mientras no exista `shared auth`, habrá fricción de acceso.
- doble routing no coordinado
  El shell no tiene routing real maduro y `Project Hub` sí.
- duplicidad funcional
  Si `Project Hub` mantiene protagonismo en tareas personales, calendario o dashboard general, reaparece el solape.

## Recomendación vigente

La arquitectura vigente debe leerse así:

```text
PM System Center
  = shell / centro de operaciones
  = owner de capacidades transversales
  = punto único de acceso

Project Hub
  = app especializada de proyectos
  = owner del dominio de proyectos
  = consumidora futura de auth y navegación coordinada del shell
```

La secuencia correcta es:

- acceso externo controlado ahora
- `shared auth` después
- navegación coordinada después
- poda progresiva de superficies transversales heredadas dentro de `Project Hub`
