import styled from "styled-components";

import { CodeEditorProps } from "../../types/componentTypes";
import CodeEditor from "./CodeEditor";
import ArrowRightPng from "./ArrowRightPng";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px auto;
    height: 500px;
    width: 100%;
    .outer-editor-wrapper {
        width: 95%;
        height: 100%;
    }

    .monaco-editor-wrapper {
        width: 100% !important;
        border: 2px solid ${({ theme }) => theme.fourthColor};
    }
    .monaco-editor {
        * {
        font-size: 0.7rem !important;

        @media screen and (min-width: 390px) {
            font-size: 0.9rem !important;
        }
        @media screen and (min-width: 490px) {
            font-size: 1.1rem !important;
        }

        }
        .margin {
            display: none;
            @media screen and (min-width: 490px) {
                display: block;
            }
        }
        .monaco-scrollable-element.editor-scrollable {
            left: 5px !important;
            width: 100% !important;
            @media screen and (min-width: 490px) {
                left: 39px !important;
                width: calc(100% - 39px) !important;
            }
        }
    }

    @media screen and (min-width: 950px) {
        padding: 10px;
        background-color: ${({ theme }) => theme.fourthColor};
        .outer-editor-wrapper {
            width: 70%;
        }
    }
`;
const Arrow = styled(ArrowRightPng)`
    display: none;
    height: 100%;
    width: 30%;
    @media screen and (min-width: 950px) {
        display: block;
    }
`;



const CodeEditorWithArrow: React.FC<CodeEditorProps> = (props) => {
    return (
        <Container>
            <Arrow />
            <CodeEditor {...props} />
        </Container>
    );
}

export default CodeEditorWithArrow;