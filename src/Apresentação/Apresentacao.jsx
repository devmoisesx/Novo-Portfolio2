import Section from "../Components/Section";
import InicioApresentacao from "./InicioApresentacao";
import Projetos from "./Projetos";
import Sobre from "./Sobre";

function Apresentacao() {
  return (
    <>
      <Section
        id="inicioApresentacao"
        className="flex md:grid md:grid-cols-[50%_auto] lg:grid-cols-[auto_auto] justify-items-center items-center lg:gap-20 w-full h-fit mt-48 md:mt-80 mb-20"
      >
        <InicioApresentacao />
      </Section>

      <Section id="projetos" className={"h-max"}>
        <Projetos />
      </Section>

      <Section id="sobre" className={"h-max md:h-[100%]"}>
        <Sobre />
      </Section>
    </>
  );
}

export default Apresentacao;
