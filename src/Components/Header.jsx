import { Link } from "react-scroll";
import { Link as Link2, useLocation } from "react-router-dom";
import Button from "./Buttons/Button";

function Header() {
  const location = useLocation();

  return (
    <header className="w-screen max-w-6xl p-2 md:pr-6 lg:pr-0 fixed z-50">
      <div className=" flex justify-between items-center h-[50px] px-2 py-2 rounded-full bg-[rgba(114,114,114,0.5)] backdrop-blur-md ">
        {location.pathname !== "/" ? (
          <Link2 to="/">
            <span className="font-normal text-[16px] flex justify-center text-center py-[5px] px-[12px] rounded-full bg-bgButton hover:bg-bgButtonHover active:bg-bgButtonActive transition duration-500 ease select-none active:duration-150 focus:outline-none focus:shadow-outline cursor-pointer">
              M
            </span>
          </Link2>
        ) : (
          <Link to="homeHero" smooth={true} offset={0} duration={500}>
            <span className="font-normal text-[16px] flex justify-center text-center py-[5px] px-[12px] rounded-full bg-bgButton hover:bg-bgButtonHover active:bg-bgButtonActive transition duration-500 ease select-none active:duration-150 focus:outline-none focus:shadow-outline cursor-pointer">
              M
            </span>
          </Link>
        )}
        <Link to={"/"}></Link>

        <nav className="flex gap-2">
          {location.pathname !== "/" ? (
            <Link2 to="/">
              <Button>Inicio</Button>
            </Link2>
          ) : (
            <Link to="homeHero" smooth={true} offset={0} duration={500}>
              <Button>Inicio</Button>
            </Link>
          )}
          {location.pathname !== "/" ? (
            <Link2 to="/#homeProjects">
              <Button>Projetos</Button>
            </Link2>
          ) : (
            <Link to="homeProjects" smooth={true} offset={-100} duration={500}>
              <Button>Projetos</Button>
            </Link>
          )}
          {location.pathname !== "/" ? (
            <Link2 to="/#homeAbout">
              <Button>Sobre</Button>
            </Link2>
          ) : (
            <Link to="homeAbout" smooth={true} offset={-100} duration={500}>
              <Button>Sobre</Button>
            </Link>
          )}
        </nav>
        {/* <Button
          className={
            "w-[34px] h-full active:w-[28px] active:h-[28px] px-0 md:hidden"
          }
        >
          =
        </Button> */}
      </div>
    </header>
  );
}

export default Header;
