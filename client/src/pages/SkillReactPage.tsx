import { FC } from "react";

import CodeEditor from "../components/baseComponents/CodeEditor";
import { useFetchSkillReactPageQuery } from "../features/github/github-api";
import { SkillPageWrapper } from "../styles/SkillPageWrapper";

export const SkillReactPage: FC = () => {
    const {
        data: reactPageCode = "", error, isError, isLoading
    } = useFetchSkillReactPageQuery();

    let editorConetent: string;
    if (isLoading) {
        editorConetent = "// Fething file from GitHub ...";
    } else {
        if (isError) {
            editorConetent = `// An Error occured during process of fetching file from GitHub:\n`;
            editorConetent += JSON.stringify(error);
        } else {
            editorConetent = reactPageCode;
        }
    }

    return (
        <SkillPageWrapper>
            <h1>React inside of the project</h1>
            <p>
                This web app is written with help of react framework.
                All the components used are functional. You can see a React comonent used
                to render this page below:
            </p>
            <CodeEditor code={editorConetent} readOnly />
        </SkillPageWrapper>
    );
};