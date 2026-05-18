# V7 Canon Activo

Esta carpeta contiene la familia visual activa del Centro de Operaciones `PM-System`.

## Alcance

`v7/` es la referencia canónica para el shell visual actual de `PM SYSTEM`.

Cuando se necesite localizar la base activa del Centro de Operaciones, debe revisarse:

- `src/app/App.tsx`
- `src/app/components/v7/`

## Qué incluye

- `sidebar.tsx`
- `status-bar.tsx`
- `live-metrics.tsx`
- `command-bar.tsx`
- `quick-actions.tsx`
- `orbital-core.tsx`
- `recent-activity.tsx`

## Regla de uso

- Los cambios nuevos sobre el shell activo de `PM-System` deben partir de esta carpeta.
- Esta carpeta no convierte `V7` en plantilla universal para otros productos.
- Las variantes `V1` a `V6` quedan fuera de esta referencia activa.
