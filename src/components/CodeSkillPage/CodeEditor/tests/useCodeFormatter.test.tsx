import { renderHook, waitFor, act } from '@testing-library/react';
import { format } from 'prettier/standalone';

import { useCodeFormatter } from '../useCodeFormatter';

import type { ReactNode } from 'react';

// eslint-disable-next-line max-len
import { useLazyFetchFileQuery } from '@/src/state/apis/backendServiceApi/endpoints/fetchFile';
import { AppWrapper } from '@/src/components/AppWrapper';
import { configureStore, setActiveCodeEditorFile } from '@/src/state';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      repo: 'test-repo'
    }
  })
}));

jest.mock('prettier/standalone', () => ({
  format: jest.fn()
}));

jest.mock('../../../../state/apis/backendServiceApi/endpoints/fetchFile', () => {
  const useLazyFetchFileQueryMock = jest.fn();
  return {
    useLazyFetchFileQuery: useLazyFetchFileQueryMock
  };
});

describe('useCodeFormatter', () => {
  const useLazyFetchFileQueryMock = useLazyFetchFileQuery as jest.MockedFunction<
    typeof useLazyFetchFileQuery
  >;

  const testPath = 'test/path.js';

  const testStore = configureStore();
  testStore.dispatch(setActiveCodeEditorFile(testPath));
  const testWrapper = ({ children }: { children: ReactNode }) => (
    <AppWrapper store={testStore}>{children}</AppWrapper>
  );

  const testRawCode = '// js comment';
  const formatMock = (format as unknown as jest.SpyInstance).mockResolvedValue(
    testRawCode
  );

  beforeEach(jest.clearAllMocks);

  it('fetches data on initial render, refethes on active file change', async () => {
    const triggerMock = jest.fn();
    // @ts-expect-error mismatch bewteen mock return type and actual return type
    useLazyFetchFileQueryMock.mockReturnValue([triggerMock, { data: null }]);

    renderHook(() => useCodeFormatter(), { wrapper: testWrapper });

    await waitFor(() => {
      expect(triggerMock).toHaveBeenCalledTimes(1);
      expect(triggerMock).toHaveBeenCalledWith(
        {
          repo: 'test-repo',
          filePath: testPath
        },
        true
      );
    });

    const newActiveFile = 'newActiveFile.json';
    await act(() => testStore.dispatch(setActiveCodeEditorFile(newActiveFile)));

    await waitFor(() => {
      expect(triggerMock).toHaveBeenCalledTimes(2);
      expect(triggerMock).toHaveBeenCalledWith(
        {
          repo: 'test-repo',
          filePath: newActiveFile
        },
        true
      );
    });
  });

  it('formats fetched code', async () => {
    const triggerMock = jest.fn();
    // @ts-expect-error mismatch bewteen mock return type and actual return type
    useLazyFetchFileQueryMock.mockReturnValue([
      triggerMock,
      { data: { name: testPath, content: testRawCode } }
    ]);

    const { result } = renderHook(() => useCodeFormatter(), { wrapper: testWrapper });

    await waitFor(() => {
      expect(formatMock).toHaveBeenCalledTimes(1);
      expect(formatMock).toHaveBeenCalledWith(testRawCode, {
        parser: 'babel',
        plugins: expect.any(Array)
      });
    });

    await waitFor(() => {
      expect(result.current).toEqual({
        data: { code: testRawCode, language: 'javascript' },
        processing: false
      });
    });
  });
});
