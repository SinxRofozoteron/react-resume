import Image from 'next/image';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { forwardRef } from 'react';

import { useSelector, useDispatch } from '../../../hooks';
import { buildFileTourId } from '../../../tour';
import { TourComponent } from '../../shared';

import fileDarkImg from '@/public/file-dark.svg';
import fileLightImg from '@/public/file-light.svg';
import { ThemeName } from '@/src/state';
import { setActiveCodeEditorFile, selectTheme } from '@/src/state';

type StyledListItemProps = {
  $level: number;
};

const StyledListItem = styled.li<StyledListItemProps>`
  margin-left: ${({ $level }) => `${$level * 15}px`};
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => transparentize(0.1, theme.primaryColor)};
  }
`;

type FileProps = {
  name: string;
  path: string;
  level: number;
};

export const File = forwardRef<HTMLLIElement, FileProps>(
  ({ name, level, path, ...extraProps }, ref) => {
    const dispatch = useDispatch();

    const theme = useSelector(selectTheme);

    const handleClick = () => {
      dispatch(setActiveCodeEditorFile(path));
      // @ts-expect-error unknown props
      if (extraProps.onClick) {
        // @ts-expect-error unknown props
        extraProps.onClick();
      }
    };

    return (
      <StyledListItem
        $level={level}
        role="treeitem"
        ref={ref}
        {...extraProps}
        onClick={handleClick}>
        <Image
          src={theme === ThemeName.LIGHT ? fileLightImg : fileDarkImg}
          alt="File"
          width={30}
          height={30}
        />
        {name}
      </StyledListItem>
    );
  }
);

File.displayName = 'File';

export const FileAsTourComponent = (props: FileProps) => {
  return (
    <TourComponent
      Component={File}
      componentProps={props}
      componentId={buildFileTourId(props.name)}
    />
  );
};
