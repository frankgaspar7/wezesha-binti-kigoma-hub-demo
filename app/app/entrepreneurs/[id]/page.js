import { demoEntrepreneurs } from "@/lib/demo-data";

const stageGates: Record<string, string[]> = {
  "Intake": ["Profile completed", "Eligibility checked", "Baseline captured"],
  "Pre-incubation": ["GYB/SYB attendance logged", "Problem/solution validated", "Basic costing done"],
  "Incubation": ["Coaching plan active", "Recordkeeping started", "Marketing actions tested"],
  "Market Readiness": ["Product/service standardized", "2+ paying customers", "Compliance progress"],
  "Finance Linkages": ["Finance readiness score ≥ 60", "Application submitted", "Bank/MFI meeting held"],
  "Follow-up": ["3–6 month check-in", "Jobs/revenue updates", "Lessons captured"],
};

export default function EntrepreneurPage({ params }: { params: { id: string } }) {
  const e = demoEntrepreneurs.find(x => x.id === params.id);
  if (!e) return <main className="min-h-screen bg-slate-950 text-slate-100 p-10">Not found</main>;

  const gates = stageGates[e.stage] ?? [];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <div>
            <a href="/login" className="text-sm text-slate-400 hover:text-slate-200">← Switch role</a>
            <div className="mt-2 text-lg font-semibold">{e.businessName}</div>
            <div className="text-sm text-slate-400">{e.district} • {e.sector} • ID: {e.id}</div>
          </div>
          <a href={`/app/hub`} className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400">
            Back to Dashboard
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Stage tracking</div>
            <span className="text-xs rounded-full border border-slate-700 bg-slate-950/30 px-2 py-1">{e.stage}</span>
          </div>

          <div className="mt-3 text-sm text-slate-300">
            Gate criteria (what must be evidenced before progression):
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-200 space-y-1">
            {gates.map((g) => <li key={g}>{g}</li>)}
          </ul>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Panel title="Coaching (latest)">
              <div className="text-sm text-slate-300">Last session: {e.coaching.lastDate}</div>
              <div className="mt-1 text-sm">Topic: <span className="text-slate-200">{e.coaching.topic}</span></div>
              <div className="mt-2 text-sm text-slate-300">Action points:</div>
              <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
                {e.coaching.actions.map(a => <li key={a}>{a}</li>)}
              </ul>
              <div className="mt-3 text-sm text-slate-300">Next follow-up: {e.coaching.nextDate}</div>
            </Panel>

            <Panel title="Finance readiness">
              <div className="text-sm">Readiness score: <span className="font-semibold">{e.finance.score}/100</span></div>
              <div className="mt-2 text-sm text-slate-300 space-y-1">
                <div>Bookkeeping: <span className="text-slate-200">{e.finance.bookkeeping}</span></div>
                <div>Account: <span className="text-slate-200">{e.finance.account}</span></div>
                <div>Application: <span className="text-slate-200">{e.finance.applicationStatus}</span></div>
                <div>Institution: <span className="text-slate-200">{e.finance.institution}</span></div>
              </div>
            </Panel>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="font-semibold">Compliance & inclusion</div>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <Row label="Women/Youth" value={e.isWomenOrYouth ? "Yes" : "No"} />
            <Row label="Green practice" value={e.greenPractice ? "Yes" : "No"} />
            <Row label="TIN" value={e.compliance.tin} />
            <Row label="License" value={e.compliance.license} />
            <Row label="Registration" value={e.compliance.registration} />
          </div>

          {e.riskFlag && (
            <div className="mt-5 rounded-xl border border-red-800 bg-red-950/30 p-4">
              <div className="font-semibold text-red-200">At risk</div>
              <div className="mt-1 text-sm text-red-200/90">
                {e.riskReason}
              </div>
            </div>
          )}

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/30 p-4">
            <div className="font-semibold">Suggested next action</div>
            <div className="mt-1 text-sm text-slate-300">
              {e.suggestedAction}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
      <div className="font-semibold">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-slate-400">{label}</div>
      <div className="text-slate-200">{value}</div>
    </div>
  );
}
