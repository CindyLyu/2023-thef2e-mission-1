import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import {
  Wrapper,
  Block,
  Content,
  TitleBlock,
  Title,
  CloseButton,
} from "./styles";

const Modal = ({ title, content, isShow, setIsShow }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isShow) {
      disableBodyScroll(nodeRef.current);
    } else {
      enableBodyScroll(nodeRef.current);
    }
    return () => {
      enableBodyScroll(nodeRef.current);
    };
  }, [isShow]);

  const closeModal = (event) => {
    if (event.target.classList.contains("close")) {
      setIsShow(false);
    }
  };

  return (
    <CSSTransition
      unmountOnExit
      nodeRef={nodeRef}
      in={isShow}
      timeout={300}
      classNames="modal"
    >
      <Wrapper className="close" onClick={closeModal}>
        <Block ref={nodeRef}>
          <TitleBlock>
            <Title>{title}</Title>
            <CloseButton onClick={closeModal}>
              <img
                className="close"
                src={
                  new URL("/src/assets/modal/close.svg", import.meta.url).href
                }
              />
            </CloseButton>
          </TitleBlock>
          <Content>{content}</Content>
        </Block>
      </Wrapper>
    </CSSTransition>
  );
};

export { Modal };
