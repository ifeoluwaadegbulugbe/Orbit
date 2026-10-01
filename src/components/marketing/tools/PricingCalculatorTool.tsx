"use client";

import { useState } from "react";

export function PricingCalculatorTool() {
  const [materialCost, setMaterialCost] = useState("0");
  const [hours, setHours] = useState("1");
  const [hourlyRate, setHourlyRate] = useState("0");
  const [margin, setMargin] = useState("30");

  const cost = (parseFloat(materialCost) || 0) + (parseFloat(hours) || 0) * (parseFloat(hourlyRate) || 0);
  const marginDecimal = (parseFloat(margin) || 0) / 100;
  const suggestedPrice = marginDecimal < 1 ? cost / (1 - marginDecimal) : cost;

  const fields: { label: string; value: string; setValue: (v: string) => void; suffix?: string }[] = [
    { label: "Materials & supplies cost", value: materialCost, setValue: setMaterialCost },
    { label: "Hours the service takes", value: hours, setValue: setHours },
    { label: "Your target hourly rate", value: hourlyRate, setValue: setHourlyRate },
    { label: "Target profit margin", value: margin, setValue: setMargin, suffix: "%" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="block text-sm font-medium text-ink mb-1.5">{field.label}</label>
            <div className="flex items-center gap-2">
              <input
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                inputMode="decimal"
                className="w-full min-h-11 rounded-xl border border-border px-4 text-sm"
              />
              {field.suffix && <span className="text-ink-muted text-sm">{field.suffix}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-white p-8 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-ink-muted">Total cost</span>
          <span className="font-medium text-ink">{cost.toLocaleString()}</span>
        </div>
        <div className="border-t border-border pt-4 flex justify-between items-end">
          <span className="text-ink-muted text-sm">Suggested price</span>
          <span className="text-3xl font-semibold text-ink">{suggestedPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
        <p className="text-xs text-ink-muted">This is a starting point. Adjust for your local market and experience level.</p>
      </div>
    </div>
  );
}
