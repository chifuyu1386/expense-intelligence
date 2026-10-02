import { useState } from "react";

function TransactionFilters({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");

  function handleSearchChange(event) {
    const value = event.target.value;

    setSearch(value);

    onFilterChange({
      search: value,
      type,
      category,
    });
  }

  function handleTypeChange(event) {
    const value = event.target.value;

    setType(value);

    onFilterChange({
      search,
      type: value,
      category,
    });
  }

  function handleCategoryChange(event) {
    const value = event.target.value;

    setCategory(value);

    onFilterChange({
      search,
      type,
      category: value,
    });
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div>
        <h2 className="text-lg font-semibold text-white">
          Transactions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Search and filter your financial activity
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_180px_180px]">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={handleSearchChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
        />

        <select
          value={type}
          onChange={handleTypeChange}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
        >
          <option value="all">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </section>
  );
}

export default TransactionFilters;