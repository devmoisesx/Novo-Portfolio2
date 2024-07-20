import Section from "../Components/Section";
import ProjectHero from "../Components/Project/ProjectHero";
import ProjectTechnologies from "../Components/Project/ProjectTechnologies";
import ProjectFunctions from "../Components/Project/ProjectFunctions";
import Rectangle_2 from "../Components/SVGs/Rectangle-2";
import { useLocation } from "react-router-dom";

function SobreProjeto() {
  const location = useLocation();
  const data = location.state;

  const name = (name) => {
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1);
    const spaces = capitalize.split("_");
    return spaces.join(" ");
  };
  const description = data.description;
  const technologies = data.technologies;
  const functions = data.functions;
  const images = data.images;

  return (
    <>
      <Section id="sobreProjeto" className="h-max mt-32 mb-32 lg:px-16">
        <ProjectHero
          name={name(data.name)}
          description={description}
          image={images[0]}
        />
      </Section>

      <Section id="technologies" className="h-min mb-60 lg:px-16">
        <ProjectTechnologies
          technologies={technologies}
          images={[images[1], images[2]]}
        />
      </Section>

      <div className="relative w-[500%]">
        <Rectangle_2
          className={
            "left-[-50px] md:left-[-10px] lg:left-[-30px] top-[-170px] md:top-[-100px] lg:top-[-135px] md:w-[920px] lg:w-[1000px] xl:w-[1130px]"
          }
        />
      </div>
      <Section id="functions" className="h-max pb-10 lg:px-16">
        <ProjectFunctions functions={functions} images={data.images.slice(3)} />
      </Section>
    </>
  );
}

export default SobreProjeto;
