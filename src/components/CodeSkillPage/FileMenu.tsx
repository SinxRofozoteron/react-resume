import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { FileExplorer } from './FileExplorer';

import { useSelector } from '@/src/hooks';
import closeDarkIcon from '@/public/close-dark.svg';
import closeLightIcon from '@/public/close-light.svg';
import { ThemeName } from '@/src/state/slices';
import { useFetchRepoTreeQuery } from '@/src/state';

const Button = styled.button.attrs(() => ({
  'aria-haspopup': true
}))`
  position: fixed;
  left: 0;
  height: 100px;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textColor};
  border: 2px solid transparent;
  transition: left 0.5s ease-in-out;
  &.expanded {
    left: -152px;
  }
  &:hover {
    border: 2px solid ${({ theme }) => theme.secondaryColor};
    border-right: none;
    color: ${({ theme }) => theme.primaryColor};
  }
  &:hover::after {
    border-top-width: 96px;
    right: -50px;
    top: -0px;
    box-shadow: 0px -2px ${({ theme }) => theme.secondaryColor};
  }
  &::after {
    content: '';
    position: absolute;
    top: -3px;
    right: -52px;
    border-right: 50px solid transparent;
    border-top: 101px solid ${({ theme }) => theme.thirdColor};
  }
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const FloatSpacer = styled.div`
  float: left;
  left: 0;
  width: 140px;
  height: 100px;
  shape-outside: polygon(0 0, 140px 0, 90px 100px, 0 100px);
`;

const CloseButton = styled.button`
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  position: absolute;
  z-index: 1;
  right: 30px;
  top: 30px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const FileExplorerContainer = styled.div`
  position: fixed;
  width: 95vw;
  max-width: 500px;
  top: 4.5rem;
  left: -95vw;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 84vh;
  overflow: auto;
  transition: left 0.5s ease-in-out;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: -1;
  &.expanded {
    left: 0;
  }

  @media screen and (min-width: 700px) {
    position: static;
    width: auto;
  }

  @media screen and (min-width: 900px) {
    border: 2px solid ${({ theme }) => theme.thirdColor};
  }
`;

export const FILE_EXPLORER_CONTAINER_ID = 'file-explorer';

export const FileMenu = () => {
  const { query } = useRouter();
  const [open, setOpen] = useState(false);
  const theme = useSelector(state => state.view.theme);
  const { data } = useFetchRepoTreeQuery(query.repo as string);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <FloatSpacer />
      <Button
        className={open ? 'expanded' : ''}
        onClick={handleOpen}
        aria-expanded={open}
        aria-owns={open ? FILE_EXPLORER_CONTAINER_ID : undefined}>
        Open File
      </Button>
      <FileExplorerContainer
        className={open ? 'expanded' : ''}
        id={FILE_EXPLORER_CONTAINER_ID}
        data-test={FILE_EXPLORER_CONTAINER_ID}>
        <CloseButton aria-label="Close File Explorer" onClick={handleClose}>
          <Image
            src={theme === ThemeName.light ? closeLightIcon : closeDarkIcon}
            alt="close"
            width={30}
            height={30}
          />
        </CloseButton>
        <FileExplorer dir={data || { files: [] }} />
      </FileExplorerContainer>
    </>
  );
};
