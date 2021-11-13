import { FC } from "react";

import CodeEditor from "../components/baseComponents/CodeEditor";
import { setEditorContent } from "../utils/skillPageUtils";
import { useFetchSkillReactPageQuery } from "../features/github-api";
import { SkillPageWrapper } from "../styles/SkillPageWrapper";

const SkillReactPage: FC = () => {
    const fetchReactPageData = useFetchSkillReactPageQuery();
    const editorContent = setEditorContent(fetchReactPageData);

    return (
        <SkillPageWrapper>
            <h1>React inside of the project</h1>
            <p>
                This web app is written with help of react framework.
                All the components used are functional. You can see a React comonent used
                to render this page below:
            </p>
            <CodeEditor code={editorContent} readOnly />
        </SkillPageWrapper>
    );
};

export default SkillReactPage;