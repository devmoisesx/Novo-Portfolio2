import Text from "../Text/Text";
import Title from "../Text/Title";

function CardProject({ name, tecnologies }) {
  return (
    <div className="transform transition duration-500 hover:scale-[1.05]">
      <div className="bg-gradient-to-t from-bgCardColor to-[#3C3C3C] w-full h-full rounded-[32px] p-[8px] shadow-2lg">
        <div className="flex flex-col h-full justify-center items-left">
          {/* Foto do Projeto */}
          <div className="bg-gray-400 w-full h-[175px] rounded-[24px] p-[8px]"></div>

          <div className="px-[20px] pt-[10px]">
            <Title title={"4"}>{name}</Title>
            <div className="flex gap-2">
              <Text>{tecnologies}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
