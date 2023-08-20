import styled from 'styled-components';

import { Divider } from '../common/Divider';

import info from '@/public/info.json';

const VDivider = styled(Divider)`
  display: none;
  @media screen and (min-width: 665px) {
    display: block;
    margin-right: 15px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledP = styled.p`
  margin-top: 0;
`;

export const Summary = () => {
  return (
    <section>
      <h2>Summary</h2>
      <Container>
        <VDivider
          orientation="vertical"
          height="auto"
          width="1px"
          horizontalMargin="0"
        />
        <StyledP>{info.summary}</StyledP>
      </Container>
    </section>
  );
};
