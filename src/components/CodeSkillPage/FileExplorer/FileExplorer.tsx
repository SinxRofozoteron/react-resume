import { Folder } from './Folder';
import { File } from './File';

export type FolderStructure =
  | ({
      [key: string]: FolderStructure;
    } & { files: string[] })
  | { files: string[] };

type FoleExplorerProps = {
  dir: FolderStructure;
  currentDirName?: string;
  currentDirPath?: string;
  level?: number;
};

export const FileExplorer = ({
  dir,
  currentDirName = '',
  currentDirPath = '',
  level
}: FoleExplorerProps) => {
  const { files, ...folders } = dir;

  const currentFolderContent = Object.entries(folders).map(([folderName, dir]) => {
    const folderPath = currentDirPath + folderName + '/';

    return (
      <li key={folderPath}>
        <FileExplorer
          dir={dir}
          currentDirName={folderName}
          currentDirPath={folderPath}
          level={level !== undefined ? level + 1 : 0}
        />
      </li>
    );
  });

  files?.forEach(fileName => {
    const filePath = currentDirPath + fileName;
    currentFolderContent.push(
      <File
        name={fileName}
        path={filePath}
        key={filePath}
        level={level !== undefined ? level + 1 : 0}
      />
    );
  });

  return (
    <Folder name={currentDirName} level={level}>
      {currentFolderContent}
    </Folder>
  );
};
