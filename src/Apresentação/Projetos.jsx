import Line from "../Components/Line";
import Text from "../Components/Text";
import Title from "../Components/Title";
import CardProject from "../Components/CardProject";

function Projetos() {
  return (
    <>
      <Title title={"2"}>Projetos</Title>
      <Line />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque ea
        nesciunt quisquam deserunt.
      </Text>
      <div className="flex flex-col md:grid md:grid-cols-2  md:grid-rows-[auto_auto] gap-9 mt-[50px]">
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
      </div>
    </>
  );
}

export default Projetos;
