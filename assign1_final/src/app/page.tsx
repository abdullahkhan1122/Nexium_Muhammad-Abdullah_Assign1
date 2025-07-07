import QuoteForm from "./components/QuoteForm";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100">
      <QuoteForm />
    </main>
  );
}
