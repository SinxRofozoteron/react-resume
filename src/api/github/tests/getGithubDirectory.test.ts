import { getGithubDirectory } from '../getGithubDirectory';

jest.mock('../githubAuth', () => ({
  ...jest.requireActual('../githubAuth'),
  getAccessToken: async () => ({ token: 'TEST-TOKEN' })
}));
jest.mock('../config', () => {
  const srcFile = {
    type: 'blob',
    path: 'src/testFile.tsx'
  };

  const rootFile = {
    type: 'blob',
    path: 'rootTestFile.tsx'
  };

  const directory = {
    type: 'tree',
    path: 'src'
  };

  const testData = {
    data: {
      tree: [directory, rootFile, srcFile]
    }
  };

  return {
    axiosGithub: { get: () => testData }
  };
});

jest.mock('fs');

describe('getGithubDirectory', () => {
  it('transforms row tree into expected format', async () => {
    const expectedFormat = {
      files: ['rootTestFile.tsx'],
      src: {
        files: ['testFile.tsx']
      }
    };

    const result = await getGithubDirectory('abcd');

    expect(result).toEqual(expectedFormat);
  });
});
