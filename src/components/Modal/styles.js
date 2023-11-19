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
  overflow: scroll;
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  padding: 0 16px 16px 0;
  @media ${device.desktop} {
    padding: 0px 48px 48px 0;
    border-radius: 24px;
    width: 90%;
    height: 90%;
  }
`;

const Content = styled.div`
  margin-top: 68px;
  padding-left: 16px;
  @media ${device.desktop} {
    margin-top: 104px;
    padding-left: 48px;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  padding: 16px;
  @media ${device.desktop} {
    width: 90%;
    padding: 24px 48px 32px;
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
