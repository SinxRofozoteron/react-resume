import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Folder } from '../Folder';

import { TestWrapper } from '@/src/testUtils';

describe('<Folder />', () => {
  const testFile = 'testFile.tsx';
  const testFolder = 'testFolder';

  const user = userEvent.setup();

  it('renders root folder with role tree and it has accessible name', () => {
    render(<Folder name={''}>{testFile}</Folder>, { wrapper: TestWrapper });

    const rootFolder = screen.getByRole('tree');
    expect(rootFolder).toHaveAccessibleName('root folder');
  });

  it('renders nested folder with the correct name and aria-expanded attribute', () => {
    render(<Folder name={testFolder}>{testFile}</Folder>, { wrapper: TestWrapper });

    const nestedFolder = screen.getByRole('treeitem');
    expect(nestedFolder).toHaveAccessibleName(/testFolder/);
    expect(nestedFolder).toHaveAttribute('aria-expanded', 'false');
  });

  it('folder is closed on initial render and opens onClick', async () => {
    render(
      <Folder name={testFolder}>
        <li>{testFile}</li>
      </Folder>,
      { wrapper: TestWrapper }
    );

    const list = screen.getByRole('group');
    expect(list).not.toHaveClass('expanded');

    const icon = screen.getByRole('img');
    await user.click(icon);

    expect(list).toHaveClass('expanded');
  });
});
