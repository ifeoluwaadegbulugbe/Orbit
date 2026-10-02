"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.question} className="rounded-xl border border-border bg-surface overflow-hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-medium text-ink">{item.question}</span>
              {isOpen ? (
                <Minus className="h-5 w-5 flex-shrink-0 text-ink-muted" aria-hidden="true" />
              ) : (
                <Plus className="h-5 w-5 flex-shrink-0 text-ink-muted" aria-hidden="true" />
              )}
            </button>
            <div id={panelId} role="region" hidden={!isOpen} className="px-6 pb-4 text-ink-muted leading-relaxed">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
