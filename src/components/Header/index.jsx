import { Wrapper, Title, SocialIconBlock, ItemBlock, Item } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <img src="./public/favicon.svg" />
      <Title>喵立翰 Miao Li-Han</Title>
      <ItemBlock>
        <Item>候選人主張</Item>
        <Item>最新活動</Item>
        <Item>政策議題</Item>
        <Item>小額捐款</Item>
        <Item>民眾服務信箱</Item>
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
