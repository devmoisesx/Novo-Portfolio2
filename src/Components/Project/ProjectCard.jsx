import Photo from "../Photo";
import Text from "../Text/Text";
import Title from "../Text/Title";

function CardProject({ name, stacks, image }) {
  return (
    <div className="w-full h-full bg-gradient-to-t from-bgCardColor to-[#3C3C3C] rounded-[32px] p-[8px] shadow-2lg grid grid-cols-1 grid-rows-[100px, auto]">
      <Photo
        src={image}
        alt={"Foto do projeto " + name}
        className={"w-full h-[250px] rounded-[24px] p-[8px] object-cover"}
      />
      <div className="px-[20px] pt-[10px]">
        <Title title={"4"}>{name}</Title>
        <div className="flex gap-2">
          <Text className={"!text-sm mt-1"}>{stacks}</Text>
        </div>
      </div>
    </div>
    // <div className="transform transition duration-500 hover:scale-[1.05]">
    //   <div className="bg-gradient-to-t from-bgCardColor to-[#3C3C3C] w-full h-full rounded-[32px] p-[8px] shadow-2lg">
    //     <div className=" flex flex-col justify-center items-left">
    //       {/* Foto do Projeto */}
    //       {/* <div className="bg-gray-400 w-full h-[175px] rounded-[24px] p-[8px]"></div> */}
    //

    //     </div>
    //   </div>
    // </div>
  );
}

export default CardProject;
