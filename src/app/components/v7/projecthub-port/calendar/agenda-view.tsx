import { Link } from "../link";
import type { CalendarEvent } from "../types";

type AgendaGroup = {
  bucket: string;
  label: string;
  events: CalendarEvent[];
};

type AgendaViewProps = {
  groups: AgendaGroup[];
};

function formatEventDate(dateKey: string): { day: string; month: string } {
  const d = new Date(`${dateKey}T00:00:00`);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: new Intl.DateTimeFormat("es-ES", { month: "short" }).format(d),
  };
}

export function AgendaView({ groups }: AgendaViewProps) {
  if (groups.length === 0) {
    return (
      <section className="detail-block tasks-empty-state tasks-empty-state-filtered">
        <h2>No hay eventos para este filtro.</h2>
      </section>
    );
  }

  return (
    <>
      {groups.map((group) => (
        <article className="detail-block calendar-group" data-bucket={group.bucket} key={group.bucket}>
          <div className="calendar-group-head">
            <h2>
              {group.label} <span className="tasks-group-count">({group.events.length})</span>
            </h2>
          </div>

          <div className="calendar-list">
            {group.events.map((event) => {
              const { day, month } = formatEventDate(event.date);

              return (
                <article className="calendar-event-row" key={event.id}>
                  <div className="calendar-event-date-col" aria-hidden="true">
                    <span className="calendar-event-day">{day}</span>
                    <span className="calendar-event-month">{month}</span>
                  </div>

                  <div className="calendar-event-body">
                    <Link className="calendar-event-title" to={event.linkTo}>
                      {event.title}
                    </Link>

                    {event.subtitle ? <span className="calendar-event-subtitle">{event.subtitle}</span> : null}
                  </div>

                  <div className="calendar-event-meta">
                    <span className={`calendar-event-kind calendar-event-kind-${event.kind}`}>
                      {event.kind === "project" ? "Fecha proyecto" : "Mis tareas"}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </article>
      ))}
    </>
  );
}
