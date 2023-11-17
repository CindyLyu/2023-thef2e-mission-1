import { Label } from "@/components/Label";
import { Title } from "@/components/Title";

import {
  Wrapper,
  Content,
  TextBlock,
  SubTitle,
  HighlightText,
  Description,
  Image,
} from "./styles.js";

const Advocate = () => {
  return (
    <Wrapper id="advocate">
      <Content>
        <TextBlock>
          <Label>ADVOCATE</Label>
          <Title>候選人主張</Title>
          <SubTitle>
            我堅信 ! 藉由推動更完善的<HighlightText>貓咪福利</HighlightText>
            和相關政策，更是間接地投資於
            <HighlightText>台灣的未來</HighlightText>。
          </SubTitle>
          <Description>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </Description>
        </TextBlock>
        <Image>
          <img
            src={
              new URL("/src/assets/advocate/image.png", import.meta.url).href
            }
            alt="候選人主張"
          />
        </Image>
      </Content>
    </Wrapper>
  );
};

export { Advocate };
