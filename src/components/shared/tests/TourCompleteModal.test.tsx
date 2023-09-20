import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// @ts-expect-error this is custom mock defined below
import { _pushMock } from 'next/router';

import { TourCompleteModal } from '../TourCompleteModal';
import { AppWrapper } from '../../AppWrapper';

import type { ReactNode } from 'react';

import { configureStore, setOpenTourComplete } from '@/src/state';

jest.mock('next/router', () => {
  const pushMock = jest.fn();

  return {
    ...jest.requireActual('next/router'),
    useRouter: () => ({
      push: pushMock
    }),
    _pushMock: pushMock
  };
});

describe('<TourCompleteModal />', () => {
  const user = userEvent.setup();

  const testStore = configureStore();
  testStore.dispatch(setOpenTourComplete(true));

  const dispatchSpy = jest.spyOn(testStore, 'dispatch');
  const testWrapper = ({ children }: { children: ReactNode }) => (
    <AppWrapper store={testStore}>{children}</AppWrapper>
  );

  beforeEach(() => {
    render(<TourCompleteModal />, { wrapper: testWrapper });
  });

  // eslint-disable-next-line max-len
  it("calls router.push('/expertise') when 'Go to expertise page' button is clicked", async () => {
    const button = screen.getByRole('button', { name: 'Go to expertise page' });

    await user.click(button);

    expect(_pushMock).toHaveBeenCalledTimes(1);
    expect(_pushMock).toHaveBeenCalledWith('/expertise');
  });

  // eslint-disable-next-line max-len
  it('dispatches setOpenTourComplete(false) action when "Stay here" button is clicked', async () => {
    const expectedAction = setOpenTourComplete(false);
    const button = screen.getByRole('button', { name: 'Stay here' });

    await user.click(button);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
