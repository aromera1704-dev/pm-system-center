import { useEffect, useState, type FormEvent } from "react";
import { createActionItem } from "./mock-api";
import type { ActionItem, CreateActionItemInput, ProjectSummary } from "./types";

export type ActionItemCreateModalProps = {
  open: boolean;
  projects: ProjectSummary[];
  onClose: () => void;
  onCreated: (item: ActionItem) => void;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return "No se pudo crear la tarea";
}

export function ActionItemCreateModal({
  open,
  projects: _projects,
  onClose,
  onCreated,
}: ActionItemCreateModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [showInCalendar, setShowInCalendar] = useState(false);
  const [priority, setPriority] = useState<CreateActionItemInput["priority"]>("medium");
  const [source, setSource] = useState<CreateActionItemInput["source"]>("manual");
  const [projectName, setProjectName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setShowInCalendar(false);
    setPriority("medium");
    setSource("manual");
    setProjectName("");
    setIsSubmitting(false);
    setError(null);
  }, [open]);

  if (!open) {
    return null;
  }

  const isSubmitDisabled = isSubmitting || title.trim() === "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("El título es obligatorio");
      return;
    }

    const payload: CreateActionItemInput = {
      title: trimmedTitle,
      description: description.trim() || undefined,
      dueDate: dueDate || null,
      showInCalendar: showInCalendar || undefined,
      priority,
      source,
      projectName: projectName.trim() || undefined,
    };

    setIsSubmitting(true);
    setError(null);

    try {
      const item = await createActionItem(payload);
      onCreated(item);
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
        className="edt-modal create-project-modal create-project-modal-wide"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="modal-header">
          <div className="modal-header-copy">
            <p className="eyebrow">Mis Tareas</p>
            <h2>Nueva tarea</h2>
          </div>
          <button
            aria-label="Cerrar modal de creación de tarea"
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
              <label htmlFor="create-action-item-title">Título</label>
              <input
                id="create-action-item-title"
                placeholder="Ej. Enviar acta de reunión"
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
              <label htmlFor="create-action-item-description">Descripción</label>
              <textarea
                id="create-action-item-description"
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className="tasks-modal-grid">
              <div className="form-field">
                <label htmlFor="create-action-item-due-date">Fecha límite</label>
                <input
                  id="create-action-item-due-date"
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

              <div className="form-field">
                <label htmlFor="create-action-item-priority">Prioridad</label>
                <select
                  id="create-action-item-priority"
                  value={priority}
                  onChange={(event) =>
                    setPriority(event.target.value as NonNullable<CreateActionItemInput["priority"]>)
                  }
                >
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
              </div>
            </div>

            <div className="tasks-modal-grid">
              <div className="form-field">
                <label htmlFor="create-action-item-source">Fuente</label>
                <select
                  id="create-action-item-source"
                  value={source}
                  onChange={(event) =>
                    setSource(event.target.value as NonNullable<CreateActionItemInput["source"]>)
                  }
                >
                  <option value="manual">Manual</option>
                  <option value="meeting">Reunión</option>
                  <option value="kickoff">Kickoff</option>
                  <option value="note">Acta</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="create-action-item-project-name">Nº Proyecto</label>
                <input
                  id="create-action-item-project-name"
                  placeholder="Ej. PH-2377"
                  type="text"
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                />
              <span className="form-field-hint">El valor escrito se usará como agrupación del proyecto.</span>
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
              {isSubmitting ? "Creando..." : "Crear tarea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
