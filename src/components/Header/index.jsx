import { handleAnchorPageScroll } from "@/libs/handleAnchorPageScroll";
import { Wrapper, Title, SocialIconBlock, ItemBlock, Item } from "./styles";

const Header = ({ item = [] }) => {
  return (
    <Wrapper id="header">
      <img src="favicon.svg" />
      <Title>喵立翰 Miao Li-Han</Title>
      <ItemBlock>
        {item &&
          item.map((i) => (
            <Item
              key={i.name}
              onClick={() => {
                handleAnchorPageScroll({ id: `#${i.id}` });
              }}
            >
              {i.alias || i.name}
            </Item>
          ))}
      </ItemBlock>
      <SocialIconBlock>
        <img
          src={
            new URL("/src/assets/socialMedia/facebook.svg", import.meta.url)
              .href
          }
        />
        <img
          src={
            new URL("/src/assets/socialMedia/instagram.svg", import.meta.url)
              .href
          }
        />
        <img
          src={
            new URL("/src/assets/socialMedia/youtube.svg", import.meta.url).href
          }
        />
      </SocialIconBlock>
    </Wrapper>
  );
};

export { Header };
