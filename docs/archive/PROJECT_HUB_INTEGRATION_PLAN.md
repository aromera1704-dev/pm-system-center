# 1. Objetivo técnico

Traducir la arquitectura aprobada entre `PM System Center` y `Project Hub` a un plan técnico ejecutable, sin rediseñar el modelo funcional ya fijado.

Objetivo concreto:

- mantener `PM System Center` como shell y centro de operaciones
- mantener `Project Hub` como app especializada de proyectos
- integrar `Project Hub` inicialmente mediante acceso externo controlado
- preparar una evolución futura a `shared auth` y navegación coordinada
- evitar duplicidades futuras en tareas personales, calendario transversal, mail, búsqueda global y dashboard general del ecosistema

Este documento no propone microfrontends, no propone `iframe` y no propone absorción de `Project Hub` dentro de una única SPA del shell.

# 2. Estado actual

## PM System Center

Estado observado:

- app shell activa en `C:\Romera\workspace\apps\PM SYSTEM\src`
- navegación controlada por estado local en `src/app/App.tsx`
- catálogo modular definido en `src/app/navigation.ts`
- `Control PEM` es el único módulo externo operativo
- `Project Hub` existe como módulo `external` en estado `planned`
- no existe routing real consolidado
- no existe auth compartida con otros módulos

Conclusión técnica:

- `PM System Center` ya sirve como lanzador modular
- todavía no sirve como plataforma integrada con sesión, routing y contratos transversales maduros

## Project Hub

Estado observado:

- app separada con frontend y backend propios
- frontend con rutas reales:
  - `/`
  - `/dashboard`
  - `/projects`
  - `/projects/:projectId`
  - `/tasks`
  - `/calendar`
  - `/settings`
- auth propia mínima basada en cookie JWT `httpOnly`
- núcleo real del producto en `Proyectos -> Detalle de proyecto`
- shell interna todavía más amplia de lo deseable

Conclusión técnica:

- `Project Hub` ya es una app funcional e integrable como destino externo
- todavía arrastra superficies transversales que deben degradarse o salir del framing principal

# 3. Modelo de navegación recomendado

## Principio base

La navegación del ecosistema debe ser jerárquica y no simétrica.

- `PM System Center` es la capa superior
- `Project Hub` es un destino especializado
- `Project Hub` no debe competir con el shell general

## Navegación recomendada en Fase 1

### Dentro de PM System Center

Primer nivel recomendado:

- `Proyectos`
- `Mis tareas`
- `Calendario`
- `Control PEM`

Segundo nivel o utilitarios:

- `PM Mail`
- `Documentación`
- `Automatización`
- `KPIs`
- `Sistema`

### Comportamiento al abrir Project Hub

Flujo recomendado:

1. usuario entra en `PM System Center`
2. selecciona `Proyectos`
3. `PM System Center` abre `Project Hub` como app externa controlada
4. el destino inicial de `Project Hub` debe ser el listado de proyectos, no su dashboard general
5. desde ahí el usuario navega a `/projects/:projectId`

Comportamiento esperado:

- apertura en nueva pestaña o transición externa controlada
- entrada estable al módulo
- sin mezcla de sidebars entre shell y app especializada
- con posibilidad futura de vuelta coherente al shell

## Navegación interna mínima permitida en Project Hub

`Project Hub` debe mantener shell mínima interna solo para navegación de proyectos.

Eso implica que a medio plazo su navegación interna debería quedar reducida conceptualmente a:

- `Proyectos`
- `Detalle de proyecto`
- secciones del detalle:
  - `Dashboard`
  - `Datos proyecto`
  - `EDT`
  - `Gantt`
  - `Control`
  - `Documentación`

Superficies que no deben liderar la navegación objetivo:

- `/dashboard` como home principal
- `/tasks` como módulo identitario
- `/calendar` como agenda transversal
- `/settings` como capa visible de primer nivel

# 4. Estrategia de autenticación futura

## Fase actual

Ownership actual de sesión:

- `Project Hub` es dueño de su sesión propia
- `PM System Center` no comparte todavía identidad con `Project Hub`

Estado técnico actual de `Project Hub`:

- login local
- cookie JWT `httpOnly`
- sesión inicializada desde `GET /auth/me`

## Objetivo futuro

Ownership objetivo de sesión:

- `PM System Center` debe pasar a ser el owner de la sesión del ecosistema
- `Project Hub` debe convertirse en consumidor de esa sesión compartida

## Estrategia recomendada

Modelo recomendado:

- `shared auth`
- sesión central o federada
- trust explícito entre shell y módulo

## Comportamiento objetivo

Flujo esperado:

1. usuario inicia sesión en `PM System Center`
2. `PM System Center` establece identidad del ecosistema
3. usuario abre `Project Hub` desde `Proyectos`
4. `Project Hub` detecta sesión compartida válida
5. `Project Hub` entra directamente en `/projects` sin relogin

## Requisitos técnicos futuros

- dominio o subdominios compatibles con cookies o tokens compartidos
- contrato estable de identidad de usuario
- estrategia clara de expiración y renovación de sesión
- logout coordinado
- tratamiento explícito de acceso denegado o sesión caducada

## Lo que no debe hacerse

- no duplicar dos logins permanentes como solución final
- no esconder el problema detrás de redirecciones opacas
- no usar `iframe` para “heredar” sesión visualmente

# 5. Contrato entre PM System y Project Hub

## Contrato mínimo inicial

En Fase 1 el contrato entre sistemas debe ser pequeño y explícito.

### PM System Center debe aportar

- punto de entrada visible: `Proyectos`
- etiqueta funcional estable
- URL destino estable hacia `Project Hub`
- contexto de lanzamiento básico

### Project Hub debe aportar

- endpoint o URL estable de entrada al módulo
- landing funcional en `/projects`
- navegación interna mínima para llegar al workspace de proyecto

## Contrato funcional recomendado

Contrato mínimo:

- nombre del módulo: `Project Hub`
- nombre visible en shell: `Proyectos`
- URL de entrada: `/projects` dentro de `Project Hub`
- responsabilidad del módulo:
  - gestión de proyectos
  - detalle de proyecto
  - EDT
  - Gantt
  - Control
  - Documentación de proyecto

## Contrato de ownership

- `PM System Center` posee:
  - shell
  - sesión compartida futura
  - navegación transversal
  - búsqueda global
  - tareas personales
  - calendario transversal
  - mail
- `Project Hub` posee:
  - proyectos
  - tareas de proyecto si siguen existiendo como capacidad del dominio
  - EDT
  - Gantt
  - Control
  - documentación por proyecto

## Contrato de comportamiento al abrir el módulo

Comportamiento esperado:

- desde `PM System Center`, abrir `Project Hub` debe llevar al usuario a una superficie útil
- esa superficie útil es `/projects`
- no debe aterrizar en `/dashboard`
- no debe aterrizar en `/tasks`
- no debe aterrizar en `/calendar`

## Contrato de vuelta

Objetivo futuro:

- `Project Hub` debe poder ofrecer retorno coherente al shell
- ese retorno no implica federar el layout ni compartir UI interna
- basta con enlace o navegación coordinada estable

# 6. Estrategia de URLs

## Principio

Las URLs deben reflejar ownership real, no conveniencia temporal.

## Estrategia inicial recomendada

### PM System Center

URLs del shell, por ejemplo:

- `/`
- `/tasks`
- `/calendar`
- `/mail`
- `/docs`
- `/automation`
- `/kpis`

### Project Hub

URLs del módulo, por ejemplo:

- `/projects`
- `/projects/:projectId`
- `/projects/:projectId/dashboard`
- `/projects/:projectId/data`
- `/projects/:projectId/edt`
- `/projects/:projectId/gantt`
- `/projects/:projectId/control`
- `/projects/:projectId/docs`

Nota importante:

- hoy `Project Hub` usa tabs locales en `ProjectDetailPage`
- a futuro conviene que esas secciones evolucionen a URLs explícitas o deep links coordinables
- no es obligatorio hacerlo ahora, pero sí debe quedar como dirección técnica compatible

## URL de entrada recomendada desde PM System Center

Destino inicial:

```text
Project Hub -> /projects
```

Destino contextual futuro posible:

```text
Project Hub -> /projects/:projectId
```

para accesos desde widgets, alertas o enlaces profundos del shell.

## Lo que debe evitarse

- evitar URLs del shell que finjan poseer el dominio de proyectos si solo actúan como proxy visual
- evitar duplicar rutas equivalentes en ambos sistemas
- evitar que `PM System Center` tenga una ruta `/projects` interna falsa mientras `Project Hub` mantiene otra real sin coordinación

# 7. Qué debe eliminarse progresivamente de Project Hub

No se trata de borrar código ahora. Se trata de degradar y sacar del modelo objetivo lo que ya no debe definir el producto.

## Debe salir del framing principal

- `Dashboard` general de entrada
- `Mis Tareas` como módulo transversal
- `Calendario` como agenda transversal
- `Configuración` como capa destacada de navegación general

## Debe migrar conceptualmente fuera del módulo

- tareas personales
- calendario transversal
- mail
- búsqueda global
- notificaciones transversales
- dashboard general del ecosistema

## Debe permanecer

- listado de proyectos
- detalle de proyecto
- dashboard del proyecto
- EDT
- Gantt
- Control
- documentación por proyecto

## Criterio de poda

Una capacidad debe salir del framing de `Project Hub` si cumple cualquiera de estas condiciones:

- no depende del proyecto como unidad principal
- sirve a varios módulos del ecosistema
- tiene naturaleza personal o transversal
- obliga a duplicar ownership ya asignado al shell

# 8. Riesgos técnicos

## Riesgo 1: doble sesión

Mientras no exista `shared auth`, el usuario puede percibir ruptura de experiencia.

Impacto:

- relogin
- pérdida de continuidad
- errores de expectativas entre shell y módulo

## Riesgo 2: doble routing no coordinado

`PM System Center` no tiene routing real consolidado y `Project Hub` sí.

Impacto:

- enlaces inconsistentes
- mala resolución de deep links
- confusión entre navegación de shell y navegación de producto

## Riesgo 3: duplicidad funcional

Si `Project Hub` mantiene demasiado protagonismo en `/tasks`, `/calendar` o `/dashboard`, la frontera arquitectónica volverá a romperse.

Impacto:

- dos centros operativos
- ownership ambiguo
- deuda estructural

## Riesgo 4: URL strategy mal resuelta

Si no se fija pronto la URL de entrada y la evolución de subrutas, el sistema crecerá con enlaces rotos o naming inconsistente.

Impacto:

- difícil coordinación entre shell y módulo
- difícil instrumentación futura de navegación

## Riesgo 5: falsa integración

Intentar simular integración profunda con `iframe` o layouts híbridos antes de tiempo.

Impacto:

- mayor complejidad
- peor auth
- peor UX
- más acoplamiento del necesario

# 9. Fases de implementación

## Fase 1. Integración externa controlada

Objetivo:

- conectar `Project Hub` desde `PM System Center` como módulo `Proyectos`

Decisiones:

- acceso externo controlado
- destino inicial en `/projects`
- sin microfrontend
- sin `iframe`

Resultado esperado:

- el usuario puede abrir `Project Hub` desde el shell
- la frontera entre shell y módulo queda clara

## Fase 2. Ajuste de navegación y naming

Objetivo:

- alinear naming visible y comportamiento entre shell y módulo

Acciones esperadas:

- `PM System Center` presenta `Proyectos`
- `Project Hub` reduce progresivamente el peso de superficies transversales
- el flujo principal queda fijado en `Proyectos -> Detalle de proyecto`

Resultado esperado:

- menos ambigüedad
- menos duplicidad conceptual

## Fase 3. Shared auth

Objetivo:

- unificar identidad y reducir fricción de acceso

Acciones esperadas:

- definir owner de sesión del ecosistema
- establecer mecanismo de confianza entre shell y módulo
- coordinar login, logout y expiración

Resultado esperado:

- acceso a `Project Hub` sin relogin
- continuidad real entre sistemas

## Fase 4. Navegación coordinada

Objetivo:

- soportar deep links y retorno fluido al shell

Acciones esperadas:

- URL de entrada estable
- enlaces contextuales a proyecto concreto
- potencial evolución de tabs locales a rutas más explícitas

Resultado esperado:

- navegación más robusta
- mejor enlace entre resumen global y workspace de proyecto

## Fase 5. Poda conceptual de Project Hub

Objetivo:

- consolidar `Project Hub` como módulo especializado

Acciones esperadas:

- degradar o retirar protagonismo de `/dashboard`, `/tasks`, `/calendar` y `/settings`
- dejar shell mínima interna para proyectos

Resultado esperado:

- desaparición efectiva del rol de “shell general” dentro de `Project Hub`

# 10. Recomendación final

La recomendación técnica correcta es conservadora y clara:

- `PM System Center` debe seguir como shell y centro de operaciones
- `Project Hub` debe integrarse inicialmente como destino externo controlado desde `Proyectos`
- la URL de entrada debe ser `/projects`
- `Project Hub` debe conservar solo una shell mínima orientada a proyectos
- `shared auth` y navegación coordinada deben planificarse como segunda etapa
- microfrontend debe descartarse por ahora
- `iframe` debe descartarse salvo contingencia técnica muy justificada

Flujo objetivo resumido:

```text
Usuario -> PM System Center
        -> clic en Proyectos
        -> apertura controlada de Project Hub
        -> entrada en /projects
        -> acceso al detalle /projects/:projectId
```

Ownership final resumido:

- sesión transversal futura: `PM System Center`
- navegación transversal: `PM System Center`
- proyectos y workspace de proyecto: `Project Hub`

Ese es el camino con menor riesgo estructural y menor probabilidad de reabrir duplicidades futuras.
