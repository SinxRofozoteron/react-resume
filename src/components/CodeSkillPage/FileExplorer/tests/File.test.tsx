import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { File } from '../File';

import type { ReactNode } from 'react';

import { AppWrapper } from '@/src/components/AppWrapper';
import { configureStore, setActiveCodeEditorFile } from '@/src/state';

describe('<File />', () => {
  const user = userEvent.setup();

  const testStore = configureStore();
  const dispatchSpy = jest.spyOn(testStore, 'dispatch');

  const testWrapper = ({ children }: { children: ReactNode }) => (
    <AppWrapper store={testStore}>{children}</AppWrapper>
  );

  it('dispatches setActiveCodeEditorFile on click', async () => {
    const testPath = 'test/path.ts';
    const expectedAction = setActiveCodeEditorFile(testPath);

    render(<File name="TestFile" level={0} path={testPath} />, {
      wrapper: testWrapper
    });

    const file = screen.getByRole('treeitem');

    await user.click(file);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
