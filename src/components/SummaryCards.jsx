function SummaryCards() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Total Balance
        </p>

        <p className="mt-2 text-3xl font-bold text-white">
          $4,280.00
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Income
        </p>

        <p className="mt-2 text-3xl font-bold text-white">
          $2,500.00
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Expenses
        </p>

        <p className="mt-2 text-3xl font-bold text-white">
          $160.49
        </p>
      </div>
    </section>
  );
}

export default SummaryCards;