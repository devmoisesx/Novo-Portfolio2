import "./app.css";
import Header from "./Components/Header";
import Apresentacao from "./Apresentação/Apresentacao";
import SobreProjeto from "./SobreProjeto/SobreProjeto";

function App() {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-10 w-full max-w-6xl flex flex-col overflow-hidden">
        <Apresentacao />

        {/* <SobreProjeto
          name={"Nome do Projeto"}
          tecnologias={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          }
          funcionalidades={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          }
        /> */}
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
