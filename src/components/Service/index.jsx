import { useState } from "react";
import clsx from "clsx";

import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";

import {
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
  DonateModalBlock,
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
} from "./styles";

const donatePlan = [
  {
    title: "喵星人之友",
    amount: 600,
    contributors: 9957,
  },
  {
    title: "喵星大使",
    amount: 6000,
    contributors: 2000,
  },
  {
    title: "喵星傳奇",
    amount: 600000,
    contributors: 999,
  },
];

const Service = () => {
  const [isOpenDonateModal, setIsOpenDonateModal] = useState(false);
  const [isOpenServiceModal, setIsOpenServiceModal] = useState(false);
  const [isShowDonationCompleted, setIsShowDonationCompleted] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const getDonateModalContent = (
    <DonateModalBlock className={clsx({ "-result": isShowDonationCompleted })}>
      <VisualBlock>
        <div>
          <VisualBlockTitle>
            您的小筆捐款
            <br />
            是每隻毛孩未來的大大動力！
          </VisualBlockTitle>
          <DonateTitle>目前小額贊助總金額</DonateTitle>
          <Amount>987,655,873</Amount>
        </div>
        <VisualImage>
          <img
            alt="小額捐款"
            src={
              new URL("/src/assets/service/donate.svg", import.meta.url).href
            }
          />
        </VisualImage>
      </VisualBlock>
      <div>
        {isShowDonationCompleted && (
          <SuccessBlock>
            <SuccessTitle>感謝您的捐款</SuccessTitle>
            <img
              src={
                new URL("/src/assets/service/success.svg", import.meta.url).href
              }
            />
            <CloseButton
              onClick={() => {
                setIsOpenDonateModal(false);
                setIsShowDonationCompleted(false);
              }}
            >
              關閉
            </CloseButton>
          </SuccessBlock>
        )}
        {!isShowDonationCompleted && (
          <>
            <DonatePlan>捐款方案</DonatePlan>
            {donatePlan.map((plan) => (
              <PlanBlock
                key={plan.title}
                onClick={() => setCurrentPlan(plan.title)}
                className={clsx({ "-active": currentPlan === plan.title })}
              >
                <PlanTitle>{plan.title}</PlanTitle>
                <AmountBlock>
                  <PlanAmount>{plan.amount}</PlanAmount>
                  <PlanContributors>{plan.contributors}</PlanContributors>
                </AmountBlock>
              </PlanBlock>
            ))}
            <PlanBlock
              className={clsx("-custom", {
                "-active": currentPlan === "custom",
              })}
              onClick={() => setCurrentPlan("custom")}
            >
              <PlanTitle>自訂贊助金額</PlanTitle>
              <InputBlock>
                <Input type="number" placeholder="輸入金額"></Input>
              </InputBlock>
            </PlanBlock>
            <ModalButton onClick={() => setIsShowDonationCompleted(true)}>
              前往捐款
            </ModalButton>
          </>
        )}
      </div>
    </DonateModalBlock>
  );

  const getServiceModalContent = () => {
    return <div>test</div>;
  };
  return (
    <Wrapper id="service">
      <ItemWrapper>
        <ItemBlock className="-donate">
          <Title>小額支持喵喵</Title>
          <Description>您的小筆捐款，是每隻毛孩未來的大大動力！</Description>
          <ButtonBlock>
            <div>
              <Button
                onClick={() => {
                  setIsOpenDonateModal(true);
                }}
              >
                小額捐款
              </Button>
            </div>
            <img
              alt="小額捐款"
              src={
                new URL("/src/assets/service/donate.svg", import.meta.url).href
              }
            />
          </ButtonBlock>
        </ItemBlock>
        <ItemBlock>
          <Title>民眾服務信箱</Title>
          <Description>
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
          </Description>
          <ButtonBlock>
            <div
              onClick={() => {
                setIsOpenServiceModal(true);
              }}
            >
              <Button>填寫表單</Button>
            </div>
            <img
              src={
                new URL("/src/assets/service/email.svg", import.meta.url).href
              }
            />
          </ButtonBlock>
        </ItemBlock>
      </ItemWrapper>
      <SloganBlock>
        <Slogan>
          台灣的明天 <BreakElement />
          喵先鋪路
        </Slogan>
        <Name>
          <Number>3</Number>
          <Text>喵立翰 Miao Li-Han</Text>
        </Name>
      </SloganBlock>
      <Modal
        isShow={isOpenDonateModal}
        setIsShow={setIsOpenDonateModal}
        title="小額捐款"
        content={getDonateModalContent}
      />
      <Modal
        isShow={isOpenServiceModal}
        setIsShow={setIsOpenServiceModal}
        title="民眾服務信箱"
        content={getServiceModalContent}
      />
    </Wrapper>
  );
};

export { Service };
