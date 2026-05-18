# PM-System Design System

## Propósito

Este documento define la identidad visual común del ecosistema PM-System. Su función no es decorativa: establece reglas de diseño para evitar deriva visual, ambigüedad entre productos y reutilización incorrecta de patrones.

La dirección aprobada es `Premium Blue + AI Magenta`.

---

## 1. Principios visuales

### 1.1 Identidad del ecosistema

PM-System debe percibirse como un ecosistema SaaS premium, técnico y operativo. No como una suite genérica de administración, no como un ERP clásico y no como una interfaz experimental centrada en efectos.

La sensación objetivo combina:

- precisión operativa,
- claridad estructural,
- sofisticación visual controlada,
- rapidez de lectura,
- jerarquía fuerte sin ruido.

### 1.2 Filosofía formal

La interfaz debe priorizar fondo claro, superficies limpias, profundidad sutil y contraste nítido. El diseño no debe competir con la información. La estética debe reforzar control, foco y fiabilidad.

Principios obligatorios:

- El azul define sistema, estructura, foco y navegación.
- El magenta define inteligencia, automatización y asistencia.
- La neutralidad visual domina la superficie; el color se usa con intención, no por relleno.
- Las pantallas deben respirar. Saturar una vista rompe la percepción premium.
- Cada componente debe parecer parte de un sistema modular, no de un producto aislado.

### 1.3 Tono visual buscado

Referencias válidas:

- Linear: claridad, ritmo y jerarquía.
- Superhuman: precisión premium y foco productivo.
- Arc: navegación elegante y sensación de sistema.
- Microsoft Fluent moderno: limpieza, capas suaves y ergonomía visual.

Referencias no válidas:

- dashboards ERP densos y grises,
- interfaces “gaming”,
- cyberpunk oscuro,
- exceso de neones,
- visuales hipergradientes sin función.

---

## 2. Paleta y uso correcto de color

### 2.1 Paleta principal

#### Core system

- `Primary Blue`: `#2563EB`
- `Hover Blue`: `#1D4ED8`
- `Soft Blue BG`: `#EFF6FF`

#### AI layer

- `AI Accent Magenta`: `#FC10A3`
- `Hover Pink`: `#E6008D`
- `Soft AI BG`: `#FCE7F3`

#### Neutrales operativos

Estos neutros deben mantenerse fríos y limpios. No conviene contaminar la UI base con grises cálidos sucios.

- `Background Primary`: `#F9FAFB`
- `Surface Primary`: `#FFFFFF`
- `Surface Secondary`: `#F3F4F6`
- `Border Default`: `#E5E7EB`
- `Border Strong`: `#D1D5DB`
- `Text Primary`: `#111827`
- `Text Secondary`: `#6B7280`
- `Text Tertiary`: `#9CA3AF`

#### Estados

- `Success`: `#10B981`
- `Warning`: `#D97706`
- `Error`: `#EF4444`
- `Info`: `#2563EB`

### 2.2 Regla estratégica de uso

Distribución recomendada del color:

- 70% neutros y superficies
- 20% azul estructural
- 10% magenta IA y acentos puntuales

Si el magenta supera visualmente al azul en una pantalla general, la pantalla está mal balanceada.

### 2.3 Uso correcto del azul

El azul pertenece a:

- sidebar activa,
- navegación global y local,
- botones primarios,
- selección,
- foco,
- enlaces,
- indicadores de estructura,
- highlights operativos principales.

El azul no debe reservarse para funciones “bonitas”; es el color del sistema.

### 2.4 Uso correcto del magenta

El magenta pertenece exclusivamente a:

- asistentes,
- automatizaciones,
- IA generativa,
- insights inteligentes,
- recomendaciones automáticas,
- workflows asistidos,
- paneles o módulos de inteligencia.

El magenta no debe usarse para navegación principal, tablas generales, títulos de secciones estándar o botones primarios del flujo operativo común.

### 2.5 Errores de color a evitar

- No usar magenta para acciones convencionales.
- No convertir el azul en un color secundario.
- No mezclar azul y magenta en textos principales cuando el render genere tonos sucios o marrones.
- No aplicar gradientes azul-magenta sobre bloques densos de texto.
- No usar fondos magenta amplios en pantallas operativas largas.

---

## 3. Uso de degradados

### 3.1 Función del degradado

El degradado en PM-System no es identidad principal; es un recurso de énfasis. Debe aportar sofisticación, profundidad o señal semántica. Si solo añade ruido, sobra.

### 3.2 Zonas permitidas

Uso recomendado:

- logos de ecosistema,
- cabeceras destacadas,
- iconos o chips de IA,
- paneles asistidos,
- CTAs premium puntuales,
- fondos de highlight en hero o resumen ejecutivo.

### 3.3 Zonas no permitidas

No usar degradados en:

- texto principal de lectura continua,
- tablas operativas completas,
- sidebars enteras cargadas,
- formularios complejos,
- listas con alta densidad de datos,
- estados críticos donde se requiere legibilidad inmediata.

### 3.4 Intensidad visual

Los degradados deben ser suaves, limpios y con bajo ruido cromático. La referencia correcta es “premium controlado”, no “marketing agresivo”.

Reglas:

- transición amplia y estable,
- contraste alto sobre la superficie,
- sin banding visible,
- sin overlays opacos que ensucien la tipografía.

---

## 4. Sidebar

### 4.1 Rol

La sidebar es estructura, no escaparate. Debe comunicar orden, ubicación y acceso rápido. No debe convertirse en panel decorativo ni en una colección de badges brillantes.

### 4.2 Estilo

- Fondo claro o blanco roto.
- Separación suave con borde o shadow mínima.
- Estado activo en azul.
- Hover sobrio con refuerzo de contraste, no con saturación excesiva.
- Iconografía limpia y homogénea.

### 4.3 Jerarquía

La sidebar debe dejar claro:

- dónde está el usuario,
- qué módulo tiene abierto,
- qué pertenece al producto actual,
- qué pertenece al ecosistema si aplica.

### 4.4 Qué no hacer

- No usar magenta como color de navegación base.
- No llenar la sidebar de contadores o alertas permanentes.
- No convertirla en launcher visual de todos los productos desde cualquier aplicación.
- No usar degradados intensos continuos en todo el fondo.

---

## 5. Cards

### 5.1 Rol

La card es una unidad de lectura operativa. Debe encapsular contexto, no solo decorar contenido.

### 5.2 Estilo base

- Fondo claro.
- Borde fino y limpio.
- Radio medio, no blando en exceso.
- Shadow sutil.
- Jerarquía clara entre título, metadata, valor y acción.

### 5.3 Comportamiento

- Hover corto y discreto.
- Elevación mínima.
- Nunca debe parecer una tarjeta flotante de app de consumo.

### 5.4 Tipos especiales

- Card operativa: azul solo en foco o CTA.
- Card de estado: usa color solo en indicador o badge.
- Card de IA: puede incorporar soft magenta background, borde magenta tenue o icono con gradiente.

### 5.5 Qué evitar

- sombras pesadas permanentes,
- bordes gruesos,
- saturación cromática en todas las cards,
- demasiadas cards “feature highlight” en una vista de trabajo.

---

## 6. Botones

### 6.1 Jerarquía obligatoria

El sistema debe operar, como mínimo, con estas capas:

- Primario
- Secundario
- Terciario / Ghost
- IA / Assisted action
- Destructivo

### 6.2 Botón primario

Uso:

- confirmar,
- crear,
- continuar,
- ejecutar acción principal.

Estilo:

- fondo azul,
- hover azul oscuro,
- texto blanco,
- contraste alto,
- sin gradiente por defecto.

### 6.3 Botón secundario

Uso:

- acciones complementarias,
- navegación contextual,
- filtros o utilidades no dominantes.

Estilo:

- superficie clara,
- borde neutro,
- texto oscuro,
- hover con refuerzo suave.

### 6.4 Botón IA

Uso exclusivo:

- redactar con IA,
- sugerir,
- automatizar,
- clasificar,
- resumir,
- proponer acción asistida.

Estilo:

- magenta o degradado suave azul-magenta muy controlado,
- nunca competir con todos los primarios de una pantalla,
- presencia limitada y semántica.

### 6.5 Qué evitar

- usar magenta para “Guardar” o “Continuar”,
- rellenar una pantalla de botones sólidos,
- mezclar demasiados estilos de borde y radios,
- meter gradientes agresivos en botones utilitarios.

---

## 7. Badges y estados

### 7.1 Propósito

Los badges deben clasificar o informar estado con lectura instantánea. No deben actuar como decoración repetitiva.

### 7.2 Mapeo recomendado

- `Success`: verde
- `Warning`: ámbar
- `Error`: rojo
- `Info / Active`: azul
- `AI / Assisted`: magenta
- `Neutral / Idle`: gris

### 7.3 Regla semántica

Un badge magenta indica inteligencia o automatización, no prioridad, no urgencia, no estado de validación manual.

### 7.4 Qué evitar

- usar el mismo color para estado y prioridad si representan cosas distintas,
- poner badge a todo,
- usar badges saturados en tablas densas,
- usar magenta como warning.

---

## 8. Paneles IA

### 8.1 Rol

Los paneles IA deben ser reconocibles al instante, pero sin romper la coherencia del producto. Deben sentirse como una capa inteligente integrada, no como un producto externo incrustado.

### 8.2 Rasgos visuales permitidos

- iconografía con magenta,
- borde suave magenta,
- fondo `Soft AI BG` en bloques acotados,
- microgradiente controlado,
- títulos auxiliares o etiquetas de “Asistido”, “Sugerencia”, “Automático”.

### 8.3 Rasgos obligatorios

- separación clara frente al contenido manual,
- trazabilidad visual entre acción automática y acción humana,
- tono premium, no juguetón.

### 8.4 Qué evitar

- cajas magenta enormes dominando la vista,
- efectos “glow” tipo sci-fi,
- usar IA panel para ocultar acciones operativas básicas,
- copiar el lenguaje visual de chatbots de consumo.

---

## 9. Tablas y listas

### 9.1 Función

Tablas y listas son núcleo operativo. Aquí prima legibilidad, ritmo vertical y lectura rápida. No debe priorizarse la expresividad visual sobre la densidad útil.

### 9.2 Reglas visuales

- fondo muy limpio,
- separadores suaves,
- hover de fila discreto,
- estados y prioridad con badges contenidos,
- tipografía sobria,
- alineación estricta.

### 9.3 Uso del color

- azul para selección, foco y navegación,
- verde, ámbar y rojo para estados,
- magenta solo cuando un dato derive de IA o una automatización.

### 9.4 Qué evitar

- filas con fondo coloreado por defecto,
- gradientes dentro de celdas salvo casos excepcionales,
- abuso de iconos decorativos,
- tablas “tarjetizadas” si la vista necesita escaneo rápido.

---

## 10. Motion y animaciones permitidas

### 10.1 Principio

La animación debe confirmar estructura, foco o transición. Si distrae, está mal.

### 10.2 Permitido

- hover breve en cards y botones,
- fade-in corto en cargas locales,
- resalte suave de foco,
- desplazamiento mínimo en paneles emergentes,
- pulse contenido solo para estados vivos o procesos activos reales.

### 10.3 Ritmo recomendado

- microinteracción: `120ms - 180ms`
- transición estándar: `180ms - 240ms`
- entrada de panel o modal: `220ms - 320ms`

### 10.4 Qué evitar

- animaciones largas,
- parallax,
- rebotes artificiales,
- loaders decorativos complejos,
- pulsos constantes sin significado,
- motion “showcase” en vistas de trabajo.

---

## 11. Qué evitar

### 11.1 Deriva visual

Errores estructurales que rompen el sistema:

- parecer un ERP antiguo,
- parecer una app de correo clónica,
- parecer una demo futurista,
- parecer una web de marketing dentro del producto,
- parecer una colección de componentes sin narrativa.

### 11.2 Errores concretos

- fondos demasiado oscuros como norma general,
- sobreuso de glassmorphism,
- exceso de blur,
- sombras duras,
- tipografía débil en pantallas complejas,
- demasiados colores compitiendo,
- magenta usado como color de moda,
- degradados en zonas masivas,
- interfaces grises sin acentos estructurales,
- exceso de densidad sin aire visual.

---

## 12. Reglas específicas para Project Hub

### 12.1 Posición dentro del ecosistema

Project Hub es una aplicación de gestión industrial. No es el centro visual del ecosistema. Su interfaz debe sentirse especializada, más estructurada y más orientada a planificación, control y documentación.

### 12.2 Carácter visual esperado

Project Hub debe ser:

- más operativo que expresivo,
- más tabular que panelizado,
- más estructural que promocional,
- más técnico que “smart-first”.

### 12.3 Reglas de color en Project Hub

- El azul domina navegación, tabs, selección, hitos, acciones principales y estructura de planificación.
- El magenta solo aparece en funciones asistidas: resúmenes, predicción, ayuda de planificación, clasificación automática o generación de contenido.
- Gantt, EDT, tablas de control y documentación no deben teñirse de magenta salvo en señales explícitas de IA.

### 12.4 Reglas de layout

- Priorizar densidad útil.
- Reducir elementos hero innecesarios.
- Evitar “cards premium” en exceso si la vista es de trabajo intensivo.
- Mantener barras, cabeceras y filtros sobrios.

### 12.5 Qué no debe pasar en Project Hub

- no debe parecer el launcher general del ecosistema,
- no debe incorporar sidebar global invasiva,
- no debe usar paneles IA como capa dominante,
- no debe heredar una estética de inbox,
- no debe competir visualmente con PM-System como centro de operaciones.

---

## Criterio final de validación

Una pantalla del ecosistema cumple este sistema si:

- se entiende rápido,
- se percibe premium sin parecer marketing,
- usa azul como estructura,
- usa magenta solo como inteligencia,
- mantiene limpieza industrial,
- y sigue sintiéndose parte de un ecosistema común aunque pertenezca a productos distintos.

Si una pantalla necesita demasiada explicación para justificar su estilo, el sistema visual ya falló.
