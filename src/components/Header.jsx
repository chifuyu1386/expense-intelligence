function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Expense Intelligence
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Track and understand your spending
        </p>
      </div>

      <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-700">
        🌙
      </button>
    </header>
  );
}

export default Header;