import styled from "styled-components";

import { BigText, font } from "@/globalStyle";

import { device } from "@/utils/breakpoints";

const Wrapper = styled.div`
  ${BigText};
  ${font({ color: "var(--color-primary-gradient)" })}
  margin-bottom: 32px;

  @media ${device.desktop} {
    font-size: 64px;
  }
`;
export { Wrapper };
