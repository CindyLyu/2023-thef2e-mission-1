import styled from "styled-components";

import { Wrapper as ButtonWrapper } from "@/components/Button/styles";

import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  padding: 64px 16px;
  background-color: #fff;

  @media ${device.tablet} {
    display: flex;
    padding: 60px 36px;

    gap: 24px;
    justify-content: center;
    > div {
      width: 50%;
      max-width: 648px;
    }
  }

  @media ${device.desktop} {
    padding: 40px;
  }
`;

const ItemBlock = styled.div`
  border-radius: 32px;
  padding: 40px 24px;
  color: #fff;

  background-color: var(--color-text-primary-700);

  &.-donate {
    background-color: var(--color-primary-theme-1);
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media ${device.tablet} {
      margin-bottom: 0;
    }
  }

  @media ${device.desktop} {
    padding: 96px;
  }
`;

const Title = styled.div`
  font-family: Mantou Sans;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: normal;
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 8px;
  height: 126px;
  align-items: center;
  justify-content: center;
  > img {
    width: 135px;
  }

  ${ButtonWrapper} {
    flex-shrink: 0;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    /* TODO: 圖片蓋到字 */
    > img {
      width: 224px;
    }
  }
`;

export { Wrapper, ItemBlock, Title, Description, ButtonBlock };
