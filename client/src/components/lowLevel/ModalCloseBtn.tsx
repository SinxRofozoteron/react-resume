import styled from "styled-components";

interface ModalCloseButtonProps {
    onClick: React.MouseEventHandler<HTMLElement>
}

const StyledCloseBtn = styled.button`
    && {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 3px;
        font-size: 1.5rem;
        border: 1px ${({ theme }) => theme.textColor};
        border-style: none solid solid none;
        @media screen and (min-width: 620px) {
            font-size: 1.8rem;
            left: 88%;
        }
    }
`;

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClick }) => {
    return <StyledCloseBtn onClick={onClick}>Close</StyledCloseBtn>;
}

export default ModalCloseButton;