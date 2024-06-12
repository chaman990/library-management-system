import Header from "@/components/header";
import Books from "@/components/books";
import ReduxProvider from "@/lib/redux-provider";

export default function Home() {
  return (
    <ReduxProvider>
      <main>
        <Header />
        <Books />
      </main>
    </ReduxProvider>
  );
}
