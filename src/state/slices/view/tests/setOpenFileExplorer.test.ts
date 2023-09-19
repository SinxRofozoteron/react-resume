import { initialViewState, viewSliceReducer, setOpenFileExplorer } from '..';

describe('setOpenFileExplorer reducer', () => {
  it.each([{ open: true }, { open: false }])(
    'setOpenFileExplorer($open) sets openFileExplorer state to $open',
    ({ open }) => {
      const stateAfterUpdate = viewSliceReducer(
        initialViewState,
        setOpenFileExplorer(open)
      );

      expect(stateAfterUpdate.openFileExplorer).toBe(open);
    }
  );
});
