export type NavigationModuleStatus = "available" | "planned" | "external";
export type NavigationModuleType = "internal" | "external" | "planned";

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

export const navigationModules: NavigationModule[] = [
  {
    id: "project-hub",
    label: "Project Hub",
    description: "Gestión operativa de proyectos industriales.",
    status: "external",
    href: "#project-hub",
    type: "external",
  },
  {
    id: "pm-mail",
    label: "PM Mail",
    description: "Bandeja operativa y comunicación del ecosistema.",
    status: "external",
    href: "#pm-mail",
    type: "external",
  },
  {
    id: "control-pem",
    label: "Control PEM",
    description: "Operación de campo, validaciones y SAT.",
    status: "external",
    href: "#control-pem",
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
