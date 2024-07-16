import Image from "../../assets/retangulo-1.svg";

function Rectangle({ className }) {
  return (
    <img
      src={Image}
      alt="Imagem de fundo"
      className={`absolute -z-10 ${className}`}
    />
  );
}

export default Rectangle;
