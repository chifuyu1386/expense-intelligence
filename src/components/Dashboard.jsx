import { useContext, useState } from "react";

import { TransactionContext } from "../context/TransactionContext";

import Header from "./Header";
import SummaryCards from "./SummaryCards";
import TransactionForm from "./TransactionForm";
import TransactionFilters from "./TransactionFilters";
import TransactionList from "./TransactionList";

function Dashboard() {
  const { transactions } = useContext(TransactionContext);

  const [editingTransaction, setEditingTransaction] =
    useState(null);

  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all",
  });

  const filteredTransactions = transactions.filter(
    (transaction) => {
      const matchesSearch = transaction.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      const matchesType =
        filters.type === "all" ||
        transaction.type === filters.type;

      const matchesCategory =
        filters.category === "all" ||
        transaction.category === filters.category;

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory
      );
    }
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Header />

      <div className="mt-8 space-y-8">
        <SummaryCards />

        <div className="grid items-start gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">

          <TransactionForm
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />

          <div className="min-w-0 space-y-8">
            <TransactionFilters
              onFilterChange={setFilters}
            />

            <TransactionList
              transactions={filteredTransactions}
              setEditingTransaction={setEditingTransaction}
            />
          </div>

        </div>
      </div>
    </main>
  );
}

export default Dashboard;