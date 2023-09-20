import { setOpenTourComplete, tourSliceReducer, initialTourState } from '../tourSlice';

describe('setOpenTourComplete reducer', () => {
  it.each([true, false])(
    'setOpenTourComplete sets openTourCompleteModal state to %s',
    expectedState => {
      const stateAfterUpdate = tourSliceReducer(
        initialTourState,
        setOpenTourComplete(expectedState)
      );

      expect(stateAfterUpdate.openTourCompleteModal).toBe(expectedState);
    }
  );
});
