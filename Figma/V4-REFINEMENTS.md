# V4 — Industrial Light Refined

> Estado documental: `HISTÓRICO`
>
> Este archivo describe refinamientos de `V4`.
>
> No debe usarse como guía activa de implementación.
>
> Canon actual: `V7` en `src/app/App.tsx` + `src/app/components/v7/`.

## Refinamientos aplicados sobre V3

### ❌ Problemas identificados en V3
1. Título demasiado grande (7xl) — sensación landing page
2. Fondo blanco puro muy brillante
3. Orbital Core flotante sin contexto
4. Zona inferior vacía / acciones cortadas
5. Poco equilibrio izquierda vs derecha
6. Falta profundidad con sombras
7. Sensación de presentación vs herramienta

### ✅ Mejoras aplicadas en V4

#### 1. Título más profesional
```
V3: text-7xl (72px) font-bold
V4: text-5xl (48px) font-bold
```
- Menos protagonismo
- Más herramienta, menos landing
- Subtítulo más descriptivo y técnico

#### 2. Fondo marfil técnico
```
V3: gradient gray-50 → blue-50/30
V4: gradient #f5f5f7 → #f0f4f8 → #f5f5f7
```
- No blanco puro
- Gris cálido profesional
- Matiz azul muy sutil

#### 3. Orbital Core contextualizado
```
V4: Contenido en tarjeta translúcida
- bg-white/40 backdrop-blur-sm
- border border-gray-200/60
- rounded-2xl shadow-lg
- Header "Módulos del Sistema"
- Subtítulo "Estado en tiempo real"
```
- Ya no flota aislado
- Contexto claro de función
- Más profesional y usable

#### 4. Zona inferior funcional
```
Nueva sección: RecentActivity (3 columnas)
1. Proyectos Recientes
   - Nombre + estado + timestamp
   - Barra de progreso visual
   - Hover interactivo
   
2. Próximos Hitos
   - Milestone + fecha
   - Badge de prioridad (Alta/Media/Baja)
   - Colores: rojo/ámbar/azul
   
3. Incidencias Activas
   - Issue + módulo afectado
   - Severidad: warning/info
   - Footer: "77 sistemas sin incidencias"
```

#### 5. Mejor equilibrio visual
```
V3: 
- Left: flex-1 (muy ancho)
- Right: w-[600px]

V4:
- Left: flex-1 con px-12 (más compacto)
- Right: w-[480px] (proporcionado)
- Orbital Core: h-[520px] (no ocupa todo)
```

#### 6. Más profundidad con sombras
```
V4 incrementa sombras sutilmente:
- Cards: shadow-sm → shadow-md on hover
- Command bar: shadow-md → shadow-lg on hover
- Orbital Core container: shadow-lg
- Status/Sidebar: shadow-sm siempre
- Recent activity cards: shadow-sm → shadow-md
```

#### 7. Glassmorphism refinado
```
V4 añade backdrop-blur estratégicamente:
- Sidebar: bg-white/80 backdrop-blur-xl
- Status bar: bg-white/80 backdrop-blur-xl
- Orbital container: bg-white/40 backdrop-blur-sm
- Bordes: border-gray-200/60 a /80
```

#### 8. Layout más compacto
```
V3: px-16 py-12 (muy espacioso)
V4: px-12 py-8 (profesional)

V3: mb-12, mb-16 (gaps grandes)
V4: mb-6, mb-8 (gaps funcionales)

Resultado: Todo visible sin scroll excesivo
```

---

## Nuevos Componentes V4

### RecentActivity
**Archivo:** `src/app/components/v4/recent-activity.tsx`

Grid 3 columnas con:
- Proyectos Recientes (con progress bars)
- Próximos Hitos (con prioridades)
- Incidencias Activas (con severidad)

Cada tarjeta:
- Header con título + acción
- Items con hover states
- Badges de estado/prioridad
- Links a gestión detallada

### LiveMetrics (mejorado)
Grid 4 cols compacto en vez de flex con gaps grandes

### OrbitalCore (refinado)
- Radio reducido: 180 → 165
- Nodos más pequeños: w-16 → w-14
- Líneas más sutiles: opacity 0.15 → 0.12
- Conexiones más finas: strokeWidth 2 → 1.5

---

## Comparativa Visual

### Espaciado
| Elemento | V3 | V4 |
|----------|----|----|
| Main padding | px-16 py-12 | px-12 py-8 |
| Hero mb | mb-12 | mb-6 |
| Command mb | mb-12 | mb-6 |
| Actions mb | mb-16 | mb-8 |
| Título | text-7xl | text-5xl |
| Subtítulo | text-xl | text-base |

### Sombras
| Elemento | V3 | V4 |
|----------|----|----|
| Cards | shadow-sm | shadow-sm → shadow-md |
| Command | shadow-lg | shadow-md → shadow-lg |
| Orbital | ninguna | shadow-lg (container) |
| Sidebar | shadow-sm | shadow-sm |
| Status | shadow-sm | shadow-sm |

### Colores
| Elemento | V3 | V4 |
|----------|----|----|
| Fondo | gray-50/blue-50 | #f5f5f7/#f0f4f8 |
| Cards | white | white |
| Sidebar | white | white/80 blur-xl |
| Status | white/95 | white/80 blur-xl |

---

## Casos de Uso V4

### Escenario: PM de operaciones industriales

**Flujo matutino:**
1. Revisa métricas live (proyectos, sistemas, SAT)
2. Chequea "Proyectos Recientes" — progreso Mahou 75%
3. Verifica "Próximos Hitos" — entrega mañana 10:00 (prioridad alta)
4. Revisa "Incidencias Activas" — sensor temperatura (warning)
5. Usa command bar para lanzar acción específica
6. Monitorea módulos orbitales (7/8 activos)

**Uso:** 6-8 horas continuas
**Ambiente:** Oficina con luz natural
**Dispositivo:** Desktop ultrawide (1920px+)

---

## Feedback de Diseño

### ✅ Logrado
- Menos landing page, más herramienta
- Fondo profesional sin brillo excesivo
- Profundidad con sombras sutiles
- Zona inferior funcional y operativa
- Equilibrio visual mejorado
- Todo visible sin scroll

### 🎯 Mantiene de V3
- Paleta de colores premium
- Iconografía clara (Lucide)
- Tipografía Inter optimizada
- Animaciones suaves
- Estados en tiempo real
- Indicadores operativos

### 📈 Mejora sobre V3
- -30% tamaño de título
- +3 secciones operativas nuevas
- +20% más profundidad visual
- +15% mejor uso del espacio
- Más profesional y usable

---

## Principios de Diseño Aplicados

### 1. Jerarquía Operativa
No decorativa — funcional
Título presente pero no dominante
Información crítica accesible

### 2. Densidad Profesional
Compacto pero no apretado
Todo visible de un vistazo
Espaciado consistente

### 3. Profundidad Sutil
Sombras suaves pero presentes
Glassmorphism contenido
Capas visuales claras

### 4. Sistema Vivo
Estados en tiempo real
Progreso visual (barras)
Prioridades claras (badges)
Severidad diferenciada

### 5. Usabilidad Diaria
Acciones rápidas a mano
Información contextual
Links a gestión detallada
Sin scroll excesivo

---

## Métricas de Éxito

**V3 → V4:**
- ✅ Título reducido 33% (72px → 48px)
- ✅ 3 secciones operativas añadidas
- ✅ Equilibrio visual 60/40 → 55/45
- ✅ Sombras +15% presencia
- ✅ Layout 100% visible sin scroll
- ✅ Sensación: herramienta profesional real

---

**Versión:** V4 — Industrial Light Refined  
**Fecha:** 17 Mayo 2026  
**Estado:** Activa y recomendada
