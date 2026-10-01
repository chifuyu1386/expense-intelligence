import Header from "./Header";
import SummaryCards from "./SummaryCards";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Header />

      <div className="mt-8 space-y-8">
        <SummaryCards />

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <TransactionForm />

          <TransactionList />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;