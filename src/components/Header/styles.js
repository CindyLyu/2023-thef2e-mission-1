import styled from "styled-components";

import { H4HeadingTitle, BaseText } from "@/globalStyle";

import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  padding: 13px 16px;
  gap: 8px;
  z-index: 1;

  @media ${device.tablet} {
    width: 100vw;
    border-radius: 16px;
    max-width: calc(100% - 24px - 16px);
    top: 16px;
    left: 24px;
    position: fixed;
    padding: 12px 24px;
  }
`;

const Title = styled.div`
  ${H4HeadingTitle};
  font-size: 20px;
  color: var(--color-primary-theme-1);

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const SocialIconBlock = styled.div`
  display: none;

  > img {
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin: 0 0 0 auto;
    display: flex;
    gap: 16px;
  }
`;

const ItemBlock = styled.div`
  display: none;
  @media ${device.desktop} {
    display: flex;
    gap: 16px;
    margin: 0 0 0 auto;
  }
`;

const Item = styled.div`
  ${BaseText};
  color: var(--color-text-primary-700);
  cursor: pointer;
  padding: 8px;
`;

export { Wrapper, Title, SocialIconBlock, ItemBlock, Item };
