import styled from "styled-components";

import { device } from "@/utils/breakpoints";

import { font } from "@/globalStyle";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  justify-content: space-around;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-top: solid 1px var(--color-text-primary-50);
  z-index: 1;
`;

const Item = styled.div`
  padding: 12px 0 16px;
  ${font({ color: "var(--color-text-primary-700)", size: "10px" })};
  > img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }

  @media ${device.desktop} {
    display: none;
  }
`;

export { Wrapper, Item };
