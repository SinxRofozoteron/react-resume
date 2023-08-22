import styled from 'styled-components';

import { Divider } from '../common/Divider';

import { light as lightTheme, dark as darkTheme } from '@/src/styles';
import { useSelector } from '@/src/hooks';
import { ThemeName } from '@/src/state/slices';

export type ExperienceProps = {
  companyName: string;
  location: string;
  position: string;
  // from - to dates working at this position
  dates: string;
  // list of sentances that describe main carier higlights at this position
  description: string[];
  value?: number;
};

const StyledHeading = styled.h3`
  display: flex;
  position: relative;
  left: -10px;
  align-items: center;
  margin: 15px 0 5px 0;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.fourthColor};
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.6rem;
  max-width: 560px;
`;

const PositionDatesDivider = styled(Divider)`
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
  }
`;

const PositionDatesContainer = styled.div`
  padding: 0;
  margin: 0;
  @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
  }
  p {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 10px;
  }
`;

const StyledOl = styled.ol`
  list-style-type: disc;
  padding: 0;
  list-style-position: inside;
  > li {
    margin-bottom: 10px;
    @media screen and (min-width: 540px) {
      padding-left: 10px;
    }
  }
`;

export const ExperienceCard = (props: ExperienceProps) => {
  const theme = useSelector(state => state.view.theme);

  return (
    <>
      <StyledHeading>
        {props.companyName}
        <Divider
          orientation="vertical"
          color={
            theme === ThemeName.light ? lightTheme.primaryColor : darkTheme.primaryColor
          }
          height="1.25rem"
        />
        {props.location}
      </StyledHeading>
      <PositionDatesContainer>
        <p>{props.position}</p>
        <PositionDatesDivider orientation="vertical" />
        <p>{props.dates}</p>
      </PositionDatesContainer>
      <StyledOl>
        {props.description.map((value, index) => (
          <li value={index + 1} key={index + 1}>
            {value}
          </li>
        ))}
      </StyledOl>
    </>
  );
};
