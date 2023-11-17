import {
  Wrapper,
  Block,
  Content,
  TitleBlock,
  Title,
  CloseButton,
} from "./styles";

const Modal = ({ title, content }) => {
  return (
    <Wrapper>
      <Block>
        <TitleBlock>
          <Title>{title}</Title>
          <CloseButton>
            <img
              src={new URL("/src/assets/modal/close.svg", import.meta.url).href}
            />
          </CloseButton>
        </TitleBlock>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Content>
      </Block>
    </Wrapper>
  );
};

export { Modal };
