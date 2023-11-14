import { Label } from "@/components/Label";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

import {
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
} from "./styles";

const otherEvents = [
  {
    date: "2023/12/24",
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    description:
      "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
    image: new URL("/src/assets/events/cover.png", import.meta.url).href,
  },
  {
    date: "2023/12/20",
    title: "收容所模特兒大比拼！",
    description:
      "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    image: new URL("/src/assets/events/cover2.png", import.meta.url).href,
  },
  {
    date: "2023/12/26",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    description:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
    image: new URL("/src/assets/events/cover3.png", import.meta.url).href,
  },
];

const Events = () => {
  return (
    <Wrapper>
      <Label>LATEST EVENTS</Label>
      <Title>最新活動</Title>
      <TopEventBlock>
        <TopEventImage>
          <img
            src={new URL("/src/assets/events/intro .png", import.meta.url).href}
            alt="最新活動"
          />
        </TopEventImage>
        <Date>2023/12/26</Date>
        <TopEventTitle>參與台北寵物論壇，爭取貓咪友善環境</TopEventTitle>
        <TopDescription>
          炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
          VIP 休憩空間。
        </TopDescription>
      </TopEventBlock>
      {otherEvents.map((event) => (
        <OtherEventBlock key={event.title}>
          <OtherEventImage>
            <img src={event.image} alt={event.title} />
          </OtherEventImage>
          <OtherEventTextBlock>
            <Date>{event.date}</Date>
            <OtherEventTitle>{event.title}</OtherEventTitle>
            <OtherEventDescription>{event.description}</OtherEventDescription>
          </OtherEventTextBlock>
        </OtherEventBlock>
      ))}
      <ButtonBlock>
        <Button className="-blue">查看更多</Button>
      </ButtonBlock>
    </Wrapper>
  );
};

export { Events };
