import styled from 'styled-components';

const StyledP = styled.p(({ theme }) => ({
  padding: '10px 20px',
  margin: 'auto',
  border: `2px solid ${theme.fourthColor}`
}));

export const ExpertisePageInfo = () => {
  return (
    <StyledP>
      Some of the Skills listed here are interactive links. Clicking on each link will
      guide you through an engaging tour, highlighting how the corresponding Skill is
      leveraged to construct the current application.
    </StyledP>
  );
};
