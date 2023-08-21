import styled, { css } from 'styled-components';
import Link from 'next/link';

import { ConditionalWrapper } from '../common';

import type { ReactNode } from 'react';

const DivWrapper = styled.div`
  @media screen and (min-width: 985px) {
    display: block;
    padding: 5px;
    background-color: ${({ theme }) => theme.secondaryColor};
    height: 100%;
    &.with-description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    text-decoration: none;
  }
`;

const LinkWrapper = styled(DivWrapper).attrs(() => ({
  as: Link
}))`
  &:hover {
    ${({ theme }) => css`
      box-shadow:
        0 0 30px ${theme.thirdColor},
        0 0 50px ${theme.thirdColor},
        0 0 75px ${theme.thirdColor};
    `}
  }
`;

type SkillCardContainerProps = {
  isWideScreen: boolean;
  link?: string;
  description: string;
  children: ReactNode;
};

export const SkillCardContainer = ({
  isWideScreen,
  link,
  children,
  description
}: SkillCardContainerProps) => {
  const linkWrapperProps = {
    wrapper: LinkWrapper,
    href: link
  };

  const divWrapperProps = {
    wrapper: DivWrapper
  };

  return (
    <ConditionalWrapper
      condition={isWideScreen}
      {...(link ? linkWrapperProps : divWrapperProps)}
      className={description ? 'with-description' : ''}>
      {children}
    </ConditionalWrapper>
  );
};
