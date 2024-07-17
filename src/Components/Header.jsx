import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="w-screen max-w-6xl p-2 md:pr-6 lg:pr-0 fixed z-50">
      <div className=" flex justify-between items-center h-[50px] px-2 py-2 rounded-full bg-[rgba(114,114,114,0.5)] backdrop-blur-md ">
        <Link to={"/"}>
          <span className="font-normal text-[16px] flex justify-center text-center py-[5px] px-[12px] rounded-full bg-gradient-to-t from-gBlack to-gGray">
            M
          </span>
        </Link>

        <nav className="hidden md:flex gap-2">
          <Link to={"/"}>
            <Button>Inicio</Button>
          </Link>
          <Link to={"/"}>
            <Button>Inicio</Button>
          </Link>
          <Link to={"/"}>
            <Button>Inicio</Button>
          </Link>
        </nav>
        <Button
          className={
            "w-[34px] h-full active:w-[28px] active:h-[28px] px-0 md:hidden"
          }
        >
          =
        </Button>
      </div>
    </header>
  );
}

export default Header;
