import { useState } from "react";
import Header from "./Header";
import SummaryCards from "./SummaryCards";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function Dashboard() {
  const [editingTransaction, setEditingTransaction] = useState(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Header />

      <div className="mt-8 space-y-8">
        <SummaryCards />

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <TransactionForm
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />

          <TransactionList
            setEditingTransaction={setEditingTransaction}
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;