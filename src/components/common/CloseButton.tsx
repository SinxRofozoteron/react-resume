import styled from 'styled-components';
import Image from 'next/image';

import { useSelector } from '../../hooks';

import { ThemeName, selectTheme } from '@/src/state';
import closeDarkIcon from '@/public/close-dark.svg';
import closeLightIcon from '@/public/close-light.svg';

const sizes = {
  small: 10,
  medium: 20,
  large: 30
};

const paddings = {
  small: '3px',
  medium: '6px',
  large: '10px'
};

type StyledButtonProps = {
  $size: 'small' | 'medium' | 'large';
};

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${({ $size }) => `${sizes[$size]}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: ${({ $size }) => paddings[$size]};
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

type CloseButtonProps = {
  className?: string;
  onClick: () => void;
  'aria-label': string;
  size?: 'small' | 'medium' | 'large';
};

export const CloseButton = ({
  className,
  onClick,
  size = 'large',
  ...props
}: CloseButtonProps) => {
  const theme = useSelector(selectTheme);

  return (
    <StyledButton
      aria-label={props['aria-label']}
      onClick={onClick}
      className={className}
      $size={size}>
      <Image
        src={theme === ThemeName.LIGHT ? closeLightIcon : closeDarkIcon}
        alt="close"
        width={sizes[size]}
        height={sizes[size]}
      />
    </StyledButton>
  );
};
