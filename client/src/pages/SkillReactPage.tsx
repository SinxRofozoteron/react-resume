import { FC } from "react";

import CodeEditor from "../components/lowLevel/CodeEditor";
import { setEditorContent } from "../utils/skillPageUtils";
import { useFetchSkillReactPageQuery } from "../features/github-api";

const SkillReactPage: FC = () => {
    const fetchReactPageData = useFetchSkillReactPageQuery();
    const editorContent = setEditorContent(fetchReactPageData);

    return (
        <div>
            <h1>React inside of the project</h1>
            <p>
                This web app is written with help of react framework.
                All the components used are functional. You can see a React comonent used
                to render this page below:
            </p>
            <CodeEditor code={editorContent} readOnly />
        </div>
    );
};

export default SkillReactPage;