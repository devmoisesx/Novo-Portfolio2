import Text from "../Text";
import Title from "../Title";

function SobreProjeto({ tecnologias,}) {
  return (
    <>
      <Title title={"3"}>Tecnologias utilizadas</Title>
      <Text>
        {tecnologias}
      </Text>

      <div className="px-[130px]">
        <div className="w-full grid grid-cols-[1fr_380px] items-center mt-[48px]">
          <div className="bg-[#818181] w-[300px] h-[500px] rounded-[24px] relative shadow-2lg">
            <div className="bg-[#D9D9D9] w-[300px] h-[500px] rounded-[24px] relative left-[80px] top-[80px] shadow-2lg"></div>
          </div>
          <div className="w-full">
            <Title title={"2"} className={"text-[48px] font-extrabold italic"}>
              Responsivo
            </Title>
            <Title title={"2"} className={"text-[48px] font-extrabold italic"}>
              Mobile First
            </Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              consectetur? Harum, at neque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore, consectetur? Harum, at
              neque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore, consectetur? Harum, at neque!
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreProjeto;
