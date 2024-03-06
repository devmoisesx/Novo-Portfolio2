import Button from "../Components/Button";
import Photo from "../Components/Photo";
import Social from "../Components/Social";
import Text from "../Components/Text";
import Title from "../Components/Title";

function InicioApresentacao() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="">
          <Title title="1">Moisés Xavier</Title>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </div>
        <div className="flex align-middle gap-2">
          <Button className={"text-[18px] py-2 px-3"}>Baixar Currículo</Button>
          <Social>A</Social>
          <Social>A</Social>
        </div>
      </div>
      <Photo />
    </>
  );
}

export default InicioApresentacao;
