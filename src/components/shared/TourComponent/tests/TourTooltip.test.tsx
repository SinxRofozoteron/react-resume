import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TourTooltip } from '../TourTooltip';

import type { ReactNode } from 'react';

import { AppWrapper } from '@/src/components/AppWrapper';
import { configureStore, stopTour } from '@/src/state';

describe('<TourTooltip />', () => {
  // @ts-expect-error mismatch between mock and actual type
  const testRelatedComponentRect: DOMRect = {
    height: 100,
    width: 100,
    x: 20,
    y: 20,
    top: 20,
    bottom: 20,
    right: 20,
    left: 20
  };
  const testTooltipText = 'Test Tooltip';

  const user = userEvent.setup();

  const testStore = configureStore();
  const dispatchSpy = jest.spyOn(testStore, 'dispatch');

  const testWrapper = ({ children }: { children: ReactNode }) => (
    <AppWrapper store={testStore}>{children}</AppWrapper>
  );

  beforeEach(() => {
    render(
      <TourTooltip
        text={testTooltipText}
        relatedComponentRect={testRelatedComponentRect}
      />,
      { wrapper: testWrapper }
    );
  });

  it('dispatches stopTour action when cancel tour dialog is confirmed', async () => {
    const expectedAction = stopTour();
    const yesButton = screen.getByRole('button', { name: 'Yes' });

    await user.click(yesButton);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
