import { Check, Minus } from "lucide-react";

export interface ComparisonRow {
  label: string;
  values: Array<boolean | string>;
}

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-4 font-medium text-ink-muted">&nbsp;</th>
            {columns.map((col) => (
              <th key={col} className="text-left p-4 font-semibold text-ink">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <th scope="row" className="text-left p-4 font-medium text-ink">
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td key={i} className="p-4 text-ink-muted">
                  {typeof value === "boolean" ? (
                    value ? (
                      <Check className="h-4 w-4 text-brand" aria-label="Yes" />
                    ) : (
                      <Minus className="h-4 w-4 text-ink-muted/50" aria-label="No" />
                    )
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
