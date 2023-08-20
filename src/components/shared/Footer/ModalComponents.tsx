import styled, { css } from 'styled-components';

import { Modal } from '../../common';

import type { MouseEventHandler } from 'react';

type ModalCloseButtonProps = {
  onClick: MouseEventHandler<HTMLElement>;
};

const StyledCloseBtn = styled.button`
  && {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px;
    font-size: 1.5rem;
    border: 1px ${({ theme }) => theme.textColor};
    border-style: none solid solid none;
    @media screen and (min-width: 620px) {
      font-size: 1.8rem;
      left: 88%;
    }
  }
`;

export const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return <StyledCloseBtn onClick={onClick}>Close</StyledCloseBtn>;
};

export const ModalHeading = styled.h4`
  margin: 0 auto;
  text-align: center;
  font-size: 1.75rem;
  @media screen and (min-width: 620px) {
    font-size: 2.25rem;
  }
`;

export const MainContainer = styled.div`
  padding: 5px 10px;
  font-size: 1.3rem;
  font-style: normal;
  svg {
    height: 1.5rem;
    width: auto;
    margin-right: 5px;
  }
  #email {
    font-size: 1rem;
    @media screen and (min-width: 300px) {
      font-size: 1.1rem;
    }
    @media screen and (min-width: 450px) {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 620px) {
    svg {
      height: 2rem;
    }
    #email {
      font-size: 2rem;
    }
    font-size: 2rem;
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 410px;
  padding: 20px 0;
  @media screen and (min-width: 620px) {
    max-width: 520px;
  }
`;

export const StyledLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColor};
  `}
  text-decoration: underline;

  @media screen and (min-width: 620px) {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;
