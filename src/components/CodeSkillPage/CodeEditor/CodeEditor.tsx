import Editor from '@monaco-editor/react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { useCodeFormatter } from './useCodeFormatter';

import type { OnMount, BeforeMount } from '@monaco-editor/react';

import { dark, light } from '@/src/styles';
import { ThemeName } from '@/src/state/slices';
import { useSelector } from '@/src/hooks';

const CodeEditorWrapper = styled.div`
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

export const CodeEditor = () => {
  const theme = useSelector(state => state.view.theme);
  const { data } = useCodeFormatter();

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
    <CodeEditorWrapper>
      <Editor
        value={data ? data.code : ''}
        language={data?.language ? data.language : undefined}
        height="100%"
        theme={theme === ThemeName.light ? 'light' : 'dark'}
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
    </CodeEditorWrapper>
  );
};
