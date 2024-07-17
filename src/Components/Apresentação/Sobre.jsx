import Line from "../Line";
import Text from "../Text";
import Title from "../Title";

function Sobre() {
  return (
    <>
      <Title title={"2"}>Sobre mim</Title>
      <Line />
      <div className="md:grid grid-cols-[1fr_auto_1fr] md:gap-[20px]">
        <div className="grid gap-7 md:w-[90%]">
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
        </div>

        <div className="hidden md:block">
          <Line direction={"vertical"} />
        </div>

        <div className="block md:hidden">
          <Line direction={"horizontal"} className={"mb-12 mt-12"} />
        </div>

        <div className="grid gap-7 md:w-[85%] md:ml-[40px]">
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
        </div>
      </div>
    </>
  );
}

export default Sobre;
