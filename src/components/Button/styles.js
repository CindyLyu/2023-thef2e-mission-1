import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 500px;
  padding: 16px 24px;
  min-width: 104px;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  background-color: #fff;
  color: var(--color-text-primary-700);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &.-blue {
    background-color: var(--color-text-primary-100);
    color: var(--color-text-primary-700);
  }

  &:after {
    content: "";
    background-image: url("/src/assets/events/arrow.svg");
    width: 22px;
    height: 22px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export { Wrapper };
