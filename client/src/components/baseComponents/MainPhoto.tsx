import { FC } from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import Img from "../models/Img";
import lowQualityJPG from "../../assets/mainPhotoLowerQuality.jpg";
import highQualityJPG from "../../assets/mainPhotohigherQuality.jpg";

const PhotoContainer = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.id === "dark" ? transparentize(0.85, theme.secondaryColor) : "transparent"
  };
  @media screen and (min-width: 440px) {
    width: 80%;
    margin-right: 20px;
    margin-left: auto;
    max-width: 740px;
    max-height: 436px;
    ${({ theme }) => css`
      background:linear-gradient(
        114deg, 
        ${theme.primaryColor} 30%, 
        30% , 
        ${theme.id === "dark" ? transparentize(0.85, theme.secondaryColor) : "transparent"}
        );
    `}
  }

  @media screen and (min-width: 900px) {
    ${({ theme }) => css`
      background:linear-gradient(
        120deg, 
        ${theme.primaryColor} 30%, 
        30% ,
        ${theme.id === "dark" ? transparentize(0.85, theme.secondaryColor) : "transparent"}
        );
    `}
  }
`;

const Photo = styled(Img).attrs(() => ({
  lowQualitySrc: lowQualityJPG,
  highQualitySrc: highQualityJPG,
  alt: "Photo of Aliaksandr Burakou"
}))`
  ${({ theme }) => css`
    color: ${theme.textColor};
  `}
  position: sticky;
  z-index: -1;
  width: 100%;
  top: -1px;

  @media screen and (min-width: 440px) {
    object-fit: cover;
    object-position: right top;
  }
`;

const MainPhoto: FC = () => {
  return (
    <PhotoContainer>
      <Photo />
    </PhotoContainer>
  );
};

export default MainPhoto;