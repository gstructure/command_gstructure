import {
  BarChart3,
  Bot,
  Building2,
  CalendarDays,
  ClipboardList,
  FileText,
  Handshake,
  Inbox,
  LayoutDashboard,
  Megaphone,
  MessageSquareText,
  Settings,
  Users
} from "lucide-react";

export const privateNavigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/organizations", label: "Organizations", icon: Building2 },
  { href: "/opportunities", label: "Opportunities", icon: Handshake },
  { href: "/tasks", label: "Tasks", icon: ClipboardList },
  { href: "/interactions", label: "Interactions", icon: MessageSquareText },
  { href: "/marketing", label: "Marketing", icon: Megaphone },
  { href: "/outreach", label: "Outreach", icon: Inbox },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/ai-manager", label: "AI Manager", icon: Bot },
  { href: "/weekly-review", label: "Weekly Review", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings }
] as const;
