import styled from "styled-components";

import ExperienceList from "./ExperienceList";
import MainHeading from "./MainHomePageHeading";
import Summary from "./Summary";

const StyledArticle = styled.article`
    position: relative;
    top: -43px;
    .content {
        padding: 0 15px;
        max-width: 870px;
        margin: 0 auto;
    }
`;

const HomePageArticle: React.FC = () => {
    return (
        <StyledArticle>
            <MainHeading />
            <div className="content">
                <Summary />
                <ExperienceList />
            </div>
        </StyledArticle>
    )
}

export default HomePageArticle;