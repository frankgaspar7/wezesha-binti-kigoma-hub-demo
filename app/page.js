export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-amber-500" />
            <div>
              <div className="font-semibold leading-tight">
                Wezesha Binti – Kigoma Hub
              </div>
              <div className="text-xs text-slate-400">
                SIDO Incubation & SME Tracking System (Demo)
              </div>
            </div>
          </div>
          <a
            href="/login"
            className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Open Demo
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Digital backbone for SIDO Kigoma Hub
        </h1>

        <p className="mt-4 text-slate-300">
          Track women and youth-led enterprises from intake to growth — through
          coaching, compliance, market readiness and access to finance.
        </p>

        <ul className="mt-6 list-disc pl-5 text-slate-300 space-y-1">
          <li>Structured incubation pipeline (GYB/SYB → IYB → Finance)</li>
          <li>Evidence-based coaching & follow-ups</li>
          <li>Compliance and formalization tracking</li>
          <li>Reporting-ready for SIDO & partners</li>
        </ul>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500">
          Demo aligned to Wezesha Binti implementation needs (Kigoma).
        </div>
      </footer>
    </main>
  );
}
