import { Button } from "@/components/Button";

import {
  Wrapper,
  ItemWrapper,
  ItemBlock,
  Title,
  Description,
  ButtonBlock,
  SloganBlock,
  Slogan,
  BreakElement,
  Name,
  Number,
  Text,
} from "./styles";

const Service = () => {
  return (
    <Wrapper>
      <ItemWrapper>
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
              src={
                new URL("/src/assets/service/email.svg", import.meta.url).href
              }
            />
          </ButtonBlock>
        </ItemBlock>
      </ItemWrapper>
      <SloganBlock>
        <Slogan>
          台灣的明天 <BreakElement />
          喵先鋪路
        </Slogan>
        <Name>
          <Number>3</Number>
          <Text>喵立翰 Miao Li-Han</Text>
        </Name>
      </SloganBlock>
    </Wrapper>
  );
};

export { Service };
