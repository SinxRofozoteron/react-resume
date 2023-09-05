import Image from 'next/image';
import styled from 'styled-components';
import { transparentize } from 'polished';

import fileDarkImg from '@/public/file-dark.svg';
import fileLightImg from '@/public/file-light.svg';
import { useSelector } from '@/src/hooks';
import { ThemeName } from '@/src/state/slices';

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

export const File = ({ name, level }: FileProps) => {
  const theme = useSelector(theme => theme.view.theme);
  return (
    <StyledListItem $level={level} role="treeitem">
      <Image
        src={theme === ThemeName.light ? fileLightImg : fileDarkImg}
        alt="File"
        width={30}
        height={30}
      />
      {name}
    </StyledListItem>
  );
};
