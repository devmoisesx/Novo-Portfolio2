import HomeAbout from "../Components/Home/HomeAbout";
import HomeHero from "../Components/Home/HomeHero";
import HomeProjects from "../Components/Home/HomeProjects";
import Section from "../Components/Section";
import Rectangle from "../Components/SVGs/Rectangle";

function Home() {
  return (
    <>
      <Section
        id="homeHero"
        className="flex md:grid md:grid-cols-[60%_auto] lg:grid-cols-[auto_40%] justify-items-center items-center lg:gap-20 w-full h-[75vh] lg:h-[80vh] lg:mb-20 lg:px-16"
      >
        <HomeHero />
      </Section>

      <div className="relative w-[200%]">
        <Rectangle
          className={
            "left-[-30px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[-30px] lg:top-[-70px] md:w-[920px] lg:w-[1000px] xl:w-[1130px]"
          }
        />
      </div>
      <Section id="homeProjects" className={"h-max mb-32 md:mb-40 lg:px-16"}>
        <HomeProjects />
      </Section>

      <Section id="homeAbout" className={"h-max lg:px-16"}>
        <HomeAbout />
      </Section>
    </>
  );
}

export default Home;
