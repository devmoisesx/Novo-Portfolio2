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
      <div className="grid grid-cols-3 grid-rows-[220px_220px] gap-[18px] mt-[50px] mx-[-50px]">
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
        <CardProject name={"Nome do Projeto"} tecnologies={"stack utilizada"} />
      </div>
    </>
  );
}

export default Projetos;
