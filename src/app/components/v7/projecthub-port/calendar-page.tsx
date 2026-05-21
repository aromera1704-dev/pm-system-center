import { useEffect, useMemo, useState } from "react";
import { EmbeddedShell } from "./embedded-shell";
import { getActionItems, getProjects } from "./mock-api";
import type { ActionItem, CalendarEvent, CalendarViewMode, ProjectSummary } from "./types";
import { useAsyncData } from "./use-async-data";
import { AgendaView } from "./calendar/agenda-view";
import { CalendarEventCreateModal } from "./calendar/calendar-event-create-modal";
import { MonthView } from "./calendar/month-view";
import { WeekView } from "./calendar/week-view";

const PROJECT_DATE_KEYS = [
  "dateStartPlan",
  "dateEndPlan",
  "dateFat",
  "dateIm",
  "datePo",
  "datePp",
  "dateAp",
  "datePem",
  "dateSat",
] as const;

type ProjectDateKey = (typeof PROJECT_DATE_KEYS)[number];

const PROJECT_MILESTONE_LABELS: Record<ProjectDateKey, string> = {
  dateStartPlan: "Inicio planificado",
  dateEndPlan: "Fin planificado",
  dateFat: "FAT",
  dateIm: "IM",
  datePo: "PO",
  datePp: "PP",
  dateAp: "AP",
  datePem: "PEM",
  dateSat: "SAT",
};

type RangeOption = 30 | 60 | 90 | null;
type KindFilter = "all" | "project" | "task";
type ProjectFilter = "all" | string;
type TimeBucket = "overdue" | "today" | "this_week" | "upcoming";

type CalendarGroup = {
  bucket: TimeBucket;
  label: string;
  events: CalendarEvent[];
};

type MonthCell = {
  date: Date;
  inCurrentMonth: boolean;
};

const BUCKET_LABELS: Record<TimeBucket, string> = {
  overdue: "Vencidas",
  today: "Hoy",
  this_week: "Esta semana",
  upcoming: "Próximas",
};

const BUCKET_ORDER: TimeBucket[] = ["overdue", "today", "this_week", "upcoming"];

function getTodayKey(): string {
  return formatDateKey(new Date());
}

function addDays(date: Date, amount: number): Date {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getWeekStart(date: Date): Date {
  const day = date.getDay();
  const offset = (day + 6) % 7;
  return addDays(date, -offset);
}

function getWeekEndKey(todayKey: string): string {
  return formatDateKey(addDays(getWeekStart(new Date(`${todayKey}T00:00:00`)), 6));
}

function getDateOffsetKey(base: string, days: number): string {
  return formatDateKey(addDays(new Date(`${base}T00:00:00`), days));
}

function toDateKey(value: string | null): string | null {
  if (!value) {
    return null;
  }

  return value.slice(0, 10);
}

function getTimeBucket(dateKey: string, todayKey: string, weekEndKey: string): TimeBucket {
  if (dateKey < todayKey) {
    return "overdue";
  }

  if (dateKey === todayKey) {
    return "today";
  }

  if (dateKey <= weekEndKey) {
    return "this_week";
  }

  return "upcoming";
}

function formatHeaderPeriod(viewMode: CalendarViewMode, currentDate: Date, rangeFilter: RangeOption): string {
  if (viewMode === "week") {
    const weekStart = getWeekStart(currentDate);
    const weekEnd = addDays(weekStart, 6);
    const formatter = new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short" });
    return `${formatter.format(weekStart)} - ${formatter.format(weekEnd)}`;
  }

  if (viewMode === "month") {
    return new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(currentDate);
  }

  if (rangeFilter === null) {
    return "Agenda completa";
  }

  return `Agenda · ${rangeFilter} días`;
}

function getProjectDisplayName(project: ProjectSummary): string {
  return project.reference ? `${project.reference} ${project.name}` : project.name;
}

function buildCalendarEvents(projects: ProjectSummary[], actionItems: ActionItem[]): CalendarEvent[] {
  const events: CalendarEvent[] = [];

  for (const project of projects) {
    for (const key of PROJECT_DATE_KEYS) {
      const raw = project[key];
      if (!raw) {
        continue;
      }

      const dateKey = toDateKey(raw);
      if (!dateKey) {
        continue;
      }

      const displayName = getProjectDisplayName(project);

      events.push({
        id: `project-${project.id}-${key}`,
        kind: "project",
        date: dateKey,
        title: PROJECT_MILESTONE_LABELS[key],
        subtitle: displayName,
        projectId: project.id,
        projectName: project.name,
        projectReference: project.reference,
        projectStatus: project.status,
        linkTo: `/projects/${project.id}`,
      });
    }
  }

  for (const item of actionItems) {
    if (!item.showInCalendar || !item.dueDate) {
      continue;
    }

    const dateKey = toDateKey(item.dueDate);
    if (!dateKey) {
      continue;
    }

    const projectLabel = item.project
      ? item.project.reference
        ? `${item.project.reference} ${item.project.name}`
        : item.project.name
      : null;

    events.push({
      id: `task-${item.id}`,
      kind: "task",
      date: dateKey,
      title: item.title,
      subtitle: projectLabel,
      projectId: item.projectId,
      projectName: item.project?.name ?? null,
      projectReference: item.project?.reference ?? null,
      projectStatus: null,
      linkTo: "/tasks",
    });
  }

  return events;
}

function sortCalendarEvents(events: CalendarEvent[]) {
  return [...events].sort((a, b) => {
    const dateDiff = a.date.localeCompare(b.date);
    if (dateDiff !== 0) {
      return dateDiff;
    }

    return a.title.localeCompare(b.title, "es");
  });
}

function buildCalendarGroups(events: CalendarEvent[], referenceDateKey: string): CalendarGroup[] {
  const weekEndKey = getWeekEndKey(referenceDateKey);
  const bucketMap = new Map<TimeBucket, CalendarEvent[]>();

  for (const bucket of BUCKET_ORDER) {
    bucketMap.set(bucket, []);
  }

  for (const event of events) {
    const bucket = getTimeBucket(event.date, referenceDateKey, weekEndKey);
    bucketMap.get(bucket)?.push(event);
  }

  const groups: CalendarGroup[] = [];

  for (const bucket of BUCKET_ORDER) {
    const bucketEvents = bucketMap.get(bucket) ?? [];

    if (bucketEvents.length === 0) {
      continue;
    }

    groups.push({
      bucket,
      label: BUCKET_LABELS[bucket],
      events: sortCalendarEvents(bucketEvents),
    });
  }

  return groups;
}

function groupEventsByDate(events: CalendarEvent[]): Record<string, CalendarEvent[]> {
  return sortCalendarEvents(events).reduce<Record<string, CalendarEvent[]>>((acc, event) => {
    const current = acc[event.date] ?? [];
    current.push(event);
    acc[event.date] = current;
    return acc;
  }, {});
}

function getMonthGrid(currentDate: Date): MonthCell[] {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const monthStart = getWeekStart(firstDayOfMonth);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const monthEndOffset = (7 - ((lastDayOfMonth.getDay() + 6) % 7) - 1 + 7) % 7;
  const gridEnd = addDays(lastDayOfMonth, monthEndOffset);
  const cells: MonthCell[] = [];

  for (let cursor = monthStart; cursor <= gridEnd; cursor = addDays(cursor, 1)) {
    cells.push({
      date: cursor,
      inCurrentMonth: cursor.getMonth() === currentDate.getMonth(),
    });
  }

  return cells;
}

export function CalendarPage() {
  const [items, setItems] = useState<ActionItem[]>([]);
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [viewMode, setViewMode] = useState<CalendarViewMode>("agenda");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rangeFilter, setRangeFilter] = useState<RangeOption>(30);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all");
  const [kindFilter, setKindFilter] = useState<KindFilter>("all");
  const [search, setSearch] = useState("");
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const { data, error, isLoading } = useAsyncData(
    async () => {
      const [projectsData, actionItems] = await Promise.all([getProjects(), getActionItems()]);

      return { projects: projectsData, actionItems };
    },
    [],
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    setProjects(data.projects);
    setItems(data.actionItems);
  }, [data]);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => getProjectDisplayName(a).localeCompare(getProjectDisplayName(b), "es"));
  }, [projects]);

  const allEvents = useMemo(() => buildCalendarEvents(projects, items), [items, projects]);

  const filteredEvents = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("es");

    return allEvents.filter((event) => {
      if (projectFilter !== "all" && event.projectId !== projectFilter) {
        return false;
      }

      if (kindFilter !== "all" && event.kind !== kindFilter) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const haystack = [event.title, event.subtitle ?? ""].join(" ").toLocaleLowerCase("es");
      return haystack.includes(normalizedSearch);
    });
  }, [allEvents, kindFilter, projectFilter, search]);

  const currentDateKey = formatDateKey(currentDate);
  const todayKey = getTodayKey();

  const agendaEvents = useMemo(() => {
    const maxDateKey = rangeFilter === null ? null : getDateOffsetKey(currentDateKey, rangeFilter);

    return filteredEvents.filter((event) => {
      if (rangeFilter !== null && event.date > currentDateKey && maxDateKey && event.date > maxDateKey) {
        return false;
      }

      return true;
    });
  }, [currentDateKey, filteredEvents, rangeFilter]);

  const agendaGroups = useMemo(() => buildCalendarGroups(agendaEvents, currentDateKey), [agendaEvents, currentDateKey]);

  const weekDays = useMemo(() => {
    const start = getWeekStart(currentDate);
    return Array.from({ length: 7 }, (_, index) => addDays(start, index));
  }, [currentDate]);

  const weekEventsByDate = useMemo(() => {
    const keys = new Set(weekDays.map((day) => formatDateKey(day)));
    return groupEventsByDate(filteredEvents.filter((event) => keys.has(event.date)));
  }, [filteredEvents, weekDays]);

  const monthCells = useMemo(() => getMonthGrid(currentDate), [currentDate]);

  const monthEventsByDate = useMemo(() => {
    const keys = new Set(monthCells.map((cell) => formatDateKey(cell.date)));
    return groupEventsByDate(filteredEvents.filter((event) => keys.has(event.date)));
  }, [filteredEvents, monthCells]);

  const hasAnyEvents = allEvents.length > 0;

  const handlePrevious = () => {
    setCurrentDate((current) => {
      if (viewMode === "month") {
        return addMonths(current, -1);
      }

      return addDays(current, -7);
    });
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleNext = () => {
    setCurrentDate((current) => {
      if (viewMode === "month") {
        return addMonths(current, 1);
      }

      return addDays(current, 7);
    });
  };

  const handleCreated = (item: ActionItem) => {
    setItems((current) => [item, ...current]);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <section className="status-panel">
          <p>Cargando agenda...</p>
        </section>
      );
    }

    if (error) {
      return (
        <section className="status-panel error">
          <p>No se pudo cargar la agenda: {error}</p>
        </section>
      );
    }

    if (!hasAnyEvents) {
      return (
        <section className="detail-block tasks-empty-state">
          <span className="eyebrow">Calendario</span>
          <h2>No hay eventos en el calendario</h2>
          <p>Añade fechas clave a tus proyectos o marca tareas para el calendario desde Mis Tareas.</p>
        </section>
      );
    }

    return (
      <section className="calendar-page">
        <article className="detail-block calendar-toolbar">
          <div className="calendar-view-switch" role="tablist" aria-label="Vistas del calendario">
            {(["agenda", "week", "month"] as CalendarViewMode[]).map((mode) => (
              <button
                aria-selected={viewMode === mode}
                className={`tasks-tab ${viewMode === mode ? "active" : ""}`}
                key={mode}
                onClick={() => setViewMode(mode)}
                role="tab"
                type="button"
              >
                {mode === "agenda" ? "Agenda" : mode === "week" ? "Semana" : "Mes"}
              </button>
            ))}
          </div>

          <div className="calendar-nav">
            <button className="toolbar-button" onClick={handlePrevious} type="button">
              Anterior
            </button>
            <button className="toolbar-button" onClick={handleToday} type="button">
              Hoy
            </button>
            <button className="toolbar-button" onClick={handleNext} type="button">
              Siguiente
            </button>
            <span className="calendar-period-label">{formatHeaderPeriod(viewMode, currentDate, rangeFilter)}</span>
            <button className="toolbar-button toolbar-button-primary" onClick={() => setCreateModalOpen(true)} type="button">
              + Nuevo evento
            </button>
          </div>
        </article>

        <article className="detail-block calendar-filters">
          <div className="calendar-filters-row">
            {viewMode === "agenda" ? (
              <div className="form-field table-filter-field">
                <label htmlFor="calendar-range">Rango</label>
                <select
                  id="calendar-range"
                  value={rangeFilter ?? "all"}
                  onChange={(event) => {
                    const value = event.target.value;
                    setRangeFilter(value === "all" ? null : (Number(value) as RangeOption));
                  }}
                >
                  <option value="30">30 días</option>
                  <option value="60">60 días</option>
                  <option value="90">90 días</option>
                  <option value="all">Todos</option>
                </select>
              </div>
            ) : (
              <div className="form-field table-filter-field table-filter-field-disabled">
                <label htmlFor="calendar-range-disabled">Rango</label>
                <input id="calendar-range-disabled" type="text" value="Solo Agenda" disabled readOnly />
              </div>
            )}

            <div className="form-field table-filter-field">
              <label htmlFor="calendar-kind">Tipo</label>
              <select id="calendar-kind" value={kindFilter} onChange={(event) => setKindFilter(event.target.value as KindFilter)}>
                <option value="all">Todos</option>
                <option value="project">Fechas de proyecto</option>
                <option value="task">Mis Tareas</option>
              </select>
            </div>

            <div className="form-field table-filter-field">
              <label htmlFor="calendar-project">Proyecto</label>
              <select id="calendar-project" value={projectFilter} onChange={(event) => setProjectFilter(event.target.value)}>
                <option value="all">Todos los proyectos</option>
                {sortedProjects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {getProjectDisplayName(project)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field table-filter-field">
              <label htmlFor="calendar-search">Buscar</label>
              <input
                id="calendar-search"
                type="text"
                placeholder="Buscar evento..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
        </article>

        {filteredEvents.length === 0 ? (
          <section className="detail-block tasks-empty-state tasks-empty-state-filtered">
            <h2>No hay eventos para este filtro.</h2>
          </section>
        ) : null}

        {filteredEvents.length > 0 && viewMode === "agenda" ? <AgendaView groups={agendaGroups} /> : null}
        {filteredEvents.length > 0 && viewMode === "week" ? (
          <WeekView days={weekDays} eventsByDate={weekEventsByDate} todayKey={todayKey} />
        ) : null}
        {filteredEvents.length > 0 && viewMode === "month" ? (
          <MonthView cells={monthCells} eventsByDate={monthEventsByDate} todayKey={todayKey} />
        ) : null}
      </section>
    );
  };

  return (
    <div className="projecthub-port">
      <EmbeddedShell
        title="Calendario"
        headerContent={
          <div className="project-detail-hero">
            <div className="project-header-copy project-detail-header-copy">
              <span className="eyebrow">Planificación</span>
              <h1 className="hero-title project-detail-title">Calendario</h1>
              <p className="project-detail-meta">
                <span>Agenda operativa con fechas clave de proyectos y tareas programadas.</span>
              </p>
            </div>
          </div>
        }
      >
        {renderContent()}
        <CalendarEventCreateModal
          open={isCreateModalOpen}
          projects={projects}
          onClose={() => setCreateModalOpen(false)}
          onCreated={handleCreated}
        />
      </EmbeddedShell>
    </div>
  );
}
