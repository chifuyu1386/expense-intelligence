import { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";

function App() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-6 text-4xl font-bold">
        Expense Intelligence
      </h1>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="rounded-lg bg-slate-800 p-4"
          >
            <h2 className="font-semibold">
              {transaction.title}
            </h2>

            <p className="text-slate-400">
              ${transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;