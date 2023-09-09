import styled, { keyframes } from 'styled-components';

const spinTransform = keyframes`
    0% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 25%;
    transform: rotate(90deg);
  }
  50% {
    border-radius: 0;
    transform: rotate(180deg);
  }

  75% {
    border-radius: 25%;
    transform: rotate(270deg);
  }

  100% {
    border-radius: 50%;
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div.attrs(() => ({
  'aria-label': 'Loading spinner'
}))`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: solid 3px ${({ theme }) => theme.fourthColor};
  animation: ${spinTransform} 1s linear infinite;
`;
