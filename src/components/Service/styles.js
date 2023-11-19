import styled from "styled-components";
import { Wrapper as ButtonWrapper } from "@/components/Button/styles";
import { device } from "@/utils/breakpoints";
import {
  BigText,
  font,
  H4HeadingTitle,
  H6HeadingTitle,
  H5HeadingTitle,
  SmallText,
  NormalText,
  H1HeadingTitle,
  H2HeadingTitle,
  H3HeadingTitle,
  BaseText,
} from "@/globalStyle";

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

const ModalBlock = styled.div`
  @media ${device.desktop} {
    display: flex;
    gap: 32px;
    > * {
      width: 50%;
    }

    &.-result {
      align-items: center;
    }
  }
`;

const VisualBlock = styled.div`
  padding: 24px;
  background-color: var(--color-bg-theme-2);
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media ${device.desktop} {
    display: block;
    padding: 60px;
    flex-shrink: 0;
  }
`;

const ServiceVisualBlock = styled(VisualBlock)`
  background-color: #e3f8ff;
  padding: 0;
  align-items: flex-start;
`;

const VisualBlockTitle = styled.div`
  ${H6HeadingTitle};
  color: var(--color-primary-theme-1);
  margin-bottom: 16px;

  &.-service {
    color: var(--color-text-primary-700);
    padding: 24px 0 0 24px;
  }

  @media ${device.desktop} {
    &.-service {
      padding: 64px 60px 0;
    }
    ${H1HeadingTitle};
  }
`;

const DonateTitle = styled.div`
  ${SmallText};
  color: var(--color-text-primary-700);
  @media ${device.desktop} {
    ${NormalText};
  }
`;

const Amount = styled.div`
  ${H5HeadingTitle};
  color: var(--color-text-primary-700);
  @media ${device.dekstop} {
    ${H2HeadingTitle};
  }
`;

const VisualImage = styled.div`
  max-width: 95px;
  > img {
    width: 100%;
  }

  &.-service {
    max-width: 206px;
    margin: 0;
  }

  @media ${device.desktop} {
    max-width: 336px;
    margin: 0 auto;

    &.-service {
      max-width: none;
    }
  }
`;

const DonatePlan = styled.div`
  ${H5HeadingTitle};
  color: var(--color-text-primary-700);
  margin-bottom: 16px;
`;

const PlanBlock = styled.div`
  cursor: pointer;
  padding: 24px 12px;
  border-radius: 16px;
  border: solid 2px var(--color-text-primary-200);
  transition: border 0.3s;
  & ~ & {
    margin-top: 16px;
  }

  &.-active {
    border: solid 2px var(--color-primary-theme-1);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border: solid 2px var(--color-primary-theme-1);
    }
  }

  @media ${device.desktop} {
    &:not(.-custom) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const AmountBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.desktop} {
    gap: 39px;
  }
`;

const PlanTitle = styled.div`
  color: var(--color-primary-theme-1);
  ${H5HeadingTitle};
  margin-bottom: 8.5px;

  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;

const PlanAmount = styled.div`
  ${H4HeadingTitle};
  color: var(--color-text-primary-700);
  &:before {
    content: "NT$";
    ${NormalText};
    margin-right: 9px;
  }
`;

const PlanContributors = styled.div`
  ${SmallText};
  color: var(--color-text-primary-500);
  &:before {
    content: "已有 ";
  }
  &:after {
    content: " 人贊助";
  }
`;

const InputBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    content: "NT$";
    position: absolute;
    left: 15px;
    ${NormalText};
    color: var(--color-text-primary-700);
  }
`;

const Input = styled.input`
  border-radius: 8px;
  background-color: var(--color-text-primary-100);
  padding: 16px 15px;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }

  // TODO: 字體變大好像變得沒對齊
  &::placeholder {
    ${BaseText};
    color: var(--color-text-primary-500);
  }

  &.-donate {
    padding: 16px 15px 16px 58px;
  }
`;

const ModalButton = styled.div`
  margin-top: 16px;
  width: 100%;
  padding: 24px 32px;
  background-color: var(--color-primary-theme-1);
  color: #fff;
  border-radius: 500px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const SuccessTitle = styled.div`
  ${H3HeadingTitle};
  color: var(--color-text-primary-700);
`;

const CloseButton = styled.div`
  border-radius: 500px;
  background-color: var(--color-text-primary-100);
  color: var(--color-text-primary-700);
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  text-align: center;
  width: 224px;
  margin: 0 auto;
  cursor: pointer;
`;

const SuccessBlock = styled.div`
  text-align: center;
  > * ~ * {
    margin-top: 32px;
  }
`;

const ServiceTitle = styled.div`
  color: var(--color-text-primary-700);
  ${H5HeadingTitle};
  margin-bottom: 8px;
`;

const Textarea = styled.textarea`
  border-radius: 8px;
  background-color: var(--color-text-primary-100);
  border: none;
  width: 100%;
  padding: 16px 15px;
  height: 144px;
  &::placeholder {
    ${BaseText};
    color: var(--color-text-primary-500);
  }

  &:focus {
    outline: none;
  }
`;

const ServiceFieldBlock = styled.div`
  & ~ & {
    margin-top: 24px;
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
  ModalBlock,
  ServiceVisualBlock,
  VisualBlock,
  VisualBlockTitle,
  DonatePlan,
  DonateTitle,
  Amount,
  VisualImage,
  PlanBlock,
  AmountBlock,
  PlanTitle,
  PlanAmount,
  PlanContributors,
  InputBlock,
  Input,
  ModalButton,
  SuccessBlock,
  SuccessTitle,
  CloseButton,
  ServiceTitle,
  Textarea,
  ServiceFieldBlock,
};
