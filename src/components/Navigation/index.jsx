import { Wrapper, Item } from "./styles";

const Navigation = () => {
  return (
    <Wrapper>
      <Item>
        <img
          src={
            new URL("/src/assets/navigation/candidate.svg", import.meta.url)
              .href
          }
        />
        <div>候選人主張</div>
      </Item>
      <Item>
        <img
          src={new URL("/src/assets/navigation/news.svg", import.meta.url).href}
        />
        <div>最新活動</div>
      </Item>
      <Item>
        <img
          src={
            new URL("/src/assets/navigation/issue.svg", import.meta.url).href
          }
        />
        <div>政策議題</div>
      </Item>
      <Item>
        <img
          src={
            new URL("/src/assets/navigation/donate.svg", import.meta.url).href
          }
        />
        <div>小額捐款</div>
      </Item>
      <Item>
        <img
          src={
            new URL("/src/assets/navigation/email.svg", import.meta.url).href
          }
        />
        <div>服務信箱</div>
      </Item>
    </Wrapper>
  );
};

export { Navigation };
