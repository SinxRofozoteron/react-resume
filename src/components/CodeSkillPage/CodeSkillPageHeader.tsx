import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  padding: 5px 0;
  background-color: ${({ theme }) => theme.fourthColor};
  color: ${({ theme }) => theme.primaryColor};
  text-transform: capitalize;
  grid-column-start: 2;
  grid-row-start: 1;

  @media screen and (min-width: 550px) {
    margin: 0;
    text-align: center;
  }
`;

export const CodeSkillPageHeader = () => {
  const { query } = useRouter();
  const header = (query.repo as string).split('-').join(' ');

  return <StyledHeader>{header}</StyledHeader>;
};
