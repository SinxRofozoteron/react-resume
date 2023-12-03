import styled, { css } from 'styled-components';

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
      width: auto;
      transform: none;
      left: 20px;
      right: auto;
      bottom: 0;
      &:after {
        position: absolute;
        content: '';
        background-color: ${theme.fourthColor};
        transform: skew(150deg);
        transform-origin: bottom;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        width: 50%;
      }
    }
  `}
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
