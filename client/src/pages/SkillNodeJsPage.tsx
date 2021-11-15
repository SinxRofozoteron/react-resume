import { FC } from "react";

import CodeEditor from "../components/lowLevel/CodeEditor";
import { useFetchServerFileQuery } from "../features/github-api";
import { setEditorContent } from "../utils/skillPageUtils";
import { SkillPageWrapper } from "../styles/SkillPageWrapper";

const SkillNodeJsPage: FC = () => {
    const fetchServerFileData = useFetchServerFileQuery();
    // Set editor content depending on fetch results
    const editorContent = setEditorContent(fetchServerFileData)

    return (
        <SkillPageWrapper>
            <h1>Node Js inside of the project</h1>
            <p>
                Backend code for this app is written with Express/Node.
                Here is a source server.ts file used as a main entry point:
            </p>
            <CodeEditor code={editorContent} readOnly />
        </SkillPageWrapper>
    );
}

export default SkillNodeJsPage;