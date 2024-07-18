import Button from "../Buttons/Button";
import Photo from "./HomePhoto";
import Text from "../Text/Text";
import Title from "../Text/Title";

function HomeHero() {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-10">
        <div className="text-center md:text-left flex flex-col gap-2">
          <Title title="1" className={"text-txtH1 text-[2.87rem] md:text-5xl"}>
            Moisés Xavier
          </Title>
          <Text className={"!text-center md:!text-left"}>
            Sou desenvolvedor de websites e aplicações, focado em criar soluções
            digitais que proporcionam experiências intuitivas e funcionais.
          </Text>
        </div>
        <div className="flex flex-col md:flex-row align-middle gap-2">
          <Button type={"linkedin"}></Button>
          <Button type={"github"}></Button>
          {/* <Button type={"curriculum"}></Button> */}
        </div>
      </div>
      <div className="hidden md:block">
        <Photo />
      </div>
    </>
  );
}

export default HomeHero;
