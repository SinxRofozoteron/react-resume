import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { Link } from "react-router-dom";

import linkStyle from "../../styles/navLinkStyle";
import { ReactComponent as DefaultSkillIcon } from "../../assets/skill-default.svg";
import { ReactComponent as ReactIcon } from "../../assets/skill-react.svg";
import { ReactComponent as JSIcon } from "../../assets/skill-js.svg";
import { ReactComponent as PythonIcon } from "../../assets/skill-python.svg";
import { ReactComponent as ReduxIcon } from "../../assets/skill-redux.svg";
import { ReactComponent as TSIcon } from "../../assets/skill-ts.svg";
import { ReactComponent as HTMLIcon } from "../../assets/skill-html.svg";
import { ReactComponent as CSSIcon } from "../../assets/skill-css.svg";
import { ReactComponent as XMLIcon } from "../../assets/skill-xml.svg";
import { ReactComponent as JSONIcon } from "../../assets/skill-json.svg";
import { ReactComponent as SQLIcon } from "../../assets/skill-sql.svg";
import { ReactComponent as SeleniumIcon } from "../../assets/skill-selenium.svg";
import { ReactComponent as WindowsIcon } from "../../assets/skill-windows.svg";
import { ReactComponent as MacOsIcon } from "../../assets/skill-macos.svg";
import { ReactComponent as JiraIcon } from "../../assets/skill-jira.svg";
import { ReactComponent as GITIcon } from "../../assets/skill-git.svg";
import { ReactComponent as WebpackIcon } from "../../assets/skill-webpack.svg";
import { ReactComponent as QAIcon } from "../../assets/skill-qa.svg";
import { ReactComponent as NodeJsIcon } from "../../assets/skill-nodejs.svg";
import ConditionalWrapper from "../models/ConditionalWrapper";

type SkillIcon = typeof DefaultSkillIcon;

const icons = {
    "React": ReactIcon,
    "JavaScript": JSIcon,
    "Python": PythonIcon,
    "Redux": ReduxIcon,
    "TypeScript": TSIcon,
    "HTML": HTMLIcon,
    "CSS": CSSIcon,
    "XML": XMLIcon,
    "JSON": JSONIcon,
    "SQL": SQLIcon,
    "Selenium WebDriver": SeleniumIcon,
    "Windows OS": WindowsIcon,
    "macOS": MacOsIcon,
    "JIRA": JiraIcon,
    "GIT": GITIcon,
    "Webpack": WebpackIcon,
    "Quality Assurance": QAIcon,
    "Node JS": NodeJsIcon
}

interface SkillHeadProps {
    name: string;
    link?: string | false;
    asLink?: boolean;
}

const MainContainer = styled.div<{ href?: string }>`
    display: flex;
    align-items: center;
    @media screen and (min-width: 985px) {
        align-items: flex-start;
    }
    margin-bottom: 10px;
    text-decoration: none;
`;
const LinkContainer = MainContainer.withComponent(Link);

const StyledHeading = styled.h3<{ withLinkStyle?: boolean }>`
    ${({ withLinkStyle }) => withLinkStyle ? css`
        ${linkStyle}
        text-decoration: underline;
    ` : false
    };
    margin: 0;
    font-size: 1.5rem;
    @media screen and (min-width: 530px) {
        font-size: 1.75rem;
    }
    @media screen and (min-width: 680px) {
        font-size: 2.05rem;
    }
    @media screen and (min-width: 985px) {
        position: relative;
        left: -25px;
        bottom: -30px;
        background-color: ${({ theme }) => transparentize(0.2, theme.secondaryColor)};
    }
`;

const SkillHead: React.FC<SkillHeadProps> = ({ name, link, asLink }) => {
    // Get Skill icon
    let Icon: SkillIcon;
    if (icons.hasOwnProperty(name)) {
        Icon = icons[name as keyof typeof icons];
    } else {
        Icon = DefaultSkillIcon;
    }

    return (
        <ConditionalWrapper
            condition={true}
            wrapper={asLink && link ? LinkContainer : MainContainer}
            to={asLink && link ? link : undefined}
        >
            <Icon className="icon" />
            <StyledHeading withLinkStyle={Boolean(link)}>
                {name}
            </StyledHeading>
        </ConditionalWrapper>
    )
}

export default SkillHead;