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
  myTasks: "my-tasks",
  calendar: "calendar",
  tools: "tools",
  projectHub: "project-hub",
  pmMail: "pm-mail",
  controlPem: "control-pem",
} as const;

export type NavigationModuleId =
  (typeof navigationModuleIds)[keyof typeof navigationModuleIds];

// Sustituir por la URL final publicada del módulo cuando exista.
export const PROJECT_HUB_URL =
  import.meta.env.VITE_PROJECT_HUB_URL ?? "http://localhost:5173/projects";

// Sustituir por la URL final publicada del módulo cuando exista.
export const CONTROL_PEM_URL = "https://control-pem.arlprojects.com";

export const navigationModules: NavigationModule[] = [
  {
    id: "my-tasks",
    label: "Mis tareas",
    description: "Placeholder interno para foco operativo, priorización y seguimiento personal.",
    status: "available",
    href: "#my-tasks",
    type: "internal",
  },
  {
    id: "calendar",
    label: "Calendario",
    description: "Placeholder interno para agenda operativa, hitos y coordinación temporal.",
    status: "available",
    href: "#calendar",
    type: "internal",
  },
  {
    id: "project-hub",
    label: "Project Hub",
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
    id: "tools",
    label: "Herramientas",
    description: "Accesos internos agrupados para Docs, GitHub, n8n, IA / Agents, Automatizaciones y KPIs.",
    status: "available",
    href: "#tools",
    type: "internal",
  },
];

export const primaryNavigationModules = navigationModules;

export function getNavigationModule(id: string) {
  return navigationModules.find((module) => module.id === id);
}
