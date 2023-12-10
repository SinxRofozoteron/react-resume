import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    left: calc((100vw - 870px) / 2);
  }
  50% {
    opacity: 1;
    top: calc(436px + 4.5rem - 45px);
    left: calc((100vw - 870px) / 2);
    padding-right: 10px;
    clip-path: none;
  }
  100% {
    left: calc((100vw - 870px) / 2);
    padding-right: 10px;
    clip-path: none;
    top: 10px;
    opacity: 0;
  }
`;

const StyledH1 = styled.h1`
  padding: 0 10px;
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: 1.75rem;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 2;
  @media screen and (min-width: 375px) {
    width: 90%;
    font-size: 2rem;
  }

  @media screen and (min-width: 410px) {
    width: 80%;
  }

  ${({ theme }) => css`
    color: ${theme.primaryColor};
    background-color: ${theme.fourthColor};

    @media screen and (min-width: 591px) {
      flex-direction: row;
      margin: 0;
      padding-right: 40px;
      width: auto;
      transform: none;
      left: 20px;
      right: auto;
      bottom: 0;
      clip-path: polygon(0 0, 100% 0, 96% 100%, 0 100%);
    }
  `}

  @media screen and (min-width: 1700px) {
    position: fixed;
    top: calc(436px + 4.5rem - 45px);
    left: calc((100vw - 1250px) / 2);
    height: 45px;

    animation: ${animation} linear forwards;
    animation-timeline: scroll();
    animation-range: 0 872px;
  }
`;

// TODO: come up with a way to dynamically change aria-orientation attr
const StyledDivider = styled.div.attrs(() => ({
  role: 'separator'
}))(({ theme }) => ({
  borderBottom: `1px solid ${theme.primaryColor}`,
  width: '60%',
  margin: 0,
  '@media screen and (min-width: 591px)': {
    borderLeft: `1px solid ${theme.primaryColor}`,
    borderBottom: 'none',
    height: '2rem',
    margin: '0 10px',
    width: '1px'
  }
}));

export const MainHomePageHeading = () => {
  return (
    <StyledH1>
      <span className="name">Aliaksandr Burakou</span>
      <StyledDivider />
      <span>Resume</span>
    </StyledH1>
  );
};
