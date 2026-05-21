export type EdtStatusTone =
  | "blocked"
  | "cancelled"
  | "completed"
  | "neutral"
  | "pending"
  | "progress";

export function getEdtStatusTone(status: string): EdtStatusTone {
  const normalizedStatus = status.toLowerCase();

  if (["completed", "done", "reached", "approved"].includes(normalizedStatus)) {
    return "completed";
  }

  if (normalizedStatus === "blocked") {
    return "blocked";
  }

  if (["cancelled", "rejected"].includes(normalizedStatus)) {
    return "cancelled";
  }

  if (["active", "in_progress", "progress", "submitted"].includes(normalizedStatus)) {
    return "progress";
  }

  if (["pending", "planned", "review", "waiting", "todo"].includes(normalizedStatus)) {
    return "pending";
  }

  return "neutral";
}
