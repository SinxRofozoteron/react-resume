import { FC } from "react";
import styled from "styled-components";

import { Modal, ModalProps } from "../models/Modal";
import signInWithGoogle from "../../assets/google.png";

const ContentContainer = styled.div`
  display: flex;
  flex-basis: 10rem;
  justify-items: space-between;
  justify-content: center;
  img {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const LoginModal: FC<ModalProps> = ({ show, onBackgroundClick }) => {
    return (
        <Modal show={show} onBackgroundClick={onBackgroundClick}>
            <ContentContainer>
                <a href="/auth/google">
                    <img src={signInWithGoogle} alt="Sign In with Google" />
                </a>
            </ContentContainer>
        </Modal>
    );
};
