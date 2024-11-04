import { createPortal } from "react-dom";
import { backdropStyle, modalContainer, modalTextStyle } from "./Modal.style";

const portalElement = document.getElementById("modal");

const Modal = ({ time, closeModal }) => {
  return createPortal(
    <>
      <div css={backdropStyle} onClick={closeModal} />
      <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
        <span css={modalTextStyle}>걸린시간 : {time}</span>
      </div>
    </>,
    portalElement
  );
};

export default Modal;
