import styled from "styled-components";

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
`;

const TopEventBlock = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 24px;
`;

const TopEventImage = styled.div`
  margin-bottom: 16px;
  > img {
    width: 100%;
  }
`;

const TopEventTitle = styled.div`
  margin-bottom: 8px;
  color: var(--color-text-primary-700);
  ${H5HeadingTitle};
`;

const Date = styled.div`
  ${SmallText};
  margin-bottom: 8px;
  color: var(--color-text-primary-500);
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
  width: 50%;
  flex-shrink: 0;
  overflow: hidden;
  /* TODO: 圖片還沒弄好 */
  > img {
    /* border: solid 1px red; */
    height: 100%;
    object-fit: cover;
  }
`;

const OtherEventTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  TopDescription,
  OtherEventBlock,
  OtherEventImage,
  OtherEventTextBlock,
  OtherEventTitle,
  OtherEventDescription,
  ButtonBlock,
};
