import Image from "../../assets/retangulo-3.svg";

function Rectangle_2({ className }) {
  return (
    <img
      src={Image}
      alt="Imagem de fundo"
      className={`absolute -z-10 ${className}`}
    />
  );
}

export default Rectangle_2;
