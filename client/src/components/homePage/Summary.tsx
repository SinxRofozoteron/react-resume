import styled from "styled-components";

import Divider from "../models/Divider";
import { summary } from "../../assets/info.json";

const VDivider = styled(Divider)`
    display: none;
    @media screen and (min-width: 665px) {
        display: block;
        margin-right: 15px;
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledP = styled.p`
    margin-top: 0;
`;

const Summary: React.FC = () => {
    return (
        <section>
            <h2>Summary</h2>
            <Container>
                <VDivider
                    orientation="vertical"
                    height="auto"
                    width="1px"
                    horizontalMargin="0"
                />
                <StyledP>{summary}</StyledP>
            </Container>
        </section>
    )
};

export default Summary;