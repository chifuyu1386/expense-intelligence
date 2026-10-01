import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionItem({ transaction }) {
  const { dispatch } = useContext(TransactionContext);

  const isIncome = transaction.type === "income";

  function handleDelete() {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: transaction.id,
    });
  }

  return (
    <div className="flex items-center justify-between border-b border-slate-800 py-4 last:border-b-0">
      <div>
        <h3 className="font-medium text-white">
          {transaction.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {transaction.category}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <p
          className={`font-semibold ${
            isIncome ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {isIncome ? "+" : "-"}${transaction.amount.toFixed(2)}
        </p>

        <button
          onClick={handleDelete}
          className="rounded-md px-2 py-1 text-sm text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;