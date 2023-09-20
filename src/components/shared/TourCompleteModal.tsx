import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Modal, ModalButton } from '../common';
import { useSelector, useDispatch } from '../../hooks';

import { selectOpenTourCompleteModal, setOpenTourComplete } from '@/src/state';
import congratsLeftImg from '@/public/congrats-left.svg';
import congratsRightImg from '@/public/congrats-right.svg';

const ModalGrid = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: `6px double ${theme.secondaryColor}`,
  backgroundColor: theme.fourthColor,
  color: theme.primaryColor,
  padding: '10px'
}));

const StyledHeader = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 450px) {
    column-gap: 10px;
  }
`;

const StyledP = styled.p`
  text-align: center;
`;

const StyledImg = styled(Image)`
  display: none;
  @media screen and (min-width: 350px) {
    display: inline-block;
  }
`;

const StyledActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const TourCompleteModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const open = useSelector(selectOpenTourCompleteModal);

  const handleClose = () => {
    dispatch(setOpenTourComplete(false));
  };

  const handleNavigateToExpertisePage = () => {
    router.push('/expertise');
    handleClose();
  };

  return (
    <Modal show={open} onCloseClick={handleClose} role="dialog">
      <ModalGrid>
        <StyledHeader>
          <StyledImg
            src={congratsLeftImg}
            alt="Congratulations"
            width={30}
            height={30}
          />
          Tour is complete!
          <StyledImg
            src={congratsRightImg}
            alt="Congratulations"
            width={30}
            height={30}
          />
        </StyledHeader>
        <StyledP>
          Take your time to explore this page further. If you&apos;re curious, there are
          additional tours accessible through the expertise page. Simply click on any
          skill tile that catches your interest.
        </StyledP>
        <StyledActionsContainer>
          <ModalButton onClick={handleNavigateToExpertisePage}>
            Go to expertise page
          </ModalButton>
          <ModalButton onClick={handleClose}>Stay here</ModalButton>
        </StyledActionsContainer>
      </ModalGrid>
    </Modal>
  );
};
