import Button from "../Components/Button";
import Photo from "../Components/Photo";
import Social from "../Components/Social";
import Text from "../Components/Text";
import Title from "../Components/Title";

function InicioApresentacao() {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-10">
        <div className="text-center md:text-left flex flex-col gap-2 md:ml-7">
          <Title title="1" className={"text-4xl md:text-6xl"}>Moisés Xavier</Title>
          <Text className={"text-lg"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </div>
        <div className="flex flex-col md:flex-row align-middle gap-2 md:ml-7">
          <Button className={"text-[18px] py-2 px-3"}>Baixar Currículo</Button>
          <Social>A</Social>
          <Social>A</Social>
        </div>
      </div>
      <div className="hidden md:block">
        <Photo />
      </div>
    </>
  );
}

export default InicioApresentacao;
