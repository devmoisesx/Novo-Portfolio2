import Title from "./Title";

function CardProject({ name, tecnologies }) {
  return (
    <div className="bg-gradient-to-t from-gBlack to-[#3C3C3C] w-full h-full rounded-[32px] p-[8px] shadow-2lg">
      <div className="bg-gray-400 w-full h-[175px] rounded-[24px] p-[8px]"></div>
      <div className="px-[10px] pt-[10px]">
        <Title title={"4"}>{name}</Title>
        <div className="flex gap-2">{tecnologies}</div>
      </div>
    </div>
  );
}

export default CardProject;
