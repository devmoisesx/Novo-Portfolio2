import InicioProjeto from "./InicioProjeto";
import Tecnologias from "./Tecnologias";
import Funcionalidades from "./Funcionalidades";
import Section from "../Components/Section";
import Rectangle_2 from "../Components/SVGs/Rectangle-2";

function SobreProjeto({ name, tecnologias, funcionalidades }) {
  return (
    <>
      <Section id="sobreProjeto" className="h-max mt-32 mb-32">
        <InicioProjeto name={name} />
      </Section>

      <Section id="tecnologias" className="h-max mb-56 lg:mb-56">
        <Tecnologias tecnologias={tecnologias} />
      </Section>

      <div className="relative w-[500%]">
        <Rectangle_2
          className={
            "left-[-50px] md:left-[-10px] lg:left-[-30px] top-[-170px] md:top-[-100px] lg:top-[-135px] md:w-[755px] lg:w-[1000px] xl:w-[1130px]"
          }
        />
      </div>
      <Section id="funcionalidades" className="h-max">
        <Funcionalidades funcionalidades={funcionalidades} />
      </Section>
    </>
  );
}

export default SobreProjeto;
