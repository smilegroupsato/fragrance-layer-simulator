"use client";

import { useEffect, useState } from "react";
import type { UserPerfumeNote } from "@/types/fragrance";

const LOCAL_STORAGE_KEY = "fls.userNotesByPerfumeId";

type NotesByPerfumeId = Record<string, UserPerfumeNote[]>;

function isUserPerfumeNote(value: unknown): value is UserPerfumeNote {
  if (!value || typeof value !== "object") return false;
  const note = value as Record<string, unknown>;
  return (
    typeof note.id === "string" &&
    typeof note.perfumeId === "string" &&
    typeof note.createdAt === "string" &&
    typeof note.text === "string" &&
    (note.updatedAt === undefined || typeof note.updatedAt === "string")
  );
}

function readNotesByPerfumeId(): NotesByPerfumeId {
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

    return Object.fromEntries(
      Object.entries(parsed as Record<string, unknown>).map(([perfumeId, notes]) => [
        perfumeId,
        Array.isArray(notes) ? notes.filter(isUserPerfumeNote) : []
      ])
    );
  } catch {
    return {};
  }
}

function writeNotesByPerfumeId(notesByPerfumeId: NotesByPerfumeId) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesByPerfumeId));
}

function createNoteId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `note-${crypto.randomUUID()}`;
  }
  return `note-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function PerfumeUserNotes({ perfumeId }: { perfumeId: string }) {
  const [notesByPerfumeId, setNotesByPerfumeId] = useState<NotesByPerfumeId>({});
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setNotesByPerfumeId(readNotesByPerfumeId());
    setIsLoaded(true);
  }, []);

  const notes = notesByPerfumeId[perfumeId] ?? [];

  function persist(nextNotes: UserPerfumeNote[]) {
    const next = { ...notesByPerfumeId, [perfumeId]: nextNotes };
    if (nextNotes.length === 0) {
      delete next[perfumeId];
    }
    setNotesByPerfumeId(next);
    writeNotesByPerfumeId(next);
  }

  function addNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const now = new Date().toISOString();
    persist([
      {
        id: createNoteId(),
        perfumeId,
        createdAt: now,
        text: trimmed,
        context: { testedOn: "unknown" }
      },
      ...notes
    ]);
    setText("");
  }

  function deleteNote(noteId: string) {
    persist(notes.filter((note) => note.id !== noteId));
  }

  function startEditing(note: UserPerfumeNote) {
    setEditingId(note.id);
    setEditingText(note.text);
  }

  function saveEdit(noteId: string) {
    const trimmed = editingText.trim();
    if (!trimmed) return;
    persist(notes.map((note) => note.id === noteId ? { ...note, text: trimmed, updatedAt: new Date().toISOString() } : note));
    setEditingId(null);
    setEditingText("");
  }

  return (
    <section className="rounded-lg border border-black/10 bg-white/75 p-5">
      <h2 className="text-lg font-semibold text-ink">ユーザーメモ</h2>
      <p className="mt-2 text-sm leading-6 text-ink/65">
        このメモは同じブラウザ内に保存されます。別端末・別ブラウザには同期されません。
      </p>
      <form onSubmit={addNote} className="mt-4 space-y-3">
        <label className="block">
          <span className="text-sm font-medium text-ink/70">試香メモ</span>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="mt-1 min-h-28 w-full rounded-md border border-rose-100 bg-white px-3 py-2 text-sm outline-none focus:border-clay"
            placeholder="自分の印象、試した場所、肌か紙かなどを自由に記録できます。"
          />
        </label>
        <button type="submit" className="rounded-md bg-moss px-4 py-2 text-sm font-medium text-white">
          メモを追加
        </button>
      </form>
      {isLoaded && notes.length === 0 && (
        <p className="mt-4 rounded-md bg-mist p-3 text-sm text-ink/65">まだユーザーメモはありません。</p>
      )}
      {notes.length > 0 && (
        <div className="mt-5 grid gap-3">
          {notes.map((note) => (
            <article key={note.id} className="rounded-md bg-mist p-3 text-sm text-ink/75">
              {editingId === note.id ? (
                <div className="space-y-3">
                  <textarea
                    value={editingText}
                    onChange={(event) => setEditingText(event.target.value)}
                    className="min-h-24 w-full rounded-md border border-rose-100 bg-white px-3 py-2 text-sm outline-none focus:border-clay"
                  />
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => saveEdit(note.id)} className="rounded-md bg-moss px-3 py-1.5 text-sm font-medium text-white">
                      保存
                    </button>
                    <button type="button" onClick={() => setEditingId(null)} className="rounded-md px-3 py-1.5 text-sm text-ink/60 underline">
                      キャンセル
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="whitespace-pre-wrap">{note.text}</p>
                    <p className="mt-2 text-xs text-ink/50">作成: {new Date(note.createdAt).toLocaleString("ja-JP")}</p>
                    {note.updatedAt && <p className="text-xs text-ink/50">更新: {new Date(note.updatedAt).toLocaleString("ja-JP")}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => startEditing(note)} className="rounded-md px-2 py-1 text-ink/60 underline">
                      編集
                    </button>
                    <button type="button" onClick={() => deleteNote(note.id)} className="rounded-md px-2 py-1 text-ink/60 underline">
                      削除
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
