import InicioProjeto from "./InicioProjeto";
import Tecnologias from "./Tecnologias";
import Funcionalidades from "./Funcionalidades";
import Section from "../Components/Section";

function SobreProjeto({ name, tecnologias, funcionalidades }) {
  return (
    <>
      <Section id="sobreProjeto" className="h-min mt-32 mb-32">
        <InicioProjeto name={name} />
      </Section>

      <Section id="tecnologias" className="h-min mb-32 lg:mb-56">
        <Tecnologias tecnologias={tecnologias} />
      </Section>

      <Section id="funcionalidades" className="h-min">
        <Funcionalidades funcionalidades={funcionalidades} />
      </Section>
    </>
  );
}

export default SobreProjeto;
