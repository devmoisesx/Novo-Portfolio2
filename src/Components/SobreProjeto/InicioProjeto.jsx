import Line from "../Line";
import Text from "../Text";
import Title from "../Title";

function InicioProjeto({ name, description}) {
  return (
    <>
      <Title title={"2"}>{name}</Title>
      <Line />
      <Text className={"text-justify"}>{description}</Text>

      <div className="w-full h-[240px]">
        <div className="bg-gradient-to-t from-gBlack to-[#3C3C3C] p-[8px] w-full h-full mt-[48px] rounded-[32px] shadow-2lg">
          <div className="w-full h-full rounded-[24px] bg-[#ffffff] opacity-75"></div>
        </div>
      </div>
    </>
  );
}

export default InicioProjeto;
