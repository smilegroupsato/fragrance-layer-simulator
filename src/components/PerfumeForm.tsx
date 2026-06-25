"use client";

import { useState } from "react";

interface LocalPerfume {
  url: string;
  brand: string;
  name: string;
  memo: string;
}

export function PerfumeForm() {
  const [form, setForm] = useState<LocalPerfume>({ url: "", brand: "", name: "", memo: "" });
  const [items, setItems] = useState<LocalPerfume[]>([]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.brand.trim() || !form.name.trim()) return;
    setItems((current) => [form, ...current]);
    setForm({ url: "", brand: "", name: "", memo: "" });
  }

  return (
    <section className="rounded-lg border border-black/10 bg-white/75 p-5">
      <h2 className="text-lg font-semibold text-ink">香水メモを追加</h2>
      <form onSubmit={submit} className="mt-4 grid gap-3 md:grid-cols-2">
        {(["url", "brand", "name", "memo"] as const).map((field) => (
          <label key={field} className={field === "memo" ? "md:col-span-2" : ""}>
            <span className="text-sm font-medium text-ink/70">{field === "brand" ? "ブランド名" : field === "name" ? "香水名" : field === "memo" ? "メモ" : "URL"}</span>
            <input
              value={form[field]}
              onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))}
              className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-moss"
            />
          </label>
        ))}
        <button type="submit" className="w-fit rounded-md bg-moss px-4 py-2 text-sm font-medium text-white">
          メモを追加
        </button>
      </form>
      {items.length > 0 && (
        <div className="mt-5 grid gap-3">
          {items.map((item, index) => (
            <div key={`${item.brand}-${item.name}-${index}`} className="rounded-md bg-mist p-3 text-sm text-ink/75">
              <strong>{item.brand} / {item.name}</strong>
              <p>{item.memo}</p>
              {item.url && <p className="break-all text-ink/55">{item.url}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
