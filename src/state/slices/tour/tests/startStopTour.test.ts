import { startTour, tourSliceReducer, initialTourState, stopTour } from '../tourSlice';

describe('startTour reducer', () => {
  it('sets tourId correctly', () => {
    const testTourId = 'tourIdTest';
    const stateAfterUpdate = tourSliceReducer(initialTourState, startTour(testTourId));

    expect(stateAfterUpdate.tourId).toEqual(testTourId);
  });
});

describe('stopTour reducer', () => {
  it('sets tourId to null', () => {
    const stateAfterUpdate = tourSliceReducer(initialTourState, stopTour());

    expect(stateAfterUpdate.tourId).toBeNull();
    expect(stateAfterUpdate.openTourCompleteModal).toBe(true);
  });
});
