import "./App.css";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import Projetos from "./Components/Projetos";
import Section from "./Components/Section";
import Sobre from "./Components/Sobre";

function App() {
  return (
    <>
      <Header />
      <main className="px-[200px] w-full flex flex-col gap-[65px]">
        <Section
          id="inicio"
          className="grid grid-cols-[auto_auto] justify-items-center items-center gap-20 w-full h-screen"
        >
          <Inicio />
        </Section>

        <Section id="projetos" className="w-full h-screen">
          <Projetos />
        </Section>

        <Section id="sobre" className="w-full h-screen">
          <Sobre />
        </Section>
      </main>
      {/* <div className="px-[200px] w-full pt-[70px] flex flex-col gap-[65px]">
        <section id="oProjeto" className="w-full h-screen">
          <h2 className="text-[40px] font-medium">Nome do Projeto</h2>
          <div id="line" className="w-full h-[1px] mb-[15px] bg-white"></div>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur? Harum, at neque! Itaque quo natus repellat provident
            enim iste deserunt voluptates veritatis nobis? Ab dolor dolore
            commodi dolores natus.
          </p>
          <p className="text-[15px] mt-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur? Harum, at neque! Itaque quo natus repellat provident
            enim iste deserunt voluptates veritatis nobis? Ab dolor dolore
            commodi dolores natus.
          </p>
          <div className="px-[130px]">
            <div className="bg-gradient-to-t from-gBlack to-[#3C3C3C] p-[8px] w-full h-[450px] mt-[48px] rounded-[32px] shadow-2lg">
              <div className="w-full h-full rounded-[24px] bg-[#ffffff] opacity-75"></div>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="w-full h-screen">
          <h3 className="text-[32px] font-medium">Tecnologias utilizadas</h3>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur? Harum, at neque! Itaque quo natus repellat provident
            enim iste deserunt voluptates veritatis nobis? Ab dolor dolore
            commodi dolores natus.
          </p>
          <p className="text-[15px] mt-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur? Harum, at neque! Itaque quo natus repellat provident
            enim iste deserunt voluptates veritatis nobis? Ab dolor dolore
            commodi dolores natus.
          </p>

          <div className="px-[130px]">
            <div className="w-full grid grid-cols-[1fr_380px] items-center mt-[48px]">
              <div className="bg-[#818181] w-[300px] h-[500px] rounded-[24px] relative shadow-2lg">
                <div className="bg-[#D9D9D9] w-[300px] h-[500px] rounded-[24px] relative left-[80px] top-[80px] shadow-2lg"></div>
              </div>
              <div className="w-full">
                <h2 className="text-[48px] font-bold italic">Responsivo </h2>
                <h2 className="text-[48px] font-bold italic">Mobile First</h2>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, consectetur? Harum, at neque! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dolore, consectetur? Harum,
                  at neque! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolore, consectetur? Harum, at neque!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="w-full h-screen mt-[87px]">
          <h3 className="text-[32px] font-medium">Funcionalidades do site</h3>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur? Harum, at neque! Itaque quo natus repellat provident
            enim iste deserunt voluptates veritatis nobis? Ab dolor dolore
            commodi dolores natus.
          </p>

          <div className="px-[70px]">
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-[20px] mt-[48px] h-[500px]">
              <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] row-span-2 shadow-2lg"></div>
              <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] shadow-2lg"></div>
              <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] shadow-2lg"></div>
            </div>
          </div>
        </section>
      </div> */}
      <footer className="grid justify-center items-center pb-[20px] text-center opacity-[30%]">
        <p>Contato</p>
        <p>linkedin</p>
        <p className="mt-[24px]">© 2024 Moisés Xavier.</p>
      </footer>
    </>
  );
}

export default App;
