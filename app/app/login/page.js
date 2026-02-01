const roles = [
  { key: "hub", title: "Hub Manager (SIDO)" },
  { key: "coach", title: "Coach / BDSP" },
  { key: "entrepreneur", title: "Entrepreneur" },
  { key: "partner", title: "Partner (Read-only)" },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-10">
      <a href="/" className="text-sm text-slate-400">← Back</a>

      <h1 className="mt-4 text-2xl font-bold">Open demo as</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {roles.map(r => (
          <a
            key={r.key}
            href={`/app/${r.key}`}
            className="rounded-xl border border-slate-800 p-5 hover:border-slate-600"
          >
            {r.title}
          </a>
        ))}
      </div>
    </main>
  );
}
