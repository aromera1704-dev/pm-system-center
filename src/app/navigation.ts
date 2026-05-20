export type NavigationModuleStatus = "available" | "planned";
export type NavigationModuleType = "internal" | "external";

export type NavigationModule = {
  id: string;
  label: string;
  description: string;
  status: NavigationModuleStatus;
  href: string;
  type: NavigationModuleType;
};

export const navigationModuleIds = {
  projectHub: "project-hub",
  pmMail: "pm-mail",
  controlPem: "control-pem",
  docs: "docs",
  automation: "automation",
  kpis: "kpis",
  system: "system",
} as const;

export type NavigationModuleId =
  (typeof navigationModuleIds)[keyof typeof navigationModuleIds];

// Sustituir por la URL final publicada del módulo cuando exista.
export const PROJECT_HUB_URL = "http://localhost:5173/projects";

// Sustituir por la URL final publicada del módulo cuando exista.
export const CONTROL_PEM_URL = "https://control-pem.arlprojects.com";

export const navigationModules: NavigationModule[] = [
  {
    id: "project-hub",
    label: "Proyectos",
    description: "Gestión operativa de proyectos industriales.",
    status: "available",
    href: PROJECT_HUB_URL,
    type: "external",
  },
  {
    id: "pm-mail",
    label: "PM Mail",
    description: "Bandeja operativa y comunicación del ecosistema.",
    status: "planned",
    href: "#pm-mail",
    type: "external",
  },
  {
    id: "control-pem",
    label: "Control PEM",
    description: "Control operativo de campo para SAT, validaciones PEM, diarios e incidencias de ejecución.",
    status: "available",
    href: CONTROL_PEM_URL,
    type: "external",
  },
  {
    id: "docs",
    label: "Docs",
    description: "Acceso documental y trazabilidad técnica.",
    status: "available",
    href: "#docs",
    type: "internal",
  },
  {
    id: "automation",
    label: "Automatización",
    description: "Workflows, agentes y procesos asistidos.",
    status: "available",
    href: "#automation",
    type: "internal",
  },
  {
    id: "kpis",
    label: "KPIs",
    description: "Métricas y estado agregado del sistema.",
    status: "available",
    href: "#kpis",
    type: "internal",
  },
  {
    id: "system",
    label: "Sistema",
    description: "Configuración y estado del shell operativo.",
    status: "available",
    href: "#system",
    type: "internal",
  },
];

export const primaryNavigationModules = navigationModules.filter(
  (module) => module.id !== "system",
);

export const systemNavigationModule = navigationModules.find(
  (module) => module.id === "system",
)!;

export function getNavigationModule(id: string) {
  return navigationModules.find((module) => module.id === id);
}
