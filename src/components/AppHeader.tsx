import Link from "next/link";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/glossary", label: "用語集" },
  { href: "/perfumes", label: "香水" },
  { href: "/blend", label: "ブレンド" }
];

export function AppHeader() {
  return (
    <header className="border-b border-black/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-normal text-ink">
          Fragrance Layer Simulator <span className="text-sm font-normal text-ink/60">v0.1</span>
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-ink/70 hover:bg-mist hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
