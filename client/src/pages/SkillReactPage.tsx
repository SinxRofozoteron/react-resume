import { FC } from "react";

import CodeEditor from "../components/baseComponents/CodeEditor";
import { SkillPageWrapper } from "../styles/SkillPageWrapper";

export const SkillReactPage: FC = () => {
    return (
        <SkillPageWrapper>
            <h1>React inside of the project</h1>
            <p>
                This web app is written with help of react framework.
                All the components used are functional. You can see a React comonent used
                to render this page below:
            </p>
            <CodeEditor code="React code" readOnly />
        </SkillPageWrapper>
    );
};