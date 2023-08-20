'use client';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Image from 'next/image';

import highQualityJPG from '../../../public/mainPhotohigherQuality.jpg';

const PhotoContainer = styled.div`
  overflow: hidden;
  position: relative;
  transition: background linear 300ms;
  background-color: ${({ theme }) =>
    theme.id === 'dark' ? transparentize(0.85, theme.secondaryColor) : 'transparent'};
  @media screen and (min-width: 440px) {
    width: 80%;
    margin-right: 20px;
    margin-left: auto;
    max-width: 740px;
    max-height: 436px;
    ${({ theme }) => css`
      background: linear-gradient(
        114deg,
        ${theme.primaryColor} 30%,
        30%,
        ${theme.id === 'dark'
          ? transparentize(0.85, theme.secondaryColor)
          : 'transparent'}
      );
    `}
  }

  @media screen and (min-width: 900px) {
    ${({ theme }) => css`
      background: linear-gradient(
        120deg,
        ${theme.primaryColor} 30%,
        30%,
        ${theme.id === 'dark'
          ? transparentize(0.85, theme.secondaryColor)
          : 'transparent'}
      );
    `}
  }

  > img {
    ${({ theme }) => css`
      color: ${theme.textColor};
    `}
    @media screen and (min-width: 440px) {
      object-fit: cover;
      object-position: right top;
    }
  }
`;

export const MainPhoto = () => {
  return (
    <PhotoContainer>
      <Image
        src={highQualityJPG}
        alt="Photo of Aliaksandr Burakou"
        style={{
          width: '100%',
          height: 'auto',
          zIndex: '-1',
          position: 'relative',
          top: '-1'
        }}
      />
    </PhotoContainer>
  );
};
