import styled from 'styled-components';

export const ModalButton = styled.button(({ theme }) => ({
  width: '40%',
  maxWidth: '150px',
  padding: '5px',
  backgroundColor: theme.thirdColor,
  color: theme.textColor,
  border: `1px solid ${theme.secondaryColor}`,
  '&:hover': {
    backgroundColor: theme.primaryColor,
    borderColor: theme.thirdColor
  },
  '@media screen and (min-width: 500px)': {
    padding: '10px'
  }
}));
