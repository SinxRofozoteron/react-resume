import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CloseButton } from '../CloseButton';

import { TestWrapper } from '@/src/testUtils';

describe('<CloseButton />', () => {
  const testAriaLabel = 'test-close-button';
  const onClickMock = jest.fn();

  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();

    render(<CloseButton aria-label={testAriaLabel} onClick={onClickMock} />, {
      wrapper: TestWrapper
    });
  });

  it('has accessible name', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveAccessibleName(testAriaLabel);
  });

  it('calls onClick handler on click', async () => {
    const button = screen.getByRole('button');

    await user.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
