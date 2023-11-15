import { Button } from "@/components/Button";

import { Wrapper, ItemBlock, Title, Description, ButtonBlock } from "./styles";

const Service = () => {
  return (
    <Wrapper>
      <ItemBlock className="-donate">
        <Title>小額支持喵喵</Title>
        <Description>您的小筆捐款，是每隻毛孩未來的大大動力！</Description>
        <ButtonBlock>
          <div>
            <Button>小額捐款</Button>
          </div>
          <img
            src={
              new URL("/src/assets/service/donate.svg", import.meta.url).href
            }
          />
        </ButtonBlock>
      </ItemBlock>
      <ItemBlock>
        <Title>民眾服務信箱</Title>
        <Description>
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
        </Description>
        <ButtonBlock>
          <div>
            <Button>填寫表單</Button>
          </div>
          <img
            src={new URL("/src/assets/service/email.svg", import.meta.url).href}
          />
        </ButtonBlock>
      </ItemBlock>
    </Wrapper>
  );
};

export { Service };
