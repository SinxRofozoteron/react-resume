import styled from 'styled-components';
import Image from 'next/image';
import { transparentize } from 'polished';
import { useState } from 'react';

import type { ReactNode } from 'react';

import folderLightImg from '@/public/folder-light.svg';
import folderDarkImg from '@/public/folder-dark.svg';
import { useSelector } from '@/src/hooks';
import { ThemeName } from '@/src/state/slices';

const StyledList = styled.ul.attrs(({ role }) => ({
  role: role || 'group'
}))`
  list-style: none;
  padding: 0;
  height: 0;

  &:not(.root) {
    &:not(.expanded) {
      & > li {
        display: none;
      }
    }
    &.expanded {
      height: auto;
    }
  }
`;

type StyledFigureProps = {
  $level?: number;
};

const StyledFigure = styled.figure.attrs<StyledFigureProps>(({ $level }) => ({
  $level: $level || 0,
  role: 'treeitem'
}))`
  margin: 0;
  margin-left: ${({ $level }) => `${$level! * 15}px`};
`;

const StyledFigCaption = styled.figcaption`
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => transparentize(0.1, theme.primaryColor)};
  }
`;

type FolderProps = {
  name: string;
  children: ReactNode;
  level?: number;
};

export const Folder = ({ name, children, level }: FolderProps) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useSelector(state => state.view.theme);

  const handleFolderToggle = () => setExpanded(prevState => !prevState);

  if (name) {
    return (
      <StyledFigure $level={level} aria-expanded={expanded}>
        <StyledFigCaption onClick={handleFolderToggle}>
          <Image
            src={theme === ThemeName.light ? folderLightImg : folderDarkImg}
            alt="Folder"
            width={30}
            height={30}
          />
          {name}
        </StyledFigCaption>
        <StyledList className={expanded ? 'expanded' : ''}>{children}</StyledList>
      </StyledFigure>
    );
  } else {
    return (
      <StyledList aria-label="root folder" className="root" role="tree">
        {children}
      </StyledList>
    );
  }
};
