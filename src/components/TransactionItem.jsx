function TransactionItem({ transaction }) {
  const isIncome = transaction.type === "income";

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

      <p
        className={`font-semibold ${
          isIncome ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {isIncome ? "+" : "-"}${transaction.amount}
      </p>
    </div>
  );
}

export default TransactionItem;