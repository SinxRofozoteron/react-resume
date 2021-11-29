import styled from "styled-components";
import { transparentize } from "polished";

import FooterNav from "../lowLevel/FooterNavigation";

const StyledFooter = styled.footer`
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => transparentize(0.2, theme.thirdColor)};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <FooterNav />
        </StyledFooter>
    )
};
export default Footer;