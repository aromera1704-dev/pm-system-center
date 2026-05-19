# Roadmap Corto Plazo

## 1. Integrar Project Hub

- Sustituir su placeholder interno por acceso real controlado.
- Mantenerlo desacoplado del shell hasta definir contrato de navegación estable.

## 2. Integrar PM Mail

- Repetir el patrón de integración externa inicial usado con `Control PEM`.
- Evitar clonar UX de Gmail dentro de PM-System.

## 3. Introducir routing real

- Sustituir el estado local de sección por navegación explícita cuando ya existan más módulos reales.
- No meter routing complejo antes de tener 2-3 integraciones reales cerradas.

## 4. Preparar auth futura

- Definir punto de acoplamiento de sesión compartida.
- No introducir auth nueva dentro del shell antes de cerrar necesidades reales de módulos externos.

## 5. Cerrar unificación visual

- Completar tokenización donde aún queden residuos.
- Consolidar primitives raíz como base oficial.

## 6. Acoplamiento progresivo de módulos

- Pasar de placeholders internos a accesos reales módulo por módulo.
- Mantener `navigation.ts` como contrato mínimo mientras no exista routing final ni backend común.
