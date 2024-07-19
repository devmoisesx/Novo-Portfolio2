import Photo from "../Photo";
import Text from "../Text/Text";
import Title from "../Text/Title";

function ProjectTechnologies({ technologies, images }) {
  return (
    <>
      <Title title={"3"} className={"text-center"}>
        Tecnologias utilizadas
      </Title>
      <Text className={"text-justify mt-5"}>{technologies}</Text>

      <div className="w-full flex flex-col items-start md:items-center gap-32 lg:grid grid-cols-[1fr_380px] mt-16 lg:mt-32">
        <div className="bg-[#818181] w-48 h-80 md:w-72 md:h-[30rem] rounded-[24px] relative shadow-2lg self-center md:self-auto -left-10 lg:left-0">
          <Photo
            src={images[0]}
            alt={"Primeira foto do projeto no celular."}
            className={"absolute w-48 h-80 md:w-72 md:h-[30rem] rounded-[24px]"}
          />
          <div className="bg-[#D9D9D9] w-48 h-80 md:w-72 md:h-[30rem] rounded-[24px] relative left-[80px] top-[80px] shadow-2lg overflow-hidden">
            <Photo
              src={images[1]}
              alt={"Primeira foto do projeto no celular."}
            />
          </div>
        </div>
        <div className="w-full">
          <Title
            title={"2"}
            className={" text-center lg:text-start font-extrabold italic"}
          >
            Responsivo
          </Title>
          <Title
            title={"2"}
            className={"text-center lg:text-start font-extrabold italic mb-5"}
          >
            Mobile First
          </Title>
          <Text className={"text-justify"}>
            O site foi projetado com uma abordagem mobile first, garantindo que
            seja completamente responsivo e adaptável a dispositivos móveis
            antes de ser otimizado para desktops. Essa estratégia não apenas
            melhora a experiência do usuário em smartphones e tablets, mas
            também assegura que o design seja fluido e eficaz em qualquer tela,
            proporcionando acesso intuitivo e eficiente ao conteúdo em todas as
            plataformas.
          </Text>
        </div>
      </div>
    </>
  );
}

export default ProjectTechnologies;
