import { useEffect, useState, type FormEvent } from "react";
import { createActionItem } from "../mock-api";
import type { ActionItem, CreateActionItemInput, ProjectSummary } from "../types";

type CalendarEventCreateModalProps = {
  open: boolean;
  projects: ProjectSummary[];
  onClose: () => void;
  onCreated: (item: ActionItem) => void;
};

type CalendarEventKindOption = "personal" | "work" | "quick";

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return "No se pudo crear el evento";
}

function getProjectDisplayName(project: ProjectSummary) {
  return project.reference ? `${project.reference} ${project.name}` : project.name;
}

export function CalendarEventCreateModal({
  open,
  projects: _projects,
  onClose,
  onCreated,
}: CalendarEventCreateModalProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [eventKind, setEventKind] = useState<CalendarEventKindOption>("quick");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    setTitle("");
    setDueDate("");
    setProjectName("");
    setDescription("");
    setEventKind("quick");
    setIsSubmitting(false);
    setError(null);
  }, [open]);

  if (!open) {
    return null;
  }

  const isSubmitDisabled = isSubmitting || title.trim() === "" || dueDate === "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("El título es obligatorio");
      return;
    }

    if (!dueDate) {
      setError("La fecha es obligatoria");
      return;
    }

    const payload: CreateActionItemInput = {
      title: trimmedTitle,
      description: description.trim() || undefined,
      dueDate,
      showInCalendar: true,
      projectName: projectName.trim() || undefined,
      source: eventKind === "work" ? "other" : "manual",
    };

    setIsSubmitting(true);
    setError(null);

    try {
      const created = await createActionItem(payload);
      onCreated(created);
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
        onClick={(nativeEvent) => nativeEvent.stopPropagation()}
        role="dialog"
      >
        <div className="modal-header">
          <div className="modal-header-copy">
            <p className="eyebrow">Calendario</p>
            <h2>Nuevo evento</h2>
          </div>
          <button
            aria-label="Cerrar modal de creación de evento"
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
              <label htmlFor="calendar-event-title">Título</label>
              <input
                id="calendar-event-title"
                placeholder="Ej. Revisión con cliente"
                type="text"
                value={title}
                onChange={(nativeEvent) => {
                  setTitle(nativeEvent.target.value);

                  if (error === "El título es obligatorio" && nativeEvent.target.value.trim()) {
                    setError(null);
                  }
                }}
              />
            </div>

            <div className="tasks-modal-grid">
              <div className="form-field">
                <label htmlFor="calendar-event-date">Fecha</label>
                <input
                  id="calendar-event-date"
                  type="date"
                  value={dueDate}
                  onChange={(nativeEvent) => {
                    setDueDate(nativeEvent.target.value);

                    if (error === "La fecha es obligatoria" && nativeEvent.target.value) {
                      setError(null);
                    }
                  }}
                />
              </div>

              <div className="form-field">
                <label htmlFor="calendar-event-kind">Tipo</label>
                <select
                  id="calendar-event-kind"
                  value={eventKind}
                  onChange={(nativeEvent) => setEventKind(nativeEvent.target.value as CalendarEventKindOption)}
                >
                  <option value="personal">Personal</option>
                  <option value="work">Trabajo</option>
                  <option value="quick">Tarea rápida</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="calendar-event-project">Nº Proyecto</label>
              <input
                id="calendar-event-project"
                placeholder="Ej. PH-2377"
                type="text"
                value={projectName}
                onChange={(nativeEvent) => setProjectName(nativeEvent.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="calendar-event-description">Descripción</label>
              <textarea
                id="calendar-event-description"
                rows={4}
                value={description}
                onChange={(nativeEvent) => setDescription(nativeEvent.target.value)}
              />
            </div>

            <p className="form-field-hint calendar-modal-hint">
              Este formulario crea un ActionItem con showInCalendar activado.
            </p>

            {error ? <p className="modal-error">{error}</p> : null}
          </div>

          <div className="modal-footer">
            <button className="toolbar-button" disabled={isSubmitting} onClick={onClose} type="button">
              Cancelar
            </button>
            <button className="toolbar-button toolbar-button-primary" disabled={isSubmitDisabled} type="submit">
              {isSubmitting ? "Creando..." : "Crear evento"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
