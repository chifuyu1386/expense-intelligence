import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {
  calculateBalance,
  calculateIncome,
  calculateExpenses,
} from "../utils/transactionUtils";

function SummaryCards() {
  const { transactions } = useContext(TransactionContext);

  const balance = calculateBalance(transactions);
  const income = calculateIncome(transactions);
  const expenses = calculateExpenses(transactions);

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Total Balance
        </p>

        <p className="mt-2 text-3xl font-bold text-white">
          ${balance.toFixed(2)}
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Income
        </p>

        <p className="mt-2 text-3xl font-bold text-emerald-400">
          ${income.toFixed(2)}
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Expenses
        </p>

        <p className="mt-2 text-3xl font-bold text-red-400">
          ${expenses.toFixed(2)}
        </p>
      </div>
    </section>
  );
}

export default SummaryCards;