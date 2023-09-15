import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfirmationDialog } from '../ConfirmationDialog';

import { TestWrapper } from '@/src/testUtils';

describe('<ConfirmationDialog />', () => {
  const user = userEvent.setup();

  const yesOnClickMock = jest.fn();
  const noOnClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <ConfirmationDialog
        onCloseClick={() => {}}
        onYesClick={yesOnClickMock}
        onNoClick={noOnClickMock}
        show={true}
      />,
      { wrapper: TestWrapper }
    );
  });

  it('calls yes onClick handler when Yes button is clicked', async () => {
    const yesButton = screen.getByRole('button', { name: 'Yes' });

    await user.click(yesButton);

    expect(yesOnClickMock).toHaveBeenCalledTimes(1);
  });

  it('calls no onClick handler when No button is clicked', async () => {
    const noButton = screen.getByRole('button', { name: 'No' });

    await user.click(noButton);

    expect(noOnClickMock).toHaveBeenCalledTimes(1);
  });
});
