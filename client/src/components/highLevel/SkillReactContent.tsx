import CodeEditor from "../lowLevel/CodeEditorWithArrow";
import { useFetchFileQuery } from "../../features/github-api";
import { setEditorContent } from "../../utils/skillPageUtils";

const SkillReactPageContent: React.FC = () => {
    const srcPath = "/client/src";
    const folderPath = srcPath + "/components/lowLevel";
    const loginButtonFileData = useFetchFileQuery(
        folderPath + "/AuthButton.tsx"
    );
    const errorBoundryFileData = useFetchFileQuery(
        folderPath + "/ErrorBoundry.tsx"
    );
    const skillPageFileData = useFetchFileQuery(
        srcPath + "/pages/SkillPage.tsx"
    )

    const contentLoginBtn = setEditorContent(loginButtonFileData);
    const contentErrBoundry = setEditorContent(errorBoundryFileData);
    const contentSkillPage = setEditorContent(skillPageFileData);
    return (
        <div>
            <h1>React inside this project</h1>
            <p>
                Front-end for this web app is written through React library.
                I used library specific features across my code, such as: hooks,
                event handlers, error boundary etc.
            </p>
            <p>
                A good example of this is the "Login" button component code,
                which is responsible for user authentication:
            </p>
            <CodeEditor code={contentLoginBtn} readOnly />
            <br />
            <p>
                Error handling is an important part of the app and is implemented with
                React's Error Boundary component:
            </p>
            <CodeEditor code={contentErrBoundry} readOnly />
            <br />
            <p>In order to load individual skill pages I used React Code Splitting:</p>
            <CodeEditor code={contentSkillPage} readOnly />
        </div>
    );
};

export default SkillReactPageContent;