import { useState, useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionForm({
  editingTransaction,
  setEditingTransaction,
}) {
  const { dispatch } = useContext(TransactionContext);

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [type, setType] = useState("expense");

  const [category, setCategory] = useState("Food");

  const [error, setError] = useState("");

  useEffect(() => {
  if (editingTransaction) {
    setTitle(editingTransaction.title);
    setAmount(editingTransaction.amount);
    setType(editingTransaction.type);
    setCategory(editingTransaction.category);
  }
  }, [editingTransaction]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const numericAmount = Number(amount);

    if (!trimmedTitle) {
      setError("Please enter a transaction title.");
      return;
    }

    if (!amount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter an amount greater than 0.")
      return;
    }

    if (editingTransaction) {
      const updatedTransaction = {
        ...editingTransaction,
        title: trimmedTitle,
        amount: numericAmount,
        type,
        category,
      };

      dispatch({
        type: "UPDATE_TRANSACTION",
        payload: updatedTransaction,
      });

      setEditingTransaction(null);
    } else {
      const newTransaction = {
        id: Date.now(),
        title: trimmedTitle,
        amount: numericAmount,
        type,
        category,
        date: new Date().toISOString().split("T")[0],
      };

      dispatch({
        type: "ADD_TRANSACTION",
        payload: newTransaction,
      });
    }

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
    setError("")
  }

  function handleCancel() {
    setEditingTransaction(null);

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
  }

  const isEditing = Boolean(editingTransaction);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-lg font-semibold text-white">
        {isEditing ? "Edit Transaction" : "Add Transaction"}
      </h2>

      {error && (
        <p className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Transaction title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
            setError("");
          }}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            {isEditing ? "Update Transaction" : "Add Transaction"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg border border-slate-700 px-4 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

    </section>
  );
}

export default TransactionForm;