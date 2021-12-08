import styled from "styled-components";
import { transparentize } from "polished";

import { ReactComponent as DefaultSkillIcon } from "../../assets/skill-default.svg";

type SkillIcon = typeof DefaultSkillIcon;
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
`;

const StyledHeading = styled.h3`
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
        bottom: -20px;
        background-color: ${({ theme }) => transparentize(0.2, theme.secondaryColor)};
    }
`;

const SkillHead: React.FC<SkillHeadProps> = ({ name, link, asLink }) => {
    // Get Skill icon
    let Icon: SkillIcon;
    switch (name) {
        default:
            Icon = DefaultSkillIcon;
    }
    return (
        <MainContainer
            as={asLink ? "a" : "div"}
            href={asLink && link ? link : undefined}
        >
            <Icon className="icon" />
            <StyledHeading>
                {name}
            </StyledHeading>
        </MainContainer>
    )
}

export default SkillHead;