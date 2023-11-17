import styled from "styled-components";
import { H4HeadingTitle, H2HeadingTitle } from "@/globalStyle";
import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    position: fixed;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
    top: 0;
    left: 0;
  }
`;

const Block = styled.div`
  background-color: #fff;
  border-radius: 24px 24px 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  padding: 0 16px 16px;
  @media ${device.desktop} {
    padding: 0px 48px 48px;
    border-radius: 24px;
    width: 90%;
    height: 90%;
  }
`;

const Content = styled.div``;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  display: fixed;
  padding: 16px 0%;
  @media ${device.desktop} {
    padding-bottom: 32px;
    padding-top: 24px;
  }
`;

const Title = styled.div`
  ${H4HeadingTitle};
  color: var(--color-text-primary-700);

  @media ${device.desktop} {
    ${H2HeadingTitle};
  }
`;

const CloseButton = styled.div`
  margin-left: auto;
  cursor: pointer;
  > img {
    width: 24px;
    height: 24px;
    display: block;
    @media ${device.desktop} {
      width: 32px;
      height: 32px;
    }
  }
`;

export { Wrapper, Content, Block, TitleBlock, Title, CloseButton };
