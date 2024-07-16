import Section from "../Components/Section";
import Rectangle from "../Components/SVGs/Rectangle";
import Rectangle_2 from "../Components/SVGs/Rectangle-2";
import InicioApresentacao from "./InicioApresentacao";
import Projetos from "./Projetos";
import Sobre from "./Sobre";

function Apresentacao() {
  return (
    <>
      <Section
        id="inicioApresentacao"
        className="flex md:grid md:grid-cols-[50%_auto] lg:grid-cols-[auto_auto] justify-items-center items-center lg:gap-20 w-full h-[90vh] lg:h-[80vh] lg:mb-20"
      >
        <InicioApresentacao />
      </Section>

      <div className="relative w-[200%]">
        <Rectangle
          className={
            "left-[-30px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[-30px] lg:top-[-70px] md:w-[750px] lg:w-[1000px] xl:w-[1130px]"
          }
        />
      </div>
      <Section id="projetos" className={"h-max mb-32 md:mb-60"}>
        <Projetos />
      </Section>

      <Section
        id="sobre"
        className={"h-max md:h-[100%] lg:px-24 relative overflow-x-hidden"}
      >
        <Sobre />
      </Section>
    </>
  );
}

export default Apresentacao;
