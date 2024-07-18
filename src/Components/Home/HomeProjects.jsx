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
    return capitalize.replace("_", " ");
  };

  const stacksProject = (stacks) => {
    const separate = stacks.join(" ")
    return separate
  }
  
  return (
    <>
      <div className="lg:px-16">
        <Title title={"2"}>Projetos</Title>
        <Line />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque ea
          nesciunt quisquam deserunt.
        </Text>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-[auto_auto] gap-9 mt-[50px]">
        <Link to={"projetos/" + projectData[0].name} state={projectData[0]}>
          <CardProject
            name={nameProject(projectData[0].name)}
            stacks={stacksProject(projectData[0].stacks)}
          />
        </Link>
        <Link to={"projetos/" + projectData[1].name} state={projectData[1]}>
          <CardProject
            name={projectData[1].name}
            stacks={projectData[1].stacks}
          />
        </Link>
        <Link to={"projetos/" + projectData[2].name} state={projectData[2]}>
          <CardProject
            name={projectData[2].name}
            stacks={projectData[2].stacks}
          />
        </Link>
        <Link to={"projetos/" + projectData[3].name} state={projectData[3]}>
          <CardProject
            name={projectData[3].name}
            stacks={projectData[3].stacks}
          />
        </Link>
      </div>
    </>
  );
}

export default HomeProjects;
