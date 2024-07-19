import Line from "../Line";
import Text from "../Text/Text";
import Title from "../Text/Title";
import { Link } from "react-router-dom";
import projectsData from "../Project/ProjectsData";
import CardProject from "../Project/ProjectCard";

function HomeProjects() {
  const projectData = projectsData;

  const nameProject = (name) => {
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1);
    const spaces = capitalize.split("_");
    return spaces.join(" ");
  };

  const stacksProject = (stacks) => {
    const separate = stacks.join(" ");
    return separate;
  };

  return (
    <>
      <Title title={"2"}>Projetos</Title>
      <Line />
      <Text>
        Estes são os meus projetos, cada um representando minha dedicação e
        criatividade na criação de experiências digitais significativas. De
        websites funcionais a designs inovadores, cada projeto foi desenvolvido
        com paixão para superar expectativas e proporcionar resultados
        excepcionais.
      </Text>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-[auto_auto] gap-9 mt-[50px]">
        {projectData.map((project, key) => (
          <Link key={key} to={"projetos/" + project.name} state={project}>
            <CardProject
              name={nameProject(project.name)}
              stacks={stacksProject(project.stacks)}
              image={project.images[0]}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomeProjects;
