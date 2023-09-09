type FileExtention = 'ts' | 'tsx' | 'js' | 'jsx' | 'json' | 'rs' | 'yml' | 'yaml';
type SupportedLanguage = 'json' | 'javascript' | 'typescript' | 'yml' | 'yaml';

export const getLanguageByFileName = (fileName: string): SupportedLanguage | null => {
  const fileNameArr = fileName.split('.');

  if (!fileNameArr[0] || fileNameArr.length === 1) {
    return null;
  }

  const extention = fileNameArr[fileNameArr.length - 1] as FileExtention;

  switch (extention) {
    case 'ts':
    case 'tsx':
      return 'typescript';
    case 'js':
    case 'jsx':
      return 'javascript';
    case 'json':
      return 'json';
    case 'yml':
      return 'yml';
    case 'yaml':
      return 'yaml';
    default:
      return null;
  }
};
