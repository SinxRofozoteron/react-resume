import { FC } from "react";
import styled from "styled-components";

import { ThemeNotchProps, ThemeToggleProps } from "../../types/componentTypes";

const ToggleWrapper = styled.div`
  width: 70px;
  height: 35px;
  border-radius: 35px;
  border: 1px solid ${({ theme }) => theme.thirdColor};
  margin: auto;
  display: flex;
  background: ${({ theme }) => theme.secondaryColor};
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Notch = styled.div<ThemeNotchProps>`
  height: 29px;
  width: 29px;
  border: 1px solid ${({ theme }) => theme.thirdColor};
  border-radius: 50%;
  margin-top: 2px;
  background: ${({ theme }) => theme.primaryColor};
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.isActive ? "37px" : "2px")});
`;

export const ThemeToggle: FC<ThemeToggleProps> = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};
