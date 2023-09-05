import { render, screen } from '@testing-library/react';

import { FileExplorer } from '../FileExplorer';

import { TestWrapper } from '@/src/testUtils';

const testDir = {
  files: ['rootFile.ts', 'package.json'],
  src: {
    components: {
      files: ['component1.tsx']
    }
  }
};

describe('<FileExplorer />', () => {
  beforeEach(() => {
    render(<FileExplorer dir={testDir} />, { wrapper: TestWrapper });
  });

  it('renders correct number of folders', () => {
    const folders = screen.getAllByRole('group');

    expect(folders).toHaveLength(2);
  });

  it('renders correct number of files', () => {
    const files = screen.getAllByAltText('File');

    expect(files).toHaveLength(3);
  });
});
