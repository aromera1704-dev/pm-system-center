import { useEffect, useMemo, useState, type FormEvent } from "react";
import { updateActionItem } from "./mock-api";
import type { ActionItem, ProjectSummary, UpdateActionItemInput } from "./types";

export type ActionItemEditModalProps = {
  item: ActionItem;
  projects: ProjectSummary[];
  onClose: () => void;
  onUpdated: (item: ActionItem) => void;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return "No se pudo actualizar la tarea";
}

function toDateInputValue(value: string | null) {
  if (!value) {
    return "";
  }

  return value.slice(0, 10);
}

export function ActionItemEditModal({ item, projects, onClose, onUpdated }: ActionItemEditModalProps) {
  const [title, setTitle] = useState(item.title);
  const [status, setStatus] = useState(item.status);
  const [description, setDescription] = useState(item.description ?? "");
  const [dueDate, setDueDate] = useState(toDateInputValue(item.dueDate));
  const [showInCalendar, setShowInCalendar] = useState(item.showInCalendar);
  const [priority, setPriority] = useState(item.priority);
  const [source, setSource] = useState(item.source);
  const [projectId, setProjectId] = useState(item.projectId ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTitle(item.title);
    setStatus(item.status);
    setDescription(item.description ?? "");
    setDueDate(toDateInputValue(item.dueDate));
    setShowInCalendar(item.showInCalendar);
    setPriority(item.priority);
    setSource(item.source);
    setProjectId(item.projectId ?? "");
    setIsSubmitting(false);
    setError(null);
  }, [item]);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const left = a.reference ? `${a.reference} ${a.name}` : a.name;
      const right = b.reference ? `${b.reference} ${b.name}` : b.name;
      return left.localeCompare(right, "es");
    });
  }, [projects]);

  const isSubmitDisabled = isSubmitting || title.trim() === "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("El título es obligatorio");
      return;
    }

    const trimmedDescription = description.trim();

    const payload: UpdateActionItemInput = {
      title: trimmedTitle,
      status,
      description: trimmedDescription ? trimmedDescription : null,
      dueDate: dueDate || null,
      showInCalendar,
      priority,
      source,
      projectId: projectId || null,
    };

    setIsSubmitting(true);
    setError(null);

    try {
      const updated = await updateActionItem(item.id, payload);
      onUpdated(updated);
      onClose();
    } catch (submitError) {
      setError(getErrorMessage(submitError));
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edt-modal-overlay" onClick={isSubmitting ? undefined : onClose} role="presentation">
      <div
        aria-modal="true"
        className="edt-modal create-project-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="modal-header">
          <div className="modal-header-copy">
            <p className="eyebrow">Mis Tareas</p>
            <h2>Editar tarea</h2>
          </div>
          <button
            aria-label="Cerrar modal de edición de tarea"
            className="modal-close"
            disabled={isSubmitting}
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body tasks-modal-body">
            <div className="form-field">
              <label htmlFor="edit-action-item-title">Título</label>
              <input
                id="edit-action-item-title"
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);

                  if (error === "El título es obligatorio" && event.target.value.trim()) {
                    setError(null);
                  }
                }}
              />
            </div>

            <div className="form-field">
              <label htmlFor="edit-action-item-description">Descripción</label>
              <textarea
                id="edit-action-item-description"
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className="tasks-modal-grid">
              <div className="form-field">
                <label htmlFor="edit-action-item-status">Estado</label>
                <select
                  id="edit-action-item-status"
                  value={status}
                  onChange={(event) => setStatus(event.target.value as ActionItem["status"])}
                >
                  <option value="pending">Pendiente</option>
                  <option value="in_progress">En curso</option>
                  <option value="done">Completada</option>
                  <option value="cancelled">Cancelada</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="edit-action-item-due-date">Fecha límite</label>
                <input
                  id="edit-action-item-due-date"
                  type="date"
                  value={dueDate}
                  onChange={(event) => {
                    setDueDate(event.target.value);

                    if (!event.target.value) {
                      setShowInCalendar(false);
                    }
                  }}
                />
              </div>
            </div>

            <div className="tasks-modal-grid">
              <div className="form-field">
                <label htmlFor="edit-action-item-priority">Prioridad</label>
                <select
                  id="edit-action-item-priority"
                  value={priority}
                  onChange={(event) => setPriority(event.target.value as ActionItem["priority"])}
                >
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="edit-action-item-source">Fuente</label>
                <select
                  id="edit-action-item-source"
                  value={source}
                  onChange={(event) => setSource(event.target.value as ActionItem["source"])}
                >
                  <option value="manual">Manual</option>
                  <option value="meeting">Reunión</option>
                  <option value="kickoff">Kickoff</option>
                  <option value="note">Acta</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="edit-action-item-project">Proyecto</label>
                <select
                  id="edit-action-item-project"
                  value={projectId}
                  onChange={(event) => setProjectId(event.target.value)}
                >
                  <option value="">Sin proyecto</option>
                  {sortedProjects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.reference ? `${project.reference} ${project.name}` : project.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field form-field-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={showInCalendar}
                  disabled={!dueDate}
                  onChange={(event) => setShowInCalendar(event.target.checked)}
                />
                <span>Mostrar en calendario</span>
              </label>
              {!dueDate ? (
                <span className="form-field-hint">Requiere fecha límite para aparecer en el calendario.</span>
              ) : null}
            </div>

            {error ? <p className="modal-error">{error}</p> : null}
          </div>

          <div className="modal-footer">
            <button className="toolbar-button" disabled={isSubmitting} onClick={onClose} type="button">
              Cancelar
            </button>
            <button className="toolbar-button toolbar-button-primary" disabled={isSubmitDisabled} type="submit">
              {isSubmitting ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
