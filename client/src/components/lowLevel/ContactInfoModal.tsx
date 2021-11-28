import styled, { css } from "styled-components";

import { contactInfo } from "../../assets/info.json";
import darkPhonePng from "../../assets/phone-dark.png";
import lightPhonePng from "../../assets/phone-light.png"
import darkLinkedInPng from "../../assets/linkedIn-dark.png";
import lightLinkedInPng from "../../assets/linkedIn-light.png";
import { ReactComponent as DarkEmailSvg } from "../../assets/email-dark.svg";
import { ReactComponent as LightEmailSvg } from "../../assets/email-light.svg";
import { useAppSelector } from "../../app/hooks";
import { ThemeName } from "../../features/theme-slice";
import Divider from "../models/Divider";
import Modal, { ModalProps } from "../models/Modal";

const StyledHeading = styled.h4`
    margin: 0 auto;
    text-align: center;
    font-size: 1.75rem;
    @media screen and (min-width: 620px) {
        font-size: 2.25rem;
    }
`;

const StyledAddress = styled.address`
    padding: 5px 10px;
    font-size: 1.3rem;
    font-style: normal;
    svg {
        height: 1.5rem;
        width: auto;
        margin-right: 5px;
    }
    #email {
        font-size: 1rem;
        @media screen and (min-width: 300px) {
            font-size: 1.1rem;
        }
        @media screen and (min-width: 450px) {
            font-size: 1.3rem;
        }
    }

    @media screen and (min-width: 620px) {
        svg {
            height: 2rem;
        }
        #email {
            font-size: 2rem;
        }
        font-size: 2rem;
    }
`;
const StyledImg = styled.img`
    height: 1.5rem;
    width: auto;
    margin-right: 5px;
    @media screen and (min-width: 620px) {
        height: 2rem;
    }
`;
const StyledLink = styled.a`
    ${({ theme }) => css`
        color: ${theme.textColor};
    `}
    :hover {
        text-decoration: underline;
    }
    @media screen and (min-width: 620px) {
        text-decoration: none;
    }
`;
const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    li {
        display: flex;
        align-items: flex-end;
        margin-bottom: 5px;
    }
    @media screen and (min-width: 300px) {
        width: 230px;
        margin: 0 auto;
    }
    @media screen and (min-width: 450px) {
        width: 250px;
    }
    @media screen and (min-width: 620px) {
        width: 400px;
    }
`;
const StyledModal = styled(Modal)`
    max-width: 410px;
    padding: 20px 0;
    @media screen and (min-width: 620px) {
        max-width: 520px;
    }
`;
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

const ContactInfoModal: React.FC<ModalProps> = ({ show, onCloseClick }) => {
    const { theme } = useAppSelector(state => state.theme);

    const simplifiedPhone = contactInfo.phone.replace(/\D/g, "");
    const formattedPhoneHref = simplifiedPhone.startsWith("1") ?
        `tel:+${simplifiedPhone}` :
        `tel:+1${simplifiedPhone}`;

    return (
        <StyledModal show={show} onCloseClick={onCloseClick}>
            <StyledAddress>
                <StyledHeading>Contact Info</StyledHeading>
                <Divider
                    orientation="horizontal"
                    width="60%"
                    horizontalMargin="auto"
                />
                <StyledList>
                    <li>
                        <StyledImg src={theme === ThemeName.light ? darkPhonePng : lightPhonePng} />
                        <StyledLink href={formattedPhoneHref}>{contactInfo.phone}</StyledLink>
                    </li>
                    <li id="email">
                        {theme === ThemeName.light ? <DarkEmailSvg /> : <LightEmailSvg />}
                        <StyledLink href={`mailto:${contactInfo.email}`}>{contactInfo.email}</StyledLink>
                    </li>
                    <li>
                        <StyledImg src={theme === ThemeName.light ? darkLinkedInPng : lightLinkedInPng} />
                        <StyledLink href={contactInfo.linkedIn}>LinkedIn</StyledLink>
                    </li>
                </StyledList>
            </StyledAddress>
            <StyledCloseBtn onClick={onCloseClick} >Close</StyledCloseBtn>
        </StyledModal>
    );
};

export default ContactInfoModal;