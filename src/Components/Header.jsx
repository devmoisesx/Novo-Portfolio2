import Button from "./Button";

function Header() {
  return (
    <header className="w-full flex justify-center align-middle pt-4 fixed z-50">
      <div className="w-[650px] flex justify-between align-middle py-1 px-3 rounded-full bg-[rgba(114,114,114,0.5)] backdrop-blur-md">
        <span className="font-normal text-[16px] flex justify-center text-center py-[5px] px-[12px] rounded-full bg-gradient-to-t from-gBlack to-gGray">
          M
        </span>
        <nav className="flex align-middle gap-2">
          <Button>Inicio</Button>
          <Button>Batata</Button>
          <Button>Batata</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
