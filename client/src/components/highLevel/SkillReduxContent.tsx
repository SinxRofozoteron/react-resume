import CodeEditor from "../lowLevel/CodeEditorWithArrow";
import { useFetchFileQuery } from "../../features/github-api";
import { setEditorContent } from "../../utils/skillPageUtils";

const SkillReduxPageContent: React.FC = () => {
    const srcPath = "/client/src";
    const storeFileData = useFetchFileQuery(
        srcPath + "/app/store.ts"
    );
    const githubApiData = useFetchFileQuery(
        srcPath + "/features/github-api.ts"
    );

    const contentStore = setEditorContent(storeFileData);
    const contentGithubApi = setEditorContent(githubApiData);
    return (
        <>
            <h1>Redux inside this project</h1>
            <p>
                Redux Toolkit is used to
                manage state across this web app.
                Below is the redux store file:
            </p>
            <CodeEditor code={contentStore} readOnly />
            <br />
            <p>
                I used RTK Query for interaction with the back-end.
                Here is file with the api piece that is responsible for
                fetching GitHub files:
            </p>
            <CodeEditor code={contentGithubApi} readOnly />
        </>
    );
};

export default SkillReduxPageContent;