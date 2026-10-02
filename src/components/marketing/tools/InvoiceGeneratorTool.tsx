"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { EmailCapture } from "@/components/marketing/EmailCapture";

interface LineItem {
  description: string;
  amount: string;
}

export function InvoiceGeneratorTool() {
  const [business, setBusiness] = useState("Your business name");
  const [client, setClient] = useState("Client name");
  const [items, setItems] = useState<LineItem[]>([{ description: "Service", amount: "0" }]);
  const [currency, setCurrency] = useState("₦");

  const total = items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);

  function updateItem(index: number, field: keyof LineItem, value: string) {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5 print:hidden">
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="biz">
            Business name
          </label>
          <input id="biz" value={business} onChange={(e) => setBusiness(e.target.value)} className="w-full min-h-11 rounded-xl border border-ink/20 px-4 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="client">
            Client name
          </label>
          <input id="client" value={client} onChange={(e) => setClient(e.target.value)} className="w-full min-h-11 rounded-xl border border-ink/20 px-4 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="currency">
            Currency symbol
          </label>
          <input id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-24 min-h-11 rounded-xl border border-ink/20 px-4 text-sm" />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium text-ink">Line items</p>
          {items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={item.description}
                onChange={(e) => updateItem(i, "description", e.target.value)}
                placeholder="Description"
                className="flex-1 min-h-11 rounded-xl border border-ink/20 px-4 text-sm"
              />
              <input
                value={item.amount}
                onChange={(e) => updateItem(i, "amount", e.target.value)}
                placeholder="Amount"
                inputMode="decimal"
                className="w-28 min-h-11 rounded-xl border border-ink/20 px-4 text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setItems((prev) => [...prev, { description: "", amount: "0" }])}
            className="text-sm font-medium text-brand"
          >
            + Add line item
          </button>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-xl bg-action px-5 py-3 text-sm font-semibold text-white hover:bg-action-hover"
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          Download as PDF
        </button>
        <div className="pt-4 border-t border-border">
          <EmailCapture source="invoice-generator" title="Get free business tips by email" eventName="lead_magnet_submit" />
        </div>
      </div>

      <div className="rounded-2xl border border-ink/20 bg-surface p-8 print:border-0 print:p-0" id="invoice-preview">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="font-semibold text-ink text-lg">{business}</p>
            <p className="text-sm text-ink-muted">Invoice</p>
          </div>
          <p className="text-sm text-ink-muted">{new Date().toLocaleDateString()}</p>
        </div>
        <p className="text-sm text-ink-muted mb-6">Billed to: {client}</p>
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border text-left text-ink-muted">
              <th className="pb-2 font-medium">Description</th>
              <th className="pb-2 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2 text-ink">{item.description || "—"}</td>
                <td className="py-2 text-right text-ink">
                  {currency}
                  {(parseFloat(item.amount) || 0).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between font-semibold text-ink">
          <span>Total</span>
          <span>
            {currency}
            {total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
