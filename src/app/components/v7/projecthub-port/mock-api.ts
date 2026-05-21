import type {
  ActionItem,
  ActionItemProject,
  CreateActionItemInput,
  ProjectSummary,
  UpdateActionItemInput,
} from "./types";

const now = "2026-05-21T09:30:00.000Z";

const baseProjects: ProjectSummary[] = [
  {
    id: "ph-2418",
    name: "Torre Norte",
    client: "Atlas Energy",
    reference: "PH-2418",
    status: "in_progress",
    progress: 68,
    createdAt: "2026-03-02T10:00:00.000Z",
    updatedAt: now,
    dateStartPlan: "2026-03-10",
    dateEndPlan: "2026-10-18",
    dateFat: "2026-05-20",
    dateIm: "2026-06-04",
    datePo: "2026-06-18",
    datePp: "2026-07-08",
    dateAp: "2026-08-02",
    datePem: "2026-09-03",
    dateSat: "2026-10-02",
  },
  {
    id: "ph-2377",
    name: "Planta Este",
    client: "Celsa Industrial",
    reference: "PH-2377",
    status: "planned",
    progress: 42,
    createdAt: "2026-02-14T10:00:00.000Z",
    updatedAt: now,
    dateStartPlan: "2026-02-18",
    dateEndPlan: "2026-11-12",
    dateFat: null,
    dateIm: "2026-05-28",
    datePo: "2026-06-12",
    datePp: "2026-07-17",
    dateAp: "2026-08-23",
    datePem: "2026-09-16",
    dateSat: null,
  },
  {
    id: "ph-2451",
    name: "Bioenergía",
    client: "GreenGrid",
    reference: "PH-2451",
    status: "in_progress",
    progress: 57,
    createdAt: "2026-04-01T10:00:00.000Z",
    updatedAt: now,
    dateStartPlan: "2026-04-10",
    dateEndPlan: "2026-12-15",
    dateFat: null,
    dateIm: null,
    datePo: null,
    datePp: "2026-06-02",
    dateAp: "2026-07-06",
    datePem: "2026-08-11",
    dateSat: "2026-10-24",
  },
];

function toActionItemProject(project: ProjectSummary | undefined): ActionItemProject | null {
  if (!project) {
    return null;
  }

  return {
    id: project.id,
    name: project.name,
    reference: project.reference,
  };
}

let actionItems: ActionItem[] = [
  {
    id: "act-001",
    title: "Cerrar pendientes FAT línea norte",
    description: "Validar observaciones abiertas y dejar paquete listo para revisión final.",
    status: "pending",
    priority: "high",
    source: "meeting",
    dueDate: "2026-05-20",
    showInCalendar: true,
    projectId: "ph-2418",
    project: toActionItemProject(baseProjects[0]),
    createdAt: "2026-05-14T10:00:00.000Z",
    updatedAt: "2026-05-19T09:00:00.000Z",
  },
  {
    id: "act-002",
    title: "Revisar cronograma de compras críticas",
    description: "Cruzar desviaciones del proveedor con hitos comprometidos.",
    status: "in_progress",
    priority: "high",
    source: "kickoff",
    dueDate: "2026-05-21",
    showInCalendar: true,
    projectId: "ph-2377",
    project: toActionItemProject(baseProjects[1]),
    createdAt: "2026-05-12T08:30:00.000Z",
    updatedAt: "2026-05-20T11:00:00.000Z",
  },
  {
    id: "act-003",
    title: "Actualizar minuta de coordinación semanal",
    description: "Consolidar acuerdos, responsables y bloqueo de suministros.",
    status: "pending",
    priority: "medium",
    source: "note",
    dueDate: "2026-05-23",
    showInCalendar: false,
    projectId: null,
    project: null,
    createdAt: "2026-05-17T12:00:00.000Z",
    updatedAt: "2026-05-18T12:30:00.000Z",
  },
  {
    id: "act-004",
    title: "Preparar handoff para Control PEM",
    description: "Alinear paquetes de validación para arranque de campo.",
    status: "done",
    priority: "medium",
    source: "manual",
    dueDate: "2026-05-18",
    showInCalendar: true,
    projectId: "ph-2451",
    project: toActionItemProject(baseProjects[2]),
    createdAt: "2026-05-11T08:00:00.000Z",
    updatedAt: "2026-05-18T18:25:00.000Z",
  },
  {
    id: "act-005",
    title: "Confirmar ventana de IM con cliente",
    description: null,
    status: "pending",
    priority: "low",
    source: "other",
    dueDate: "2026-05-28",
    showInCalendar: true,
    projectId: "ph-2377",
    project: toActionItemProject(baseProjects[1]),
    createdAt: "2026-05-16T10:10:00.000Z",
    updatedAt: "2026-05-16T10:10:00.000Z",
  },
];

const projects = [...baseProjects];

function cloneProjects() {
  return projects.map((project) => ({ ...project }));
}

function cloneActionItems() {
  return actionItems.map((item) => ({
    ...item,
    project: item.project ? { ...item.project } : null,
  }));
}

function getProjectById(projectId: string | null | undefined) {
  if (!projectId) {
    return undefined;
  }

  return projects.find((project) => project.id === projectId);
}

function hydrateProject(projectId: string | null | undefined) {
  return toActionItemProject(getProjectById(projectId));
}

function normalizeCreateInput(input: CreateActionItemInput): ActionItem {
  const timestamp = new Date().toISOString();
  const projectId = input.projectId ?? null;

  return {
    id: `act-${Math.random().toString(36).slice(2, 10)}`,
    title: input.title.trim(),
    description: input.description?.trim() || null,
    status: input.status ?? "pending",
    priority: input.priority ?? "medium",
    source: input.source ?? "manual",
    dueDate: input.dueDate ?? null,
    showInCalendar: input.showInCalendar ?? false,
    projectId,
    project: hydrateProject(projectId),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export async function getProjects() {
  return cloneProjects();
}

export async function getActionItems() {
  return cloneActionItems();
}

export async function createActionItem(input: CreateActionItemInput) {
  const created = normalizeCreateInput(input);
  actionItems = [created, ...actionItems];
  return { ...created, project: created.project ? { ...created.project } : null };
}

export async function updateActionItem(id: string, input: UpdateActionItemInput) {
  const existing = actionItems.find((item) => item.id === id);

  if (!existing) {
    throw new Error("No se encontró la tarea");
  }

  const projectId = input.projectId === undefined ? existing.projectId : input.projectId;
  const updated: ActionItem = {
    ...existing,
    ...input,
    title: input.title !== undefined ? input.title.trim() : existing.title,
    projectId: projectId ?? null,
    project: hydrateProject(projectId),
    updatedAt: new Date().toISOString(),
  };

  actionItems = actionItems.map((item) => (item.id === id ? updated : item));
  return { ...updated, project: updated.project ? { ...updated.project } : null };
}

export async function deleteActionItem(id: string) {
  actionItems = actionItems.filter((item) => item.id !== id);
}
