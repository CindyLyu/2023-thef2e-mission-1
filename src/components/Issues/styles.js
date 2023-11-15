import styled from "styled-components";

import { H4HeadingTitle } from "@/globalStyle";

import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  padding: 64px 16px;
  background-color: #fff;
`;

const TopBlock = styled.div`
  text-align: center;
`;

const IssueBlock = styled.div`
  gap: 64px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    gap: 64px 24px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${device.desktop} {
    gap: 64px;
  }
`;

const IssueItem = styled.div`
  /* TODO: 單項目要靠左 */
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;

  @media ${device.tablet} {
    max-width: 323px;
  }

  @media ${device.desktop} {
    max-width: 365px;
  }
`;

const IssueTitle = styled.div`
  ${H4HeadingTitle};
  color: var(--color-text-primary-700);
`;

export { Wrapper, TopBlock, IssueBlock, IssueItem, IssueTitle };
