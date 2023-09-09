import styled from 'styled-components';
import Image from 'next/image';

import { useSelector } from '../../../hooks';

import openFileImgDark from '@/public/open-file-dark.svg';
import openFileImgLight from '@/public/open-file-light.svg';
import { selectTheme, ThemeName } from '@/src/state';

const EmptyStateOverlayContainer = styled.div.attrs(() => ({
  role: 'region'
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  & > p {
    font-size: 1rem;
  }
  background-color: ${({ theme }) => theme.thirdColor};
`;

export const EmptyStateOverlay = () => {
  const theme = useSelector(selectTheme);

  return (
    <EmptyStateOverlayContainer>
      <Image
        src={theme === ThemeName.LIGHT ? openFileImgLight : openFileImgDark}
        alt="Open File"
      />
      <p>Choose file from the File Explorer to inspect</p>
    </EmptyStateOverlayContainer>
  );
};
