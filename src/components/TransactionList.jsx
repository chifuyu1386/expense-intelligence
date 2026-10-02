import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  setEditingTransaction,
}) {
  return (
    <section className="min-w-0 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">
          Recent Transactions
        </h2>

        <p className="text-sm text-slate-500">
          Your latest financial activity
        </p>
      </div>

      <div className="max-h-[600px] overflow-y-auto pr-2">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            setEditingTransaction={setEditingTransaction}
          />
        ))}
      </div>
    </section>
  );
}

export default TransactionList;