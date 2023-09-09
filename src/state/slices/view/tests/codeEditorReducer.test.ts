import { initialViewState, viewSliceReducer, setActiveCodeEditorFile } from '..';

describe('setActiveCodeEditorFile reducer', () => {
  it.each(['testActiveCodeFile', null])(
    'sets %s activeCodeEditorFile state correctly',
    activeFile => {
      const stateAfterUpdate = viewSliceReducer(
        initialViewState,
        setActiveCodeEditorFile(activeFile)
      );
      const updatedActiveFile = stateAfterUpdate.activeCodeEditorFile;

      expect(updatedActiveFile).toBe(activeFile);
    }
  );
});
