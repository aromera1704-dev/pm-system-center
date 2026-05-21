export function DeleteConfirmModal({
  description,
  isDeleting,
  onCancel,
  onConfirm,
  title,
}: {
  description: string;
  isDeleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
}) {
  return (
    <div className="edt-modal-overlay" onClick={isDeleting ? undefined : onCancel} role="presentation">
      <div
        aria-modal="true"
        className="edt-modal edt-delete-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="task-create-panel-head">
          <h2>{title}</h2>
          <button className="toolbar-button" disabled={isDeleting} onClick={onCancel} type="button">
            Cerrar
          </button>
        </div>
        <div className="task-create-panel">
          <p className="edt-delete-copy">{description}</p>
          <div className="task-create-actions">
            <button className="toolbar-button" disabled={isDeleting} onClick={onCancel} type="button">
              Cancelar
            </button>
            <button
              className="toolbar-button toolbar-button-danger"
              disabled={isDeleting}
              onClick={onConfirm}
              type="button"
            >
              {isDeleting ? "Eliminando..." : "Eliminar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
