import { getLanguageByFileName } from '../CodeEditor.utils';

describe('getLanguageByFileName', () => {
  it.each([
    ['file.tsx', 'typescript'],
    ['file.ts', 'typescript'],
    ['file.js', 'javascript'],
    ['file.jsx', 'javascript'],
    ['file.json', 'json'],
    ['file.yml', 'yml'],
    ['file.yaml', 'yaml'],
    ['.json', null],
    ['.js', null],
    ['CODEOWNERS', null],
    ['file.rstkjh', null]
  ])('for the file name %s returns %s language', (fileName, expectedLanguage) => {
    const actualLanguage = getLanguageByFileName(fileName);
    expect(actualLanguage).toBe(expectedLanguage);
  });
});
