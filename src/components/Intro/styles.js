import styled from "styled-components";

import { BigText, font, H5HeadingTitle, H3HeadingTitle } from "@/globalStyle";

import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 99px;
  }

  @media ${device.desktop} {
    margin-top: 180px;
  }
`;

const Title = styled.div`
  ${font({ color: "var(--color-primary-gradient)" })}
  ${BigText};
  text-align: center;
  line-height: 54.6px;
  margin-bottom: 16px;
  &.-desktop {
    display: none;
    font-size: 96px;
    line-height: 101px;
    @media ${device.desktop} {
      display: block;
    }
  }

  &.-mobile {
    @media ${device.desktop} {
      display: none;
    }
  }
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.div`
  border-radius: 16px;
  background: var(--color-text-primary-700);
  ${H5HeadingTitle};
  color: #fff;
  padding: 12px 16px;
  white-space: nowrap;

  @media ${device.desktop} {
    font-size: 28px;
  }
`;

const Name = styled.div`
  display: inline-flex;
  box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.2);
  border: solid 1px #fff;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  gap: 16px;
  padding: 12px 16px;
  margin-bottom: 16px;
  align-items: center;
  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

const Number = styled.div`
  background: var(--color-primary-gradient);
  border-radius: 100%;
  color: #fff;
  font-size: 25.5px;
  font-weight: 900;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  @media ${device.desktop} {
    font-size: 32px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
`;

const Text = styled.div`
  ${H3HeadingTitle};
  color: var(--color-primary-theme-1);

  @media ${device.desktop} {
    font-size: 40px;
  }
`;

const BackgroundImageBlock = styled.div`
  width: 327px;
  position: relative;
  > img {
    display: block;
    width: 100%;
  }

  @media ${device.tablet} {
    width: 343px;
  }

  @media ${device.desktop} {
    width: 723px;
  }
`;

const SocialMediaBlock = styled.div`
  display: flex;
  gap: 16px;
  background-color: #fff;
  padding: 8px 40px;
  position: absolute;
  bottom: 21px;
  border-radius: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  left: 50%;
  transform: translateX(-50%);
  > img {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const Marquee = styled.div`
  padding: 10px 0;
  background: var(--color-primary-theme-1);
  width: 100vw;
  display: flex;
  white-space: nowrap;
`;

const MarqueeText = styled.div`
  color: #fff;
  ${BigText};
  font-size: 40px;
  letter-spacing: 2px;
  line-height: 42px;
  &:after {
    content: " ";
    white-space: pre;
  }

  @media ${device.desktop} {
    font-size: 64px;
    line-height: 67px;
  }
`;

export {
  Wrapper,
  Title,
  NameBlock,
  SubTitle,
  Name,
  Number,
  Text,
  BackgroundImageBlock,
  SocialMediaBlock,
  Marquee,
  MarqueeText,
};
