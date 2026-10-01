export function calculateIncome(transactions) {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);
}

export function calculateExpenses(transactions) {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);
}

export function calculateBalance(transactions) {
  const income = calculateIncome(transactions);
  const expenses = calculateExpenses(transactions);

  return income - expenses;
}