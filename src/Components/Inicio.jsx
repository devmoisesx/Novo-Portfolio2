import Button from "./Button";
import Photo from "./Photo";
import Social from "./Social";
import Text from "./Text";
import Title from "./Title";

function Inicio() {
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
      <Photo/>
    </>
  );
}

export default Inicio;
