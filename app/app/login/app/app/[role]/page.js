export default function RolePage({ params }) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-10">
      <h1 className="text-2xl font-bold">
        {params.role.toUpperCase()} Dashboard
      </h1>

      <p className="mt-2 text-slate-300">
        Incubation pipeline overview (demo).
      </p>

      <ul className="mt-4 list-disc pl-5 text-slate-300">
        <li>Intake & eligibility</li>
        <li>Coaching & action plans</li>
        <li>Compliance tracking</li>
        <li>Finance readiness</li>
      </ul>

      <a href="/login" className="mt-6 inline-block text-amber-400">
        Switch role
      </a>
    </main>
  );
}
