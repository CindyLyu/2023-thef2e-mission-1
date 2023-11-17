import styled from "styled-components";
import {
  H3HeadingTitle,
  SmallText,
  H4HeadingTitle,
  NormalText,
} from "@/globalStyle";
import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  /* NOTE: 132 是因為 64 + 68 navigation 的高度 */
  padding: 64px 16px 132px;
  background-color: var(--color-bg-theme-2);
  color: var(--color-text-primary-700);

  @media ${device.desktop} {
    padding-bottom: 64px;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    > * {
      width: 676px;
    }
  }
`;

const Name = styled.div`
  display: inline-flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

const Number = styled.div`
  background: var(--color-primary-gradient);
  border-radius: 100%;
  color: #fff;
  font-size: 20.5px;
  font-weight: 900;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`;

const Text = styled.div`
  color: var(--color-primary-theme-1);
  ${H3HeadingTitle};
`;

const SocialBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: #fff;
  padding: 14px 10px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    max-width: 28px;
  }
`;

const Copyright = styled.div`
  ${SmallText};
  margin-bottom: 24px;
`;

const CompanyName = styled.div`
  ${H4HeadingTitle};
  margin-bottom: 16px;
`;

const CompanyDetailInfo = styled.div`
  ${NormalText};
`;

export {
  Wrapper,
  Name,
  Number,
  Text,
  SocialBlock,
  Icon,
  Copyright,
  CompanyName,
  CompanyDetailInfo,
};
