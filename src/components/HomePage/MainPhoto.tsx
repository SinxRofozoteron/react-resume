import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

import photo from '../../../public/mainPhotohigherQuality.jpg';

const animation = keyframes`
  to {
    left: 0;
    transform: translateX(calc(-30% + 20px));
    clip-path: polygon(30% 100%, 30% 0, 80% 0, 80% 100%);
    border-radius: 50%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 740px;
  max-height: 436px;
  display: block;
  object-fit: cover;
  object-position: right top;

  @media screen and (min-width: 440px) {
    width: 80%;
    margin-right: 20px;
    margin-left: auto;
    clip-path: polygon(0 100%, 35% 0, 100% 0, 100% 100%);
    color: red;
  }

  @media screen and (min-width: 1700px) {
    position: fixed;
    top: 4.5rem;
    left: calc(100vw - 740px - (100vw - 1250px) / 2);
    margin-left: max(20px, calc(((100vw - 870px) / 2 - 370px)) / 2);

    animation: ${animation} linear forwards;
    animation-timeline: scroll(root);
    animation-range: 0 436px;
  }
`;

export const MainPhoto = () => {
  return <StyledImage priority src={photo} alt="Photo of Aliaksandr Burakou" />;
};
