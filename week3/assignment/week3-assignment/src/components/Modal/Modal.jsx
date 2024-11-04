import { createPortal } from "react-dom";
import {
  backdropStyle,
  buttonStyle,
  modalContainer,
  modalTextStyle,
} from "./Modal.style";
import { Button } from "@components";

const portalElement = document.getElementById("modal");

const Modal = ({ time, closeModal }) => {
  return createPortal(
    <>
      <div css={backdropStyle} onClick={closeModal} />
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <span css={modalTextStyle}>걸린시간 : {time}</span>
        <Button variant="tab" onClick={closeModal} customStyle={buttonStyle}>
          확인
        </Button>
      </div>
    </>,
    portalElement
  );
};

export default Modal;
