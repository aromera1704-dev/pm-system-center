# PM-System

PM-System es el Centro de Operaciones del ecosistema. Su función actual es actuar como shell operativo común, exponer navegación modular y servir como punto de entrada a módulos internos y externos.

## Estado actual

- La app activa vive en `src/`.
- El shell visual operativo ya funciona fuera de `Figma/`.
- Existe navegación modular interna controlada por estado local en `src/app/App.tsx`.
- `Control PEM` es el primer módulo con acceso real desde PM-System.
- `Project Hub` y `PM Mail` siguen en estado `planned`.
- `Figma/` se conserva como histórico visual y referencia legacy. No es la app activa.

## Estructura del repo

- `src/`
  App real de PM-System.
- `src/app/`
  Shell principal, navegación y componentes activos.
- `src/app/components/v7/`
  Shell visual operativo actual.
- `src/app/components/ui/`
  Primitives UI base normalizadas con tokens PM.
- `src/styles/`
  Tokens, tema y base visual oficial.
- `docs/`
  Documentación técnica viva del estado actual.
- `Figma/`
  Histórico visual separado de la app activa.

## Módulos actuales

- `Control PEM`
  Integrado como acceso real externo disponible.
- `Project Hub`
  Planned. Sin integración real todavía.
- `PM Mail`
  Planned. Sin integración real todavía.
- `Docs`
  Sección interna placeholder.
- `Automatización`
  Sección interna placeholder.
- `KPIs`
  Sección interna placeholder.
- `Sistema`
  Sección interna placeholder del shell.

## Desarrollo

Instalar dependencias:

```bash
npm install
```

Arrancar en desarrollo:

```bash
npm run dev
```

Generar build:

```bash
npm run build
```

## Notas

- La fuente única de navegación está en `src/app/navigation.ts`.
- No hay routing real todavía.
- No hay backend ni auth nueva en esta fase.
