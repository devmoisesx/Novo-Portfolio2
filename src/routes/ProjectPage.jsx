import Section from "../Components/Section";
import InicioProjeto from "../Components/Project/ProjectHero";
import Tecnologias from "../Components/Project/ProjectTechnologies";
import Funcionalidades from "../Components/Project/ProjectFunctions";
import Rectangle_2 from "../Components/SVGs/Rectangle-2";
import { useLocation } from "react-router-dom";

function SobreProjeto() {
  const location = useLocation();
  const data = location.state;

  const name = (name) => {
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1);
    return capitalize.replace("_", " ");
  };
  const description = data.description;
  const technologies = data.technologies;
  const functions = data.functions;

  return (
    <>
      <Section id="sobreProjeto" className="h-max mt-32 mb-32 lg:px-16">
        <InicioProjeto name={name(data.name)} description={description} />
      </Section>

      <Section id="technologies" className="h-min mb-80 lg:mb-60 lg:px-16">
        <Tecnologias technologies={technologies} />
      </Section>

      <div className="relative w-[500%]">
        <Rectangle_2
          className={
            "left-[-50px] md:left-[-10px] lg:left-[-30px] top-[-170px] md:top-[-100px] lg:top-[-135px] md:w-[920px] lg:w-[1000px] xl:w-[1130px]"
          }
        />
      </div>
      <Section id="functions" className="h-max lg:px-16">
        <Funcionalidades functions={functions} />
      </Section>
    </>
  );
}

export default SobreProjeto;
