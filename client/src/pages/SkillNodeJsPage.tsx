import { FC } from "react";

import CodeEditor from "../components/lowLevel/CodeEditor";
import { useFetchServerFileQuery } from "../features/github-api";
import { setEditorContent } from "../utils/skillPageUtils";

const SkillNodeJsPage: FC = () => {
    const fetchServerFileData = useFetchServerFileQuery();
    // Set editor content depending on fetch results
    const editorContent = setEditorContent(fetchServerFileData)

    return (
        <div>
            <h1>Node Js inside of the project</h1>
            <p>
                Backend code for this app is written with Express/Node.
                Here is a source server.ts file used as a main entry point:
            </p>
            <CodeEditor code={editorContent} readOnly />
        </div>
    );
}

export default SkillNodeJsPage;