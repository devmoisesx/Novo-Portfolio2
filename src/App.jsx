import "./app.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-10 w-full max-w-6xl flex flex-col overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </>
  );
}

export default App;
