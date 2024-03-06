import InicioProjeto from "./InicioProjeto";
import Section from "../Section";
import Tecnologias from "./Tecnologias";
import Funcionalidades from "./Funcionalidades";

function SobreProjeto({ name, tecnologias, funcionalidades }) {
  return (
    <>
      <Section id="sobreProjeto" className="pt-[70px]">
        <InicioProjeto name={name} />
      </Section>

      <Section id="tecnologias">
        <Tecnologias tecnologias={tecnologias} />
      </Section>

      <Section id="funcionalidades">
        <Funcionalidades funcionalidades={funcionalidades} />
      </Section>
    </>
  );
}

export default SobreProjeto;
