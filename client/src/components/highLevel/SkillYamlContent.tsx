import styled from "styled-components";

import CodeEditor from "../lowLevel/CodeEditorWithArrow";
import { useFetchFileQuery } from "../../features/github-api";
import { setEditorContent } from "../../utils/skillPageUtils";
import linkStyle from "../../styles/navLinkStyle";

const GitHubLink = styled.a`
    ${linkStyle}
    text-decoration: underline;
`;

const SkillYamlPageContent: React.FC = () => {
    const deployWfData = useFetchFileQuery(
        "/.github/workflows/TestAndDeploy.yml"
    )

    const contentYaml = setEditorContent(deployWfData);
    return (
        <>
            <h1>YAML pipeline example</h1>
            <p>
                This project is automatically tested and deployed with help of GitHub workflow.
                The action gets triggered on merge to a master branch.
                Workflow run results can be viewed at the following&nbsp;
                <GitHubLink
                    href="https://github.com/SinxRofozoteron/react-resume/actions/workflows/TestAndDeploy.yml"
                >
                    GitHub page
                </GitHubLink>.
                Here is a YAML file with a pipeline:
            </p>
            <CodeEditor code={contentYaml} readOnly language="yaml" />
        </>
    );
};

export default SkillYamlPageContent;