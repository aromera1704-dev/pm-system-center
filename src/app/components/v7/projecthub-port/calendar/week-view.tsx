import { Link } from "../link";
import type { CalendarEvent } from "../types";

type WeekViewProps = {
  days: Date[];
  eventsByDate: Record<string, CalendarEvent[]>;
  todayKey: string;
};

function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatWeekdayLabel(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(date);
}

export function WeekView({ days, eventsByDate, todayKey }: WeekViewProps) {
  const hasEvents = days.some((day) => (eventsByDate[formatDateKey(day)] ?? []).length > 0);

  if (!hasEvents) {
    return (
      <section className="detail-block tasks-empty-state tasks-empty-state-filtered">
        <h2>No hay eventos en esta semana.</h2>
      </section>
    );
  }

  return (
    <section className="detail-block calendar-week">
      <div className="calendar-week-grid">
        {days.map((day) => {
          const dateKey = formatDateKey(day);
          const events = eventsByDate[dateKey] ?? [];
          const isToday = dateKey === todayKey;

          return (
            <article className={`calendar-week-day ${isToday ? "is-today" : ""}`} key={dateKey}>
              <header className="calendar-week-day-head">
                <div className="calendar-week-day-head-main">
                  <span className="calendar-week-day-name">{formatWeekdayLabel(day)}</span>
                  {isToday ? <span className="calendar-today-badge">Hoy</span> : null}
                </div>
                <span className="calendar-week-day-number">{day.getDate()}</span>
              </header>

              <div className="calendar-week-day-events">
                {events.map((event) => {
                  const isOverdue = event.date < todayKey;

                  return (
                    <Link
                      className={`calendar-week-event ${isOverdue ? "is-overdue" : ""}`}
                      key={event.id}
                      to={event.linkTo}
                    >
                      <span className={`calendar-event-kind calendar-event-kind-${event.kind}`}>
                        {event.kind === "project" ? "Fecha proyecto" : "Mis tareas"}
                      </span>
                      <span className="calendar-week-event-title">{event.title}</span>
                      {event.subtitle ? <span className="calendar-week-event-subtitle">{event.subtitle}</span> : null}
                    </Link>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
