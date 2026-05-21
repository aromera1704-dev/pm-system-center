import { Link } from "../link";
import type { CalendarEvent } from "../types";

type MonthCell = {
  date: Date;
  inCurrentMonth: boolean;
};

type MonthViewProps = {
  cells: MonthCell[];
  eventsByDate: Record<string, CalendarEvent[]>;
  todayKey: string;
};

function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const WEEKDAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function getMonthChipLabel(event: CalendarEvent) {
  if (event.kind === "project") {
    return event.subtitle ? `${event.title} · ${event.subtitle}` : event.title;
  }

  return `Tarea · ${event.title}`;
}

export function MonthView({ cells, eventsByDate, todayKey }: MonthViewProps) {
  const hasEvents = cells.some((cell) => (eventsByDate[formatDateKey(cell.date)] ?? []).length > 0);

  if (!hasEvents) {
    return (
      <section className="detail-block tasks-empty-state tasks-empty-state-filtered">
        <h2>No hay eventos en este mes.</h2>
      </section>
    );
  }

  return (
    <section className="detail-block calendar-month">
      <div className="calendar-month-weekdays">
        {WEEKDAY_LABELS.map((label) => (
          <span className="calendar-month-weekday" key={label}>
            {label}
          </span>
        ))}
      </div>

      <div className="calendar-month-grid">
        {cells.map((cell) => {
          const dateKey = formatDateKey(cell.date);
          const events = eventsByDate[dateKey] ?? [];
          const visibleEvents = events.slice(0, 3);
          const hiddenCount = Math.max(events.length - visibleEvents.length, 0);
          const isToday = dateKey === todayKey;

          return (
            <article
              className={`calendar-month-cell ${cell.inCurrentMonth ? "" : "is-muted"} ${isToday ? "is-today" : ""}`}
              key={dateKey}
            >
              <div className="calendar-month-cell-head">
                {isToday ? <span className="calendar-today-badge">Hoy</span> : null}
                <span className="calendar-month-cell-number">{cell.date.getDate()}</span>
              </div>

              <div className="calendar-month-cell-events">
                {visibleEvents.map((event) => {
                  const isOverdue = event.date < todayKey;
                  const chipLabel = getMonthChipLabel(event);

                  return (
                    <Link
                      className={`calendar-month-chip calendar-month-chip-${event.kind} ${isOverdue ? "is-overdue" : ""}`}
                      key={event.id}
                      title={chipLabel}
                      to={event.linkTo}
                    >
                      {chipLabel}
                    </Link>
                  );
                })}

                {hiddenCount > 0 ? <span className="calendar-month-more">+{hiddenCount} más</span> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
