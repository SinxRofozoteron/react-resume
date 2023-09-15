import styled from 'styled-components';

import { Modal } from './Modal';

import type { ModalProps } from './Modal';

const Layout = styled.div`
  display: grid;
  min-height: 200px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  column-gap: 5px;
`;

const Message = styled.p`
  grid-column-start: span 2;
  text-align: center;
  font-size: 2rem;
`;

const Button = styled.button(({ theme }) => ({
  width: '40%',
  maxWidth: '100px',
  backgroundColor: theme.thirdColor,
  color: theme.textColor,
  border: `1px solid ${theme.secondaryColor}`,
  '&:hover': {
    backgroundColor: theme.primaryColor,
    borderColor: theme.thirdColor
  }
}));

const YesButton = styled(Button)`
  justify-self: end;
`;

const MESSAGE_ID = 'confirmation-message';

type ConfirmationDialogProps = Pick<ModalProps, 'onCloseClick' | 'show'> & {
  onYesClick: () => void;
  onNoClick: () => void;
};

export const ConfirmationDialog = ({
  onYesClick,
  onNoClick,
  ...props
}: ConfirmationDialogProps) => {
  return (
    <Modal aria-describedby={MESSAGE_ID} {...props}>
      <Layout>
        <Message id={MESSAGE_ID}>Are you sure?</Message>
        <YesButton onClick={onYesClick}>Yes</YesButton>
        <Button onClick={onNoClick}>No</Button>
      </Layout>
    </Modal>
  );
};
