import { initialViewState, viewSliceReducer, setTheme } from '..';
import { ThemeName } from '..';

describe('setTheme reducer', () => {
  it.each([ThemeName.DARK, ThemeName.LIGHT])('sets %s theme state correctly', theme => {
    const stateAfterUpdate = viewSliceReducer(initialViewState, setTheme(theme));
    const updatedTheme = stateAfterUpdate.theme;

    expect(updatedTheme).toBe(theme);
  });
});
