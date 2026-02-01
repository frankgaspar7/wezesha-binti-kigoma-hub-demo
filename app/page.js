export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-amber-500" />
            <div>
              <div className="font-semibold leading-tight">Wezesha Binti – Kigoma Hub</div>
              <div className="text-xs text-slate-400">SIDO Incubation & SME Tracking System (Demo)</div>
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
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Digital backbone for a practical incubation pipeline in Kigoma.
            </h1>
            <p className="mt-4 text-slate-300">
              This demo shows how SIDO Hub can operationalize incubation while tracking each entrepreneur step-by-step:
              intake, training, coaching, compliance, market readiness, access-to-finance, and post-support follow-up.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400" href="/login">
                Start as Hub Manager
              </a>
              <a className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold hover:border-slate-500" href="/login">
                Start as Coach / BDSP
              </a>
              <a className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold hover:border-slate-500" href="/login">
                Start as Entrepreneur
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 p-4">
                <div className="font-semibold text-slate-100">Structured stage-gates</div>
                <div className="mt-1">
                  GYB/SYB → IYB coaching → Market readiness → Finance linkages → Follow-up
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 p-4">
                <div className="font-semibold text-slate-100">Governance & accountability</div>
                <div className="mt-1">
                  Stage progression validated by Hub Manager, Coach, and Finance/M&E.
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 p-4">
                <div className="font-semibold text-slate-100">Reporting-ready</div>
                <div className="mt-1">
                  Live indicators: women/youth %, pipeline status, coaching logs, compliance, finance outcomes.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="text-sm text-slate-400">Demo snapshot</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Stat label="Active entrepreneurs" value="126" />
              <Stat label="Women & youth" value="74%" />
              <Stat label="At-risk cases" value="18" />
            </div>
            <div className="mt-6 rounded-xl border border-slate-800 p-4">
              <div className="font-semibold">What this demo proves</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Hub operations + incubation pipeline (not investor marketplace).</li>
                <li>Coaching logs, action plans, and follow-ups.</li>
                <li>Compliance + finance readiness for MFIs/banks/SACCOs.</li>
                <li>Designed for SIDO Hub operations and partner reporting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500">
          Demo concept aligned to Wezesha Binti implementation needs (Kigoma). Not a production system.
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
