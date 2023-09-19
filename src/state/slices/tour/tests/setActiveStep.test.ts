import { setActiveTourStep, tourSliceReducer, initialTourState } from '../tourSlice';

import type { TourStep } from '../models';

describe('setActiveTourStep reducer', () => {
  const testTourStep: TourStep = {
    componentId: 'test',
    description: 'test description',
    action: 'onClick'
  };
  it('sets activeStepState', () => {
    const stateAfterUpdate = tourSliceReducer(
      initialTourState,
      setActiveTourStep(testTourStep)
    );
    expect(stateAfterUpdate.activeStep).toEqual(testTourStep);
  });
});
