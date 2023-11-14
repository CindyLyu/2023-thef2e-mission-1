import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 500px;
  padding: 16px 24px;
  min-width: 104px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  &.-blue {
    background-color: var(--color-text-primary-100);
    color: var(--color-text-primary-700);
    font-size: 16px;
    font-weight: 600;
    &:after {
      content: "";
      background-image: url("/src/assets/events/arrow.svg");
      width: 20px;
      height: 20px;
      display: inline-block;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

export { Wrapper };
