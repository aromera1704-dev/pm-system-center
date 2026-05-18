# V7 — Premium Blue + AI Magenta (PM Mail Identity)

## 🎯 Objetivo: Unificar Identidad Visual PM-System + PM Mail

V7 aplica la **misma paleta de colores Premium Blue + AI Magenta** definida para PM Mail al Centro de Operaciones PM-System, creando un ecosistema visual unificado.

---

## ✅ Qué NO Cambió (Estructura Preservada 100%)

### Layout & Proporciones
- ✅ Mismo layout que V6/V3
- ✅ Title: text-7xl
- ✅ Spacing: px-16 py-12
- ✅ Orbital Core: w-[600px], radius 180px
- ✅ Grid de Quick Actions: 3 columnas
- ✅ Recent Activity: 3 columnas
- ✅ Sidebar: 20px width
- ✅ Status bar: 14px height
- ✅ Todas las proporciones idénticas

### Componentes y Funcionalidad
- ✅ Mismos 7 componentes
- ✅ Misma jerarquía visual
- ✅ Mismas animaciones
- ✅ Mismas interacciones
- ✅ Mismo espaciado
- ✅ Mismas sombras (shadow-md/lg)
- ✅ Mismos border-radius

---

## 🎨 Qué Cambió: Paleta de Colores

### Paleta V7 — Premium Blue + AI Magenta

#### PRIMARY SYSTEM (Azul)
```css
Primary Blue:   #2563EB  /* Reemplaza Teal #1a5a6a */
Hover Blue:     #1D4ED8
Soft Blue BG:   #EFF6FF
```

#### AI / SMART LAYER (Magenta)
```css
AI Magenta:     #FC10A3  /* Reemplaza Copper #b87333 para elementos IA */
Hover Pink:     #E6008D
Soft AI BG:     #FCE7F3
```

#### NEUTRALS
```css
Background:     #F9FAFB  /* Reemplaza gradient gray-50/blue-50 */
Surface:        #FFFFFF
Border:         #E5E7EB  /* Mismo gray-200 */
Text Primary:   #111827  /* gray-900 */
Text Secondary: #6B7280  /* Mismo */
```

#### ACCENT
```css
Warm Accent:    #D4A574  /* Similar a copper, para acentos no-IA */
```

#### SYSTEM
```css
Success:        #10b981  /* Mismo green */
Error:          #ef4444  /* Mismo red */
```

---

## 🔄 Mapeo de Colores V6 → V7

### Teal #1a5a6a → Blue #2563EB
**Usado para elementos del sistema principal:**
- Logo gradient (primer color)
- Sidebar activo/hover
- Command bar icon gradient (primer color)
- Quick actions: "Revisar proyecto", "Validación PEM"
- Orbital modules: Project_Hub, GitHub, KPIs
- Links y botones de acción
- Textos "Ver todos", "Calendario", "Gestionar"

### Copper #b87333 → Dividido según contexto

**→ AI Magenta #FC10A3** para elementos IA/Automatización:
- Logo gradient (segundo color)
- Command bar icon gradient (segundo color)
- Quick actions: "Automatización" (Workflow icon)
- Orbital modules: Automatizaciones, n8n, IA Agents
- Orbital core gradient central

**→ Warm Accent #D4A574** para acentos operativos no-IA:
- Status bar SAT badge
- Quick actions: "Estado de obra", "Informe diario"
- Orbital module: Control_PEM
- Progress bars
- Priority badges (medium)
- Warning indicators

### Grey #6b7280 → Mismo
- Quick action: "Generar plan de acción"
- Orbital module: Docs (idle)
- Textos secundarios
- Estados inactivos

---

## 📊 Uso Estratégico del Color

### Azul (Primary System) — 60% del color
**Para:**
- Navegación principal
- Botones primarios
- Estados seleccionados
- Highlights operativos
- KPIs activos
- Acciones del sistema

**Ejemplos:**
- Sidebar activo
- "Revisar proyecto"
- "Validación PEM"
- Project_Hub, GitHub, KPIs modules

### Magenta (AI Layer) — 20% del color
**Para:**
- Módulos IA
- Automatizaciones
- Asistentes inteligentes
- Recomendaciones
- Insights IA
- Alertas inteligentes
- Acciones smart

**Ejemplos:**
- IA Agents module
- Automatizaciones module
- n8n workflow automation
- Command bar icon (gradient)

### Warm Accent — 10% del color
**Para:**
- Alertas operativas
- Estados de obra
- Documentación
- Informes
- Progress indicators

### Neutrals — 10% del color
**Para:**
- Estados idle
- Acciones genéricas
- Placeholders

---

## 🎨 Componentes Específicos

### Sidebar
```tsx
Logo: gradient Blue → Magenta
Active: bg-[#2563EB]/10, text-[#2563EB]
Hover: text-[#2563EB], bg-gray-50
```

### Status Bar
```tsx
SAT Badge: bg-[#D4A574]/10, border-[#D4A574]/20, text-[#D4A574]
```

### Command Bar
```tsx
Icon: gradient Blue → Magenta
```

### Quick Actions
```tsx
Revisar proyecto: #2563EB (Blue)
Estado de obra: #D4A574 (Warm Accent)
Generar plan: #6b7280 (Grey)
Automatización: #FC10A3 (Magenta) ← IA
Informe diario: #D4A574 (Warm Accent)
Validación PEM: #2563EB (Blue)
```

### Orbital Core
```tsx
Core gradient: Blue → Magenta → Blue
PM Core text: gradient Blue → Magenta

Modules:
- Project_Hub: #2563EB (Blue)
- Control_PEM: #D4A574 (Warm Accent)
- Automatizaciones: #FC10A3 (Magenta) ← IA
- n8n: #FC10A3 (Magenta) ← IA
- Docs: #6b7280 (Grey - idle)
- GitHub: #2563EB (Blue)
- IA Agents: #FC10A3 (Magenta) ← IA
- KPIs: #2563EB (Blue)
```

### Recent Activity
```tsx
Links: #2563EB (Blue)
Progress bars: #D4A574 (Warm Accent)
Priority high: red
Priority medium: #D4A574 (Warm Accent)
Priority low: grey
Warning: #D4A574 (Warm Accent, pulsing)
```

---

## 🎯 Principios de Diseño

### 1. Magenta como "Capa Inteligente Premium"
- No domina la interfaz
- Se reserva para elementos IA/automatización
- Crea diferenciación visual clara
- Premium sin ser agresivo

### 2. Azul como Sistema Principal
- Mayoría de elementos operativos
- Navegación y acciones core
- Identidad visual primaria

### 3. Warm Accent para Operaciones
- Alertas y estados operativos
- No confundir con IA
- Profesional y cálido

### 4. Background Limpio
- Solid #F9FAFB en lugar de gradiente
- Más profesional y moderno
- Mejor para uso prolongado
- Ambient gradients sutiles (Blue + Magenta)

---

## 🔧 Inspiración y Referencias

Mismo sistema visual que PM Mail:
- **Microsoft Fluent** — Clean enterprise aesthetic
- **Arc** — Premium modern navigation
- **Linear** — Minimal operational UI
- **Raycast** — Command-driven interface
- **Superhuman** — Premium productivity tool

Sensación objetivo:
- ✅ Tecnológica
- ✅ Premium
- ✅ Moderna
- ✅ Elegante
- ✅ Enterprise
- ✅ Limpia
- ✅ Operativa
- ✅ Sofisticada

NO:
- ❌ Gaming
- ❌ Neón excesivo
- ❌ Gradients agresivos
- ❌ Startup juvenil
- ❌ ERP clásico
- ❌ Dashboard saturado

---

## 📈 Resultado

**V7 = V6 estructura + PM Mail color identity**

- Mismo layout y proporciones de V3/V6
- Paleta unificada con PM Mail
- Capa IA claramente diferenciada (Magenta)
- Sistema operativo en Blue
- Background profesional
- Ecosistema visual coherente

---

**Version:** V7 — Premium Blue + AI Magenta  
**Base:** V6 estructura (V3 proportions) + PM Mail palette  
**Cambios:** Solo colores, estructura 100% preservada  
**Character:** Professional + Modern + Enterprise + AI-Ready  
**Ecosystem:** PM-System ↔ PM Mail (unified identity)
