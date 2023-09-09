import styled from 'styled-components';
import { transparentize } from 'polished';

import { LoadingSpinner } from '../../common';

const LoadingOverlayContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => transparentize(0.5, theme.secondaryColor)};
  z-index: 5;
`;

export const LoadingStateOverlay = () => {
  return (
    <LoadingOverlayContainer aria-label="Loading">
      <LoadingSpinner />
    </LoadingOverlayContainer>
  );
};
