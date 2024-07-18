import Line from "../Line";
import Text from "../Text/Text";
import Title from "../Text/Title";

function HomeAbout() {
  return (
    <>
      <Title title={"2"}>Sobre mim</Title>
      <Line />
      <div className="">
        <div className="grid gap-7">
          <Text>
            Meu nome é Moisés Xavier e sou estudante de Análise e
            Desenvolvimento de Sistemas.
          </Text>
          <Text>
            Atualmente, estou mergulhado no curso Oracle ONE em parceria com a
            Alura, aprimorando minhas habilidades tanto no desenvolvimento
            Front-End quanto Back-End.
          </Text>
          <Text>
            Aprofundo meus estudos em HTML, CSS e estou explorando JavaScript
            para criar interfaces dinâmicas e responsivas. Além disso, estou
            aprendendo React para desenvolvimento de interfaces modernas, SQL
            para manipulação de bancos de dados e Java para aplicações robustas.
          </Text>
          <Text>
            Minha jornada é marcada pela busca contínua por aprender e aplicar
            tecnologias modernas, sempre empenhado em criar soluções eficientes
            e inovadoras.
          </Text>
        </div>
        {/* 
        <div className="hidden md:block">
          <Line direction={"vertical"} />
        </div>

        <div className="block md:hidden">
          <Line direction={"horizontal"} className={"mb-12 mt-12"} />
        </div> */}

        {/* <div className="grid gap-7 md:w-[85%] md:ml-[40px]">
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            architecto quod illum reiciendis et nobis, rerum ipsam aliquid
            suscipit temporibus explicabo. Deserunt suscipit eveniet totam
            delectus facilis natus? Magnam, quae?
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            architecto quod illum reiciendis et nobis, rerum ipsam aliquid
            suscipit temporibus explicabo. Deserunt suscipit eveniet totam
            delectus facilis natus? Magnam, quae?
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            architecto quod illum reiciendis et nobis, rerum ipsam aliquid
            suscipit temporibus explicabo. Deserunt suscipit eveniet totam
            delectus facilis natus? Magnam, quae?
          </Text>
        </div> */}
      </div>
    </>
  );
}

export default HomeAbout;
