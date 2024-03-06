import Text from "../Components/Text";
import Title from "../Components/Title";

function Funcionalidades({ funcionalidades }) {
  return (
    <>
      <Title title={"3"}>Funcionalidades do site</Title>
      <Text>{funcionalidades}</Text>

      <div className="px-[70px]">
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-[20px] mt-[48px] h-[500px]">
          <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] row-span-2 shadow-2lg"></div>
          <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] shadow-2lg"></div>
          <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] shadow-2lg"></div>
        </div>
      </div>
    </>
  );
}

export default Funcionalidades;
