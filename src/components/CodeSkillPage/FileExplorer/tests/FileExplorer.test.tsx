import { render, screen } from '@testing-library/react';

import { FileExplorer } from '../FileExplorer';

import type { ReactNode } from 'react';

import { configureStore } from '@/src/state';
import { AppWrapper } from '@/src/components/AppWrapper';

const testDir = {
  files: ['rootFile.ts', 'package.json'],
  src: {
    components: {
      files: ['component1.tsx']
    }
  }
};

describe('<FileExplorer />', () => {
  const testStore = configureStore();
  const testWrapper = ({ children }: { children: ReactNode }) => (
    <AppWrapper store={testStore}>{children}</AppWrapper>
  );

  beforeEach(() => {
    render(<FileExplorer dir={testDir} />, { wrapper: testWrapper });
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
