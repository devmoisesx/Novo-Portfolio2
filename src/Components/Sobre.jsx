import Button from "./Button";
import Line from "./Line";
import Photo from "./Photo";
import Social from "./Social";
import Text from "./Text";
import Title from "./Title";

function Sobre() {
  return (
    <>
      <Title title={"2"}>Sobre mim</Title>
      <Line />
      <div className="grid grid-cols-[1fr_auto_1fr] gap-[20px]">
        <div className="grid gap-[50px] gap w-[90%]">
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

        <Line direction={"vertical"} />

        <div className="grid gap-[50px] w-[90%] ml-[50px]">
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
