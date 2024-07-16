import Line from "../Components/Line";
import Text from "../Components/Text";
import Title from "../Components/Title";

function InicioProjeto({ name, children, ...props }) {
  return (
    <>
      <Title title={"2"}>{name}</Title>
      <Line />
      <Text className={"text-justify"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        consectetur? Harum, at neque! Itaque quo natus repellat provident enim
        iste deserunt voluptates veritatis nobis? Ab dolor dolore commodi
        dolores natus.
      </Text>

      <div className="w-full h-[240px]">
        <div className="bg-gradient-to-t from-gBlack to-[#3C3C3C] p-[8px] w-full h-full mt-[48px] rounded-[32px] shadow-2lg">
          <div className="w-full h-full rounded-[24px] bg-[#ffffff] opacity-75"></div>
        </div>
      </div>
    </>
  );
}

export default InicioProjeto;
