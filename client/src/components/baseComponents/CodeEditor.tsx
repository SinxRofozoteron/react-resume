import { FC } from "react";
import styled from "styled-components";
import Editor, { OnMount } from "@monaco-editor/react";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import JSXHighlighter from "monaco-jsx-highlighter";

import {
  CodeEditorProps,
  JSXHighlighterType,
} from "../../types/componentTypes";

// Code editor style wrapper
const CodeEditorWrapper = styled.div`
  .monaco-editor-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: auto;
    overflow: hidden;
  }
  .mtk9 {
    color: rgb(136, 198, 190);
  }
  .mtk1 {
    color: rgb(121, 182, 242);
  }
  // JSX styling
  .JSXElement.JSXIdentifier {
    color: rgb(252, 146, 158);
  }
  .JSXElement.JSXBracket {
    color: rgb(136, 198, 190);
  }
  .JSXElement.JSXText {
    color: white;
  }
  .JSXElement.JSXGlyph {
    background: cyan;
    opacity: 0.25;
  }

  .JSXOpeningFragment.JSXBracket {
    color: rgb(136, 198, 190);
    font-weight: bold;
  }

  .JSXClosingFragment.JSXBracket {
    color: rgb(136, 198, 190);
    font-weight: bold;
  }

  .JSXOpeningElement.JSXBracket {
    color: rgb(136, 198, 190);
    font-weight: bold;
  }

  .JSXOpeningElement.JSXIdentifier {
    color: royalblue;
  }

  .JSXClosingElement.JSXBracket {
    color: rgb(136, 198, 190);
    font-weight: lighter;
  }

  .JSXClosingElement.JSXIdentifier {
    color: royalblue;
    font-weight: lighter;
  }

  .JSXAttribute.JSXIdentifier {
    color: rgb(197, 165, 197);
  }

  .JSXExpressionContainer.JSXBracket {
    color: rgb(136, 198, 190);
  }

  .JSXSpreadChild.JSXBracket {
    color: rgb(136, 198, 190);
  }

  .JSXSpreadAttribute.JSXBracket {
    color: rgb(136, 198, 190);
  }
`;

const CodeEditor: FC<CodeEditorProps> = ({
  code,
  readOnly = false,
  onChange,
}) => {
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    // Add custom message to a readOnly tooltip
    if (readOnly) {
      const messageContribution = editor.getContribution(
        "editor.contrib.messageController"
      ) as any;
      editor.onDidAttemptReadOnlyEdit(() => {
        messageContribution.showMessage(
          "Editor is used for demonstration purposes only",
          editor.getPosition()
        );
      });
    }

    // Add JSX syntax highlighting
    const babelParse = (code: string) =>
      parse(code, {
        sourceType: "module",
        plugins: ["jsx"],
      });

    const highlighter: JSXHighlighterType = new JSXHighlighter(
      monaco,
      babelParse,
      traverse,
      editor
    );
    highlighter.highLightOnDidChangeModelContent(
      1,
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  return (
    <CodeEditorWrapper>
      <Editor
        value={code}
        onChange={onChange}
        width="70%"
        height="500px"
        language="typescript"
        theme="vs-dark"
        className="monaco-editor"
        wrapperClassName="monaco-editor-wrapper"
        options={{
          minimap: { enabled: false },
          showUnused: true,
          lineNumbersMinChars: 3,
          folding: false,
          fontSize: 16,
          scrollBeyondLastLine: false,
          readOnly: readOnly,
        }}
        onMount={handleEditorDidMount}
      />
    </CodeEditorWrapper>
  );
};

export default CodeEditor;
