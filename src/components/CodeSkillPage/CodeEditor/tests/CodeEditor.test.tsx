import { screen, render } from '@testing-library/react';

import { CodeEditor } from '../CodeEditor';
import { useCodeFormatter } from '../useCodeFormatter';

import { TestWrapper } from '@/src/testUtils';

jest.mock('../useCodeFormatter', () => ({
  useCodeFormatter: jest.fn()
}));

describe('<CodeEditor />', () => {
  const useCodeFormatterMock = useCodeFormatter as unknown as jest.MockedFunction<
    typeof useCodeFormatter
  >;

  beforeEach(jest.clearAllMocks);

  it('renders empty state component when there is no data', () => {
    useCodeFormatterMock.mockReturnValue({ data: null, processing: false });

    render(<CodeEditor />, { wrapper: TestWrapper });

    const codeEditor = screen.queryByTestId('code-editor');
    const emptyStateOverlay = screen.queryByRole('region');

    expect(codeEditor).not.toBeInTheDocument();
    expect(emptyStateOverlay).toBeVisible();
  });

  it('renders code editor component when there is data', () => {
    useCodeFormatterMock.mockReturnValue({
      data: { code: '// comment', language: 'javascript' },
      processing: false
    });

    render(<CodeEditor />, { wrapper: TestWrapper });

    const codeEditor = screen.queryByTestId('code-editor');
    const emptyStateOverlay = screen.queryByRole('region');

    expect(codeEditor).toBeVisible();
    expect(emptyStateOverlay).not.toBeInTheDocument();
  });

  it('renders loading overlay during code fetching/formatting', () => {
    useCodeFormatterMock.mockReturnValue({
      data: { code: '// comment', language: 'javascript' },
      processing: true
    });

    render(<CodeEditor />, { wrapper: TestWrapper });

    const codeEditor = screen.queryByTestId('code-editor');
    const loadingStateOverlay = screen.queryByLabelText('Loading');

    expect(codeEditor).toBeInTheDocument();
    expect(loadingStateOverlay).toBeVisible();
  });

  it('does not render loading overlay after code data was processed', () => {
    useCodeFormatterMock.mockReturnValue({
      data: { code: '// comment', language: 'javascript' },
      processing: false
    });

    render(<CodeEditor />, { wrapper: TestWrapper });

    const codeEditor = screen.queryByTestId('code-editor');
    const loadingStateOverlay = screen.queryByLabelText('Loading');

    expect(codeEditor).toBeVisible();
    expect(loadingStateOverlay).not.toBeInTheDocument();
  });
});
