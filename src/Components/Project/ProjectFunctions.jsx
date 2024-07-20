import Line from "../Line";
import Photo from "../Photo";
import Text from "../Text/Text";
import Title from "../Text/Title";

function ProjectFunctions({ functions, images }) {
  return (
    <>
      <Title title={"3"} className={"text-center"}>
        Funcionalidades do site
      </Title>
      {/* <Line /> */}
      <Text className={"text-justify mt-5"}>{functions}</Text>

      {images.length === 2 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-[250px_250px] lg:grid-rows-1 gap-[20px] mt-[48px] lg:h-[500px]">
          <Photo
            src={images[0]}
            alt={"Primeira foto de funções do projeto"}
            className={"w-full h-full rounded-[24px] shadow-2lg object-cover"}
          />
          <Photo
            src={images[1]}
            alt={"Primeira foto de funções do projeto"}
            className={"w-full h-full rounded-[24px] shadow-2lg object-cover"}
          />
        </div>
      ) : images.length === 3 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-[250px_250px_250px] lg:grid-rows-2 gap-[20px] mt-[48px] lg:h-[500px]">
          <Photo
            src={images[0]}
            alt={"Primeira foto de funções do projeto"}
            className={
              "w-full h-full rounded-[24px] lg:row-span-2 shadow-2lg object-cover"
            }
          />
          <Photo
            src={images[1]}
            alt={"Primeira foto de funções do projeto"}
            className={"w-full h-full rounded-[24px] shadow-2lg object-cover"}
          />
          <Photo
            src={images[2]}
            alt={"Primeira foto de funções do projeto"}
            className={"w-full h-full rounded-[24px] shadow-2lg object-cover"}
          />
        </div>
      ) : (
        <div className="w-full mt-[48px] lg:h-[500px]">
          <Photo
            src={images[0]}
            alt={"Primeira foto de funções do projeto"}
            className={"w-full h-full rounded-[24px] shadow-2lg object-cover"}
          />
        </div>
      )}
    </>
  );
}

export default ProjectFunctions;
