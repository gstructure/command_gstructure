export type UserRole = "admin" | "founder" | "team_member" | "viewer";

export type RecordStatus = "active" | "inactive" | "archived";

export type Priority = "low" | "medium" | "high" | "critical";

export type TaskStatus =
  | "pending"
  | "in_progress"
  | "blocked"
  | "completed"
  | "canceled";

export type OpportunityStatus =
  | "active"
  | "won"
  | "lost"
  | "dormant"
  | "future_follow_up";

export type ContentStatus =
  | "idea"
  | "draft"
  | "in_review"
  | "scheduled"
  | "published"
  | "archived";
