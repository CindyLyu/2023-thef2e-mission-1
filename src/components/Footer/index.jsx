import {
  Wrapper,
  Name,
  Number,
  Text,
  SocialBlock,
  Icon,
  Copyright,
  CompanyName,
  CompanyDetailInfo,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Name>
          <Number>3</Number>
          <Text>喵立翰 Miao Li-Han</Text>
        </Name>
        <SocialBlock>
          <Icon>
            <img
              src={
                new URL("/src/assets/socialMedia/facebook.svg", import.meta.url)
                  .href
              }
            />
          </Icon>
          <Icon>
            <img
              src={
                new URL(
                  "/src/assets/socialMedia/instagram.svg",
                  import.meta.url
                ).href
              }
            />
          </Icon>
          <Icon>
            <img
              src={
                new URL("/src/assets/socialMedia/youtube.svg", import.meta.url)
                  .href
              }
            />
          </Icon>
        </SocialBlock>
        <Copyright>© 2023 喵立翰 Miao Li-Han 版權所有</Copyright>
      </div>
      <div>
        <CompanyName>競選總部</CompanyName>
        <CompanyDetailInfo>
          辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
          <br />
          電話：(02) 888-5678
          <br />
          電子郵件地址：meowoffice@linmeow.tw
        </CompanyDetailInfo>
      </div>
    </Wrapper>
  );
};

export { Footer };
