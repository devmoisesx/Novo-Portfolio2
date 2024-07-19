import Line from "../Line";
import Text from "../Text/Text";
import Title from "../Text/Title";
import Photo from "../Photo";

function ProjectHero({ name, description, image }) {
  return (
    <>
      <Title title={"2"}>{name}</Title>
      <Line />
      <Text className={"text-justify"}>{description}</Text>

      <div className="w-full">
        <div className="bg-gradient-to-t from-gBlack to-[#3C3C3C] p-[8px] w-full h-full mt-[48px] rounded-[32px] shadow-2lg">
          {/* <div className="w-full h-full rounded-[24px] bg-[#ffffff] opacity-75"></div> */}
          <Photo
            src={image}
            alt={"Foto da tela inicial do projeto."}
            className={"w-full h-full rounded-[24px] object-cover"}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectHero;
