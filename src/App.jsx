import Header from "./Components/Header";
import Apresentacao from "./Apresentação/Apresentacao";
import SobreProjeto from "./SobreProjeto/SobreProjeto";

function App() {
  return (
    <>
      <Header />
      <main className="px-4 w-full flex flex-col gap-20 md:gap-80">
        {/* <Apresentacao /> */}

        <SobreProjeto
          name={"Nome do Projeto"}
          tecnologias={"Tecnologias"}
          funcionalidades={"Funcionalidades"}
        />
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
