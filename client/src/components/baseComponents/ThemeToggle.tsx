import { FC } from "react";
import styled, { css } from "styled-components";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setTheme, ThemeName } from "../../features/theme-slice";
import { RootState } from "../../app/store";

const wrapperDimensions = { width: "4.7rem", height: "2.5rem" }
const notchDimensions = { height: "2.20rem" }

const ToggleWrapper = styled.div`
  width: ${wrapperDimensions.width};
  height: ${wrapperDimensions.height};
  border-radius: ${wrapperDimensions.height};
  border: 1px solid ${({ theme }) => theme.thirdColor};
  margin-left: 20px;
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.secondaryColor};
`;

const Notch = styled.div<{ isLight: boolean }>`
  height: ${notchDimensions.height};
  width: ${notchDimensions.height};
  position: relative;
  border-radius: 50%;
  ${({ theme, isLight }) => css`
    border: 1px solid ${theme.thirdColor};
    background: ${theme.primaryColor};
    margin-right: ${isLight ? `calc(100% - ${notchDimensions.height} - 0.1rem)` : "0.1rem"};
    margin-left: ${isLight ? "0.1rem" : `calc(100% - ${notchDimensions.height} - 0.1rem)`};
  `}
  transition: margin-right 0.2s linear, margin-left 0.2s linear;
`;

export const ThemeToggle: FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state: RootState) => state.theme);

  function onToggle() {
    dispatch(
      setTheme(
        { theme: theme === ThemeName.light ? ThemeName.dark : ThemeName.light }
      )
    );
  }

  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isLight={theme === ThemeName.light} />
    </ToggleWrapper>
  );
};
