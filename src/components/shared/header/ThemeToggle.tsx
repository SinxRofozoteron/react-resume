import styled, { css } from 'styled-components';

import type { KeyboardEvent } from 'react';

import { setTheme, ThemeName } from '@/src/state/slices';
import { useSelector, useDispatch } from '@/src/hooks';

const wrapperDimensions = { width: '4.7rem', height: '2.5rem' };
const notchDimensions = { height: '2.20rem' };

const ToggleWrapper = styled.div.attrs(() => ({
  role: 'switch',
  tabIndex: 0
}))`
  width: ${wrapperDimensions.width};
  height: ${wrapperDimensions.height};
  border-radius: ${wrapperDimensions.height};
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  margin-left: 20px;
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.thirdColor};
`;

const Notch = styled.div.withConfig({ shouldForwardProp: prop => prop !== 'isLight' })<{
  isLight: boolean;
}>`
  height: ${notchDimensions.height};
  width: ${notchDimensions.height};
  position: relative;
  border-radius: 50%;
  ${({ theme, isLight }) => css`
    border: 1px solid ${theme.thirdColor};
    background: ${theme.primaryColor};
    margin-right: ${isLight
      ? `calc(100% - ${notchDimensions.height} - 0.1rem)`
      : '0.1rem'};
    margin-left: ${isLight
      ? '0.1rem'
      : `calc(100% - ${notchDimensions.height} - 0.1rem)`};
  `}
  transition: margin-right 0.2s linear, margin-left 0.2s linear;
`;

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.view.theme);

  function onToggle() {
    dispatch(setTheme(theme === ThemeName.light ? ThemeName.dark : ThemeName.light));
  }

  function onSpace(e: KeyboardEvent<HTMLDivElement>) {
    if (e.code === 'Space') {
      onToggle();
    }
  }

  const isLight = theme === ThemeName.light;

  return (
    <ToggleWrapper onClick={onToggle} aria-checked={isLight} onKeyDown={onSpace}>
      <Notch isLight={isLight} />
    </ToggleWrapper>
  );
};
