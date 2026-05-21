import { useEffect, useMemo, useState } from "react";
import { ActionItemCreateModal } from "./action-item-create-modal";
import { ActionItemEditModal } from "./action-item-edit-modal";
import { DeleteConfirmModal } from "./delete-confirm-modal";
import { EmbeddedShell } from "./embedded-shell";
import { getEdtStatusTone } from "./edt-utils";
import { deleteActionItem, getActionItems, getProjects, updateActionItem } from "./mock-api";
import type { ActionItem, ProjectSummary } from "./types";
import { useAsyncData } from "./use-async-data";

type TaskStatusFilter = "all" | "pending" | "in_progress" | "done" | "cancelled";
type ProjectFilter = "all" | "none" | string;

type TaskGroup = {
  key: string;
  title: string;
  items: ActionItem[];
};

const statusTabs: Array<{ id: TaskStatusFilter; label: string }> = [
  { id: "all", label: "Todas" },
  { id: "pending", label: "Pendientes" },
  { id: "in_progress", label: "En curso" },
  { id: "done", label: "Completadas" },
  { id: "cancelled", label: "Canceladas" },
];

const sourceLabels: Record<ActionItem["source"], string> = {
  manual: "Manual",
  meeting: "Reunión",
  kickoff: "Kickoff",
  note: "Acta",
  other: "Otro",
};

const priorityLabels: Record<ActionItem["priority"], string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
};

const statusLabels: Record<ActionItem["status"], string> = {
  pending: "Pendiente",
  in_progress: "En curso",
  done: "Completada",
  cancelled: "Cancelada",
};

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
}

function formatProjectLabel(project: ActionItem["project"]) {
  if (!project) {
    return null;
  }

  return project.reference ? `${project.reference} ${project.name}` : project.name;
}

function formatDateLabel(value: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDueDateKey(value: string | null) {
  if (!value) {
    return null;
  }

  return value.slice(0, 10);
}

function matchesStatusFilter(item: ActionItem, filter: TaskStatusFilter) {
  if (filter === "all") {
    return true;
  }

  return item.status === filter;
}

function matchesProjectFilter(item: ActionItem, filter: ProjectFilter) {
  if (filter === "all") {
    return true;
  }

  if (filter === "none") {
    return item.projectId === null;
  }

  return item.projectId === filter;
}

function matchesSearch(item: ActionItem, searchTerm: string) {
  if (!searchTerm) {
    return true;
  }

  const projectLabel = formatProjectLabel(item.project) ?? "";
  const haystack = [item.title, item.description ?? "", projectLabel].join(" ").toLocaleLowerCase("es");

  return haystack.includes(searchTerm);
}

function isCompletedStatus(status: ActionItem["status"]) {
  return status === "done" || status === "cancelled";
}

function shouldIncludeCompletedItems(item: ActionItem, statusFilter: TaskStatusFilter, showCompleted: boolean) {
  if (!isCompletedStatus(item.status)) {
    return true;
  }

  if (statusFilter === "done" || statusFilter === "cancelled") {
    return true;
  }

  return showCompleted;
}

function getTaskTimeBucket(item: ActionItem) {
  const todayKey = getTodayKey();

  if (isCompletedStatus(item.status)) {
    return 4;
  }

  const dueDateKey = getDueDateKey(item.dueDate);

  if (!dueDateKey) {
    return 3;
  }

  if (dueDateKey < todayKey) {
    return 0;
  }

  if (dueDateKey === todayKey) {
    return 1;
  }

  return 2;
}

function compareTaskOrder(left: ActionItem, right: ActionItem) {
  const bucketDiff = getTaskTimeBucket(left) - getTaskTimeBucket(right);

  if (bucketDiff !== 0) {
    return bucketDiff;
  }

  const leftDue = getDueDateKey(left.dueDate);
  const rightDue = getDueDateKey(right.dueDate);

  if (leftDue && rightDue && leftDue !== rightDue) {
    return leftDue.localeCompare(rightDue, "es");
  }

  if (leftDue && !rightDue) {
    return -1;
  }

  if (!leftDue && rightDue) {
    return 1;
  }

  const createdDiff = Date.parse(right.createdAt) - Date.parse(left.createdAt);

  if (createdDiff !== 0) {
    return createdDiff;
  }

  return Date.parse(right.updatedAt) - Date.parse(left.updatedAt);
}

function buildGroups(items: ActionItem[]) {
  const groups = new Map<string, TaskGroup>();

  for (const item of items) {
    const key = item.projectId ?? "__none__";
    const title = formatProjectLabel(item.project) ?? "Sin proyecto";
    const group = groups.get(key);

    if (group) {
      group.items.push(item);
      continue;
    }

    groups.set(key, { key, title, items: [item] });
  }

  return [...groups.values()]
    .map((group) => ({
      ...group,
      items: [...group.items].sort(compareTaskOrder),
    }))
    .sort((left, right) => {
      if (left.key === "__none__") {
        return 1;
      }

      if (right.key === "__none__") {
        return -1;
      }

      return left.title.localeCompare(right.title, "es");
    });
}

export function TasksPage() {
  const [items, setItems] = useState<ActionItem[]>([]);
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ActionItem | null>(null);
  const [itemToDelete, setItemToDelete] = useState<ActionItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTogglingId, setIsTogglingId] = useState<string | null>(null);
  const [pageError, setPageError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<TaskStatusFilter>("all");
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all");
  const [search, setSearch] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [openMenuItemId, setOpenMenuItemId] = useState<string | null>(null);

  const { data, error, isLoading } = useAsyncData(
    async () => {
      const [actionItems, projectList] = await Promise.all([getActionItems(), getProjects()]);

      return { actionItems, projectList };
    },
    [],
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    setItems(data.actionItems);
    setProjects(data.projectList);
  }, [data]);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const left = a.reference ? `${a.reference} ${a.name}` : a.name;
      const right = b.reference ? `${b.reference} ${b.name}` : b.name;

      return left.localeCompare(right, "es");
    });
  }, [projects]);

  const normalizedSearch = search.trim().toLocaleLowerCase("es");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return (
        shouldIncludeCompletedItems(item, statusFilter, showCompleted) &&
        matchesStatusFilter(item, statusFilter) &&
        matchesProjectFilter(item, projectFilter) &&
        matchesSearch(item, normalizedSearch)
      );
    });
  }, [items, projectFilter, normalizedSearch, showCompleted, statusFilter]);

  const groups = useMemo(() => buildGroups(filteredItems), [filteredItems]);

  const globalStats = useMemo(() => {
    const todayKey = getTodayKey();

    return items.reduce(
      (acc, item) => {
        if (item.status === "pending") {
          acc.pending += 1;
        }

        if (item.status === "in_progress") {
          acc.inProgress += 1;
        }

        if (item.status === "done") {
          acc.done += 1;
        }

        const dueDateKey = getDueDateKey(item.dueDate);

        if (dueDateKey && (item.status === "pending" || item.status === "in_progress") && dueDateKey < todayKey) {
          acc.overdue += 1;
        }

        return acc;
      },
      { pending: 0, inProgress: 0, overdue: 0, done: 0 },
    );
  }, [items]);

  const hasAnyItems = items.length > 0;

  const handleCreated = (item: ActionItem) => {
    setItems((current) => [item, ...current]);
    setPageError(null);
  };

  const handleUpdated = (updatedItem: ActionItem) => {
    setItems((current) => current.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
    setOpenMenuItemId(null);
    setPageError(null);
  };

  const handleToggleDone = async (item: ActionItem) => {
    setIsTogglingId(item.id);
    setPageError(null);

    try {
      const updated = await updateActionItem(item.id, {
        status: item.status === "done" ? "pending" : "done",
      });

      setItems((current) => current.map((entry) => (entry.id === updated.id ? updated : entry)));
      setOpenMenuItemId(null);
    } catch (toggleError) {
      setPageError(getErrorMessage(toggleError, "No se pudo actualizar la tarea"));
    } finally {
      setIsTogglingId(null);
    }
  };

  const handleQuickStatus = async (item: ActionItem, newStatus: ActionItem["status"]) => {
    setIsTogglingId(item.id);
    setPageError(null);

    try {
      const updated = await updateActionItem(item.id, { status: newStatus });
      setItems((current) => current.map((existing) => (existing.id === updated.id ? updated : existing)));
      setOpenMenuItemId(null);
    } catch (err) {
      setPageError(getErrorMessage(err, "No se pudo actualizar la tarea"));
    } finally {
      setIsTogglingId(null);
    }
  };

  const handleDelete = async () => {
    if (!itemToDelete) {
      return;
    }

    setIsDeleting(true);
    setPageError(null);

    try {
      await deleteActionItem(itemToDelete.id);
      setItems((current) => current.filter((item) => item.id !== itemToDelete.id));
      setItemToDelete(null);
      setOpenMenuItemId(null);
    } catch (deleteError) {
      setPageError(getErrorMessage(deleteError, "No se pudo eliminar la tarea"));
      setIsDeleting(false);
      return;
    }

    setIsDeleting(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <section className="status-panel">
          <p>Cargando tareas...</p>
        </section>
      );
    }

    if (error) {
      return (
        <section className="status-panel error">
          <p>No se pudo cargar la información: {error}</p>
        </section>
      );
    }

    if (!hasAnyItems) {
      return (
        <section className="detail-block tasks-empty-state">
          <span className="eyebrow">Mis Tareas</span>
          <h2>No tienes tareas todavía</h2>
          <p>Crea acciones rápidas para proyectos, reuniones o seguimiento personal.</p>
          <button className="toolbar-button toolbar-button-primary" onClick={() => setCreateModalOpen(true)} type="button">
            Crear tarea
          </button>
        </section>
      );
    }

    return (
      <section className="tasks-page">
        <div className="tasks-summary">
          <div className="tasks-summary-stat">
            <span className="tasks-summary-value">{globalStats.pending}</span>
            <span className="tasks-summary-label">Pendientes</span>
          </div>

          <div className="tasks-summary-stat">
            <span className="tasks-summary-value">{globalStats.inProgress}</span>
            <span className="tasks-summary-label">En curso</span>
          </div>

          <div className="tasks-summary-stat tasks-summary-stat-overdue" aria-label="Vencidas">
            <span className="tasks-summary-value">{globalStats.overdue}</span>
            <span className="tasks-summary-label">Vencidas</span>
          </div>

          <div className="tasks-summary-stat tasks-summary-stat-done">
            <span className="tasks-summary-value">{globalStats.done}</span>
            <span className="tasks-summary-label">Completadas</span>
          </div>
        </div>

        <article className="detail-block tasks-filters">
          <div className="tasks-filters-top">
            <div className="tasks-tabs" role="tablist" aria-label="Filtros por estado">
              {statusTabs.map((tab) => (
                <button
                  aria-selected={statusFilter === tab.id}
                  className={`tasks-tab ${statusFilter === tab.id ? "active" : ""}`}
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  role="tab"
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button className="toolbar-button" onClick={() => setShowCompleted((current) => !current)} type="button">
              {showCompleted ? "Ocultar completadas" : "Ver completadas"}
            </button>
          </div>

          <div className="tasks-filters-bottom">
            <div className="form-field tasks-filter-field">
              <label htmlFor="tasks-project-filter">Proyecto</label>
              <select
                id="tasks-project-filter"
                value={projectFilter}
                onChange={(event) => setProjectFilter(event.target.value)}
              >
                <option value="all">Todos los proyectos</option>
                <option value="none">Sin proyecto</option>
                {sortedProjects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.reference ? `${project.reference} ${project.name}` : project.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field tasks-filter-field tasks-filter-search">
              <label htmlFor="tasks-search">Buscar</label>
              <input
                id="tasks-search"
                placeholder="Buscar tareas..."
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
        </article>

        {pageError ? (
          <section className="status-panel error">
            <p>{pageError}</p>
          </section>
        ) : null}

        {filteredItems.length === 0 ? (
          <section className="detail-block tasks-empty-state tasks-empty-state-filtered">
            <h2>No hay tareas para este filtro.</h2>
          </section>
        ) : (
          groups.map((group) => (
            <article className="detail-block tasks-group" key={group.key}>
              <div className="tasks-group-head">
                <h2>
                  {group.title} <span className="tasks-group-count">({group.items.length})</span>
                </h2>
              </div>

              <div className="tasks-list">
                {group.items.map((item) => {
                  const dueDateKey = getDueDateKey(item.dueDate);
                  const todayKey = getTodayKey();
                  const isMenuOpen = openMenuItemId === item.id;
                  const dueDateTone =
                    dueDateKey && item.status !== "done" && item.status !== "cancelled"
                      ? dueDateKey < todayKey
                        ? "overdue"
                        : dueDateKey === todayKey
                          ? "today"
                          : "upcoming"
                      : undefined;

                  return (
                    <article className="task-row task-item" key={item.id}>
                      <div className="task-item-main">
                        <button
                          aria-label={item.status === "done" ? "Marcar como pendiente" : "Marcar como completada"}
                          className={`task-check ${item.status === "done" ? "is-done" : ""}`}
                          disabled={isTogglingId === item.id}
                          onClick={() => void handleToggleDone(item)}
                          type="button"
                        >
                          <span className="task-check-indicator" />
                        </button>

                        <h3 className={`task-item-title ${item.status === "done" ? "is-done" : ""}`} title={item.title}>
                          {item.title}
                        </h3>
                      </div>

                      <div className="task-item-meta">
                        <span
                          className="status-badge task-status-badge"
                          data-edt-status-tone={getEdtStatusTone(item.status)}
                        >
                          {statusLabels[item.status]}
                        </span>
                        {item.priority !== "low" ? (
                          <span className={`task-badge task-badge-priority-${item.priority}`}>
                            {priorityLabels[item.priority]}
                          </span>
                        ) : null}
                        {item.source !== "manual" ? <span className="task-badge">{sourceLabels[item.source]}</span> : null}
                        {item.showInCalendar && item.dueDate ? (
                          <span
                            className="task-badge task-badge-calendar"
                            title="Aparecerá en el calendario"
                            aria-label="Marcada para calendario"
                          >
                            📅
                          </span>
                        ) : null}
                        {item.dueDate ? (
                          <span className={`task-date ${dueDateTone ? `is-${dueDateTone}` : ""}`}>
                            {formatDateLabel(item.dueDate)}
                          </span>
                        ) : null}
                        <div className="task-actions">
                          <button className="toolbar-button" onClick={() => setEditingItem(item)} type="button">
                            Editar
                          </button>
                          <div className="table-action-menu-wrap">
                            <button
                              aria-expanded={isMenuOpen}
                              aria-haspopup="menu"
                              aria-label={`Más acciones para ${item.title}`}
                              className="toolbar-button table-action-menu-trigger"
                              onClick={() => setOpenMenuItemId((current) => (current === item.id ? null : item.id))}
                              type="button"
                            >
                              ⋯
                            </button>
                            {isMenuOpen ? (
                              <div className="table-action-menu" role="menu">
                                {item.status === "pending" ? (
                                  <button
                                    className="table-action-menu-item"
                                    onClick={() => void handleQuickStatus(item, "in_progress")}
                                    role="menuitem"
                                    type="button"
                                  >
                                    Marcar en curso
                                  </button>
                                ) : null}
                                {item.status === "in_progress" ? (
                                  <button
                                    className="table-action-menu-item"
                                    onClick={() => void handleQuickStatus(item, "pending")}
                                    role="menuitem"
                                    type="button"
                                  >
                                    Marcar pendiente
                                  </button>
                                ) : null}
                                <button
                                  className="table-action-menu-item table-action-menu-item-danger"
                                  onClick={() => {
                                    setOpenMenuItemId(null);
                                    setItemToDelete(item);
                                  }}
                                  role="menuitem"
                                  type="button"
                                >
                                  Eliminar tarea
                                </button>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </article>
          ))
        )}
      </section>
    );
  };

  return (
    <div className="projecthub-port tasks-workspace-canvas">
      <EmbeddedShell
        title="Mis Tareas"
        headerContent={
          <>
            <div className="project-detail-hero">
              <div className="project-header-copy project-detail-header-copy">
                <span className="eyebrow">Workspace</span>
                <h1 className="hero-title project-detail-title">Mis Tareas</h1>
                <p className="project-detail-meta">
                  <span>Acciones, recordatorios y tareas de seguimiento fuera de la EDT.</span>
                </p>
              </div>
            </div>
            <div className="hero-actions project-detail-actions">
              <button className="toolbar-button toolbar-button-primary" onClick={() => setCreateModalOpen(true)} type="button">
                + Nueva tarea
              </button>
            </div>
          </>
        }
      >
        {renderContent()}
        <ActionItemCreateModal
          open={isCreateModalOpen}
          projects={projects}
          onClose={() => setCreateModalOpen(false)}
          onCreated={handleCreated}
        />
        {editingItem ? (
          <ActionItemEditModal
            item={editingItem}
            projects={projects}
            onClose={() => setEditingItem(null)}
            onUpdated={handleUpdated}
          />
        ) : null}
        {itemToDelete ? (
          <DeleteConfirmModal
            description={`¿Eliminar "${itemToDelete.title}"? Esta acción no se puede deshacer desde la aplicación.`}
            isDeleting={isDeleting}
            onCancel={() => setItemToDelete(null)}
            onConfirm={() => void handleDelete()}
            title="Eliminar tarea"
          />
        ) : null}
      </EmbeddedShell>
    </div>
  );
}
