import "./app.css";
import Header from "./Components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-10 w-full max-w-6xl flex flex-col overflow-hidden">
        <Outlet />
        <ScrollRestoration />
      </main>
      <footer className="grid justify-center items-center pt-[170px] pb-[20px] text-center opacity-[30%]">
        <p>Contato</p>
        <p>linkedin</p>
        <p className="mt-[24px]">© 2024 Moisés Xavier.</p>
      </footer>
    </>
  );
}

export default App;
