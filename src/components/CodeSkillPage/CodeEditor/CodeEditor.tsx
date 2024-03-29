import Editor from '@monaco-editor/react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { forwardRef } from 'react';

import { useCodeFormatter } from './useCodeFormatter';
import { useSelector } from '../../../hooks';
import { EmptyStateOverlay } from './EmptyStateOverlay';
import { LoadingStateOverlay } from './LoadingStateOverlay';
import { STATIC_TOUR_IDS } from '../../../tour';
import { TourComponent } from '../../shared';

import type { OnMount, BeforeMount } from '@monaco-editor/react';

import { dark, light } from '@/src/styles';
import { selectTheme } from '@/src/state';

const CodeEditorWrapper = styled.div`
  position: relative;
  float: inline-end;
  height: 80%;
  width: 100%;
  margin-top: 10px;
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 2;

  @media screen and (min-width: 700px) {
    height: auto;
  }

  @media screen and (min-width: 900px) {
    border: 2px solid ${({ theme }) => theme.thirdColor};
  }
`;

export const CodeEditor = forwardRef<HTMLDivElement>((props, ref) => {
  const theme = useSelector(selectTheme);
  const { data, processing } = useCodeFormatter();

  const handleEditorWillMount: BeforeMount = monaco => {
    monaco.editor.defineTheme('dark', {
      base: 'vs-dark',
      colors: {
        'editor.background': dark.secondaryColor,
        'editor.lineHighlightBackground': lighten(0.1, dark.secondaryColor),
        'editorCursor.foreground': dark.fourthColor,
        'editorLineNumber.foreground': dark.fourthColor,
        'inputValidation.infoBackground': dark.primaryColor,
        'inputValidation.infoBorder': dark.thirdColor
      },
      inherit: true,
      rules: []
    });

    monaco.editor.defineTheme('light', {
      base: 'vs',
      colors: {
        'editor.background': light.secondaryColor,
        'editor.lineHighlightBackground': lighten(0.1, light.secondaryColor),
        'editorCursor.foreground': light.fourthColor,
        'editorLineNumber.foreground': light.fourthColor,
        'inputValidation.infoBackground': light.primaryColor,
        'inputValidation.infoBorder': light.thirdColor
      },
      inherit: true,
      rules: []
    });
  };

  const handleEditorDidMount: OnMount = editor => {
    const messageContribution = editor.getContribution(
      'editor.contrib.messageController'
    ) as any;
    editor.onDidAttemptReadOnlyEdit(() => {
      messageContribution.showMessage(
        'Editor is used for demonstration purposes only',
        editor.getPosition()
      );
    });
  };

  return (
    <CodeEditorWrapper aria-busy={processing} ref={ref} {...props}>
      {processing ? <LoadingStateOverlay /> : null}
      {data ? (
        <Editor
          wrapperProps={{
            'data-test': 'code-editor'
          }}
          value={data.code || ''}
          language={data.language ? data.language : undefined}
          height="100%"
          theme={theme}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            showUnused: true,
            lineNumbersMinChars: 3,
            folding: false,
            fontSize: 16,
            scrollBeyondLastLine: false,
            readOnly: true
          }}
        />
      ) : (
        <EmptyStateOverlay />
      )}
    </CodeEditorWrapper>
  );
});

CodeEditor.displayName = 'CodeEditor';

export const CodeEditorAsTourComponent = () => {
  return (
    <TourComponent Component={CodeEditor} componentId={STATIC_TOUR_IDS.CODE_EDITOR} />
  );
};
