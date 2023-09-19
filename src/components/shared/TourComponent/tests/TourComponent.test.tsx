import { render, screen } from '@testing-library/react';
import { forwardRef } from 'react';

import { TourComponent } from '../TourComponent';

import type { ReactNode } from 'react';
import type { RootStore } from '@/src/state';
import type { TourStep } from '@/src/state/slices/tour/models';

import { configureStore, setActiveTourStep } from '@/src/state';
import { AppWrapper } from '@/src/components/AppWrapper';
import { ACTIVE_TOUR_STEP_CLASS } from '@/src/tour';

describe('<TourComponent />', () => {
  const baseComponentText = 'Test Base';
  const baseComponentId = 'test-base-id';
  const TestBaseComponent = forwardRef<HTMLDivElement, { id: string }>(
    ({ id, ...extraProps }, ref) => {
      return (
        <div id={id} {...extraProps} ref={ref}>
          {baseComponentText}
        </div>
      );
    }
  );
  TestBaseComponent.displayName = 'Test';

  const testTourStep: TourStep = {
    componentId: 'test-componentId',
    description: 'Test TestComponent',
    action: 'onClick'
  };

  let testStore: RootStore;

  const testWrapper = ({ children }: { children: ReactNode }) => (
    <AppWrapper store={testStore}>{children}</AppWrapper>
  );

  beforeEach(() => {
    testStore = configureStore();
  });

  it('renders passed component with the passed props', () => {
    render(
      <TourComponent
        Component={TestBaseComponent}
        componentProps={{ id: baseComponentId }}
        componentId="test"
      />,
      { wrapper: testWrapper }
    );

    const baseComponent = screen.getByText(baseComponentText);
    expect(baseComponent).toHaveAttribute('id', baseComponentId);
  });

  it('does not render portal when current step is not active', () => {
    render(
      <TourComponent
        Component={TestBaseComponent}
        componentProps={{ id: baseComponentId }}
        componentId="test"
      />,
      { wrapper: testWrapper }
    );

    const tooltip = screen.queryByRole('alertdialog');
    expect(tooltip).not.toBeInTheDocument();
  });

  it('adds active tour class name to the base component when step is active', () => {
    testStore.dispatch(setActiveTourStep(testTourStep));

    render(
      <TourComponent
        Component={TestBaseComponent}
        componentProps={{ id: baseComponentId }}
        componentId={testTourStep.componentId}
      />,
      { wrapper: testWrapper }
    );

    const baseComponent = screen.getByText(baseComponentText);
    expect(baseComponent).toHaveClass(ACTIVE_TOUR_STEP_CLASS);
  });
});
