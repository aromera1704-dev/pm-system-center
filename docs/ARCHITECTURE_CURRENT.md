# Arquitectura Actual

## Resumen

PM-System ya no depende de `Figma/` como app activa. La aplicación operativa vive en `src/` y usa `App.tsx` como shell principal.

## Shell operativo

- `src/app/App.tsx` controla el estado de sección activa.
- El estado actual distingue entre `home` y módulos concretos.
- `home` renderiza el dashboard operativo actual:
  - `Sidebar`
  - `StatusBar`
  - `LiveMetrics`
  - `CommandBar`
  - `QuickActions`
  - `RecentActivity`
  - `OrbitalCore`

## Navegación modular

- La fuente de verdad está en `src/app/navigation.ts`.
- Cada módulo define:
  - `id`
  - `label`
  - `description`
  - `status`
  - `href`
  - `type`
- `Sidebar`, `QuickActions` y `OrbitalCore` reutilizan esta base conceptual.

## Routing actual

- No existe `React Router` en uso.
- No hay rutas internas reales.
- La navegación se resuelve con estado local en `App.tsx`.
- Los módulos internos renderizan placeholders contextuales dentro del shell.

## Integración de módulos externos

- Los módulos externos se modelan en `navigation.ts` con `type: "external"`.
- Hoy solo `Control PEM` está disponible como acceso real.
- `Project Hub` y `PM Mail` siguen definidos, pero en estado `planned`.

## Control PEM

- `Control PEM` es el primer módulo real integrado.
- Su URL se define en `CONTROL_PEM_URL` dentro de `src/app/navigation.ts`.
- Desde la vista interna del módulo se expone un CTA `Abrir Control PEM`.
- El acceso abre una nueva pestaña. No hay `iframe`, backend ni auth adicional en esta fase.

## Placeholders internos

Los módulos sin integración real todavía usan vistas mínimas dentro del shell para validar:

- selección de módulo
- contexto operativo
- acciones dummy
- continuidad visual

No deben interpretarse como implementaciones finales.

## Separación `src/` vs `Figma/`

- `src/` contiene la app activa.
- `Figma/` contiene histórico visual, variantes y material legacy.
- `Figma/` ya no debe usarse como fuente de build ni como baseline técnico de implementación.
