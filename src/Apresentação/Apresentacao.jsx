import Section from "../Components/Section";
import InicioApresentacao from "./InicioApresentacao";
import Projetos from "./Projetos";
import Sobre from "./Sobre";

function Apresentacao() {
  return (
    <>
      <Section
        id="inicioApresentacao"
        className="grid grid-cols-[auto_auto] justify-items-center items-center gap-20 w-full h-screen"
      >
        <InicioApresentacao />
      </Section>

      <Section id="projetos">
        <Projetos />
      </Section>

      <Section id="sobre" className={"h-[100%]"}>
        <Sobre />
      </Section>
    </>
  );
}

export default Apresentacao;
