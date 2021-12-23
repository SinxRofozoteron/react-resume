import styled from "styled-components";

import { experience } from "../../assets/info.json";
import ExperienceCard from "./ExperienceCard";

const StyledList = styled.ol`
    padding: 0;
    > li {
        font-size: 1.3rem;
        list-style: none;
    }
`;

const ExperienceList: React.FC = () => {
    return (
        <>
            <h2 id="experience">Experience</h2>
            <StyledList id="experience-list">
                {experience.map(
                    (exp, index) => (
                        <li
                            value={index + 1}
                            key={index + 1}
                        >
                            <ExperienceCard {...exp} />
                        </li>
                    )
                )}
            </StyledList>
        </>
    );
}

export default ExperienceList;