import { handleAnchorPageScroll } from "@/libs/handleAnchorPageScroll";
import { Wrapper, Item } from "./styles";

const Navigation = ({ item = [] }) => {
  return (
    <Wrapper>
      {item &&
        item.map((i) => (
          <Item
            key={i.name}
            onClick={() => {
              handleAnchorPageScroll({ id: `#${i.id}` });
            }}
          >
            <img src={i.icon} />
            <div>{i.name}</div>
          </Item>
        ))}
    </Wrapper>
  );
};

export { Navigation };
