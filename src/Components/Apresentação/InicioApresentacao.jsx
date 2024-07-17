import Button from "../Buttons/Button";
import Photo from "../Photo";
import Social from "../Social";
import Text from "../Text/Text";
import Title from "../Text/Title";

function InicioApresentacao() {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-10">
        <div className="text-center md:text-left flex flex-col gap-2 md:ml-7">
          <Title title="1" className={"text-txtH1 text-[2.87rem] md:text-4xl"}>
            Moisés Xavier
          </Title>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
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
