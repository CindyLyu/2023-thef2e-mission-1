import styled from "styled-components";

import {
  H4HeadingTitle,
  NormalText,
  BaseText,
  H3HeadingTitle,
} from "@/globalStyle";

import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  background-color: var(--color-bg-theme-2);
  padding: 64px 16px;
  @media ${device.tablet} {
    padding: 64px 36px;
  }
`;

const Content = styled.div`
  border-radius: 24px;
  background-color: #fff;
  @media ${device.desktop} {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex: 1 1 50%;
    margin: 0 auto;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 0;
  @media ${device.desktop} {
    padding: 64px 40px;
  }
`;

const SubTitle = styled.div`
  ${H4HeadingTitle};
  color: var(--color-text-primary-700);
  margin-bottom: 32px;

  @media ${device.desktop} {
    ${H3HeadingTitle};
  }
`;

const HighlightText = styled.span`
  color: var(--color-primary-theme-1);
`;

const Description = styled.div`
  ${NormalText};
  color: var(--color-text-primary-700);
  margin-bottom: 40px;
  @media ${device.desktop} {
    margin-bottom: 0;
    ${BaseText};
  }
`;

const Image = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  > img {
    display: block;
    width: 100%;
  }

  @media ${device.desktop} {
    width: 50%;
    border-radius: 0 24px 24px 0;
    > img {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export {
  Wrapper,
  Content,
  TextBlock,
  SubTitle,
  HighlightText,
  Description,
  Image,
};
