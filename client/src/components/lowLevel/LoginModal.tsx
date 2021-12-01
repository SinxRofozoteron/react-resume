import styled from "styled-components";

import { useAppSelector } from "../../app/hooks";
import { ThemeName } from "../../features/theme-slice";
import { ReactComponent as GoogleIconDark } from "../../assets/google-dark.svg";
import { ReactComponent as GoogleIconLight } from "../../assets/google-light.svg";
import { ModalProps } from "../models/Modal";
import {
    ModalCloseButton, ModalHeading, StyledLink as link, StyledModal as Modal
} from "./ModalComponents";

const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    font-size: 1.5rem;
    padding: 0;
    margin: 10px;
    svg {
        height: 1.5rem;
        width: auto;
        margin-right: 5px;
    }
    @media screen and (min-width: 340px) {
        font-size: 1.75rem;
        svg {
            height: 1.75rem;
            margin-right: 10px;
        }
    }
    @media screen and (min-width: 490px) {
        font-size: 2rem;
        svg {
            height: 2rem;
        }
    }
`;
const StyledLink = styled(link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        text-decoration: inherit;
    }
`;


const LoginModal: React.FC<ModalProps> = ({ show, onCloseClick }) => {
    const { theme } = useAppSelector(state => state.theme);
    return (
        <Modal show={show} onCloseClick={onCloseClick} aria-labelledby="login-modal-heading">
            <ModalHeading id="login-modal-heading">Login</ModalHeading>
            <StyledUl aria-label="Login options">
                <li>
                    <StyledLink href="/auth/google">
                        {theme === ThemeName.light ? <GoogleIconDark /> : <GoogleIconLight />}
                        <span>Login with Google</span>
                    </StyledLink>
                </li>
            </StyledUl>
            <ModalCloseButton onClick={onCloseClick} />
        </Modal>
    );
};

export default LoginModal;
