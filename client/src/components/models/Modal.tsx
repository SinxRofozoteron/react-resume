import { FC } from "react";
import styled, { css } from "styled-components";

interface ShowProps {
  show: boolean;
}
export interface ModalProps extends ShowProps {
  onBackgroundClick: React.MouseEventHandler<HTMLDivElement>;
}

const Background = styled.div<ShowProps>`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div<ShowProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  ${({ theme }) => css`
    background-color: ${theme.secondaryColor};
    border-radius: ${theme.borderRadius};
  `}
  position: fixed;
  padding: 10px;
  top: 70px;
  right: 80px;
  min-width: 15rem;
  z-index: 100;
`;

export const Modal: FC<ModalProps> = ({ show, children, onBackgroundClick }) => {
  return (
    <>
      <Background show={show} onClick={onBackgroundClick} />
      <ModalContainer show={show} >{children}</ModalContainer>
    </>
  );
};
