import type { RootState } from '../store';

export const selectTheme = (state: RootState) => state.view.theme;

export const selectActiveCodeEditorFile = (state: RootState) =>
  state.view.activeCodeEditorFile;

export const selectOpenFileExplorer = (state: RootState) => state.view.openFileExplorer;
