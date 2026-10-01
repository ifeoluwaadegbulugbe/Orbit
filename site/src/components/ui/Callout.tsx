import type { ReactNode } from "react";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

const styles = {
  info: { icon: Info, bg: "bg-primary-50", border: "border-primary-200", icon_color: "text-primary-600" },
  warning: { icon: AlertTriangle, bg: "bg-accent-50", border: "border-accent-300", icon_color: "text-accent-700" },
  success: { icon: CheckCircle2, bg: "bg-primary-50", border: "border-primary-200", icon_color: "text-success" },
} as const;

export function Callout({
  type = "info",
  children,
}: {
  type?: keyof typeof styles;
  children: ReactNode;
}) {
  const s = styles[type];
  const Icon = s.icon;
  return (
    <div className={`flex gap-3 rounded-lg border ${s.border} ${s.bg} p-4 my-6`}>
      <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${s.icon_color}`} aria-hidden="true" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
