import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
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
} from "./styles";

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

const text = [
  "為喵星人，護台灣！",
  "從喵的眼中，看見台灣",
  "喵的未來，人的希望",
];

const Intro = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const datas = gsap.utils.toArray(marqueeRef.current.children);
    horizontalLoop(datas, {
      paused: false,
      repeat: -1,
      speed: 1.25,
    });
  }, []);
  return (
    <Wrapper>
      <Title className="-desktop">台灣的明天 喵先鋪路</Title>
      <Title className="-mobile">
        台灣的明天
        <br />
        喵先鋪路
      </Title>
      <NameBlock>
        <SubTitle>2024 立委參選人</SubTitle>
        <Name>
          <Number>3</Number>
          <Text>喵立翰 Miao Li-Han</Text>
        </Name>
      </NameBlock>
      <BackgroundImageBlock>
        <img
          src={
            new URL("/src/assets/intro/background.png", import.meta.url).href
          }
        />
        <SocialMediaBlock>
          <img
            src={
              new URL("/src/assets/socialMedia/facebook.svg", import.meta.url)
                .href
            }
          />
          <img
            src={
              new URL("/src/assets/socialMedia/instagram.svg", import.meta.url)
                .href
            }
          />
          <img
            src={
              new URL("/src/assets/socialMedia/youtube.svg", import.meta.url)
                .href
            }
          />
        </SocialMediaBlock>
      </BackgroundImageBlock>
      <Marquee ref={marqueeRef}>
        {/* TODO: 要如何不寫兩個，可以自動填滿，要判斷裝置寬度？ */}
        {text.map((item) => (
          <MarqueeText key={item}>{item}</MarqueeText>
        ))}
        {text.map((item) => (
          <MarqueeText key={item}>{item}</MarqueeText>
        ))}
      </Marquee>
    </Wrapper>
  );
};

export { Intro };
