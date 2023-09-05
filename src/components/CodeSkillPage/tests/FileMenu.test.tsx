import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FileMenu, FILE_EXPLORER_CONTAINER_ID } from '../FileMenu';

import { TestWrapper } from '@/src/testUtils';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      repo: 'testRepo'
    }
  })
}));

jest.mock('../../../state/apis/backendServiceApi/endpoints/fetchRepoTree', () => ({
  ...jest.requireActual(
    '../../../state/apis/backendServiceApi/endpoints/fetchRepoTree'
  ),
  useFetchRepoTreeQuery: () => ({
    data: {
      files: ['rootFile.ts', 'package.json'],
      src: {
        components: {
          files: ['component1.tsx']
        }
      }
    }
  })
}));

describe('<FileMenu />', () => {
  let openBtn: HTMLButtonElement;

  const user = userEvent.setup();

  beforeEach(() => {
    render(<FileMenu />, { wrapper: TestWrapper });

    openBtn = screen.getByRole('button', { name: 'Open File' });
  });

  it('explorer opens and closes correctly', async () => {
    const explorerContainer = screen.getByTestId(FILE_EXPLORER_CONTAINER_ID);
    expect(explorerContainer).not.toHaveClass('expanded');

    await user.click(openBtn);
    expect(explorerContainer).toHaveClass('expanded');

    const closeBtn = screen.getByRole('button', { name: 'Close File Explorer' });
    await user.click(closeBtn);
    expect(explorerContainer).not.toHaveClass('expanded');
  });
});
