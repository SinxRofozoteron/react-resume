import styled from "styled-components";

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
import { ModalProps } from "../models/Modal";
import {
    ModalCloseButton, ModalHeading, MainContainer, StyledLink, StyledModal as Modal
} from "./ModalComponents";

const StyledAddress = MainContainer.withComponent("address");

const StyledImg = styled.img`
    height: 1.5rem;
    width: auto;
    margin-right: 5px;
    @media screen and (min-width: 620px) {
        height: 2rem;
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

const ContactInfoModal: React.FC<ModalProps> = ({ show, onCloseClick }) => {
    const { theme } = useAppSelector(state => state.theme);

    const simplifiedPhone = contactInfo.phone.replace(/\D/g, "");
    const formattedPhoneHref = simplifiedPhone.startsWith("1") ?
        `tel:+${simplifiedPhone}` :
        `tel:+1${simplifiedPhone}`;

    return (
        <Modal show={show} onCloseClick={onCloseClick} aria-labelledby="contact-info-heading">
            <StyledAddress>
                <ModalHeading id="contact-info-heading">Contact Info</ModalHeading>
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
            <ModalCloseButton onClick={onCloseClick} />
        </Modal>
    );
};

export default ContactInfoModal;