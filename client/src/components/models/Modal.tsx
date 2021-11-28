import styled, { css } from "styled-components";

import { transparentize } from "polished";

interface ShowProps {
  show: boolean;
}
export interface ModalProps extends ShowProps {
  onCloseClick: React.MouseEventHandler<HTMLDivElement>;
  className?: "modal";
}

const Background = styled.div<ShowProps>`
  z-index: 199;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => {
    if (theme.id === "dark") {
      return transparentize(0.2, theme.primaryColor);
    } else {
      return transparentize(0.2, theme.fourthColor);
    }
  }};
`;

const ModalContainer = styled.div.attrs(() => ({
  className: "modal"
})) <ShowProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  ${({ theme }) => css`
    background-color: ${theme.id === "light" ? theme.secondaryColor : theme.thirdColor};
  `}
  width: 80%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

const Modal: React.FC<ModalProps> = ({ show, children, onCloseClick, className }) => {
  return (
    <>
      <Background show={show} onClick={onCloseClick} />
      <ModalContainer show={show} className={className}>{children}</ModalContainer>
    </>
  );
};

export default Modal;
