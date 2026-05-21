export type ProjectSummary = {
  id: string;
  name: string;
  client: string | null;
  reference: string | null;
  status: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
  dateStartPlan: string | null;
  dateEndPlan: string | null;
  dateFat: string | null;
  dateIm: string | null;
  datePo: string | null;
  datePp: string | null;
  dateAp: string | null;
  datePem: string | null;
  dateSat: string | null;
};

export type ActionItemProject = {
  id: string;
  name: string;
  reference: string | null;
};

export type ActionItemStatus = "pending" | "in_progress" | "done" | "cancelled";
export type ActionItemPriority = "low" | "medium" | "high";
export type ActionItemSource = "manual" | "meeting" | "kickoff" | "note" | "other";

export type ActionItem = {
  id: string;
  title: string;
  description: string | null;
  status: ActionItemStatus;
  priority: ActionItemPriority;
  source: ActionItemSource;
  dueDate: string | null;
  showInCalendar: boolean;
  projectId: string | null;
  project: ActionItemProject | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActionItemInput = {
  title: string;
  description?: string;
  status?: ActionItemStatus;
  priority?: ActionItemPriority;
  source?: ActionItemSource;
  dueDate?: string | null;
  showInCalendar?: boolean;
  projectId?: string;
  projectName?: string;
};

export type UpdateActionItemInput = {
  title?: string;
  description?: string | null;
  status?: ActionItemStatus;
  priority?: ActionItemPriority;
  source?: ActionItemSource;
  dueDate?: string | null;
  showInCalendar?: boolean;
  projectId?: string | null;
};

export type CalendarEventKind = "project" | "task";

export type CalendarEvent = {
  id: string;
  kind: CalendarEventKind;
  date: string;
  title: string;
  subtitle: string | null;
  projectId: string | null;
  projectName: string | null;
  projectReference: string | null;
  projectStatus: string | null;
  linkTo: string;
};

export type CalendarViewMode = "agenda" | "week" | "month";
