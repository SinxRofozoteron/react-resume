import styled from 'styled-components';
import { useRouter } from 'next/router';

import { FileExplorer } from './FileExplorer';
import { CloseButton as CloseButtonRaw } from '../common';
import { useSelector, useDispatch } from '../../hooks';

import {
  useFetchRepoTreeQuery,
  selectOpenFileExplorer,
  setOpenFileExplorer
} from '@/src/state';

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

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const CloseButton = styled(CloseButtonRaw)`
  position: absolute;
  z-index: 1;
  right: 30px;
  top: 30px;

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
  height: calc(100vh - 9rem);
  overflow: auto;
  transition: left 0.5s ease-in-out;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: -1;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.thirdColor};
  border-left: none;
  &.expanded {
    left: 0;
  }

  @media (orientation: landscape) and (max-width: 700px) {
    height: calc(100vh - 5rem);
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
  const dispatch = useDispatch();

  const open = useSelector(selectOpenFileExplorer);
  const { data } = useFetchRepoTreeQuery(query.repo as string);

  const handleOpen = () => {
    dispatch(setOpenFileExplorer(true));
  };
  const handleClose = () => {
    dispatch(setOpenFileExplorer(false));
  };

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
        <CloseButton
          aria-label="Close File Explorer"
          onClick={handleClose}
          size="large"
        />
        <FileExplorer dir={data || { files: [] }} />
      </FileExplorerContainer>
    </>
  );
};
