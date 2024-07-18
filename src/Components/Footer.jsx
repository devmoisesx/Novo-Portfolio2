import Text from "./Text/Text";

function Footer() {
  return (
    <footer className="grid justify-center items-center pt-[170px] pb-[20px] text-center">
      <Text className={"!text-center opacity-50"}>Contato</Text>
      <Text className={"!text-blue-500 !text-center"}>
        <a href="https://www.linkedin.com/in/moises-xavier" target="_Blank">
          Linkedin
        </a>
      </Text>
      <Text className="mt-[10px] opacity-50">Moisés Xavier. 2024</Text>
    </footer>
  );
}

export default Footer;
