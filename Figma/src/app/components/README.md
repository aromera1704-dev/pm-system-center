# Components Root Status

## Estado

La carpeta `Figma/src/app/components/` root sin versión explícita es `legado residual` heredado de `V2`.

No es la base visual activa de `PM SYSTEM`.

## Referencia activa

La referencia canónica vigente del Centro de Operaciones es:

- `Figma/src/app/App.tsx`
- `Figma/src/app/components/v7/`

Cualquier implementación nueva debe partir de `App.tsx` y `components/v7/`.

## Qué contiene esta carpeta root

Los archivos root de esta carpeta corresponden a una línea heredada previa a la canonización de `V7`.

Componentes detectados:

- `activity-cards.tsx`
- `background-effects.tsx`
- `command-bar.tsx`
- `live-metrics.tsx`
- `orbital-core.tsx`
- `quick-actions.tsx`
- `sidebar.tsx`
- `status-bar.tsx`

## Cómo debe leerse

- usar solo como legado accesible para trazabilidad,
- no usar como baseline de nueva implementación,
- no reimportar estos componentes root como referencia activa,
- no confundir esta carpeta con `shared UI`,
- no confundir esta carpeta con la familia `v7/`.

## Clasificación

- Estado actual: `legado residual`
- Herencia funcional: `V2`
- Uso permitido: `consulta histórica`
- Estado futuro esperado: `candidato a archivo futuro`
