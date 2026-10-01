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
    </header>
  );
}

export default Header;