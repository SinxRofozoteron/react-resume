import styled from 'styled-components';
import Image from 'next/image';
import { transparentize } from 'polished';
import { useState, forwardRef } from 'react';

import { useSelector } from '../../../hooks';
import { TourComponent } from '../../shared';

import type { ReactNode } from 'react';

import folderLightImg from '@/public/folder-light.svg';
import folderDarkImg from '@/public/folder-dark.svg';
import { ThemeName, selectTheme } from '@/src/state';
import { buildFolderTourId } from '@/src/tour';

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

export const Folder = forwardRef<HTMLElement, FolderProps>(
  ({ name, children, level, ...extraProps }, ref) => {
    const [expanded, setExpanded] = useState(false);
    const theme = useSelector(selectTheme);

    const handleFolderToggle = () => setExpanded(prevState => !prevState);

    if (name) {
      return (
        <StyledFigure $level={level} aria-expanded={expanded} ref={ref} {...extraProps}>
          <StyledFigCaption onClick={handleFolderToggle}>
            <Image
              src={theme === ThemeName.LIGHT ? folderLightImg : folderDarkImg}
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
  }
);

Folder.displayName = 'Folder';

export const FolderAsTourComponent = (props: FolderProps) => {
  if (!props.name) {
    return <Folder {...props} />;
  }
  return (
    <TourComponent
      Component={Folder}
      componentProps={props}
      componentId={buildFolderTourId(props.name)}
    />
  );
};
