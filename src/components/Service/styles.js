import styled from "styled-components";
import { Wrapper as ButtonWrapper } from "@/components/Button/styles";
import { device } from "@/utils/breakpoints";
import { BigText, font, H4HeadingTitle } from "@/globalStyle";

const Wrapper = styled.div`
  padding: 64px 16px;
  background-color: #fff;

  @media ${device.desktop} {
    padding: 40px;
    margin-bottom: 64px;
  }
`;

const ItemWrapper = styled.div`
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
    padding: 0 36px;
    margin-bottom: 208px;
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

  & ~ & {
    margin-top: 24px;
    @media ${device.tablet} {
      margin-top: 0;
    }
  }

  @media ${device.desktop} {
    padding: 96px;
  }

  &:last-child {
    margin-bottom: 168px;
    @media ${device.tablet} {
      margin-bottom: 0;
    }
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

  @media ${device.tablet} {
    justify-content: space-around;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    height: 241px;
    > img {
      width: auto;
    }
  }
`;

const Name = styled.div`
  display: inline-flex;
  gap: 16px;
  padding: 12px 16px;
  margin-bottom: 40px;
  align-items: center;
  @media ${device.tablet} {
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    border: solid 1px #fff;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const SloganBlock = styled.div`
  text-align: center;
`;

const Slogan = styled.div`
  ${BigText};
  ${font({ color: "var(--color-primary-gradient)" })};
  line-height: 54.6px;
  letter-spacing: 2px;
  margin-bottom: 24px;

  @media ${device.desktop} {
    font-size: 64px;
    line-height: 96px;
    margin-bottom: 16px;
  }
`;

const BreakElement = styled.br`
  @media ${device.desktop} {
    display: none;
    &:after {
      content: " ";
      display: inline-block;
      width: 100%;
    }
  }
`;

const Number = styled.div`
  background: var(--color-primary-gradient);
  border-radius: 100%;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  width: 33px;
  height: 33px;
  text-align: center;
  line-height: 33px;
  @media ${device.desktop} {
    font-size: 32px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
`;

const Text = styled.div`
  color: var(--color-primary-theme-1);
  ${H4HeadingTitle};

  @media ${device.desktop} {
    font-size: 40px;
  }
`;

export {
  Wrapper,
  ItemWrapper,
  ItemBlock,
  Title,
  Description,
  ButtonBlock,
  SloganBlock,
  Slogan,
  BreakElement,
  Name,
  Number,
  Text,
};
