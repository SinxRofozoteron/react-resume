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
                Frontend for this web app is written with help of React library.
                I tried to use library specific features across my code, such as: hooks,
                event handlers, error boundry etc.
            </p>
            <p>
                A good example would be a file with "Login" button component code
                which is responsible for user authantication:
            </p>
            <CodeEditor code={contentLoginBtn} readOnly />
            <br />
            <p>
                Error handling is an important part of the app and is implemented with
                React's Error Boundry component:
            </p>
            <CodeEditor code={contentErrBoundry} readOnly />
            <br />
            <p>In order to load individual skill pages I use React Code Splitting:</p>
            <CodeEditor code={contentSkillPage} readOnly />
        </div>
    );
};

export default SkillReactPageContent;