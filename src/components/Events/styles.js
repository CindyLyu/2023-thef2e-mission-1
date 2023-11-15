import styled from "styled-components";

import { device } from "@/utils/breakpoints";

import {
  SmallText,
  H5HeadingTitle,
  NormalText,
  H6HeadingTitle,
} from "@/globalStyle";

const Wrapper = styled.div`
  padding: 64px 16px;
  background-color: #fff;
  text-align: center;
  @media ${device.desktop} {
    padding: 104px 16px;
  }
`;

const TopEventBlock = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 24px;
  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;

const TopEventImage = styled.div`
  margin-bottom: 16px;
  > img {
    width: 100%;
  }

  @media ${device.desktop} {
    > img {
      max-height: 407px;
      object-fit: cover;
    }
  }
`;

const TopEventTitle = styled.div`
  margin-bottom: 8px;
  color: var(--color-text-primary-700);
  ${H5HeadingTitle};
`;

const Date = styled.div`
  ${SmallText};
  color: var(--color-text-primary-500);

  &:not(.-other) {
    margin-bottom: 8px;
  }
`;

const EventBlock = styled.div`
  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    gap: 24px;
    > div {
      max-height: 538px;
      max-width: 648px;
    }
  }
`;

const TopDescription = styled.div`
  ${NormalText};
  color: var(--color-text-primary-700);
`;

const OtherEventBlock = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
`;

const OtherEventImage = styled.div`
  max-width: 109px;
  max-height: 128px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    max-height: 104px;
  }

  @media ${device.desktop} {
    max-width: 201px;
    max-height: 134px;
  }
`;

const OtherEventTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

const OtherEventTitle = styled.div`
  ${H6HeadingTitle};
  color: var(--color-text-primary-700);
  text-align: left;
`;

const OtherEventDescription = styled.div`
  ${SmallText};
  color: var(--color-text-primary-700);
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

const ButtonBlock = styled.div`
  text-align: left;
`;

export {
  Wrapper,
  TopEventImage,
  TopEventBlock,
  TopEventTitle,
  Date,
  EventBlock,
  TopDescription,
  OtherEventBlock,
  OtherEventImage,
  OtherEventTextBlock,
  OtherEventTitle,
  OtherEventDescription,
  ButtonBlock,
};
