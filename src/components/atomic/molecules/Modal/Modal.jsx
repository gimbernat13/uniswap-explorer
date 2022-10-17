import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import * as Styled from "./styles";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };
  const animatedItem = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  if (display) {
    return ReactDOM.createPortal(
      <Styled.ModalWrapper>
        <Styled.ModalBackdrop onClick={close} />
        <Styled.ModalBox variants={animatedItem}>
          {props.children}
        </Styled.ModalBox>
      </Styled.ModalWrapper>,
      document.getElementById("modal-root")
    );
  }

  return null;
});

export default Modal;
