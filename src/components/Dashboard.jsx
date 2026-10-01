import Header from "./Header";
import SummaryCards from "./SummaryCards";
import TransactionList from "./TransactionList";

function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Header />

      <div className="mt-8 space-y-8">
        <SummaryCards />

        <TransactionList />
      </div>
    </main>
  );
}

export default Dashboard;