"use client";

import { useEffect, useState } from "react";

interface LocalPerfume {
  url: string;
  brand: string;
  name: string;
  memo: string;
}

const LOCAL_STORAGE_KEY = "fls.localPerfumeNotes";

function isLocalPerfume(value: unknown): value is LocalPerfume {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.url === "string" &&
    typeof item.brand === "string" &&
    typeof item.name === "string" &&
    typeof item.memo === "string"
  );
}

function readStoredNotes() {
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isLocalPerfume) : [];
  } catch {
    return [];
  }
}

function writeStoredNotes(notes: LocalPerfume[]) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
}

export function PerfumeForm() {
  const [form, setForm] = useState<LocalPerfume>({ url: "", brand: "", name: "", memo: "" });
  const [items, setItems] = useState<LocalPerfume[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setItems(readStoredNotes());
    setIsLoaded(true);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.brand.trim() || !form.name.trim()) return;
    const nextItems = [{ ...form, url: form.url.trim(), brand: form.brand.trim(), name: form.name.trim(), memo: form.memo.trim() }, ...items];
    setItems(nextItems);
    writeStoredNotes(nextItems);
    setForm({ url: "", brand: "", name: "", memo: "" });
  }

  function removeItem(indexToRemove: number) {
    const nextItems = items.filter((_, index) => index !== indexToRemove);
    setItems(nextItems);
    writeStoredNotes(nextItems);
  }

  return (
    <section className="rounded-lg border border-black/10 bg-white/75 p-5">
      <h2 className="text-lg font-semibold text-ink">香水メモを追加</h2>
      <p className="mt-2 text-sm leading-6 text-ink/65">
        このメモは同じブラウザ内に保存されます。別端末・別ブラウザには同期されません。DB、外部API、GitHub上の静的データには保存されません。
      </p>
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
      {isLoaded && items.length > 0 && (
        <div className="mt-5 grid gap-3">
          {items.map((item, index) => (
            <div key={`${item.brand}-${item.name}-${index}`} className="rounded-md bg-mist p-3 text-sm text-ink/75">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <strong>{item.brand} / {item.name}</strong>
                  <p>{item.memo}</p>
                  {item.url && <p className="break-all text-ink/55">{item.url}</p>}
                </div>
                <button type="button" onClick={() => removeItem(index)} className="rounded-md px-2 py-1 text-ink/60 underline">
                  削除
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
