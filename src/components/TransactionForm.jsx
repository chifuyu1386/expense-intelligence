import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionForm() {
  const { dispatch } = useContext(TransactionContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString().split("T")[0],
    };

    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction,
    });

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("Food");
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-lg font-semibold text-white">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Transaction title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
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

        <button
          type="submit"
          className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
}

export default TransactionForm;