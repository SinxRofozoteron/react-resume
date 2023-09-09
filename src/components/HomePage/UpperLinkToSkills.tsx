import styled, { css } from 'styled-components';
import Link from 'next/link';
import { transparentize } from 'polished';
import Image from 'next/image';

import darkArrow from '../../../public/arrow-right-dark.svg';
import lightArrow from '../../../public/arrow-right-light.svg';
import { useSelector } from '../../hooks';

import { ThemeName, selectTheme } from '@/src/state';

const svgStyle = css`
  height: 2rem;
  width: auto;
  margin-left: 0.3rem;
`;

const StyledLink = styled(Link).attrs(() => ({
  title: 'Expertise page'
}))`
  &:before {
    content: 'Expertise';
  }
  top: 5px;
  right: 10px;
  font-size: 1.75rem;
  font-family: inherit;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  padding: 5px;
  ${({ theme }) => css`
    color: ${theme.textColor};
    background-color: ${transparentize(0.7, theme.primaryColor)};
  `}

  @media screen and (min-width: 375px) {
    &:before {
      content: 'Expertise page';
    }
    right: auto;
    left: 10px;
  }
  @media screen and (min-width: 500px) {
    &:before {
      content: 'Visit Expertise page';
    }
  }
  @media screen and (min-width: 820px) {
    font-size: 2rem;
  }
`;

const Svg = styled(Image)`
  ${svgStyle}
`;

const ARROW_ALT = 'Right Arrow';

export const UpperLinkToSkills = () => {
  const theme = useSelector(selectTheme);
  return (
    <nav>
      <StyledLink href="/expertise">
        {theme === ThemeName.LIGHT ? (
          <Svg src={darkArrow} alt={ARROW_ALT} />
        ) : (
          <Svg src={lightArrow} alt={ARROW_ALT} />
        )}
      </StyledLink>
    </nav>
  );
};
