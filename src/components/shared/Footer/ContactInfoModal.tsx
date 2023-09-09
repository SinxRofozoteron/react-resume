import styled from 'styled-components';
import Image from 'next/image';

import { Divider } from '../../common';
import {
  ModalCloseButton,
  ModalHeading,
  MainContainer,
  StyledLink,
  StyledModal as Modal
} from './ModalComponents';
import { useSelector } from '../../../hooks';

import type { ModalProps } from '../../common';

import { ThemeName, selectTheme } from '@/src/state';
import lightEmailSvg from '@/public/email-light.svg';
import darkEmailSvg from '@/public/email-dark.svg';
import lightLinkedInPng from '@/public/linkedIn-light.png';
import darkLinkedInPng from '@/public/linkedIn-dark.png';
import lightPhonePng from '@/public/phone-light.png';
import darkPhonePng from '@/public/phone-dark.png';
import contactInfo from '@/public/contactInfo.json';

const StyledImg = styled(Image)`
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

const simplifiedPhone = contactInfo.phone.replace(/\D/g, '');
const formattedPhoneHref = simplifiedPhone.startsWith('1')
  ? `tel:+${simplifiedPhone}`
  : `tel:+1${simplifiedPhone}`;

export const ContactInfoModal = ({
  show,
  onCloseClick
}: Omit<ModalProps, 'children'>) => {
  const theme = useSelector(selectTheme);

  return (
    <Modal
      show={show}
      onCloseClick={onCloseClick}
      aria-labelledby="contact-info-heading">
      <MainContainer as="address">
        <ModalHeading id="contact-info-heading">Contact Info</ModalHeading>
        <Divider orientation="horizontal" width="60%" horizontalMargin="auto" />
        <StyledList>
          <li>
            <StyledImg
              src={theme === ThemeName.LIGHT ? darkPhonePng : lightPhonePng}
              alt="Phone"
            />
            <StyledLink href={formattedPhoneHref}>{contactInfo.phone}</StyledLink>
          </li>
          <li id="email">
            {theme === ThemeName.LIGHT ? (
              <StyledImg src={darkEmailSvg} alt="Email" />
            ) : (
              <StyledImg src={lightEmailSvg} alt="Email" />
            )}
            <StyledLink href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </StyledLink>
          </li>
          <li>
            <StyledImg
              alt="LinkedIn"
              src={theme === ThemeName.LIGHT ? darkLinkedInPng : lightLinkedInPng}
            />
            <StyledLink href={contactInfo.linkedIn}>LinkedIn</StyledLink>
          </li>
        </StyledList>
      </MainContainer>
      <ModalCloseButton onClick={onCloseClick} />
    </Modal>
  );
};
