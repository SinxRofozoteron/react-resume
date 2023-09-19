import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import type { MouseEventHandler, ReactNode } from 'react';

type ShowProps = {
  $show: boolean;
};
export type ModalProps = {
  onCloseClick: MouseEventHandler<HTMLElement>;
  className?: 'modal';
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  children: ReactNode;
  show: boolean;
};

const Background = styled.div<ShowProps>`
  z-index: 199;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => {
    if (theme.id === 'dark') {
      return transparentize(0.2, theme.primaryColor);
    } else {
      return transparentize(0.2, theme.fourthColor);
    }
  }};
`;

const ModalContainer = styled.div.attrs(() => ({
  className: 'modal'
}))<ShowProps>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  ${({ theme }) => css`
    background-color: ${theme.id === 'light' ? theme.secondaryColor : theme.thirdColor};
  `}
  width: 80%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

export const Modal = ({
  show,
  onCloseClick,
  className,
  children,
  ...props
}: ModalProps) => {
  return (
    <>
      <Background $show={show} onClick={onCloseClick} />
      <ModalContainer
        $show={show}
        className={className}
        aria-labelledby={props['aria-labelledby']}
        aria-describedby={props['aria-describedby']}>
        {children}
      </ModalContainer>
    </>
  );
};
